import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validation helper
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      message: sanitizeInput(message)
    };

    // Get email configuration from environment variables
    const adminEmail = process.env.ADMIN_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Check if email is configured
    if (!adminEmail || !smtpHost || !smtpUser || !smtpPass) {
      console.error('Email configuration missing in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not configured. Please contact the administrator.' 
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1DA1F2, #0D8BD9); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .field strong { color: #1DA1F2; display: block; margin-bottom: 5px; }
          .message-box { background: white; padding: 20px; border-left: 4px solid #FACC15; margin-top: 20px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏖️ New Contact Form Submission</h1>
            <p>SunBeach Tourism Dubai</p>
          </div>
          <div class="content">
            <div class="field">
              <strong>Name:</strong>
              <p>${sanitizedData.name}</p>
            </div>
            <div class="field">
              <strong>Email:</strong>
              <p><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
            </div>
            <div class="field">
              <strong>Phone:</strong>
              <p><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></p>
            </div>
            <div class="message-box">
              <strong>Message:</strong>
              <p>${sanitizedData.message}</p>
            </div>
            <div class="footer">
              <p>This email was sent from the SunBeach Tourism Dubai contact form.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"SunBeach Tourism Contact Form" <${smtpUser}>`,
      to: adminEmail,
      replyTo: sanitizedData.email,
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: emailHtml,
      text: `
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}
Message: ${sanitizedData.message}
      `
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
