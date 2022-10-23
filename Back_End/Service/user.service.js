const User = require('../Model/user.model');

exports.createAUserService = async (user) => {
	const result = await User.create(user);
	return result;
};

exports.loginAUserService = async (user) => {
	const result = await User.create(user);
	return result;
};
