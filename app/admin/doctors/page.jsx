'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, Plus, Edit, Trash2, Circle } from 'lucide-react'

export default function AdminDoctorsPage() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDoctors()
  }, [])

  async function fetchDoctors() {
    try {
      const res = await fetch('/api/admin/doctors')
      if (res.ok) {
        const data = await res.json()
        setDoctors(data)
      }
    } catch {
      // Handle error
    } finally {
      setLoading(false)
    }
  }

  async function toggleActive(id, currentActive) {
    try {
      const res = await fetch(`/api/admin/doctors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !currentActive }),
      })
      if (res.ok) {
        setDoctors(prev => prev.map(d => d.id === id ? { ...d, active: !currentActive } : d))
      }
    } catch {
      // Handle error
    }
  }

  async function deleteDoctor(id) {
    if (!confirm('Are you sure you want to delete this doctor?')) return
    try {
      const res = await fetch(`/api/admin/doctors/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setDoctors(prev => prev.filter(d => d.id !== id))
      }
    } catch {
      // Handle error
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>Doctors</h1>
        <Link
          href="/admin/doctors/new"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 20px',
            borderRadius: 8,
            background: 'var(--primary)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <Plus size={16} /> ADD DOCTOR
        </Link>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading doctors...</p>
      ) : doctors.length === 0 ? (
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: 48,
          textAlign: 'center',
          color: 'var(--text-muted)',
        }}>
          <Users size={32} style={{ marginBottom: 12 }} />
          <p>No doctors added yet.</p>
        </div>
      ) : (
        <div style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SNO</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Doctor Name</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Department</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Designation</th>
                <th style={{ padding: '14px 20px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active</th>
                <th style={{ padding: '14px 20px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '14px 20px', fontSize: 14, color: 'var(--text-secondary)' }}>{index + 1}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{doctor.name}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, color: 'var(--text-secondary)' }}>{doctor.department || '—'}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, color: 'var(--text-secondary)' }}>{doctor.education || '—'}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, color: 'var(--text-secondary)' }}>{doctor.designation || '—'}</td>
                  <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                    <button
                      onClick={() => toggleActive(doctor.id, doctor.active)}
                      title={doctor.active ? 'Active – click to deactivate' : 'Inactive – click to activate'}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                    >
                      <Circle
                        size={14}
                        fill={doctor.active ? '#10B981' : '#EF4444'}
                        color={doctor.active ? '#10B981' : '#EF4444'}
                      />
                    </button>
                  </td>
                  <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                      <Link
                        href={`/admin/doctors/${doctor.id}/edit`}
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #ddd', display: 'flex', alignItems: 'center' }}
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => deleteDoctor(doctor.id)}
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #EF4444', color: '#EF4444', background: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
