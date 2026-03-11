import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
    })
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { slug, title, excerpt, content, image, tag, tagClass, category, author, readTime, published } = body

    if (!slug || !title || !content) {
      return NextResponse.json(
        { error: 'Slug, title, and content are required' },
        { status: 400 }
      )
    }

    const post = await prisma.blogPost.create({
      data: {
        slug,
        title,
        excerpt: excerpt || '',
        content: typeof content === 'string' ? content : JSON.stringify(content),
        image,
        tag: tag || '',
        tagClass: tagClass || '',
        category: category || '',
        author: author || '',
        readTime: readTime || '',
        published: published || false,
        publishedAt: published ? new Date() : null,
      },
    })

    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error('Blog create error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}
