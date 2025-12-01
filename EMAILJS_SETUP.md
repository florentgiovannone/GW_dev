# EmailJS Setup Guide

The form is now configured to use EmailJS. Follow these steps to set it up:

## Step 1: Sign up for EmailJS

1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Create an Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**

```
Contact Form: {{inquiry_type}}
```

**Content:**

```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
This email was sent from the Greyhound Winners contact form.
```

4. Set **To Email** to: `info@greyhoundwinners.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{from_email}}`
7. **Copy your Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find **Public Key**
3. **Copy your Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update the Form Component

Open `src/components/Form.tsx` and replace these values on lines 20-22:

```typescript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your Service ID
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
```

## Step 6: Test the Form

1. Fill out the form
2. Submit it
3. Check your EmailJS dashboard for logs
4. Verify the email arrives at info@greyhoundwinners.com

## Template Variables Used

The form sends these variables to EmailJS:

- `from_name` - First Name + Last Name
- `from_email` - User's email address
- `phone` - Phone number (or "Not provided")
- `company` - Company name
- `inquiry_type` - Type of inquiry
- `message` - Message content
- `to_email` - Always set to info@greyhoundwinners.com

Make sure your EmailJS template uses these exact variable names!
