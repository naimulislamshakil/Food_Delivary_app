const storeService = require('../Service/store.service');

exports.getStoreByLocationCollaction = async (req, res) => {
	try {
		const { location } = req.query;
		const query = {};
		query.location = location;
		const result = await storeService.getStoreByLocationService(query);
		res.status(200).json({
			status: 'Success',
			message: 'Store Get Successfully.',
			result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};

exports.createStoreCollaction = async (req, res) => {
	try {
		const result = await storeService.createStoreService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'Store create Successfully.',
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};

exports.getStoreCollaction = async (req, res) => {
	try {
		const result = await storeService.getStoreService();
		res.status(200).json({
			status: 'Success',
			message: 'Store Get Successfully.',
			result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};