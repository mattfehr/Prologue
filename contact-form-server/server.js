require('dotenv').config(); // ← Load .env

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // For JSON requests
app.use(express.urlencoded({ extended: true })); // For form data

// POST endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,  // still your email, but shows their name
    to: process.env.EMAIL_USER,
    subject: `Contact Form Message from ${name}`,
    text: `
  You have a new contact form submission:

  Name: ${name}
  Email: ${email}
  Message:
  ${message}
    `,
    replyTo: email  //respond to the sender
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ success: false, message: 'Email failed to send.' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
