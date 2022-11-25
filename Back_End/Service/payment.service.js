const Payment = require('../Model/payment.model');

exports.paymentService = async (data) => {
	const result = await Payment.create(data);
	return result;
};
