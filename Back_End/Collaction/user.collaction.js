const userService = require('../Service/user.service');
const bcrypt = require('bcrypt');
const { generateToken } = require('../Utils/jwtToken');

exports.createAUserCollaction = async (req, res) => {
	try {
		const result = await userService.createAUserService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'User create Successfully.',
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
		console.log(email, password);

		const user = await userService.loginAUserService(email);

		if (!user) {
			return res.status(401).json({
				status: 'Fail',
				message: 'User not found. Please create a user.',
			});
		}

		const isPasswordCorract = bcrypt.compareSync(password, user.password);

		if (!isPasswordCorract) {
			return res.status(403).json({
				status: 'Fail',
				message: 'Password is not correct.',
			});
		}

		if (user.status != 'Active') {
			return res.status(401).json({
				status: 'Fail',
				message: 'Your account is not active yet.',
			});
		}

		const token = generateToken(user);

		res.status(200).json({
			status: 'Success',
			message: 'Successfully logged in.',
			data: {
				user,
				token,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
