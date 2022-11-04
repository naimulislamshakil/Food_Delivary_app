const userService = require('../Service/user.service');
const bcrypt = require('bcrypt');
const { generateToken } = require('../Utils/jwtToken');
const { sendEmailByGmail } = require('../Utils/email');

exports.createAUserCollaction = async (req, res) => {
	try {
		const result = await userService.createAUserService(req.body);

		const mailData = {
			to: result.email,
			subject: 'Plesce verify your emai.',
			text: `Thankyou ${result.email}`,
		};

		await sendEmailByGmail(mailData);

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

		const { password: pwd, ...other } = user.toObject();

		res.status(200).json({
			status: 'Success',
			message: 'Successfully logged in.',
			data: {
				user: other,
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

exports.userPersistence = async (req, res) => {
	try {
		const user = await userService.userPersistenceService(req.user?.email);
		const { password: psd, ...other } = user.toObject();
		res.status(200).json({
			status: 'Success',
			message: 'User Is Valid.',
			user: other,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
