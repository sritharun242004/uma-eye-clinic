'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'

export default function AdminBlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const res = await fetch('/api/admin/blog')
      if (res.ok) {
        const data = await res.json()
        setPosts(data)
      }
    } catch {
      // Handle error
    } finally {
      setLoading(false)
    }
  }

  async function togglePublish(id, published) {
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !published }),
      })
      if (res.ok) {
        setPosts(prev => prev.map(p => p.id === id ? { ...p, published: !published } : p))
      }
    } catch {
      // Handle error
    }
  }

  async function deletePost(id) {
    if (!confirm('Are you sure you want to delete this post?')) return
    try {
      const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setPosts(prev => prev.filter(p => p.id !== id))
      }
    } catch {
      // Handle error
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>Blog Posts</h1>
        <Link
          href="/admin/blog/new"
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
          <Plus size={16} /> New Post
        </Link>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading posts...</p>
      ) : posts.length === 0 ? (
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: 48,
          textAlign: 'center',
          color: 'var(--text-muted)',
        }}>
          <FileText size={32} style={{ marginBottom: 12 }} />
          <p>No blog posts yet.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: 20,
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{post.title}</h3>
                <div style={{ display: 'flex', gap: 12, marginTop: 6, fontSize: 13, color: 'var(--text-muted)' }}>
                  <span>{post.author}</span>
                  <span>{post.category}</span>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: post.published ? '#D1FAE5' : '#FEE2E2',
                    color: post.published ? '#065F46' : '#991B1B',
                    fontSize: 11,
                    fontWeight: 600,
                  }}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => togglePublish(post.id, post.published)}
                  title={post.published ? 'Unpublish' : 'Publish'}
                  style={{ padding: 8, borderRadius: 6, border: '1px solid #ddd', background: 'none', cursor: 'pointer' }}
                >
                  {post.published ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <Link
                  href={`/admin/blog/${post.id}/edit`}
                  style={{ padding: 8, borderRadius: 6, border: '1px solid #ddd', display: 'flex', alignItems: 'center' }}
                >
                  <Edit size={16} />
                </Link>
                <button
                  onClick={() => deletePost(post.id)}
                  style={{ padding: 8, borderRadius: 6, border: '1px solid #EF4444', color: '#EF4444', background: 'none', cursor: 'pointer' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
