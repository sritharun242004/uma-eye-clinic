'use client'

import { useState, useEffect } from 'react'
import { CalendarDays, Clock, User, Phone, Mail, CheckCircle, XCircle, AlertCircle, Search, Filter } from 'lucide-react'

const statusColors = {
  pending: { bg: '#FEF3C7', text: '#92400E', label: 'Pending' },
  confirmed: { bg: '#D1FAE5', text: '#065F46', label: 'Confirmed' },
  completed: { bg: '#DBEAFE', text: '#1E40AF', label: 'Completed' },
  cancelled: { bg: '#FEE2E2', text: '#991B1B', label: 'Cancelled' },
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('')

  useEffect(() => {
    fetchAppointments()
  }, [])

  async function fetchAppointments() {
    try {
      const res = await fetch('/api/admin/appointments')
      if (res.ok) {
        const data = await res.json()
        setAppointments(data)
      }
    } catch {
      // Handle error silently
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id, status) {
    try {
      const res = await fetch(`/api/admin/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (res.ok) {
        setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a))
      }
    } catch {
      // Handle error silently
    }
  }

  const filteredAppointments = appointments.filter((apt) => {
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      !searchQuery ||
      (apt.name && apt.name.toLowerCase().includes(query)) ||
      (apt.email && apt.email.toLowerCase().includes(query)) ||
      (apt.phone && apt.phone.toLowerCase().includes(query))

    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter

    const matchesDate = !dateFilter || apt.date === dateFilter

    return matchesSearch && matchesStatus && matchesDate
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>
          Appointments
        </h1>
        <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          Showing {filteredAppointments.length} of {appointments.length} appointments
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{
        background: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Filter size={18} color="var(--text-muted)" />
        <div style={{ position: 'relative', flex: '1 1 250px' }}>
          <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px 10px 36px',
              borderRadius: 8,
              border: '1px solid #E5E7EB',
              fontSize: 14,
              outline: 'none',
              background: '#F9FAFB',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid #E5E7EB',
            fontSize: 14,
            outline: 'none',
            background: '#F9FAFB',
            cursor: 'pointer',
            minWidth: 140,
          }}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid #E5E7EB',
            fontSize: 14,
            outline: 'none',
            background: '#F9FAFB',
            cursor: 'pointer',
          }}
        />
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading appointments...</p>
      ) : filteredAppointments.length === 0 ? (
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: 48,
          textAlign: 'center',
          color: 'var(--text-muted)',
        }}>
          <CalendarDays size={32} style={{ marginBottom: 12 }} />
          <p>{appointments.length === 0 ? 'No appointments yet.' : 'No appointments match your filters.'}</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filteredAppointments.map((apt) => {
            const status = statusColors[apt.status] || statusColors.pending
            return (
              <div
                key={apt.id}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)' }}>{apt.name}</h3>
                    <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 14, color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Phone size={14} /> {apt.phone}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={14} /> {apt.email}</span>
                    </div>
                  </div>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    background: status.bg,
                    color: status.text,
                    whiteSpace: 'nowrap',
                  }}>
                    {status.label}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 16, fontSize: 14, color: 'var(--text-secondary)', marginBottom: 12, flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><CalendarDays size={14} /> {apt.date || 'No date'}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={14} /> {apt.time || 'No time'}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><User size={14} /> {apt.doctor || 'No doctor selected'}</span>
                  <span>Treatment: {apt.treatment || 'Not specified'}</span>
                </div>

                {apt.message && (
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 12, lineHeight: 1.6 }}>
                    {apt.message}
                  </p>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {apt.status !== 'confirmed' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'confirmed')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          padding: '6px 12px',
                          borderRadius: 6,
                          border: '1px solid #10B981',
                          color: '#10B981',
                          background: 'none',
                          cursor: 'pointer',
                          fontSize: 13,
                        }}
                      >
                        <CheckCircle size={14} /> Confirm
                      </button>
                    )}
                    {apt.status !== 'completed' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'completed')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          padding: '6px 12px',
                          borderRadius: 6,
                          border: '1px solid #3B82F6',
                          color: '#3B82F6',
                          background: 'none',
                          cursor: 'pointer',
                          fontSize: 13,
                        }}
                      >
                        <AlertCircle size={14} /> Complete
                      </button>
                    )}
                    {apt.status !== 'cancelled' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'cancelled')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          padding: '6px 12px',
                          borderRadius: 6,
                          border: '1px solid #EF4444',
                          color: '#EF4444',
                          background: 'none',
                          cursor: 'pointer',
                          fontSize: 13,
                        }}
                      >
                        <XCircle size={14} /> Cancel
                      </button>
                    )}
                  </div>
                  {apt.createdAt && (
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                      Created: {new Date(apt.createdAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
