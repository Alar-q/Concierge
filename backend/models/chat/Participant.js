const {Schema, model} = require("mongoose");

const Conversation = require('./Conversation');
const User = require('../User');

/**
 * participant указывает в каких беседах состоит user
 * На самом деле, можно было бы хранить массив user-ов в conversation
 * */

const ParticipantSchema = new Schema({
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation',
        immutable: true,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        immutable: true,
        required: true,
    },
    role: {
        type: String,
        enum: ['participant', 'admin'],
        default: 'participant'
    },
});


ParticipantSchema.plugin(require('mongoose-unique-validator'));


ParticipantSchema.methods.firstFilling = async function({body, user}){
    this.user = user.id;
    return this;
}

ParticipantSchema.statics.deepDeleteById = async function(id){
    const participant = await this.findById(id);
    if(!participant)
        return `Not found participant with id ${id}`;
    return await participant.deepDelete();
}

ParticipantSchema.methods.deepDelete = async function(){
    await this.delete();
    return this;
}


module.exports = model('Participant', ParticipantSchema);