const nodemailer = require('nodemailer');

/** Automatic replay email to a user who submitted a contact message  */
module.exports.replyMail = async (name, email) => {
	try {
		// create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			host: 'smtp.mailtrap.io',
			port: 2525,
			secure: false, // true for 465, false for other ports
			auth: {
				user: '42b16d9034f4c4',
				pass: 'e5a94df3c884c2'
			}
		});

		// send mail with defined transport object
		const message = {
			from: '<smtp.mailtrap.io>',
			to: email,
			subject: 'Thanks for contacting us!',
			text: `Good day! ${name}. We received your message and will get back to you soon!`
		};

		const info = await transporter.sendMail(message);

		console.log('Message sent: %s', info.messageId);
	} catch (error) {
		throw new Error(error);
	}
};
