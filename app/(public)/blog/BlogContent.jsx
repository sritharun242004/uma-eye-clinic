'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'
import { blogPosts } from '@/lib/blog-data'

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'eye-health', label: 'Eye Health' },
  { id: 'treatment-guides', label: 'Treatment Guides' },
  { id: 'technology', label: 'Technology' }
]

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredPosts = activeFilter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.blogBanner} alt="Blog" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Category Filter */}
      <section className="blog-categories">
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-pill${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <AnimateOnScroll>
        <section className="blog-grid-section">
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card-full" data-category={post.category} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="blog-card-full-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background = 'linear-gradient(135deg, var(--primary-light), var(--primary), var(--primary-dark))'
                    }}
                  />
                  <span className={`blog-card-full-tag ${post.tagClass}`}>{post.tag}</span>
                </div>
                <div className="blog-card-full-body">
                  <h3 className="blog-card-full-title">{post.title}</h3>
                  <p className="blog-card-full-excerpt">{post.excerpt}</p>
                  <div className="blog-card-full-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={12} className="meta-icon" />
                      {post.author}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} className="meta-icon" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
