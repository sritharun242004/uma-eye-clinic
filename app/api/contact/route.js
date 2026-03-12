import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { sendContactNotification } from '@/lib/email'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const payload = { name, email, phone, subject, message }

    try {
      const contact = await prisma.contactSubmission.create({ data: payload })

      // Send notification email (non-blocking)
      sendContactNotification(contact).catch(console.error)

      return NextResponse.json({ success: true, id: contact.id, stored: true })
    } catch (dbError) {
      console.error('Contact DB error:', dbError)

      if (!process.env.SMTP_HOST) {
        return NextResponse.json(
          { error: 'Service temporarily unavailable' },
          { status: 503 }
        )
      }

      const pseudoContact = { id: `temp_${Date.now()}`, ...payload }
      sendContactNotification(pseudoContact).catch(console.error)
      return NextResponse.json(
        { success: true, id: pseudoContact.id, stored: false },
        { status: 202 }
      )
    }
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
