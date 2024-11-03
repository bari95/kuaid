import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: Request) {
  try {
    const { name, email, mobile, service, instructions } = await req.json();

    // Validate the input
    if (!name || !email || !mobile || !service) {
      return new Response(JSON.stringify({ error: 'Please fill out all required fields.' }), { status: 400 });
    }
   console.log('password', process.env.MAILER_APP_PASSWORD)
   console.log('email', process.env.MAILER_USER_EMAIL)
    // Set up the email options
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_USER_EMAIL,
        pass: process.env.MAILER_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to:  process.env.MAILER_USER_EMAIL,
      subject: 'New Quote Request Received',
      html: `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 8px; background: linear-gradient(135deg, #e0f7fa, #ffffff); color: #333;">
  <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
    <h2 style="text-align: center; color: #0073e6; margin-top: 0; font-size: 24px;">New Quote Request</h2>
    <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px; font-weight: bold; color: #0073e6; border-bottom: 1px solid #e0e0e0;">Name:</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 12px; font-weight: bold; color: #0073e6; border-bottom: 1px solid #e0e0e0;">Email:</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 12px; font-weight: bold; color: #0073e6; border-bottom: 1px solid #e0e0e0;">Mobile:</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${mobile}</td>
      </tr>
      <tr>
        <td style="padding: 12px; font-weight: bold; color: #0073e6; border-bottom: 1px solid #e0e0e0;">Service:</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${service}</td>
      </tr>
      <tr>
        <td style="padding: 12px; font-weight: bold; color: #0073e6;">Instructions:</td>
        <td style="padding: 12px;">${instructions || 'No additional instructions provided.'}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; font-size: 14px; color: #555; text-align: center;">
      Thank you for using our services. We will review the request and get back to you shortly.
    </p>
  </div>
</div>

      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ message: 'Your quote request has been successfully submitted.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    return new Response(JSON.stringify({ error: 'An error occurred while processing your request. Please try again later.' }), {
      status: 500,
    });
  }
}
