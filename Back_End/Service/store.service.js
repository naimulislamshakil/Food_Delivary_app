const Store = require('../Model/store.model');

exports.createStoreService = async (data) => {
	const result = await Store.Store.create(data);
	return result;
};
exports.getStoreService = async () => {
	const result = await Store.Store.find();
	return result;
};
