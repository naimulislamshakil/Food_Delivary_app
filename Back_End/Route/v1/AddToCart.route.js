const router = require('express').Router();
const collaction = require('../../Collaction/addToCat.collaction');

router.route('/addToCart').post(collaction.addToCartCreateCollaction);
router.route('/addToCart/:email').get();

module.exports = router;
