import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(doctors)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, department, education, designation, image, bio, active, order } = body

    if (!name || !designation) {
      return NextResponse.json({ error: 'Name and designation are required' }, { status: 400 })
    }

    const doctor = await prisma.doctor.create({
      data: {
        name,
        department: department || '',
        education: education || '',
        designation,
        image: image || '',
        bio: bio || '',
        active: active !== false,
        order: order || 0,
      },
    })

    return NextResponse.json(doctor, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create doctor' }, { status: 500 })
  }
}
