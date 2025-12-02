# Troubleshooting Netlify Form Email Not Sending

If emails aren't being sent, check these steps:

## 1. Check Webhook Configuration

**In Netlify Dashboard:**

1. Go to **Forms** → **contact** form
2. Click **Notifications** tab
3. Verify you have a **Webhook** notification set up
4. Check the webhook URL is: `https://gwin-dev.netlify.app/.netlify/functions/form-submission`
5. Make sure it's **enabled** (not paused)

## 2. Check Environment Variables

**In Netlify Dashboard:**

1. Go to **Site settings** → **Environment variables**
2. Verify all 5 variables are set:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `RECIPIENT_EMAIL`
3. Make sure they're set for **Production** (or the environment you're testing)

## 3. Check Function Logs

**In Netlify Dashboard:**

1. Go to **Functions** tab
2. Click on `form-submission`
3. Check the **Logs** tab
4. Look for:
   - Error messages
   - "Received form submission" logs (shows what data was received)
   - "Error sending email" messages

## 4. Test the Function Directly

You can test the function with a curl command:

```bash
curl -X POST https://gwin-dev.netlify.app/.netlify/functions/form-submission \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "first-name": "Test",
      "last-name": "User",
      "email": "test@example.com",
      "phone": "+1234567890",
      "company": "Test Company",
      "inquiry": "general",
      "message": "This is a test message"
    }
  }'
```

## 5. Common Issues

### Issue: "Email service not configured"

- **Fix:** Make sure `SMTP_USER` and `SMTP_PASSWORD` are set in environment variables

### Issue: "Authentication failed"

- **Fix:**
  - For Gmail: Use an app password, not your regular password
  - Make sure 2-Step Verification is enabled
  - Check SMTP credentials are correct

### Issue: Function not being called

- **Fix:**
  - Verify webhook URL is correct
  - Check webhook is enabled in Netlify Forms
  - Make sure the function is deployed (check Functions tab)

### Issue: "Cannot read property of undefined"

- **Fix:** The function now handles both webhook formats. Check logs to see the actual data structure.

## 6. Check Form Submission

**Verify the form is actually submitting:**

1. Go to **Forms** → **contact** form
2. Check **Submissions** tab
3. You should see form submissions listed there
4. If submissions appear but no email, the webhook might not be triggering

## 7. Enable Debug Logging

The function now includes console.log statements. Check the function logs in Netlify Dashboard to see:

- What data is being received
- Any errors during email sending
- SMTP connection issues

## 8. Test SMTP Connection

You can test your SMTP settings by temporarily adding this to the function:

```typescript
// Test SMTP connection
await transporter.verify();
console.log("SMTP connection verified");
```

If this fails, your SMTP credentials are incorrect.

---

## Quick Checklist

- [ ] Webhook is configured in Netlify Forms
- [ ] Webhook URL is correct
- [ ] All environment variables are set
- [ ] Function is deployed (check Functions tab)
- [ ] Form submissions appear in Forms dashboard
- [ ] Check function logs for errors
- [ ] SMTP credentials are correct (use app password for Gmail)

---

## Still Not Working?

1. Check the **Function logs** in Netlify Dashboard for specific error messages
2. Verify the webhook is actually being called (check webhook logs)
3. Test SMTP credentials separately
4. Make sure the function file is in `netlify/functions/form-submission.ts`
5. Redeploy the site after making changes
