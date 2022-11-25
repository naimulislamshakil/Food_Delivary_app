const service = require('../Service/payment.service');

exports.paymentCollaction = async (req, res) => {
	try {
		const data = req.body;
		const result = await service.paymentService();
		return res.status(200).json({
			status: 'Success',
			message: 'Payment Successfully Save.',
		});
	} catch (error) {
		return res.status(500).json({
			status: 'Fail',
			message: 'Payment not Save.',
		});
	}
};
