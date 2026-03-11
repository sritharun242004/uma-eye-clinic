'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Mail, Phone, Check, Search, Filter } from 'lucide-react'

export default function EnquiriesPage() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [readFilter, setReadFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [])

  async function fetchContacts() {
    try {
      const res = await fetch('/api/admin/contacts')
      if (res.ok) {
        const data = await res.json()
        setContacts(data)
      }
    } catch {
      // Handle error silently
    } finally {
      setLoading(false)
    }
  }

  async function toggleRead(id, currentRead) {
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: !currentRead }),
      })
      if (res.ok) {
        setContacts(prev => prev.map(c => c.id === id ? { ...c, read: !currentRead } : c))
      }
    } catch {
      // Handle error silently
    }
  }

  const filteredContacts = contacts.filter((contact) => {
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      !searchQuery ||
      (contact.name && contact.name.toLowerCase().includes(query)) ||
      (contact.email && contact.email.toLowerCase().includes(query)) ||
      (contact.subject && contact.subject.toLowerCase().includes(query))

    const matchesRead =
      readFilter === 'all' ||
      (readFilter === 'unread' && !contact.read) ||
      (readFilter === 'read' && contact.read)

    const matchesDate =
      !dateFilter ||
      (contact.createdAt && new Date(contact.createdAt).toISOString().split('T')[0] === dateFilter)

    return matchesSearch && matchesRead && matchesDate
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>
          Enquiries
        </h1>
        <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          Showing {filteredContacts.length} of {contacts.length} enquiries
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
            placeholder="Search by name, email, or subject..."
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
          value={readFilter}
          onChange={(e) => setReadFilter(e.target.value)}
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid #E5E7EB',
            fontSize: 14,
            outline: 'none',
            background: '#F9FAFB',
            cursor: 'pointer',
            minWidth: 120,
          }}
        >
          <option value="all">All</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
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
        <p style={{ color: 'var(--text-muted)' }}>Loading enquiries...</p>
      ) : filteredContacts.length === 0 ? (
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: 48,
          textAlign: 'center',
          color: 'var(--text-muted)',
        }}>
          <MessageSquare size={32} style={{ marginBottom: 12 }} />
          <p>{contacts.length === 0 ? 'No enquiries yet.' : 'No enquiries match your filters.'}</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                borderLeft: contact.read ? '4px solid transparent' : '4px solid var(--primary)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{contact.name}</h3>
                  <div style={{ display: 'flex', gap: 16, marginTop: 6, fontSize: 13, color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={12} /> {contact.email}</span>
                    {contact.phone && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Phone size={12} /> {contact.phone}</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => toggleRead(contact.id, contact.read)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 10px',
                    borderRadius: 6,
                    border: '1px solid',
                    borderColor: contact.read ? '#ddd' : '#10B981',
                    color: contact.read ? 'var(--text-muted)' : '#10B981',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Check size={12} /> {contact.read ? 'Read' : 'Mark Read'}
                </button>
              </div>

              {contact.subject && (
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)', marginTop: 12 }}>
                  {contact.subject}
                </p>
              )}

              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.6 }}>
                {contact.message}
              </p>

              {contact.createdAt && (
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
