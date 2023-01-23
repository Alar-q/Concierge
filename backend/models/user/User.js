const {Schema, model} = require('mongoose');

const modelName = 'User';

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		minLength: 11,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	entity: {
		type: String,
		enum: ['individual', 'juridical'], // Может ли он делать какие-то действия от лица компании или только пользоваться
		default: 'individual'
	},
	company: {
		type: Schema.Types.ObjectId,
		ref: 'Company'
	},
	phone: {
		type: String,
	},
	role: {
		type: String,
		enum: ['client', 'manager', 'moderator', 'partner', 'admin'],
		default: 'client',
	},

	createdDate: {
		type: Date,
		immutable: true,
		default: () => new Date(),
	},
	updatedDate: {
		type: Date,
		default: () => new Date(),
	}
});

UserSchema.plugin(require('mongoose-unique-validator'));
UserSchema.plugin(require('../updatedDate'))
UserSchema.plugin(require('../logPlugin'));

UserSchema.plugin(require('../../websocket/observer/user'));

module.exports = model(modelName, UserSchema);
