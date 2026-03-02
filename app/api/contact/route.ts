import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Recipient email stored as base64 to prevent scraping from source code.
// Decoded value: info@trctransitionservices.com
const ENCODED_RECIPIENT = 'aW5mb0B0cmN0cmFuc2l0aW9uc2VydmljZXMuY29t';

function decodeRecipient(): string {
  return Buffer.from(ENCODED_RECIPIENT, 'base64').toString('utf-8');
}

// Strip all HTML tags and trim whitespace to prevent injection attacks.
function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/<[^>]*>/g, '').trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, website } = body;

    // Honeypot check — bots fill hidden fields, real users do not.
    // Return a fake success so bots don't know they were blocked.
    if (website) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    // Sanitize all user-supplied inputs
    const safeName    = sanitize(name);
    const safeEmail   = sanitize(email);
    const safePhone   = sanitize(phone);
    const safeService = sanitize(service);
    const safeMessage = sanitize(message);

    // Validate required fields
    if (!safeName || !safeEmail || !safeMessage) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Initialize Resend with API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipient = process.env.CONTACT_EMAIL || decodeRecipient();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'TRC Transition Services <onboarding@resend.dev>', // Replace with your verified domain
      to: recipient,
      replyTo: safeEmail,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #003c7e;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .content {
              background-color: #f5f5f5;
              padding: 30px;
              margin-top: 20px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #003c7e;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              background-color: white;
              padding: 10px;
              border-left: 3px solid #ef9136;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${safeName}</div>
              </div>

              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
              </div>

              ${
                safePhone
                  ? `
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${safePhone}</div>
              </div>
              `
                  : ''
              }

              ${
                safeService
                  ? `
              <div class="field">
                <span class="label">Service Interest:</span>
                <div class="value">${safeService}</div>
              </div>
              `
                  : ''
              }

              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${safeMessage.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
