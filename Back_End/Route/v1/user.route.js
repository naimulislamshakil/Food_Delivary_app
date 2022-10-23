const router = require('express').Router();
const userCollaction = require('../../Collaction/user.collaction');

router.route('/user').post(userCollaction.createAUserCollaction);

module.exports = router;
