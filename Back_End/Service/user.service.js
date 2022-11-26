const User = require('../Model/user.model');

exports.createAUserService = async (user) => {
	const result = await User.create(user);
	return result;
};

exports.loginAUserService = async (email) => {
	const result = await User.findOne({ email });
	return result;
};

exports.userPersistenceService = async (email) => {
	return await User.findOne({ email });
};
exports.confirmEmailService = async (token) => {
	return await User.findOne({ confirmationToken: token });
};

exports.updateProfileService = async (data, email) => {
	const findUser = await User.updateOne(
		{ email },
		{ $set: data },
		{ upsert: true }
	);
	return findUser;
};
