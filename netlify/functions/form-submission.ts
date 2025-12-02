import { Handler, HandlerEvent, HandlerContext, HandlerResponse } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (
    event: HandlerEvent,
    context: HandlerContext
): Promise<HandlerResponse> => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const payload = JSON.parse(event.body || '{}');
        let formData: any = {};

        if (payload.data) {
            formData = payload.data;
        } else if (payload.form_name) {
            formData = { ...payload };
            delete formData.form_name;
        } else {
            formData = payload;
        }

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

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
        });

        const firstName = formData['first-name'] || formData.firstName || '';
        const lastName = formData['last-name'] || formData.lastName || '';
        const inquiry = formData.inquiry || formData['inquiry'] || 'General Inquiry';
        const company = formData.company || 'No Company';

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
        <h2>[Greyhound Winners] New ${inquiry} request form</h2>
        </div>
        <div class="content">
        <div class="field">
            <div class="label">Name</div>
            <div class="value">${firstName} ${lastName}</div>
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
                <div class="value">${inquiry}</div>
              </div>
        <div class="message-box">
            <div class="label">Message</div>
            <div class="value" style="white-space: pre-wrap; margin-top: 10px;">${formData.message || ''}</div>
        </div>
        </div>
        <div class="footer">
        <p>This email was sent from the Greyhound Winners contact form.</p>
        <p>You can reply directly to this email to respond to ${firstName} ${lastName}.</p>
        </div>
    </div>
    </body>
</html>
    `;

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

        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${smtpUser}>`,
            replyTo: formData.email || smtpUser,
            to: recipientEmail,
            subject: `[Greyhound Winners] Contact Form: New ${inquiry} request form from ${company}`,
            html: htmlEmail,
            text: textEmail,
        });

        if (formData.email) {
            const confirmationHtml = `
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
            .message {
              color: #333;
              font-size: 16px;
              line-height: 1.6;
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
              <h2>Thank You for Contacting Greyhound Winners</h2>
            </div>
            <div class="content">
              <div class="message">
                <p>Dear ${firstName} ${lastName},</p>
                <p>Thank you for reaching out to Greyhound Winners. We have received your ${inquiry} inquiry and will get back to you as soon as possible.</p>
                <p>We appreciate your interest in our virtual racing platform and look forward to discussing how we can help your business.</p>
                <p>Best regards,<br>The Greyhound Winners Team</p>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated confirmation email.</p>
              <p>If you have any questions, please contact us at <a href="mailto:info@greyhoundwinners.com">info@greyhoundwinners.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

            const confirmationText = `
Thank You for Contacting Greyhound Winners

Dear ${firstName} ${lastName},

Thank you for reaching out to Greyhound Winners. We have received your ${inquiry} inquiry and will get back to you as soon as possible.

We appreciate your interest in our virtual racing platform and look forward to discussing how we can help your business.

Best regards,
The Greyhound Winners Team

---
This is an automated confirmation email.
If you have any questions, please contact us at info@greyhoundwinners.com
    `;

            await transporter.sendMail({
                from: `"Greyhound Winners" <${smtpUser}>`,
                to: formData.email,
                subject: `Thank You for Contacting Greyhound Winners`,
                html: confirmationHtml,
                text: confirmationText,
            });
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                error: 'Failed to send email',
                details: error instanceof Error ? error.message : 'Unknown error',
            }),
        };
    }
};

export { handler };
