const AddToCart = require('../Model/addToCart.model');
const Payment = require('../Model/payment.model');

exports.paymentService = async (data, email) => {
	const result = await Payment.create(data);
	const findByEmail = await AddToCart.deleteMany({ email });
	return result;
};
