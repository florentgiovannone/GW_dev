# EmailJS Business Template Configuration

This template is for receiving form submissions at your business email.

## Template Settings

**Template Name:** `Contact Form Submission` (or keep existing name)

**Service:** Your email service (e.g., Gmail, Outlook)

**To Email:** `florent.giovannone@abeta.co.uk` (or use `{{to_email}}` if you want it dynamic)

**From Email:** `{{from_email}}` (NOTE: This may not work with all email services - see limitations below)

**From Name:** `{{from_name}}` (or `Greyhound Winners Contact Form` if you prefer a static name)

**Reply To:** `{{from_email}}` (so you can reply directly to the person who submitted the form)

### ⚠️ Important Note About "From Email"

**EmailJS Limitations:** Most email services (Gmail, Outlook, etc.) don't allow arbitrary "From" addresses for security reasons. If `{{from_email}}` doesn't work, the email will use your service's default/verified email address.

**If you need the email to appear from the client's address:**

1. Check if your EmailJS email service supports dynamic "From" addresses
2. You may need to use a service like SendGrid or Mailgun that allows this with proper domain verification
3. Alternatively, keep a static "From" address and make the client's identity clear in the email content (which is already done with `{{from_name}}` and Reply-To)

## Subject Line

```
Contact Form: {{inquiry_type}} - {{company}}
```

## Email Content (HTML)

**Important:** Replace `YOUR_LOGO_URL` with the actual URL where your logo is hosted (e.g., on your website or image hosting service).

```html
<div
  style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;"
>
  <!-- Logo Header -->
  <div style="text-align: center; margin-bottom: 30px; padding: 20px 0;">
    <img
      src="YOUR_LOGO_URL"
      alt="Greyhound Winners"
      style="max-width: 200px; height: auto; display: block; margin: 0 auto;"
    />
  </div>

  <h2
    style="color: #540713; border-bottom: 2px solid #86000D; padding-bottom: 10px; text-align: center; margin-top: 0;"
  >
    New Contact Form Submission
  </h2>

  <div
    style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;"
  >
    <h3 style="color: #540713; margin-top: 0;">Contact Information</h3>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p>
      <strong>Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a>
    </p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Inquiry Type:</strong> {{inquiry_type}}</p>
  </div>

  <div
    style="background-color: #ffffff; padding: 20px; border-left: 4px solid #86000D; margin: 20px 0;"
  >
    <h3 style="color: #540713; margin-top: 0;">Message</h3>
    <p style="white-space: pre-wrap; line-height: 1.6;">{{message}}</p>
  </div>

  <div
    style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;"
  >
    <p>This email was sent from the Greyhound Winners contact form.</p>
    <p>You can reply directly to this email to respond to {{from_name}}.</p>
  </div>
</div>
```

## Email Content (Plain Text - Alternative)

```
New Contact Form Submission

Contact Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}
- Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
This email was sent from the Greyhound Winners contact form.
You can reply directly to this email to respond to {{from_name}}.
```

## Template Variables Used

Make sure your template uses these exact variable names:

- `{{from_name}}` - Full name of the person who submitted
- `{{from_email}}` - Email of the person who submitted
- `{{phone}}` - Phone number (or "Not provided")
- `{{company}}` - Company name
- `{{inquiry_type}}` - Type of inquiry
- `{{inquiry}}` - Same as inquiry_type (alternative)
- `{{message}}` - The message content
- `{{first_name}}` - First name only
- `{{last_name}}` - Last name only
- `{{to_email}}` - Recipient email (if using variable)

## Steps to Update Your Template

1. Go to https://dashboard.emailjs.com/
2. Click **Email Templates**
3. Open template `template_qeb4yw9`
4. Update the **Subject** field with the subject line above
5. Update the **Content** field with the HTML or text content above
6. Make sure **To Email** is set to: `florent.giovannone@abeta.co.uk`
7. Set **Reply To** to: `{{from_email}}`
8. Click **Save**

After updating, test the form to ensure you receive properly formatted emails with all the form data!
