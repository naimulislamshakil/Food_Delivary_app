const Store = require('../Model/store.model');

exports.getStoreByLocationService = async (query) => {
	const { location } = query;
	console.log(location);
	const result = await Store.Store.find({ location: location });
	return result;
};

exports.createStoreService = async (data) => {
	const result = await Store.Store.create(data);
	return result;
};
exports.getStoreService = async () => {
	const result = await Store.Store.find();
	return result;
};
