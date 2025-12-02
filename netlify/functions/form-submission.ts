import { Handler, HandlerEvent, HandlerContext, HandlerResponse } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (
    event: HandlerEvent,
    context: HandlerContext
): Promise<HandlerResponse> => {
    // Only process POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const formData = JSON.parse(event.body || '{}');

        // Get SMTP configuration from environment variables
        const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
        const smtpPort = parseInt(process.env.SMTP_PORT || '587');
        const smtpUser = process.env.SMTP_USER;
        const smtpPassword = process.env.SMTP_PASSWORD;
        const recipientEmail = process.env.RECIPIENT_EMAIL || 'florent.giovannone@abeta.co.uk';

        if (!smtpUser || !smtpPassword) {
            return {
                statusCode: 500,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'Email service not configured' }),
            };
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
        });

        // Custom HTML email template with your branding
        const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
              background-color: #f5f5f5;
            }
            .container {
              background: white;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #540713 0%, #86000D 100%); 
              color: white; 
              padding: 30px 20px; 
              text-align: center;
            }
            .header h2 {
              margin: 0;
              font-size: 24px;
            }
            .content { 
              padding: 30px 20px; 
            }
            .field { 
              margin: 20px 0; 
              padding-bottom: 15px;
              border-bottom: 1px solid #eee;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label { 
              font-weight: bold; 
              color: #540713; 
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .value { 
              color: #333; 
              font-size: 16px;
            }
            .message-box { 
              background: #f9f9f9; 
              padding: 20px; 
              border-left: 4px solid #86000D; 
              margin: 25px 0; 
              border-radius: 4px;
            }
            .footer {
              background: #f5f5f5;
              padding: 20px;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
            a {
              color: #86000D;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>[Greyhound Winners] New ${formData.inquiry} request form</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${formData['first-name'] || ''} ${formData['last-name'] || ''}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${formData.email || ''}">${formData.email || ''}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${formData.phone || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${formData.company || ''}</div>
              </div>
              <div class="field">
                <div class="label">Inquiry Type</div>
                <div class="value">${formData.inquiry || ''}</div>
              </div>
              <div class="message-box">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap; margin-top: 10px;">${formData.message || ''}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Greyhound Winners contact form.</p>
              <p>You can reply directly to this email to respond to ${formData['first-name'] || ''} ${formData['last-name'] || ''}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

        // Plain text version
        const textEmail = `
New ${formData.inquiry} request form

Name: ${formData['first-name'] || ''} ${formData['last-name'] || ''}
Email: ${formData.email || ''}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || ''}
Inquiry Type: ${formData.inquiry || ''}

Message:
${formData.message || ''}

---
This email was sent from the Greyhound Winners contact form.
You can reply directly to this email to respond to ${formData['first-name'] || ''} ${formData['last-name'] || ''}.
    `;

        // Send email
        await transporter.sendMail({
            from: `"${formData['first-name'] || ''} ${formData['last-name'] || ''}" <${smtpUser}>`,
            replyTo: formData.email || smtpUser,
            to: recipientEmail,
            subject: `Contact Form: ${formData.inquiry || 'General Inquiry'} - ${formData.company || 'No Company'}`,
            html: htmlEmail,
            text: textEmail,
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                error: 'Failed to send email',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
        };
    }
};

export { handler };
