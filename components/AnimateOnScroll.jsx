'use client'

import { useEffect, useRef } from 'react'

export default function AnimateOnScroll({ children, className = '', stagger = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cls = stagger ? `stagger-children ${className}` : `animate-on-scroll ${className}`

  return <div ref={ref} className={cls}>{children}</div>
}
