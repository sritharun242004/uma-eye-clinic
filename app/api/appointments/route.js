import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

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

    const appointment = await prisma.appointment.create({
      data: {
        name,
        phone,
        email,
        date: date || '',
        time: time || '',
        doctor: doctor || '',
        treatment: treatment || '',
        message,
      },
    })

    return NextResponse.json({ success: true, id: appointment.id })
  } catch (error) {
    console.error('Appointment booking error:', error)
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    )
  }
}
