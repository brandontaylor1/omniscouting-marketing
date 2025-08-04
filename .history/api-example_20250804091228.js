// Example API endpoint for handling form submissions with Resend
// This is an example - you can adapt this for your backend or serverless function

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, lastName, email, organization, organizationType, message, subject, to } = await request.json();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Demo Requests <noreply@omniscouting.com>', // Replace with your verified domain
      to: [to || 'your-email@omniscouting.com'], // Replace with your email
      subject: subject || `New Demo Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Demo Request</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Organization Type:</strong> ${organizationType}</p>
          </div>
          
          ${message ? `
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Message</h3>
              <p>${message}</p>
            </div>
          ` : ''}
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Next Steps</h3>
            <p>Please respond to this demo request within 24 hours.</p>
            <p>Reply directly to: <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            This email was sent from the Omni Scouting marketing website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Optionally, send a confirmation email to the person who submitted the form
    await resend.emails.send({
      from: 'Omni Scouting <noreply@omniscouting.com>', // Replace with your verified domain
      to: [email],
      subject: 'Thank you for your demo request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your interest in Omni Scouting!</h2>
          
          <p>Hi ${firstName},</p>
          
          <p>We've received your demo request and will get back to you within 24 hours.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">What happens next?</h3>
            <ul>
              <li>Our team will review your request</li>
              <li>We'll reach out to schedule a personalized demo</li>
              <li>You'll see exactly how Omni Scouting can help your ${organizationType} program</li>
            </ul>
          </div>
          
          <p>If you have any immediate questions, feel free to reply to this email.</p>
          
          <p>Best regards,<br>The Omni Scouting Team</p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            Omni Scouting - The all-in-one player management system
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Environment variables you'll need:
// RESEND_API_KEY=your_resend_api_key_here

// If using Vercel, you can create this as /api/send-email/route.js
// If using Netlify, you can create this as /netlify/functions/send-email.js
// For other platforms, adapt accordingly
