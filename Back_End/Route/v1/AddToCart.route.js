const router = require('express').Router();
const collaction = require('../../Collaction/addToCat.collaction');
const verifyToken = require('../../Middleware/verifyToken');

router.route('/addToCart').post(collaction.addToCartCreateCollaction);
router
	.route('/addToCart/incress/:id')
	.get(collaction.incressAddToCartCollaction);
router
	.route('/removeAddToCart/:id')
	.delete(collaction.removeAddToCartCollaction);
router
	.route('/addToCart/:email')
	.get(collaction.addToCartFindByEmailCollaction);

module.exports = router;
