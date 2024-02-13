const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: "jiozindagichanchal@gmail.com",
		pass: "12345",
	},
})

module.exports = async (email, subject, text) => {
	try {
		await transporter.sendMail({
			to: email,
			subject,
			text,

		})
		console.log('Email sent successfully')
	} catch (error) {
		console.error('Error sending email:', error)
	}
}