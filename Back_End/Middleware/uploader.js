const multer = require('multer');
const path = require('path');

const uploader = multer({
	dest: 'image/',
	fileFilter: (req, file, cb) => {
		const supported = /png|jpg/;
		const extension = path.extname(file.originalname);

		if (supported.test(extension)) {
			cb(null, true);
		} else {
			cb(new Error('Must be a jpg/png image.'));
		}
	},
	limits: {
		fileSize: 5000000,
	},
});

module.exports = uploader;
