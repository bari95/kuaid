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
           
          </div>
        </div>
      `,
    };

    // Send the internal email
    await transporter.sendMail(internalMailOptions);

    // Confirmation email for the user
    const userMailOptions = {
      from: process.env.NEXT_PUBLIC_MAILER_USER,
      to: email,
      subject: 'We Received Your Quote Request!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7; border-radius: 8px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0073e6; text-align: center; margin: 0; font-size: 24px;">Thank You, ${name}!</h2>
            <p style="font-size: 16px; color: #333; text-align: center; margin-top: 10px;">
              We have received your quote request and are processing it. You’ll hear from us soon with more details.
            </p>
            <div style="margin-top: 30px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Quote Details:</h3>
              <p><strong>Service Requested:</strong> ${service}</p>
              <p><strong>Mobile:</strong> ${mobile}</p>
              <p><strong>Additional Instructions:</strong> ${instructions || 'No additional instructions provided.'}</p>
            </div>
            <p style="margin-top: 20px; font-size: 14px; color: #555;">
              We value your trust in us, and we look forward to serving you. Should you have any questions, feel free to contact us at <a href="mailto:${process.env.MAILER_USER_EMAIL}" style="color: #0073e6;">${process.env.MAILER_USER_EMAIL}</a>.
            </p>
            <p style="margin-top: 20px; text-align: center; color: #777; font-size: 12px;">
              &copy; 2024 kuaid.com All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    // Send the confirmation email to the user
    await transporter.sendMail(userMailOptions);

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
