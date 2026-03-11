'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Disc, ShieldCheck, AlertTriangle, Droplets, RefreshCw, Sun, Glasses, Calendar, CheckCircle, Phone, ChevronDown, ScanEye } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function ContactLensesContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'How often should contact lenses be replaced?',
      a: 'Replacement frequency depends on the lens type. Daily disposables are discarded after a single use. Weekly and monthly disposable lenses are replaced on their designated schedule. It is critical to follow the recommended replacement schedule, as all soft lenses become contaminated within 24 hours of wear. Overwearing lenses beyond their intended lifespan significantly increases the risk of infection and complications.'
    },
    {
      q: 'What are the signs of a contact lens-related infection?',
      a: 'Warning signs include persistent red eyes, recurrent infections, papillae (bumps on the inner eyelid), reduced vision, and increased sensitivity to light. If you experience any of these symptoms, remove your lenses immediately and consult your eye care professional. Early treatment prevents serious complications including corneal ulcers.'
    },
    {
      q: 'Are rigid gas permeable (RGP) lenses better than soft lenses?',
      a: 'Each type has its advantages. RGP lenses offer superior optical clarity, are more durable, and allow maximum oxygen flow to the cornea. They are ideal for high astigmatism and post-surgical correction. Soft lenses are more comfortable initially, ideal for sports and intermittent wear, and come in convenient disposable formats. Your ophthalmologist will recommend the best type based on your specific needs, lifestyle, and eye condition.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.contactLenseBanner} alt="Contact Lenses" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT CONTACT LENSES</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>Contact Lens Solutions</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                Contact lenses offer a convenient and effective alternative to eyeglasses. At Uma Eye Clinic, our specialists provide comprehensive contact lens fitting, evaluation, and follow-up care to ensure optimal comfort, vision, and eye health.
              </p>
            </div>
            <img src={IMAGES.contactLenseRight} alt="Contact lens fitting" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Overview */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Types of Contact Lenses</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Contact lenses are thin plastic discs that sit on the cornea to correct all types of defective vision. The right lens depends on your prescription, lifestyle, and eye health.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Rigid Gas Permeable (RGP)</h3>
              <p className="step-desc">Made from acrylate or fluorosilicone materials, RGP lenses allow maximum oxygen transmission to the cornea. They are highly durable and provide superior optical clarity for precise vision correction.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Droplets size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Soft Lenses</h3>
              <p className="step-desc">Made from water-absorbing plastics, soft lenses are pliable and comfortable from the first wear. Ideal for sports and active lifestyles, with silicone variants available for extended overnight wear.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RefreshCw size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Disposable Lenses</h3>
              <p className="step-desc">Available in daily, weekly, monthly, and quarterly replacement schedules. The frequent replacement system minimises contamination risk and ensures consistently clear, comfortable vision.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* RGP vs Soft Detail */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Choosing the Right Lens</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Each lens type offers distinct advantages. Your ophthalmologist will recommend the best option based on your prescription, eye health, and daily activities.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>RGP Lenses — Best For</h3>
              {[
                'High astigmatism requiring precise correction',
                'Bifocal and multifocal prescriptions',
                'Post-surgical vision correction',
                'Therapeutic use (keratoconus, corneal irregularities)',
                'Cosmetic purposes (prosthetic lenses)',
                'Maximum oxygen permeability for corneal health',
                'Superior optical clarity and durability'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: 'rgba(212,145,110,0.08)',
              border: '1px solid rgba(212,145,110,0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Droplets size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Soft Lenses — Varieties</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Soft lenses come in a wide range of options: toric lenses for astigmatism, bifocal lenses for presbyopia, and cosmetic lenses for colour change. Silicone hydrogel variants allow up to one month of continuous overnight wear.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                The frequent replacement system offers daily, weekly, monthly, and quarterly options. Daily disposables are the healthiest choice — worn once and discarded, eliminating the need for cleaning solutions and reducing infection risk.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Get a Lens Fitting
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Care & Safety */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Lens Care & Safety</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Proper lens care is essential for safe, comfortable wear. All soft lenses become contaminated within 24 hours — following a strict hygiene routine protects your eyes.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <Droplets size={32} color="var(--primary)" />, title: 'Multipurpose Solutions', desc: 'Always clean and store lenses in recommended multipurpose solutions. Never use tap water or saliva. Replace the solution in your case every time you store your lenses.' },
              { step: 2, icon: <RefreshCw size={32} color="var(--primary)" />, title: 'Replace on Schedule', desc: 'Follow your replacement schedule strictly — daily, weekly, monthly, or quarterly. All soft lenses become contaminated within 24 hours, so overwearing increases infection risk significantly.' },
              { step: 3, icon: <AlertTriangle size={32} color="var(--primary)" />, title: 'Recognise Infections', desc: 'Watch for red eyes, recurrent infections, papillae on inner eyelids, reduced vision, and light sensitivity. Remove lenses immediately and seek professional care if symptoms occur.' },
              { step: 4, icon: <Eye size={32} color="var(--primary)" />, title: 'Regular Check-ups', desc: 'Annual eye examinations ensure your lenses fit correctly, your prescription is current, and your cornea remains healthy. Early detection of problems prevents serious complications.' }
            ].map(({ step, icon, title, desc }) => (
              <div className="step-card" key={step}>
                <div className="step-number">{step}</div>
                <div className="step-icon">{icon}</div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Technology / Fitting */}
      <section style={{ padding: '80px 48px', background: 'var(--surface-dark)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered" style={{ color: 'var(--text-light)' }}>Professional Lens Fitting</h2>
            <p className="section-subtitle centered" style={{ color: 'rgba(243,235,226,0.6)', textAlign: 'center' }}>
              A precise lens fitting is the foundation of safe, comfortable contact lens wear.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ScanEye size={28} color="var(--primary)" />
              </div>
              <h3>Comprehensive Eye Assessment</h3>
              <p>
                Before prescribing contact lenses, our specialists perform a thorough eye examination including corneal topography, tear film evaluation, and a detailed refraction test. This ensures the lenses fit your eyes precisely and correct your vision optimally while maintaining corneal health.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Glasses size={28} color="var(--primary)" />
              </div>
              <h3>Trial & Training</h3>
              <p>
                Every new contact lens wearer receives a hands-on training session on lens insertion, removal, and care. We provide trial lenses so you can experience comfort and vision quality before committing. Follow-up visits ensure the fit remains optimal and your eyes stay healthy.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Why Uma */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Why Uma Eye Clinic?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Expert contact lens fitting, a comprehensive range of lens types, and ongoing support for safe, comfortable wear.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: 'All Types', label: 'RGP, Soft & Specialty' },
              { value: 'Custom Fit', label: 'Precision Fitting' },
              { value: '40+', label: 'Years of Experience' },
              { value: 'Full Range', label: 'Daily to Quarterly' }
            ].map(({ value, label }, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            Uma Eye Clinic offers the complete spectrum of contact lens services — from initial assessment and precise fitting to ongoing care and complication management. Whether you need rigid gas permeable lenses for complex prescriptions, daily disposables for convenience, or specialty lenses for conditions like keratoconus, our experienced team will find the perfect lens for your eyes. We emphasise proper education on lens care because healthy wear habits are the foundation of safe, long-term contact lens use.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Common questions about contact lenses, fitting, and care.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="faq-list" style={{ maxWidth: 800, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div
                className={`faq-item${activeIndex === i ? ' active' : ''}`}
                key={i}
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} />
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-content">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Final CTA */}
      <section className="cta-gradient">
        <h2 style={{ fontSize: 42, fontWeight: 700, color: 'var(--text-light)', letterSpacing: -0.5 }}>
          Find Your Perfect Lenses
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(243,235,226,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Whether you are a first-time wearer or looking to upgrade, our specialists will fit you with the ideal contact lenses for your eyes and lifestyle.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-light">
            <Calendar size={18} />
            Book Lens Fitting
          </Link>
          <a href="tel:+914428272500" className="btn btn-cta-ghost">
            <Phone size={18} />
            +91 44 2827 2500
          </a>
        </div>
      </section>
    </>
  )
}
