const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
	process.env.CLIEND_ID,
	process.env.CLIENT_SECRET,
	'https://developers.google.com/oauthplayground'
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

module.exports.sendEmailByGmail = async (data) => {
	const accessToken = await oAuth2Client.getAccessToken();
	console.log('access token', accessToken);

	const transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.USER_EMAIL,
			clientId: process.env.CLIEND_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: accessToken,
		},
	});

	const mailData = {
		from: 'Naimul Islam <naimul.islam.shakil55@gmail.com>',
		to: data.to,
		subject: data.subject,
		text: data.text,
	};

	transport.sendMail(mailData, function (error, result) {
		if (error) {
			console.log('error', error);
		} else {
			console.log('success', result);
		}
		transport.close();
	});
};
