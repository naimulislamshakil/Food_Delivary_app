const router = require('express').Router();
const storeCollaction = require('../../Collaction/store.collaction');

router.route('/').get(storeCollaction.createStoreCollaction);

module.exports = router;
