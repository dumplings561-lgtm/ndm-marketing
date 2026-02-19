import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Night & Day Medical <intake@resend.dev>',
      to: ['anthony@nightdaymed.net'],
      subject: `🔔 New Lead: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; background: #0C0A09; color: #F2EDE8; padding: 32px; border-radius: 12px;">
          <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px; color: #C4897A;">New Website Lead</h1>
            <p style="margin: 6px 0 0; font-size: 13px; color: #9A918A;">From nightdaymed.net contact form</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9A918A; font-size: 13px; width: 80px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #F2EDE8; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9A918A; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #C4897A; text-decoration: none; font-size: 15px;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9A918A; font-size: 13px; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #C4897A; text-decoration: none; font-size: 15px;">${phone}</a></td>
            </tr>
            ${message ? `<tr>
              <td style="padding: 10px 0; color: #9A918A; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #F2EDE8; font-size: 14px; line-height: 1.5;">${message}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 11px; color: #6B635C;">
            Received ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short' })} ET
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send. Please try calling us directly.' });
  }
}
