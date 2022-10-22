const User = require('../Model/user.model');

exports.createAUserService = async (user) => {
	const result = await User.create();
	return result;
};
