import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { sendAppointmentNotification } from '@/lib/email'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, email, date, time, doctor, treatment, message } = body

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required' },
        { status: 400 }
      )
    }

    const payload = {
      name,
      phone,
      email,
      date: date || '',
      time: time || '',
      doctor: doctor || '',
      treatment: treatment || '',
      message,
    }

    try {
      const appointment = await prisma.appointment.create({ data: payload })

      // Send notification emails (non-blocking)
      sendAppointmentNotification(appointment).catch(console.error)

      return NextResponse.json({ success: true, id: appointment.id, stored: true })
    } catch (dbError) {
      // If DB is unavailable, still try to notify via email so users aren't blocked.
      console.error('Appointment DB error:', dbError)

      if (!process.env.SMTP_HOST) {
        return NextResponse.json(
          { error: 'Service temporarily unavailable' },
          { status: 503 }
        )
      }

      const pseudoAppointment = { id: `temp_${Date.now()}`, ...payload }
      sendAppointmentNotification(pseudoAppointment).catch(console.error)
      return NextResponse.json(
        { success: true, id: pseudoAppointment.id, stored: false },
        { status: 202 }
      )
    }
  } catch (error) {
    console.error('Appointment booking error:', error)
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    )
  }
}
