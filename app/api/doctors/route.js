import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Public endpoint - returns only active doctors
export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(doctors)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 })
  }
}
