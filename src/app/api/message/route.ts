

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate the input
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Please fill out all required fields.' }), { status: 400 });
    }

    // Set up the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_MAILER_USER,
        pass: process.env.NEXT_PUBLIC_MAILER_APP,
      },
    });

    // Internal email notification (sent to your team's email)
    const internalMailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_MAILER_USER,
      subject: 'New Contact Form Submission',
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #fafafa, #eaeaea); border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); color: #333;">
        <div style="text-align: center; padding: 20px;">
          <img src="https://kuaid.vercel.app/img/service-1.jpg" alt="Logo" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 24px; margin: 0;">New Contact Message</h2>
          <p style="color: #888; font-size: 14px; margin-top: 5px;">You've received a new message from your website contact form</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <table style="width: 100%; border-collapse: collapse; color: #555;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">Subject:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Message:</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>
        </div>
        <p style="text-align: center; color: #888; font-size: 12px; margin-top: 20px;">
          &copy; 2024 kuaid-cargo.com | All rights reserved.
        </p>
      </div>
    `,
    
    };

    // Send the internal email
    await transporter.sendMail(internalMailOptions);

    // Confirmation email for the user
    const userMailOptions = {
      from: process.env.NEXT_PUBLIC_MAILER_USER,
      to: email,
      subject: 'We Received Your Message!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f7f7f7; color: #333;">
          <h2 style="color: #333;">Thank You for Reaching Out, ${name}!</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <p><strong>Your Message:</strong></p>
          <p>${message}</p>
          <p>Best regards,<br>Your Company Team</p>
          <p style="font-size: 12px; color: #777; text-align: center;">&copy; 2024 kuaid-cargo.com All rights reserved.</p>
        </div>
      `,
    };

    // Send the confirmation email to the user
    await transporter.sendMail(userMailOptions);

    // Return success response
    return new Response(JSON.stringify({ message: 'Your message has been successfully submitted.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing contact request:', error);
    return new Response(JSON.stringify({ error: 'An error occurred while processing your request. Please try again later.' }), {
      status: 500,
    });
  }
}
