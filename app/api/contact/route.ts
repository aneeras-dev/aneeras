import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM    = process.env.RESEND_FROM_EMAIL ?? 'Aneeras <noreply@mail.aneeras.com>'
const TEAM_TO = process.env.RESEND_TO_EMAIL   ?? 'hello@aneeras.com'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const firstName = name.split(' ')[0]

    // ── 1. Internal notification to the Aneeras team ──────────────────────────
    const teamEmail = {
      from: FROM,
      to: TEAM_TO,
      replyTo: email,
      subject: `[Aneeras] ${subject} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#0f0f1a;color:#f8f8f8;border-radius:12px">
          <h2 style="margin:0 0 24px;color:#8B8CC9;font-size:20px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#8B8CC9;font-size:13px;width:100px">Name</td>    <td style="padding:8px 0;font-size:14px">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#8B8CC9;font-size:13px">Email</td>   <td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#8B8CC9">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#8B8CC9;font-size:13px">Subject</td> <td style="padding:8px 0;font-size:14px">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:20px 0"/>
          <p style="color:#8B8CC9;font-size:13px;margin:0 0 8px">Message</p>
          <p style="font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0">${message}</p>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:24px 0"/>
          <p style="font-size:12px;color:rgba(255,255,255,0.3);margin:0">Sent from aneeras.com contact form</p>
        </div>
      `,
    }

    // ── 2. Confirmation email to the user ─────────────────────────────────────
    const userEmail = {
      from: FROM,
      to: `${name} <${email}>`,
      subject: `We received your message — Aneeras`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
        <body style="margin:0;padding:0;background:#09090f;font-family:'Inter',Arial,sans-serif">
          <div style="max-width:560px;margin:40px auto;padding:0 16px">

            <!-- Header -->
            <div style="background:linear-gradient(135deg,#2C2678,#4B4AA8);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center">
              <img src="https://aneeras.com/logo/footer-logo.png" alt="Aneeras" width="160" style="display:block;margin:0 auto;height:auto;max-width:160px"/>
              <p style="margin:14px 0 0;color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:1.2px;text-transform:uppercase">Building Digital Products That Move People</p>
            </div>

            <!-- Body -->
            <div style="background:#0f0f1a;border:1px solid rgba(255,255,255,0.07);border-top:none;border-radius:0 0 16px 16px;padding:40px">

              <h1 style="margin:0 0 8px;color:#ffffff;font-size:22px;font-weight:700">Hey ${firstName}! 👋</h1>
              <p style="margin:0 0 24px;color:rgba(255,255,255,0.55);font-size:14px;line-height:1.7">
                Thanks for reaching out. We've received your message and our team will get back to you within <strong style="color:#8B8CC9">24 hours</strong>.
              </p>

              <!-- Message summary -->
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 24px;margin-bottom:28px">
                <p style="margin:0 0 14px;color:#8B8CC9;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Your Message</p>
                <table style="width:100%;border-collapse:collapse">
                  <tr>
                    <td style="padding:5px 0;color:rgba(255,255,255,0.4);font-size:12px;width:70px;vertical-align:top">Subject</td>
                    <td style="padding:5px 0;color:rgba(255,255,255,0.85);font-size:13px">${subject}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;color:rgba(255,255,255,0.4);font-size:12px;vertical-align:top">Message</td>
                    <td style="padding:5px 0;color:rgba(255,255,255,0.85);font-size:13px;line-height:1.6;white-space:pre-wrap">${message}</td>
                  </tr>
                </table>
              </div>

              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0 0 24px"/>

              <p style="margin:0;color:rgba(255,255,255,0.3);font-size:12px;line-height:1.7">
                This is an automated confirmation. Please do not reply to this email.<br/>
                If you didn't submit this form, you can safely ignore this message.
              </p>
            </div>

            <!-- Footer -->
            <p style="margin:20px 0;text-align:center;color:rgba(255,255,255,0.2);font-size:11px">
              © ${new Date().getFullYear()} Aneeras LLP · <a href="https://aneeras.com" style="color:rgba(255,255,255,0.3);text-decoration:none">aneeras.com</a>
            </p>

          </div>
        </body>
        </html>
      `,
    }

    const [teamResult, userResult] = await Promise.allSettled([
      resend.emails.send(teamEmail),
      resend.emails.send(userEmail),
    ])

    if (teamResult.status === 'rejected') {
      console.error('[contact] Team notification failed:', teamResult.reason)
    } else if (teamResult.value.error) {
      console.error('[contact] Team notification error:', teamResult.value.error)
    }

    if (userResult.status === 'rejected') {
      console.error('[contact] User confirmation failed:', userResult.reason)
      return NextResponse.json({ error: 'Failed to send confirmation email. Please try again.' }, { status: 500 })
    }
    if (userResult.value.error) {
      console.error('[contact] User confirmation error:', userResult.value.error)
      return NextResponse.json({ error: 'Failed to send confirmation email. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
