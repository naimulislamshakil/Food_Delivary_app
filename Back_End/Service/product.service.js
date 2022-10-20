const Product = require('../Model/product.model');
const Store = require('../Model/store.model');

exports.postAProductService = async (product) => {
	const result = await Product.create(product);

	const { _id, store } = result;
	const res = await Store.Store.updateOne(
		{ _id: store.id },
		{
			$push: { product: _id },
		}
	);

	return result;
};

exports.getAllProductService = async () => {
	return await Product.find({});
};
