const {Schema, model} = require('mongoose');

const Hotel = require('./Hotel');
const Price = require('../../payment/Price');
const File = require('../../binaries/File');

const ClassSchema = new Schema({
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    price: {
        type: Schema.Types.ObjectId,
        ref: 'Price'
    },
    description: String,
    images: [{ //?
        type: Schema.Types.ObjectId,
        ref: 'File'
    }],

    isActive: Boolean, // Например, поменяли цену
});

ClassSchema.plugin(require('mongoose-unique-validator'));


ClassSchema.methods.setFields = function(data){
    if(data) {
        if (data.hotel) this.hotel = data.hotel;
        if (data.class) this.class = data.class;
        if (data.price) this.price = data.price;
        if (data.description) this.description = data.description;
        if (data.isActive) this.isActive = data.isActive;
        // if(data.images) this.images = data.images; // опасно
    }
    return this;
}


ClassSchema.methods.deepDelete = async function(){
    await this.populate('price').delete();

    await Promise.all(this.images.map(async id => await File.deleteAndRemoveById(id)));

    await this.deepDelete();

    return this;
}


module.exports = model('Hotel_Class', ClassSchema);
