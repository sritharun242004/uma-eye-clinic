'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function NewDoctorPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: '',
    department: '',
    education: '',
    designation: '',
    image: '',
    bio: '',
    order: 0,
    active: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      const res = await fetch('/api/admin/doctors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        router.push('/admin/doctors')
      }
    } catch {
      // Handle error
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
        <Link href="/admin/doctors" style={{ color: 'var(--text-muted)' }}>
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>Add New Doctor</h1>
      </div>

      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        borderRadius: 12,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Name *</label>
            <input name="name" value={form.name} onChange={handleChange} className="form-input" required />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Designation *</label>
            <input name="designation" value={form.designation} onChange={handleChange} className="form-input" required />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Department</label>
            <input name="department" value={form.department} onChange={handleChange} className="form-input" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Education</label>
            <input name="education" value={form.education} onChange={handleChange} className="form-input" />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} className="form-input" />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Bio</label>
          <textarea name="bio" value={form.bio} onChange={handleChange} className="form-textarea" rows={5} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Display Order</label>
            <input type="number" name="order" value={form.order} onChange={handleChange} className="form-input" />
          </div>
          <div style={{ display: 'flex', alignItems: 'end', paddingBottom: 8 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>Active</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="btn btn-primary"
          style={{ alignSelf: 'flex-start' }}
        >
          <Save size={16} /> {saving ? 'Saving...' : 'Save Doctor'}
        </button>
      </form>
    </div>
  )
}
