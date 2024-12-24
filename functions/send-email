const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ptilege@gmail.com', // Your email address
            pass: 'hoot pkin cqtm ytfd', // Your Gmail app-specific password
        },
    });

    const mailOptions = {
        from: email,
        to: 'ptilege@gmail.com', // Your email address
        subject: 'New message from portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email', error: error.message }),
        };
    }
};
