import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const [appointments, enquiries, doctors, blogPosts] = await Promise.all([
      prisma.appointment.count(),
      prisma.contactSubmission.count(),
      prisma.doctor.count({ where: { active: true } }),
      prisma.blogPost.count(),
    ])

    const pendingAppointments = await prisma.appointment.count({ where: { status: 'pending' } })
    const unreadEnquiries = await prisma.contactSubmission.count({ where: { read: false } })

    return NextResponse.json({
      appointments,
      pendingAppointments,
      enquiries,
      unreadEnquiries,
      doctors,
      blogPosts,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
