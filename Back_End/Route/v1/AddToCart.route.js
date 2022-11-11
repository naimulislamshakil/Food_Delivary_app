const router = require('express').Router();
const collaction = require('../../Collaction/addToCat.collaction');

router.route('/addToCart').post(collaction.addToCartCreateCollaction);

module.exports = router;
