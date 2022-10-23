const userService = require('../Service/user.service');

exports.createAUserCollaction = async (req, res) => {
	try {
		const result = await userService.createAUserService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'User create Successfully.',
			result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};

exports.loginUserCollaction = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await userService.loginAUserService(email);

		if (!user) {
			return res.status(401).json({
				status: 'Fail',
				message: 'User not found. Please create a user.',
			});
		}

		res.status(200).json({
			status: 'Success',
			message: 'User create Successfully.',
			result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
