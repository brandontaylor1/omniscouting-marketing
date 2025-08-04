# Vercel Deployment Guide for Omni Scouting Marketing Site

## 🚀 Pre-Deployment Checklist

### 1. Environment Variables Setup
Before deploying, make sure you have:
- ✅ Resend API key from https://resend.com/api-keys
- ✅ Domain verified in Resend dashboard
- ✅ Email addresses configured

### 2. Domain Setup in Resend
1. Go to your Resend dashboard
2. Add and verify your domain (`omniscouting.com`)
3. Update the `RESEND_FROM_EMAIL` to use your verified domain

## 📋 Deployment Steps

### Step 1: Connect to Vercel
```bash
# Login to Vercel (if not already logged in)
vercel login

# Link your project to Vercel
vercel --prod
```

### Step 2: Set Environment Variables in Vercel
In your Vercel dashboard, go to Project Settings > Environment Variables and add:

```
RESEND_API_KEY=re_7s8PrV5B_6szVqMQdjPLUTutcT84C1sJC
RESEND_FROM_EMAIL=noreply@omniscouting.com
RESEND_TO_EMAIL=invitations@omniscouting.com
```

**Important:** 
- Set these for **Production**, **Preview**, and **Development** environments
- Never commit your actual API keys to git

### Step 3: Deploy
```bash
# Deploy to production
vercel --prod
```

## 🔧 What's Included

### ✅ Serverless API Endpoint
- **Endpoint:** `/api/send-email`
- **Method:** POST
- **Location:** `./api/send-email.js`

### ✅ Email Features
1. **Demo request notification** → Sent to `invitations@omniscouting.com`
2. **Auto-confirmation email** → Sent to form submitter
3. **Professional HTML templates** with Omni Scouting branding
4. **Error handling** and validation

### ✅ Form Features
- Real-time validation
- Loading states
- Success/error feedback
- Form reset after successful submission
- Responsive design

## 🧪 Testing

### Local Testing with Vercel Dev
```bash
# Start Vercel development server (includes API routes)
vercel dev

# Your site will be available at http://localhost:3000
# API endpoint will work at http://localhost:3000/api/send-email
```

### Production Testing
1. Fill out the contact form on your live site
2. Check `invitations@omniscouting.com` for the demo request
3. Check the form submitter's email for confirmation

## 🔒 Security Notes

- ✅ API key is stored as environment variable
- ✅ Server-side validation prevents spam
- ✅ CORS is handled automatically by Vercel
- ✅ No sensitive data exposed to client

## 📁 File Structure
```
├── api/
│   └── send-email.js          # Vercel serverless function
├── src/
│   └── App.jsx               # Updated with real API integration
├── .env.local                # Local development (not committed)
├── .env.example              # Template for environment variables
├── vercel.json               # Vercel configuration
└── .gitignore                # Protects sensitive files
```

## 🚨 Troubleshooting

### Common Issues:
1. **"Domain not verified"** → Verify your domain in Resend dashboard
2. **"API endpoint not found"** → Make sure you're using Vercel dev locally
3. **"Environment variables not found"** → Set them in Vercel dashboard
4. **Emails not sending** → Check Resend logs in their dashboard

### Debug Tips:
- Check Vercel function logs in the dashboard
- Test API endpoint directly: `POST /api/send-email`
- Verify environment variables are set correctly

## 🎯 Next Steps After Deployment

1. **Test the form** on your live site
2. **Set up email templates** in Resend (optional)
3. **Monitor form submissions** in Vercel dashboard
4. **Add analytics** if needed (Vercel Analytics)

---

**Ready to deploy?** Run `vercel --prod` and your form will be live! 🚀
