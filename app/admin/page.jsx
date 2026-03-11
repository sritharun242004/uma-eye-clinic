'use client'

import { useState, useEffect } from 'react'
import { CalendarDays, MessageSquare, Users, FileText, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    appointments: 0,
    pendingAppointments: 0,
    enquiries: 0,
    unreadEnquiries: 0,
    doctors: 0,
    blogPosts: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/stats')
        if (res.ok) {
          const data = await res.json()
          setStats({
            appointments: data.appointments || 0,
            pendingAppointments: data.pendingAppointments || 0,
            enquiries: data.enquiries || 0,
            unreadEnquiries: data.unreadEnquiries || 0,
            doctors: data.doctors || 0,
            blogPosts: data.blogPosts || 0,
          })
        }
      } catch {
        // Stats will remain at defaults
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const cards = [
    {
      label: 'Total Appointments',
      value: stats.appointments,
      subtitle: `${stats.pendingAppointments} pending`,
      icon: CalendarDays,
      color: '#4A6FA5',
    },
    {
      label: 'Enquiries',
      value: stats.enquiries,
      subtitle: `${stats.unreadEnquiries} unread`,
      icon: MessageSquare,
      color: '#4A90A4',
    },
    {
      label: 'Active Doctors',
      value: stats.doctors,
      subtitle: 'on the team',
      icon: Users,
      color: '#10B981',
    },
    {
      label: 'Blog Posts',
      value: stats.blogPosts,
      subtitle: 'published',
      icon: FileText,
      color: '#7B68AE',
    },
  ]

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 32 }}>
        Dashboard
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}>
        {cards.map(({ label, value, subtitle, icon: Icon, color }) => (
          <div
            key={label}
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: `${color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={24} color={color} />
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>
                {loading ? '-' : value}
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{label}</div>
              {!loading && (
                <div style={{ fontSize: 12, color: color, marginTop: 2 }}>
                  {subtitle}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 48,
        background: '#fff',
        borderRadius: 12,
        padding: 32,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        textAlign: 'center',
        color: 'var(--text-muted)',
      }}>
        <TrendingUp size={32} style={{ marginBottom: 12 }} />
        <p style={{ fontSize: 16, fontWeight: 600 }}>Welcome to Uma Eye Clinic Admin</p>
        <p style={{ fontSize: 14, marginTop: 8 }}>
          Use the sidebar to manage appointments, enquiries, and blog posts.
        </p>
      </div>
    </div>
  )
}
