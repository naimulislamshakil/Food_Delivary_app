const AddToCart = require('../Model/addToCart.model');

exports.addToCartCreateService = async (item) => {
	const result = await AddToCart.create(item);
	return result;
};
exports.addToCartFindService = async (id) => {
	const result = await AddToCart.find({ id });
	return result;
};
exports.addToCartFindByEmailService = async (email) => {
	const result = await AddToCart.find({ email });
	return result;
};
