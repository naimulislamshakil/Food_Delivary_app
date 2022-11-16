const router = require('express').Router();
const collaction = require('../../Collaction/addToCat.collaction');
const verifyToken = require('../../Middleware/verifyToken');

router.route('/addToCart').post(collaction.addToCartCreateCollaction);
router.delete('/removeAddToCart/:id', collaction.removeAddToCartCollaction);
router
	.route('/addToCart/:email')
	.get(collaction.addToCartFindByEmailCollaction);

module.exports = router;
