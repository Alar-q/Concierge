const {Schema, model} = require("mongoose");

const modelName = 'Message';

const log = require('../../logging/log');

const User = require('../User');
const File = require('../binaries/File');
const colors = require("../../logging/colors");

const MessageSchema = new Schema({
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation',
        immutable: true,
        required: true,
    },
    sender: { // Здесь мы можем указывать user, а не participant,
        type: Schema.Types.ObjectId,
        ref: 'User',
        immutable: true,
        required: true,
    },
    type: {
        type: String,
        enum: ['service', 'text', 'file', 'form'],
        immutable: true,
        required: true,
    },
    // action: {type: String, enum: ['invite_members', 'join_group_by_link']},
    text: {
        type: String,
    },
    file: {
        type: Schema.Types.ObjectId,
        ref: 'File'
    },
    description: {
      type: String,
    },
    form: {
        type: Object,
    },
    timeSent: {
        type: Date,
        default: new Date(),
    },
    readBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
});



MessageSchema.plugin(require('mongoose-unique-validator'));
MessageSchema.plugin(require('../logPlugin'))
MessageSchema.plugin(require('../../websocket/observer')(modelName))


MessageSchema.methods.onCreate = async function({body, user}){
    if(body.type ? !body[body.type] : false)
        throw new Error(`field '${body.type}' is not provided`);

    this.sender = user.id;

    return this;
}


MessageSchema.statics.deepDeleteById = async function(id){
    const message = await this.findById(id);
    if(!message)
        return `Not found message with id ${id}`;
    return await message.deepDelete();
}


MessageSchema.methods.deepDelete = async function(){
    // Если message.type = form или файл, то мы не только саму модель удаляем
    await this.delete();
    return this;
}


module.exports = model(modelName, MessageSchema);