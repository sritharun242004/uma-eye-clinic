import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const FALLBACK_DOCTORS = [
  { id: '1', name: 'Dr. N. V. Arulmozhi Varman', designation: 'M.B.B.S, D.O, M.S Ophthalmology, Medical Director' },
  { id: '2', name: 'Mrs. Uma Varman', designation: 'Admin Director' },
  { id: '3', name: 'Dr. Aadithreya Varman', designation: 'M.S., Director of Uma Eye Clinic' },
  { id: '4', name: 'Dr. Venkateshar Ravisankar', designation: 'Vitreo-Retinal Surgeon' },
  { id: '5', name: 'Dr. M. P. Veenashree', designation: 'Corneal Surgeon' },
  { id: '6', name: 'Dr. Uma Ramesh', designation: 'Squint & Pediatric' },
  { id: '7', name: 'Dr. Kasinathan N', designation: 'Retina' },
  { id: '8', name: 'Dr. Prithi Udhay', designation: 'Oculoplasty & Facial Aesthetics' },
]

// Public endpoint - returns only active doctors
export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(doctors)
  } catch (error) {
    console.error('Doctors fetch error:', error)
    return NextResponse.json(FALLBACK_DOCTORS, { status: 200 })
  }
}
