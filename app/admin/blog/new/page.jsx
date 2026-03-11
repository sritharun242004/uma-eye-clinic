'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function NewBlogPost() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    tag: 'Treatment Guides',
    tagClass: 'tag-treatment-guides',
    category: 'treatment-guides',
    author: 'Dr. Aadithreya Varman',
    readTime: '5 min read',
    published: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const generateSlug = () => {
    const slug = form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    setForm(prev => ({ ...prev, slug }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Convert content text to array of paragraphs
      const contentArray = form.content.split('\n\n').filter(Boolean)

      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          content: JSON.stringify(contentArray),
        }),
      })

      if (res.ok) {
        router.push('/admin/blog')
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
        <Link href="/admin/blog" style={{ color: 'var(--text-muted)' }}>
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>New Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        borderRadius: 12,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}>
        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Title</label>
          <input name="title" value={form.title} onChange={handleChange} onBlur={generateSlug} className="form-input" required />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Slug</label>
          <input name="slug" value={form.slug} onChange={handleChange} className="form-input" required />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Excerpt</label>
          <textarea name="excerpt" value={form.excerpt} onChange={handleChange} className="form-textarea" rows={3} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
            Content (separate paragraphs with blank lines, use ## for headings)
          </label>
          <textarea name="content" value={form.content} onChange={handleChange} className="form-textarea" rows={15} required />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Category</label>
            <select name="category" value={form.category} onChange={handleChange} className="form-select">
              <option value="treatment-guides">Treatment Guides</option>
              <option value="eye-health">Eye Health</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Author</label>
            <input name="author" value={form.author} onChange={handleChange} className="form-input" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Read Time</label>
            <input name="readTime" value={form.readTime} onChange={handleChange} className="form-input" />
          </div>
        </div>

        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <input type="checkbox" name="published" checked={form.published} onChange={handleChange} />
            <span style={{ fontSize: 14, fontWeight: 600 }}>Publish immediately</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="btn btn-primary"
          style={{ alignSelf: 'flex-start' }}
        >
          <Save size={16} /> {saving ? 'Saving...' : 'Save Post'}
        </button>
      </form>
    </div>
  )
}
