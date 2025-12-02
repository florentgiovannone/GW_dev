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
        // Netlify Forms sends webhook data in a specific format
        const payload = JSON.parse(event.body || '{}');

        // Netlify Forms webhook format can vary:
        // Option 1: { form_name: "contact", data: { field1: "value1", ... } }
        // Option 2: { field1: "value1", field2: "value2", ... } (direct)
        // Option 3: Form data might be URL-encoded in the body

        let formData: any = {};

        if (payload.data) {
            // Format: { form_name: "contact", data: { ... } }
            formData = payload.data;
        } else if (payload.form_name) {
            // Format: { form_name: "contact", field1: "value1", ... }
            formData = { ...payload };
            delete formData.form_name;
        } else {
            // Direct format: { field1: "value1", ... }
            formData = payload;
        }

        // Also check if body is URL-encoded (form submission format)
        if (!formData.email && event.body && event.body.includes('=')) {
            const params = new URLSearchParams(event.body);
            formData = {
                'first-name': params.get('first-name') || params.get('firstName') || '',
                'last-name': params.get('last-name') || params.get('lastName') || '',
                'email': params.get('email') || '',
                'phone': params.get('phone') || '',
                'company': params.get('company') || '',
                'inquiry': params.get('inquiry') || '',
                'message': params.get('message') || '',
            };
        }

        // Enhanced logging to debug data extraction
        console.log('=== FORM SUBMISSION DEBUG ===');
        console.log('Raw event body:', event.body);
        console.log('Parsed payload:', JSON.stringify(payload, null, 2));
        console.log('Extracted formData:', JSON.stringify(formData, null, 2));
        console.log('Form data keys:', Object.keys(formData));
        console.log('Individual fields:');
        console.log('  first-name:', formData['first-name'], '| firstName:', formData.firstName);
        console.log('  last-name:', formData['last-name'], '| lastName:', formData.lastName);
        console.log('  email:', formData.email);
        console.log('  phone:', formData.phone);
        console.log('  company:', formData.company);
        console.log('  inquiry:', formData.inquiry);
        console.log('  message:', formData.message);
        console.log('===========================');

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
              <h2>[Greyhound Winners] New ${formData.inquiry || formData['inquiry'] || 'Contact'} request form</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${(formData['first-name'] || formData.firstName || '')} ${(formData['last-name'] || formData.lastName || '')}</div>
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
                <div class="value">${formData.inquiry || formData['inquiry'] || ''}</div>
              </div>
              <div class="message-box">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap; margin-top: 10px;">${formData.message || ''}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Greyhound Winners contact form.</p>
              <p>You can reply directly to this email to respond to ${(formData['first-name'] || formData.firstName || '')} ${(formData['last-name'] || formData.lastName || '')}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

        // Extract values with fallbacks for different field name formats
        const firstName = formData['first-name'] || formData.firstName || '';
        const lastName = formData['last-name'] || formData.lastName || '';
        const inquiry = formData.inquiry || formData['inquiry'] || 'General Inquiry';
        const company = formData.company || 'No Company';

        // Plain text version
        const textEmail = `
New ${inquiry} request form

Name: ${firstName} ${lastName}
Email: ${formData.email || ''}
Phone: ${formData.phone || 'Not provided'}
Company: ${company}
Inquiry Type: ${inquiry}

Message:
${formData.message || ''}

---
This email was sent from the Greyhound Winners contact form.
You can reply directly to this email to respond to ${firstName} ${lastName}.
    `;

        // Send email
        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${smtpUser}>`,
            replyTo: formData.email || smtpUser,
            to: recipientEmail,
            subject: `[Greyhound Winners] Contact Form: New ${inquiry} request form from ${company}`,
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
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
        console.error('Event body:', event.body);

        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                error: 'Failed to send email',
                details: error instanceof Error ? error.message : 'Unknown error',
                receivedData: event.body ? JSON.parse(event.body) : 'No body'
            }),
        };
    }
};

export { handler };
