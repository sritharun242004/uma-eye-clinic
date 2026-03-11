import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()

    const appointment = await prisma.appointment.update({
      where: { id },
      data: { status: body.status },
    })

    return NextResponse.json(appointment)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update appointment' }, { status: 500 })
  }
}
