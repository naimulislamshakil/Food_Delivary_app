const AddToCart = require('../Model/addToCart.model');

exports.addToCartCreateService = async (item) => {
	const result = await AddToCart.create(item);
	return result;
};
exports.addToCartFindService = async (id, email) => {
	const findByEmail = await AddToCart.find({ email });
	const result = findByEmail.filter((product) => product.id == id);
	return result;
};
exports.addToCartFindByEmailService = async (email) => {
	const result = await AddToCart.find({ email });
	const count = await AddToCart.find({ email }).count();
	return { result, count };
};
