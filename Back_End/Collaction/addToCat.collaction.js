const service = require('../Service/addToCart.service');

exports.addToCartCreateCollaction = async (req, res) => {
	try {
		const result = await service.addToCartCreateService(req.body);
		console.log(result);
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
