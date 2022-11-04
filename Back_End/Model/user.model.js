const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const userSchma = mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, 'This field is require.'],
			lowercase: true,
			unique: true,
			trim: true,
			validate: [validator.isEmail, 'Provide a valid email.'],
		},
		password: {
			type: String,
			required: [true, 'This field is require.'],
			validate: {
				validator: (value) =>
					validator.isStrongPassword(value, {
						minLength: 8,
						minLowercase: 1,
						minUppercase: 1,
						minNumbers: 1,
						minSymbols: 1,
					}),
				message: 'Password is not enough strong.',
			},
		},
		role: {
			type: String,
			enum: ['user', 'store-manager', 'admin'],
			default: 'user',
		},
		firstName: {
			type: String,
			required: [true, 'This field is require.'],
			trim: true,
			minLength: [3, 'First Name must be 3 characters.'],
			maxLength: [50, 'First Name is too large.'],
		},
		lastName: {
			type: String,
			required: [true, 'This field is require.'],
			trim: true,
			minLength: [3, 'First Name must be 3 characters.'],
			maxLength: [50, 'First Name is too large.'],
		},
		contactNumber: {
			type: String,
			validate: [
				validator.isMobilePhone,
				'Please provide a valid contact number.',
			],
		},
		img: {
			type: String,
			validate: [validator.isURL, 'Please provide a valid url.'],
		},
		status: {
			type: String,
			default: 'In-Active',
			enum: ['Active', 'In-Active'],
		},

		confirmationToken: String,
		confirmationTokenExpire: Date,
		passwordChangeAt: Date,
		passwordResetToken: String,
		passwordResetExpirse: Date,
	},
	{
		timestamps: true,
	}
);

userSchma.pre('save', function (next) {
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	const password = this.password;

	const hashPassword = bcrypt.hashSync(password, salt);

	this.password = hashPassword;
	next();
});

userSchma.methods.generateConfirmToken = function () {
	const token = crypto.randomBytes(32).toString('hex');

	const date = new Date();
	date.setDate(date.getDate() + 1);

	this.confirmationToken = token;
	this.confirmationTokenExpire = date;
	return token;
};

const User = mongoose.model('User', userSchma);

module.exports = User;
