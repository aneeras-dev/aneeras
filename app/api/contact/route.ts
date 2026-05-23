import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const from = process.env.RESEND_FROM_EMAIL ?? 'Aneeras <onboarding@resend.dev>'
    const to = process.env.RESEND_TO_EMAIL ?? 'hello@aneeras.com'

    await resend.emails.send({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `[Aneeras] ${subject} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#0f0f1a;color:#f8f8f8;border-radius:12px">
          <h2 style="margin:0 0 24px;color:#8B8CC9;font-size:20px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#8B8CC9;font-size:13px;width:100px">Name</td><td style="padding:8px 0;font-size:14px">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#8B8CC9;font-size:13px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#8B8CC9">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#8B8CC9;font-size:13px">Subject</td><td style="padding:8px 0;font-size:14px">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:20px 0"/>
          <p style="color:#8B8CC9;font-size:13px;margin:0 0 8px">Message</p>
          <p style="font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0">${message}</p>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:24px 0"/>
          <p style="font-size:12px;color:rgba(255,255,255,0.3);margin:0">Sent from aneeras.com contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
