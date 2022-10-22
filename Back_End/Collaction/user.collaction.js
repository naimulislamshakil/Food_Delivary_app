const userService = require('../Service/user.service');

exports.createAUserCollaction = async (req, res) => {
	try {
		const result = await userService.res.status(200).json({
			status: 'Success',
			message: 'Get All Product Successfully.',
			result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
