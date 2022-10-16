const router = require('express').Router();
const storeCollaction = require('../../Collaction/store.collaction');

router
	.route('/storebylocation')
	.get(storeCollaction.getStoreByLocationCollaction);

router
	.route('/store')
	.post(storeCollaction.createStoreCollaction)
	.get(storeCollaction.getStoreCollaction);

module.exports = router;
