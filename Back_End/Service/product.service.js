const Product = require('../Model/product.model');

exports.postAProductService = async (product) => {
	return await Product.create(product);
};

exports.getAllProductService = async () => {
	return await Product.find({});
};
