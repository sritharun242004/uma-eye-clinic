import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

function formatBold(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

function renderContent(text) {
  if (text.startsWith('## ')) {
    return <h2 className="blog-post-h2">{text.slice(3)}</h2>
  }

  // Handle markdown-style formatting within paragraphs
  const hasListItems = text.includes('\n- ') || text.includes('\n\n- ')

  if (hasListItems) {
    const lines = text.split('\n').filter(l => l.trim())
    const intro = []
    const items = []
    let inList = false

    for (const line of lines) {
      if (line.trim().startsWith('- ')) {
        inList = true
        items.push(line.trim().slice(2))
      } else if (!inList) {
        intro.push(line)
      }
    }

    return (
      <>
        {intro.length > 0 && <p className="blog-post-p" dangerouslySetInnerHTML={{ __html: formatBold(intro.join(' ')) }} />}
        <ul className="blog-post-list">
          {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatBold(item) }} />
          ))}
        </ul>
      </>
    )
  }

  if (text.includes('\n\n')) {
    const numbered = text.split('\n').filter(l => l.trim())
    const isNumbered = numbered.some(l => /^\d+\./.test(l.trim()))
    if (isNumbered) {
      const intro = []
      const items = []
      let inList = false
      for (const line of numbered) {
        if (/^\d+\./.test(line.trim())) {
          inList = true
          items.push(line.trim().replace(/^\d+\.\s*/, ''))
        } else if (!inList) {
          intro.push(line)
        }
      }
      return (
        <>
          {intro.length > 0 && <p className="blog-post-p" dangerouslySetInnerHTML={{ __html: formatBold(intro.join(' ')) }} />}
          <ol className="blog-post-list">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatBold(item) }} />
            ))}
          </ol>
        </>
      )
    }
  }

  return <p className="blog-post-p" dangerouslySetInnerHTML={{ __html: formatBold(text) }} />
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found | Uma Eye Clinic',
    }
  }

  return {
    title: `${post.title} | Uma Eye Clinic Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="blog-post-hero">
        <div className="blog-post-hero-inner">
          <Link href="/blog" className="blog-post-back">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <span className={`blog-card-full-tag ${post.tagClass}`}>{post.tag}</span>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span><User size={14} /> {post.author}</span>
            <span><Calendar size={14} /> {post.date}</span>
            <span><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="blog-post-image-wrapper">
        <img
          src={post.image}
          alt={post.title}
          className="blog-post-image"
        />
      </div>

      {/* Content */}
      <article className="blog-post-content">
        {post.content.map((block, i) => (
          <div key={i}>{renderContent(block)}</div>
        ))}
      </article>

      {/* Back to Blog */}
      <div className="blog-post-footer">
        <Link href="/blog" className="btn btn-outline">
          <ArrowLeft size={16} />
          Back to All Articles
        </Link>
      </div>
    </>
  )
}
