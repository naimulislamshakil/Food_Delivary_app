const productService = require('../Service/product.service');

exports.postAProductCollaction = async (req, res) => {
	try {
		const result = await productService.postAProductService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'Product create Successfully.',
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
