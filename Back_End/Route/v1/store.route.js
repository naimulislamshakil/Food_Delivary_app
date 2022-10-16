const router = require('express').Router();
const storeCollaction = require('../../Collaction/store.collaction');

router
	.route('/store')
	.post(storeCollaction.createStoreCollaction)
	.get(storeCollaction.getStoreCollaction);

module.exports = router;
