/**
 * У нас нет CRUD-а на Order_Meta, всю работу с моделью берет на себя order.
 *
 * Как работать с массивом bookings?
 * Просто PUT-им туда массив (именно id-шек Booking-а), без заморочек.
 * У нас же нет /api/booking, можно без него как-нибудь решить вопрос, как потом получить hotel/booking
 * Похоже что мне придется написать /api/booking, который будет массивы раскрывать и специфичные находить
 * */

const {Schema, model} = require('mongoose');


const OrderSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            immutable: true,
            required: true
        },
        conversation: {
            type: Schema.Types.ObjectId,
            ref: 'Conversation',
            immutable: true,
            required: true,
            unique: true,
        },
        meta: {
            type: Schema.Types.ObjectId,
            ref: 'Order/Meta',
            required: true,
            immutable: true,
            // unique: true,
        },
        bookings: [{
            type: Schema.Types.ObjectId,
            ref: 'Booking',
        }],
        // bill: { // Счет от Concierge, который оплачивает клиент
        //     type: Schema.Types.ObjectId,
        //     ref: 'Bill'
        // },
        price: {
            type: Number
        },
        discount: {
            type: Number,
            min: 0,
            max: 100,
            default: 0
        },
        bill: { // Счет от Concierge, который оплачивает клиент
            type: Schema.Types.ObjectId,
            ref: 'File',
        },
        status: {
            type: String,
            enum: ['new', 'handling', 'canceled', 'completed'],
            default: 'new'
        },
    }
    ,
    {
        timestamps: true,
        strict: true,
    }
);

OrderSchema.plugin(require('mongoose-unique-validator'));
OrderSchema.plugin(require('../log-plugin'))
// OrderSchema.plugin(require('../../websocket/observer/order/order'))

/*OrderSchema.methods.deepDelete = async function (){
    // if(this.logo) await File.deepDeleteById(this.logo);
    await handlers.deleteModels(this, ['bill', 'meta', 'conversation']);

    // await Promise.all(this.images.map(async id => await File.deepDeleteById(id)));
    await handlers.deleteArraysOfModels(this, ['bookings']);

    await this.delete();

    return this;
}*/


module.exports = model('Order', OrderSchema);