const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

const transporter = nodemailer.createTransport({
  host: 'Gmail',
  port: 587,
  secure: true,
  auth: {
    user: 'personalwebsitemsf@gmail.com',
    pass: process.env.GMAILPASS,
  },
});

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    to: 'mariesamantha.f@gmail.com', // Replace with the recipient's email address
    subject: 'New Message from Your Website',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});