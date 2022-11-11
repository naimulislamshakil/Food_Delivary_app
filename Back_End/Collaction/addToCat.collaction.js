const service = require('../Service/addToCart.service');

exports.addToCartCreateCollaction = async (req, res) => {
	try {
		const result = await service.addToCartCreateService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'Item Add Successfully.',
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};