const Store = require('../Model/store.model');

exports.createStoreService = async (data) => {
	const result = await Store.Store.create(data);
	return result;
};
