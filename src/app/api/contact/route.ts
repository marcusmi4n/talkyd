import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, subject, message, messageType } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email configuration
    const toEmail = 'info@mbonyange.com';
    const emailSubject = messageType === 'quote'
      ? `[QUOTE REQUEST] ${subject || 'New Quotation Request'}`
      : `[WEBSITE INQUIRY] ${subject || 'New Contact Form Submission'}`;

    // Log submission for debugging
    console.log(`[${new Date().toISOString()}] New submission: ${messageType} from ${email}`);

    // If API key is not configured, log to console and return success (for development)
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Email not sent, but submission logged below:');
      console.log({ name, email, company, phone, subject, message, messageType });
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully (Dev mode: Email logged to console)' 
      });
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Mbonyange Website <onboarding@resend.dev>', // Replace with your verified domain in production
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #1b1d1f; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #4f6c6c 0%, #2a2d30 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">
              ${messageType === 'quote' ? 'QUOTATION REQUEST' : 'WEBSITE INQUIRY'}
            </h1>
            <p style="color: #879080; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; font-weight: bold;">
              Mbonyange Africa Limited
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 30px; background: #ffffff;">
            <div style="margin-bottom: 25px; border-bottom: 2px solid #f5f5f5; padding-bottom: 15px;">
              <h2 style="font-size: 16px; color: #4f6c6c; margin: 0 0 10px 0; text-transform: uppercase;">Sender Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #888; font-size: 14px; width: 100px;">Name:</td>
                  <td style="padding: 6px 0; color: #1b1d1f; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #888; font-size: 14px;">Email:</td>
                  <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #4f6c6c; text-decoration: none; font-weight: 600;">${email}</a></td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 6px 0; color: #888; font-size: 14px;">Company:</td>
                  <td style="padding: 6px 0; color: #1b1d1f; font-weight: 600;">${company}</td>
                </tr>
                ` : ''}
                ${phone ? `
                <tr>
                  <td style="padding: 6px 0; color: #888; font-size: 14px;">Phone:</td>
                  <td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #1b1d1f; text-decoration: none; font-weight: 600;">${phone}</a></td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="margin-bottom: 25px;">
              <h2 style="font-size: 16px; color: #4f6c6c; margin: 0 0 10px 0; text-transform: uppercase;">Message Content</h2>
              <p style="font-size: 14px; color: #888; margin: 0 0 5px 0;">Subject: <span style="color: #1b1d1f; font-weight: 600;">${subject || 'N/A'}</span></p>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #4f6c6c; margin-top: 15px;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background-color: #4f6c6c; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">
                REPLY DIRECTLY
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px; background: #f9fafb; border-top: 1px solid #e0e0e0; text-align: center;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
              This email was generated from the contact form on <a href="https://mbonyange.com" style="color: #4f6c6c; text-decoration: none;">mbonyange.com</a>
            </p>
            <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">
              &copy; ${new Date().getFullYear()} Mbonyange Africa Limited. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Return success
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
