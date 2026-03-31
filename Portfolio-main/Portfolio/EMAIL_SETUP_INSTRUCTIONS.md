# Email Contact Form Setup Instructions

This guide will help you configure the contact form to send emails to **anishpatel6678@gmail.com** using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Create your account using email, Google, or GitHub

## Step 2: Add an Email Service

1. After logging in, go to **Email Services** in the left sidebar
2. Click **"+ Add New Service"**
3. Select your email provider (Gmail, Outlook, etc.)
4. Connect your email account (this is the email that will **send** the messages)
5. Click **"Create Service"**
6. Copy your **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **"+ Create New Template"**
3. Design your email template. Here's a recommended template:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:

{{message}}

---
This message was sent from Harsheet Patel's Portfolio contact form.
```

4. Click **"Save"**
5. Copy your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** (click your name in the top right)
2. Under **API Keys**, find your **Public Key**
3. Copy it (e.g., `user_abc123xyz789`)

## Step 5: Update Your Code

Open `script1.js` and replace the following placeholders (around lines 3-5 and 175):

### Line 3-5: Initialize EmailJS with your Public Key
```javascript
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your actual public key
})();
```

### Line 175: Add your Service ID and Template ID
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Replace:
- `YOUR_PUBLIC_KEY` → Your actual public key from Step 4
- `YOUR_SERVICE_ID` → Your service ID from Step 2
- `YOUR_TEMPLATE_ID` → Your template ID from Step 3

## Step 6: Test the Form

1. Open your portfolio in a browser
2. Navigate to the **Contact** section
3. Fill out the form and click **"Send Message"**
4. Check if the email arrives at **anishpatel6678@gmail.com**

## Template Variables Available

The following variables are available in your EmailJS template:

- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - The message content
- `{{to_email}}` - Recipient email (anishpatel6678@gmail.com)

## Troubleshooting

### Form shows "Failed to send message"
- Check browser console for errors (F12 → Console tab)
- Verify all three IDs (Public Key, Service ID, Template ID) are correct
- Make sure your EmailJS account is active

### Emails going to spam
- Configure SPF/DKIM records in EmailJS settings
- Use a verified email service (Gmail recommended)

### Need more help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Note:** The free tier of EmailJS allows up to 200 emails per month, which is perfect for a portfolio site!
