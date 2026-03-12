'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Calendar, Menu, X, ChevronDown } from 'lucide-react'
import { IMAGES } from '@/lib/images'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/doctors', label: 'Doctors' },
  {
    label: 'About Us',
    children: [
      { href: '/about', label: 'About Clinic' },
      { href: '/treatments', label: 'Treatments Offered' },
      { href: '/optical', label: 'Optical Showroom' },
      { href: '/foundation', label: 'Vision Foundation' },
      { href: '/faqs', label: 'FAQs' },
    ],
  },
  {
    label: 'Services',
    children: [
      { href: '/treatments', label: 'SMILE Pro' },
      { href: '/cataract', label: 'Cataract' },
      { href: '/presbyond', label: 'Presbyond' },
      { href: '/lasik', label: 'LASIK' },
      { href: '/glaucoma', label: 'Glaucoma' },
      { href: '/corneal-grafting', label: 'Corneal Grafting' },
      { href: '/diabetic-retinopathy', label: 'Diabetic Retinopathy' },
      { href: '/retina-vitreous', label: 'Retina & Vitreous Disorders' },
      { href: '/dry-eyes', label: 'Dry Eyes' },
      { href: '/squint', label: 'Squint & Oculomotor Disorders' },
      { href: '/contact-lenses', label: 'Contact Lenses' },
    ],
  },
  {
    label: 'Eye Care',
    children: [
      { href: '/videos', label: 'Videos' },
      { href: '/international', label: 'Medical Tourism' },
    ],
  },
  { href: '/blog', label: 'Blogs' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathname = usePathname()
  const navRef = useRef(null)
  const hoverTimeoutRef = useRef(null)

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector('.navbar')
      if (nav) nav.style.boxShadow = window.scrollY > 50
        ? '0 4px 20px rgba(13,27,42,0.12)'
        : '0 2px 8px rgba(13,27,42,0.06)'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Check if any child route is the current path
  const isDropdownActive = useCallback((children) => {
    return children.some((child) => pathname === child.href)
  }, [pathname])

  // Desktop hover handlers
  const handleMouseEnter = (label) => {
    clearTimeout(hoverTimeoutRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  // Mobile click toggle for dropdowns
  const handleDropdownToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  // Close mobile menu and dropdowns on link click
  const handleLinkClick = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" onClick={handleLinkClick}>
          <Image src={IMAGES.logo} alt="" width={32} height={32} className="navbar-logo-img" />
          <span>Uma Eye Clinic</span>
        </Link>

        <ul className={`navbar-links${mobileOpen ? ' open' : ''}`}>
          {navItems.map((item) => {
            // Simple link (no dropdown)
            if (!item.children) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? 'active' : ''}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            }

            // Dropdown item
            const isOpen = openDropdown === item.label
            const hasActiveChild = isDropdownActive(item.children)

            return (
              <li
                key={item.label}
                className={`navbar-dropdown${isOpen ? ' open' : ''}`}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`navbar-dropdown-toggle${hasActiveChild ? ' active' : ''}`}
                  onClick={() => handleDropdownToggle(item.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`navbar-chevron${isOpen ? ' rotated' : ''}`}
                  />
                </button>
                <ul className={`navbar-dropdown-menu${isOpen ? ' visible' : ''}`}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={pathname === child.href ? 'active' : ''}
                        onClick={handleLinkClick}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>

        <Link href="/contact" className="navbar-cta" onClick={handleLinkClick}>
          <Calendar size={16} />
          Book Appointment
        </Link>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
