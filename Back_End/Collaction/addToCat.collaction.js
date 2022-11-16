const service = require('../Service/addToCart.service');

exports.addToCartCreateCollaction = async (req, res) => {
	try {
		const { id, email } = req.body;

		const exzist = await service.addToCartFindService(id, email);
		console.log(exzist);
		if (exzist === undefined) {
			console.log('hi');
			const result = await service.addToCartCreateService(req.body);
			return res.status(200).json({
				status: 'Success',
				message: 'Item Add Successfully.',
			});
		} else {
			return res.status(200).json({
				status: 'Fail',
				message: 'Item Alrady Added..',
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};

exports.addToCartFindByEmailCollaction = async (req, res) => {
	try {
		const { email } = req.params;

		const result = await service.addToCartFindByEmailService(email);
		res.status(200).json({
			status: 'Success',
			message: 'Succesfully Get Your Cart Product.',
			result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};

exports.removeAddToCartCollaction = async (req, res) => {
	const { id } = req.params;
	const { email } = req.user;
	const result = await service.removeAddToCartService(id, email);
};
