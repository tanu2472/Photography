// Create a new file: server.js or api/contact.js
const express = require('express');
const nodemailer = require('nodemailer');

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    // Send email to admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});