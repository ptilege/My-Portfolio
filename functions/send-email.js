require('dotenv').config();  // Add this line to load your .env file

const nodemailer = require('nodemailer');
const querystring = require('querystring');

exports.handler = async (event) => {
    let data;
    if (event.headers['content-type'] === 'application/x-www-form-urlencoded') {
        data = querystring.parse(event.body);
    } else {
        try {
            data = JSON.parse(event.body);
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid request body' }),
            };
        }
    }

    const { name, email, message } = data;

    if (!name || !email || !message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Missing required fields: name, email, or message' }),
        };
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'New message from portfolio',
        html: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            color: #333;
                            padding: 20px;
                        }
                        .email-container {
                            background-color: #ffffff;
                            border-radius: 8px;
                            padding: 20px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        h2 {
                            color: #5a5a5a;
                            font-size: 24px;
                        }
                        p {
                            font-size: 16px;
                            line-height: 1.6;
                        }
                        .highlight {
                            color: #3498db;
                            font-weight: bold;
                        }
                        .footer {
                            font-size: 14px;
                            text-align: center;
                            color: #888;
                            margin-top: 20px;
                        }
                        .footer a {
                            color: #3498db;
                            text-decoration: none;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <h2>You have a new message from the portfolio!</h2>
                        <p><span class="highlight">Name:</span> ${name}</p>
                        <p><span class="highlight">Email:</span> ${email}</p>
                        <p><span class="highlight">Message:</span></p>
                        <p>${message}</p>
                    </div>
                    <div class="footer">
                        <p>Thank you for your time. If you need further assistance, feel free to contact us!</p>
                        <p><a href="mailto:ptilege@gmail.com">Reply to this email</a></p>
                    </div>
                </body>
            </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email', error: error.message }),
        };
    }
};
