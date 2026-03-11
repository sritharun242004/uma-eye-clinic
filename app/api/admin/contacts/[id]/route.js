import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()

    const contact = await prisma.contactSubmission.update({
      where: { id },
      data: { read: body.read },
    })

    return NextResponse.json(contact)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 })
  }
}
