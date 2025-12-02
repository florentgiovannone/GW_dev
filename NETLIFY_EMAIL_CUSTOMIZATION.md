# Customizing Netlify Form Email Notifications

There are several ways to customize email notifications for Netlify Forms:

## Option 1: Basic Email Notification (Limited Customization)

### Setup in Netlify Dashboard:

1. Go to your **Netlify Dashboard** → Your Site → **Forms**
2. Click on your form (e.g., "contact")
3. Go to the **Notifications** tab
4. Click **Add notification** → **Email notification**
5. Enter recipient email(s)
6. Click **Save**

### Limitations:

- Uses Netlify's default email template
- Basic formatting (plain text with field labels)
- No HTML customization
- No branding/styling

---

## Option 2: Webhook + Netlify Function (Full Customization) ⭐ Recommended

This allows you to send fully customized HTML emails with your branding.

### Step 1: Create a Netlify Function

Create `netlify/functions/form-submission.ts`:

```typescript
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // Only process POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const formData = JSON.parse(event.body || "{}");

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "florent.giovannone@abeta.co.uk";

    if (!smtpUser || !smtpPassword) {
      return { statusCode: 500, body: "Email service not configured" };
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

    // Custom HTML email template
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #540713 0%, #86000D 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f5f5f5; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin: 15px 0; }
            .label { font-weight: bold; color: #540713; }
            .value { color: #333; margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #86000D; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${formData["first-name"]} ${
      formData["last-name"]
    }</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${formData.email}">${
      formData.email
    }</a></div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${formData.phone || "Not provided"}</div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${formData.company}</div>
            </div>
            <div class="field">
              <div class="label">Inquiry Type:</div>
              <div class="value">${formData.inquiry}</div>
            </div>
            <div class="message-box">
              <div class="label">Message:</div>
              <div class="value" style="white-space: pre-wrap;">${
                formData.message
              }</div>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              This email was sent from the Greyhound Winners contact form.
            </p>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"${formData["first-name"]} ${formData["last-name"]}" <${smtpUser}>`,
      replyTo: formData.email,
      to: recipientEmail,
      subject: `Contact Form: ${formData.inquiry} - ${formData.company}`,
      html: htmlEmail,
      text: `
New Contact Form Submission

Name: ${formData["first-name"]} ${formData["last-name"]}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company}
Inquiry Type: ${formData.inquiry}

Message:
${formData.message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};

export { handler };
```

### Step 2: Set Up Webhook in Netlify Dashboard

1. Go to **Forms** → Your form → **Notifications**
2. Click **Add notification** → **Webhook**
3. Enter webhook URL: `https://gwin-dev.netlify.app/.netlify/functions/form-submission`
4. Click **Save**

### Step 3: Set Environment Variables

In Netlify Dashboard → **Site settings** → **Environment variables**, add:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=florent.giovannone@abeta.co.uk
```

### Step 4: Deploy

After deploying, form submissions will trigger the webhook and send custom emails!

---

## Option 3: Use Zapier/Make.com (No-Code Solution)

1. Set up a webhook in Netlify Forms (same as Option 2, Step 2)
2. Connect to Zapier/Make.com
3. Format the email using their email service
4. Send via Gmail, SendGrid, etc.

---

## Option 4: Use Netlify's Built-in Email Service (Paid)

Netlify offers a paid email service with more customization options:

- Go to **Forms** → **Email notifications**
- Upgrade to paid plan
- More template options available

---

## Recommended Approach

For full control and customization, use **Option 2 (Webhook + Netlify Function)**. This gives you:

- ✅ Full HTML email control
- ✅ Custom branding and styling
- ✅ Ability to send to multiple recipients
- ✅ Custom subject lines
- ✅ Reply-to functionality
- ✅ No additional costs (uses your SMTP)

The function above is ready to use - just create the file and set up the webhook!
