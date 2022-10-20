const router = require('express').Router();
const productCollaction = require('../../Collaction/product.collaction');

router.route('/product').post(productCollaction.postAProductCollaction);

module.exports = router;
