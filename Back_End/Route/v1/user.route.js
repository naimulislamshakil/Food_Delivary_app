const router = require('express').Router();
const userCollaction = require('../../Collaction/user.collaction');
const uploader = require('../../Middleware/uploader');
const verifyToken = require('../../Middleware/verifyToken');

router.route('/photo').post(uploader.single('image'), userCollaction.saveImage);
router.route('/user').post(userCollaction.createAUserCollaction);
router.route('/user/confirmation/:token').get(userCollaction.confirmEmail);
router.route('/login').post(userCollaction.loginUserCollaction);
router.get('/user/persistence', verifyToken, userCollaction.userPersistence);

module.exports = router;
