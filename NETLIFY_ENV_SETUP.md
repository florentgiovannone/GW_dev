# Setting Up Environment Variables for Netlify

You have two options to set environment variables in Netlify:

## Option 1: Add Variables Manually (Recommended for Production)

### Steps:

1. Go to **Netlify Dashboard** → Your Site
2. Click **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add each variable one by one:

   **Variable 1:**

   - Key: `SMTP_HOST`
   - Value: `smtp.gmail.com` (or your SMTP server)

   **Variable 2:**

   - Key: `SMTP_PORT`
   - Value: `587` (or `465` for SSL)

   **Variable 3:**

   - Key: `SMTP_USER`
   - Value: `your-email@gmail.com`

   **Variable 4:**

   - Key: `SMTP_PASSWORD`
   - Value: `your-app-password` (for Gmail, use an app password)

   **Variable 5:**

   - Key: `RECIPIENT_EMAIL`
   - Value: `florent.giovannone@abeta.co.uk`

5. Click **Save** after each variable

### Pros:

- ✅ Secure (not in your codebase)
- ✅ Easy to update without redeploying
- ✅ Can set different values for different environments (Production, Deploy Previews, Branch Deploys)

---

## Option 2: Import from .env File

### Steps:

1. Create a `.env` file in your project root (if you don't have one)
2. Add your variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   RECIPIENT_EMAIL=florent.giovannone@abeta.co.uk
   ```
3. In Netlify Dashboard → **Site settings** → **Environment variables**
4. Click **Import from a .env file**
5. Upload or paste your `.env` file content
6. Click **Import**

### Important Notes:

- ⚠️ **Never commit `.env` files to git!** They contain sensitive credentials
- Add `.env` to your `.gitignore` file
- The `.env` file is only used for importing - Netlify stores the values securely
- After importing, you can delete the local `.env` file if you want

### Pros:

- ✅ Quick setup (all variables at once)
- ✅ Good for initial setup
- ⚠️ Less secure if you accidentally commit the file

---

## Required Variables

Your Netlify function needs these 5 environment variables:

| Variable          | Example Value                    | Description                                  |
| ----------------- | -------------------------------- | -------------------------------------------- |
| `SMTP_HOST`       | `smtp.gmail.com`                 | Your email provider's SMTP server            |
| `SMTP_PORT`       | `587`                            | SMTP port (587 for TLS, 465 for SSL)         |
| `SMTP_USER`       | `your-email@gmail.com`           | Your email address                           |
| `SMTP_PASSWORD`   | `your-app-password`              | App password (for Gmail) or regular password |
| `RECIPIENT_EMAIL` | `florent.giovannone@abeta.co.uk` | Where to send form submissions               |

---

## Getting Gmail App Password

If using Gmail:

1. Go to https://myaccount.google.com/
2. Enable **2-Step Verification** (required)
3. Go to **App passwords**: https://myaccount.google.com/apppasswords
4. Generate a new app password for "Mail"
5. Use this 16-character password as `SMTP_PASSWORD`

---

## Recommendation

**Use Option 1 (Manual)** for production:

- More secure
- Better control
- Can set different values per environment
- No risk of committing secrets to git

**Use Option 2 (.env import)** for quick setup:

- Faster initial configuration
- Good for development/testing
- Just make sure `.env` is in `.gitignore`!

---

## After Setting Up

1. Deploy your site (or trigger a new deploy)
2. Test the form submission
3. Check your email inbox for the custom formatted email!
