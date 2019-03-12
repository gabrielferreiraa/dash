import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';

var getTemplateHtml = (path, callback) =>
	fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
		if (err) throw err;

		callback(html);
	});

const send = async ({ data, template, subject, to }) => {
	const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_USER_FROM, EMAIL_FROM } = process.env;

	let transport = {
		host: EMAIL_HOST,
		port: EMAIL_PORT,
		secure: false,
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS
		}
	};

	let transporter = nodemailer.createTransport(transport);

	getTemplateHtml(path.resolve('app/emails/welcome.html'), async content => {
		var html = handlebars.compile(content);

		let mailOptions = {
			from: `${EMAIL_USER_FROM} <${EMAIL_FROM}>`,
			to: Array.isArray(to) ? to.join(',') : [to],
			subject: subject,
			html: html(data)
		};

		await transporter.sendMail(mailOptions);
	});
};

export default { send };
