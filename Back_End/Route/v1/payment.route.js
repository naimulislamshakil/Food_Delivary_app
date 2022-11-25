const verifyToken = require('../../Middleware/verifyToken');
const Collaction = require('../../Collaction/payment.collaction');

const router = require('express').Router();

router.route('/payment').post(verifyToken, Collaction.paymentCollaction);

module.exports = router;
