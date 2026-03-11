import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const doctor = await prisma.doctor.findUnique({ where: { id } })
    if (!doctor) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 })
    }
    return NextResponse.json(doctor)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctor' }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()

    const doctor = await prisma.doctor.update({
      where: { id },
      data: body,
    })

    return NextResponse.json(doctor)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update doctor' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    await prisma.doctor.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete doctor' }, { status: 500 })
  }
}
