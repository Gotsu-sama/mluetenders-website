import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
  company?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: ContactPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, subject, message, company } = body

  if (!name?.trim()) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }
  if (!subject?.trim()) {
    return NextResponse.json({ error: 'Subject is required.' }, { status: 400 })
  }
  if (!message?.trim()) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
  }

  const gmailUser = process.env.GMAIL_USER
  const gmailPass = process.env.GMAIL_APP_PASSWORD
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'contact@mluetenders.com'

  if (!gmailUser || !gmailPass) {
    console.error('[Contact] GMAIL_USER or GMAIL_APP_PASSWORD not set')
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    })

    const info = await transporter.sendMail({
      from: `"Mlue Tenders Contact" <${gmailUser}>`,
      to: toEmail,
      replyTo: `"${name.trim()}" <${email}>`,
      subject: `[Contact] ${subject.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email}`,
        `Company: ${company?.trim() || 'N/A'}`,
        '',
        message.trim(),
      ].join('\n'),
      html: `
        <table style="font-family:sans-serif;font-size:14px;color:#333;max-width:600px;border-collapse:collapse">
          <tr><td style="padding:4px 8px 4px 0"><strong>Name:</strong></td><td>${name.trim()}</td></tr>
          <tr><td style="padding:4px 8px 4px 0"><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:4px 8px 4px 0"><strong>Company:</strong></td><td>${company?.trim() || 'N/A'}</td></tr>
          <tr><td colspan="2" style="padding:12px 0"><hr style="border:none;border-top:1px solid #eee"/></td></tr>
          <tr><td colspan="2"><pre style="white-space:pre-wrap;font-family:inherit;margin:0">${message.trim()}</pre></td></tr>
        </table>
      `,
    })

    if (info.rejected && info.rejected.length > 0) {
      console.error('[Contact] Recipient rejected:', info.rejected)
      return NextResponse.json(
        { error: 'Message could not be delivered. Please try again or email us directly.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact] sendMail error:', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again or contact us directly.' },
      { status: 500 },
    )
  }
}
