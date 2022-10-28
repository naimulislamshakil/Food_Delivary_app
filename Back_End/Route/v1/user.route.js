const router = require('express').Router();
const userCollaction = require('../../Collaction/user.collaction');
const verifyToken = require('../../Middleware/verifyToken');

router.route('/user').post(userCollaction.createAUserCollaction);
router.route('/login').post(userCollaction.loginUserCollaction);
router.get('/user/persistence', verifyToken, userCollaction.userPersistence);

module.exports = router;
