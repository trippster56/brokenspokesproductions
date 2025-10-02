import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a test account (only for development)
  // In production, use your cPanel SMTP credentials
  const testAccount = await nodemailer.createTestAccount();

  // Create transporter using cPanel SMTP
  const transporter = nodemailer.createTransport({
    host: 'mail.brokenspokesproductions.com', // Your cPanel mail server
    port: 465, // SSL port
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.CPANEL_EMAIL, // Your cPanel email address
      pass: process.env.CPANEL_EMAIL_PASSWORD // Your cPanel email password
    },
    tls: {
      rejectUnauthorized: false // Only for development with self-signed certs
    }
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${process.env.CPANEL_EMAIL || 'noreply@brokenspokesproductions.com'}>`,
    to: process.env.CONTACT_FORM_RECIPIENT || 'your-email@brokenspokesproductions.com',
    subject: `New Contact Form: ${subject || 'General Inquiry'}`,
    text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    replyTo: email
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
