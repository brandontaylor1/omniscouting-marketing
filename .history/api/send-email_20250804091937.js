import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, organization, organizationType, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !organization || !organizationType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email to you (the business owner)
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Demo Requests <noreply@omniscouting.com>',
      to: [process.env.RESEND_TO_EMAIL || 'your-email@omniscouting.com'],
      subject: `New Demo Request from ${firstName} ${lastName}`,
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
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // Send confirmation email to the form submitter
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Omni Scouting <noreply@omniscouting.com>',
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

    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
