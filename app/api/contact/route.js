import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

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

    const contact = await prisma.contactSubmission.create({
      data: { name, email, phone, subject, message },
    })

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
