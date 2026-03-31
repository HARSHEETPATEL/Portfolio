# 📊 Google Analytics Setup Guide

## Overview
Google Analytics has been integrated into your portfolio to track:
- **Page views** - See how many people visit your portfolio
- **Project clicks** - Track which projects get the most attention
- **Contact form submissions** - Monitor conversion rates
- **Resume downloads** - See how many people download your CV
- **Social link clicks** - Track engagement with your social profiles
- **Scroll depth** - Understand how far visitors scroll

---

## Step-by-Step Setup

### Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"**
3. Sign in with your Google account (or create one)

### Step 2: Set Up a Property

1. Click **"Admin"** (gear icon in bottom left)
2. Under **Property**, click **"Create Property"**
3. Enter:
   - **Property name**: `Harsheet Patel Portfolio`
   - **Reporting time zone**: Select your timezone (e.g., India Standard Time)
   - **Currency**: INR (or your preferred currency)
4. Click **"Next"**

### Step 3: Choose Business Details

1. Select your business size and industry
2. Choose what you want to track:
   - ✅ Generate reports
   - ✅ Technical setup
3. Click **"Create"**

### Step 4: Set Up Data Stream

1. Choose **"Web"** as your platform
2. Enter:
   - **Site URL**: `https://harsheetpatel.github.io/Portfolio/` (or your domain)
   - **Stream name**: `Portfolio Website`
3. Click **"Create stream"**

### Step 5: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX` (10 characters after G-)
3. **Copy this ID**

### Step 6: Update Your Code

1. Open `index1.html`
2. Find line ~27 (in the Google Analytics section)
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID in **TWO places**:

```javascript
// Line 24: Script src
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOURACTUALID"></script>

// Line 28: Config
gtag('config', 'G-YOURACTUALID', {
    page_path: window.location.pathname,
});
```

### Step 7: Verify Installation

1. Open your portfolio in a browser
2. Go to Google Analytics → **Reports** → **Realtime**
3. You should see your visit being tracked!

---

## 📈 What Gets Tracked

### Automatic Tracking (Already Working)
- ✅ Page views
- ✅ Session duration
- ✅ Bounce rate
- ✅ User location
- ✅ Device type (mobile/desktop)
- ✅ Browser information
- ✅ Scroll depth (50%+ scroll)

### Manual Event Tracking (Functions Available)
These functions are ready to use - just add them to your HTML elements:

#### 1. Track Project Clicks
Add to your project links:
```html
<a href="https://github.com/..." 
   onclick="trackProjectClick('Cab Management System')">
   Code
</a>
```

#### 2. Track Resume Download
Add to your resume link:
```html
<a href="Harsheet Patel.pdf" 
   onclick="trackResumeDownload()" 
   download>
   My Resume
</a>
```

#### 3. Track Social Link Clicks
Add to social links:
```html
<a href="https://linkedin.com/..." 
   onclick="trackSocialClick('LinkedIn')">
   <i class="fab fa-linkedin"></i>
</a>
```

#### 4. Track Contact Form
Already integrated in the form submission handler!

---

## 🎯 Viewing Your Data

### Real-Time Reports
- See visitors right now
- Check if tracking is working
- **Path**: Reports → Realtime

### Audience Overview
- Total users
- New vs returning visitors
- Session duration
- **Path**: Reports → Audience → Overview

### Behavior Flow
- See how users navigate your site
- Which sections they visit
- Where they drop off
- **Path**: Reports → Behavior → Behavior Flow

### Events
- Project clicks
- Social link clicks
- Resume downloads
- Contact form submissions
- **Path**: Reports → Engagement → Events

---

## 🔒 Privacy & Compliance

### GDPR Compliance
Google Analytics is configured to respect user privacy. For full GDPR compliance:

1. Add a cookie consent banner
2. Allow users to opt-out
3. Link to your privacy policy

### IP Anonymization
To anonymize IP addresses (recommended for GDPR), add this to your gtag config:

```javascript
gtag('config', 'G-YOURACTUALID', {
    page_path: window.location.pathname,
    anonymize_ip: true  // Add this line
});
```

---

## 📱 Alternative: Plausible Analytics

If you prefer a privacy-focused, lightweight alternative:

### Why Plausible?
- ✅ GDPR compliant by default
- ✅ No cookie banner needed
- ✅ 45x lighter than Google Analytics
- ✅ Respects user privacy
- ✅ Shows all essential metrics

### Setup Plausible:
1. Go to [Plausible.io](https://plausible.io/)
2. Sign up for an account (free trial available)
3. Add your site
4. Replace the Google Analytics script with Plausible's script

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🎨 Custom Dashboard Ideas

### Create Custom Reports for:
1. **Most Popular Projects** - Track which projects get most clicks
2. **Conversion Funnel** - Homepage → Projects → Contact → Form Submit
3. **Traffic Sources** - Where visitors come from (LinkedIn, GitHub, direct)
4. **Mobile vs Desktop** - Optimize for your primary audience

---

## 💡 Pro Tips

1. **Set up Goals**: Track form submissions as conversions
2. **Enable Site Search**: See what visitors are looking for
3. **Create Segments**: Analyze specific user groups
4. **Set up Alerts**: Get notified of traffic spikes
5. **Link with Search Console**: See search queries bringing traffic

---

## 📞 Need Help?

- **Google Analytics Academy**: Free courses at [analytics.google.com/analytics/academy](https://analytics.google.com/analytics/academy/)
- **Google Support**: [support.google.com/analytics](https://support.google.com/analytics/)
- **Plausible Support**: [plausible.io/docs](https://plausible.io/docs)

---

## ✅ Checklist

- [ ] Create Google Analytics account
- [ ] Create property for portfolio
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Update `index1.html` with your ID
- [ ] Test in Realtime reports
- [ ] (Optional) Add event tracking to buttons
- [ ] (Optional) Set up goals/conversions
- [ ] (Optional) Enable IP anonymization for GDPR

---

**You're all set! Start tracking your portfolio's performance! 🚀**
