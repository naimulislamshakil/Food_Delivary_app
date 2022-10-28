module.exports = async (req, res, next) => {
	try {
		const token = req.headers?.authorization?.split(' ')[1];

		if (!token) {
			res.status(401).json({
				status: 'Faild',
				message: 'Pleace login again.',
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
