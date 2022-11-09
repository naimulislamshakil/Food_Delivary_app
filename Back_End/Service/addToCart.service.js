const AddToCart = require('../Model/addToCart.model');

exports.addToCartCreateService = async (item) => {
	const result = await AddToCart.create(item);
	return result;
};
