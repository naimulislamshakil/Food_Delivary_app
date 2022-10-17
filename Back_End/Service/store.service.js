const Store = require('../Model/store.model');

exports.getStoreByLocationService = async (query) => {
	const { location, skip, limit } = query;

	const result = await Store.Store.find({ location: location })
		.skip(skip)
		.limit(limit)
		.sort('-name');
	const count = await Store.Store.find({}).count();
	const paiganation = Math.ceil(count / limit);
	return { result, paiganation };
};

exports.createStoreService = async (data) => {
	const result = await Store.Store.create(data);
	return result;
};
exports.getStoreService = async () => {
	const result = await Store.Store.find();
	return result;
};
