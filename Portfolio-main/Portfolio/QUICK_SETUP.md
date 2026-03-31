# ⚡ Quick Setup Guide - Contact Form

## ✅ What's Done:
- Public Key added: `XMWY22qQ64WcJUPPZ`
- EmailJS SDK integrated
- Enhanced UI with modern animations
- Improved contact form design

## ❗ What You Need to Do:

### Step 1: Get Service ID and Template ID

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/

2. **Get Service ID**:
   - Click on **"Email Services"** in left sidebar
   - Click on your email service
   - Copy the **Service ID** (looks like: `service_xxxxx`)

3. **Get Template ID**:
   - Click on **"Email Templates"** in left sidebar
   - Click on your template
   - Copy the **Template ID** (looks like: `template_xxxxx`)

### Step 2: Update script1.js

Open `script1.js` and go to **line 175**. Replace these values:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Change it to:
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

### Step 3: Test

1. Open `index1.html` in your browser
2. Scroll to Contact section
3. Fill the form and click "Send Message"
4. Check if email arrives at **anishpatel6678@gmail.com**

---

## 🎨 UI Improvements Made:

### Enhanced Visual Effects:
- ✨ Better glass morphism with blur and saturation
- 🌈 Animated gradient text with color shifting
- 💫 Smoother card hover effects with 3D transforms
- 🎯 Enhanced navigation with glowing underlines
- 🎨 Improved skill badges with gradient animations
- 💧 Better blob animations with rotation and movement
- 📱 Enhanced custom scrollbar with gradient
- ✨ Improved button ripple effects
- 🖼️ Better image hover effects with rotation
- 🎪 Enhanced form inputs with glowing focus states

### Contact Section Improvements:
- 🎨 Decorative background elements
- 📦 Better card layouts with hover effects
- 🔄 Rotating icons on contact cards
- ✨ Shadow effects with color matching
- 📐 Better spacing and typography
- 🎯 Improved form labels with animations
- 💫 Button shine effect on hover

---

## 📧 Template Variables for EmailJS:

In your EmailJS template, use these variables:

```
Subject: New Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
To: {{to_email}}
```

---

**Need help?** Check the full `EMAIL_SETUP_INSTRUCTIONS.md` file for detailed setup steps.
