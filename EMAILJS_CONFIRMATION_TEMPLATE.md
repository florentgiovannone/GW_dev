# EmailJS Confirmation Template Configuration

This template is for sending a thank you/confirmation email to the client who submitted the form.

## Template Settings

**Template Name:** `Contact Form Confirmation`

**Service:** Your email service (same as business template)

**To Email:** `{{to_email}}` (IMPORTANT: Must use the variable, not a static email)

**From Name:** `Greyhound Winners`

**Reply To:** `florent.giovannone@abeta.co.uk` (or your business email)

## Subject Line

```
Thank you for contacting Greyhound Winners
```

## Email Content (HTML)

**Important:** Replace `YOUR_LOGO_URL` with the actual URL where your logo is hosted. Options:

- Host the logo on your website (e.g., `https://greyhound-winners.com/images/logo.png`)
- Use an image hosting service (Imgur, Cloudinary, etc.)
- Or use the website URL if the logo is publicly accessible

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
    Thank You for Your Inquiry
  </h2>

  <p style="color: #333; line-height: 1.6;">Dear {{client_name}},</p>

  <p style="color: #333; line-height: 1.6;">
    Thank you for contacting Greyhound Winners. We have received your inquiry
    regarding <strong style="color: #86000D;">{{inquiry_type}}</strong> and will
    get back to you soon.
  </p>

  <div
    style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #86000D;"
  >
    <p style="margin: 5px 0; color: #540713; font-weight: bold;">
      Your Inquiry Details:
    </p>
    <p style="margin: 5px 0; color: #333;">Company: {{company}}</p>
    <p style="margin: 5px 0; color: #333;">Inquiry Type: {{inquiry_type}}</p>
  </div>

  <p style="color: #333; line-height: 1.6;">
    We appreciate your interest in Greyhound Winners and will respond to your
    inquiry as soon as possible.
  </p>

  <p style="color: #333; line-height: 1.6;">
    If you have any urgent questions, please feel free to contact us directly
    at:
  </p>
  <ul style="color: #333; line-height: 1.8;">
    <li>
      Email:
      <a
        href="mailto:info@greyhoundwinners.com"
        style="color: #86000D; text-decoration: none;"
        >info@greyhoundwinners.com</a
      >
    </li>
    <li>
      Phone:
      <a href="tel:+441420549988" style="color: #86000D; text-decoration: none;"
        >+44 1420 549988</a
      >
    </li>
    <li>
      Website:
      <a
        href="https://greyhound-winners.com/"
        style="color: #86000D; text-decoration: none;"
        >greyhound-winners.com</a
      >
    </li>
  </ul>

  <p style="color: #333; line-height: 1.6;">
    Best regards,<br />
    <strong style="color: #540713;">The Greyhound Winners Team</strong>
  </p>

  <div
    style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; text-align: center;"
  >
    <p style="margin: 0;">
      This is an automated confirmation email. Please do not reply to this
      message.
    </p>
    <p style="margin: 5px 0 0 0;">
      © 2024 Greyhound Winners. All rights reserved.
    </p>
  </div>
</div>
```

## Email Content (Plain Text - Alternative)

```
Thank You for Your Inquiry

Dear {{client_name}},

Thank you for contacting Greyhound Winners. We have received your inquiry regarding {{inquiry_type}} and will get back to you soon.

Your Inquiry Details:
- Company: {{company}}
- Inquiry Type: {{inquiry_type}}

We appreciate your interest in Greyhound Winners and will respond to your inquiry as soon as possible.

If you have any urgent questions, please feel free to contact us directly at:
- Email: info@greyhoundwinners.com
- Phone: +44 1420 549988

Best regards,
The Greyhound Winners Team

---
This is an automated confirmation email. Please do not reply to this message.
```

## Template Variables Used

Make sure your template uses these exact variable names:

- `{{to_email}}` - Client's email address (REQUIRED - must be in "To Email" field)
- `{{client_name}}` - Full name of the client
- `{{first_name}}` - First name only
- `{{company}}` - Company name
- `{{inquiry_type}}` - Type of inquiry

## Steps to Create the Template

1. Go to https://dashboard.emailjs.com/
2. Click **Email Templates** → **Create New Template**
3. Name it: `Contact Form Confirmation`
4. Set **To Email** to: `{{to_email}}` (IMPORTANT: Use the variable!)
5. Set **Subject** to: `Thank you for contacting Greyhound Winners`
6. Paste the HTML or text content above into the **Content** field
7. Set **From Name** to: `Greyhound Winners`
8. Set **Reply To** to: `florent.giovannone@abeta.co.uk`
9. Click **Save**
10. **Copy the Template ID** (e.g., `template_xxxxxxx`)
11. Update `confirmationTemplateId` in `Form.tsx` with the new template ID

## After Creating the Template

Once you have the confirmation template ID, update the code in `Form.tsx`:

```typescript
const confirmationTemplateId = "YOUR_NEW_TEMPLATE_ID_HERE";
```

Then test the form - the client should receive a nice confirmation email!
