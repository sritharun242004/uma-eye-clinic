'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Zap, ShieldCheck, Sparkles, ScanEye, FileCheck, Focus, Sun, Clock as ClockIcon, Calendar, CheckCircle, Phone, ChevronDown, Crosshair, Activity, Scan } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function LasikContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'What is LASIK and how does it work?',
      a: 'LASIK (Laser-Assisted In Situ Keratomileusis) is a quick, safe, and accurate procedure to correct refractive errors such as myopia (nearsightedness), hyperopia (farsightedness), and astigmatism. A thin corneal flap is created using a microkeratome or femtosecond laser, and then an excimer laser reshapes the underlying corneal tissue to correct the focusing error. The flap is then repositioned, and healing begins immediately.'
    },
    {
      q: 'Am I a good candidate for LASIK?',
      a: 'Ideal candidates must be over 18 years of age, have had stable vision for at least one year, and have healthy eyes free from conditions such as keratoconus, severe dry eye, or uncontrolled glaucoma. A comprehensive pre-operative evaluation at Uma Eye Clinic will assess your corneal thickness, refractive error, pupil size, and overall eye health to determine your suitability. If LASIK is not suitable, our specialists will recommend the best alternative.'
    },
    {
      q: 'What is the difference between standard LASIK and Femto-LASIK?',
      a: 'Standard LASIK uses a mechanical microkeratome blade to create the corneal flap, while Femto-LASIK (Intralase) uses a femtosecond laser for completely bladeless flap creation with accuracy of +/-2 microns. Femto-LASIK offers greater precision, more predictable flap thickness, and reduced risk of flap-related complications. Uma Eye Clinic also offers Customized LASIK, which uses wavefront-guided aberrometry to correct higher-order aberrations for even sharper vision.'
    },
    {
      q: 'Is LASIK safe? Is it approved for professional use?',
      a: 'Yes, LASIK is one of the most extensively studied elective procedures in medicine. It has been approved by NASA for astronauts and by the US Navy for fighter pilots, underscoring its safety and reliability. With millions of procedures performed worldwide, LASIK has a well-established track record of excellent outcomes. At Uma Eye Clinic, we use the latest technology and strict safety protocols to ensure the best possible results.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.lasikBanner} alt="LASIK Surgery" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Description with Image */}
      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT LASIK</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What is LASIK?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                LASIK (Laser-Assisted In Situ Keratomileusis) is the world's most popular laser vision correction procedure. It reshapes the cornea using an excimer laser to correct myopia, hyperopia, and astigmatism, reducing or eliminating the need for glasses and contact lenses. NASA has approved LASIK for astronauts, a testament to its safety and reliability.
              </p>
            </div>
            <img src={IMAGES.lasikRight} alt="LASIK procedure" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* What Is It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">What Is LASIK?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              LASIK is a quick, safe, and accurate procedure to correct refractive errors including myopia, hyperopia, and astigmatism. By reshaping the cornea with an excimer laser, LASIK changes how light is focused onto the retina, delivering clear vision without the need for glasses or contact lenses.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(61,139,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Quick Procedure</h3>
              <p className="step-desc">The laser treatment itself takes only minutes per eye. Including preparation, the entire visit is typically completed within an hour, with patients going home the same day.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(61,139,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Proven Safe</h3>
              <p className="step-desc">Approved by NASA and the US Navy for their personnel, LASIK has an exceptional safety record with millions of successful procedures performed worldwide over decades.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(61,139,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Crosshair size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Precision Accuracy</h3>
              <p className="step-desc">Intralase/Femto-LASIK achieves accuracy of +/-2 microns. Customised LASIK goes further by correcting higher-order aberrations using wavefront aberrometry for sharper vision.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* LASIK Types */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Types of LASIK We Offer</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Uma Eye Clinic offers multiple LASIK modalities, each tailored to different patient needs and visual requirements.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { title: 'Standard LASIK', icon: <Eye size={28} color="var(--primary)" />, desc: 'A mechanical microkeratome creates a precise corneal flap, and the excimer laser reshapes the underlying tissue. A well-established, cost-effective option with excellent visual outcomes for most refractive errors.' },
              { title: 'Femto-LASIK (Intralase)', icon: <Focus size={28} color="var(--primary)" />, desc: 'A femtosecond laser replaces the blade for completely bladeless flap creation with accuracy of +/-2 microns. Provides more predictable flap dimensions and enhanced safety for superior results.' },
              { title: 'Customised LASIK', icon: <Scan size={28} color="var(--primary)" />, desc: 'Uses wavefront-guided technology with an aberrometer to map and correct not just standard refractive errors but also higher-order aberrations unique to each eye, delivering the sharpest possible vision.' }
            ].map(({ title, icon, desc }, i) => (
              <div className="step-card" key={i}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(61,139,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Who Needs It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Who Is Eligible for LASIK?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              A comprehensive evaluation determines your suitability for LASIK. Here are the key criteria our specialists assess.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Eligibility Criteria</h3>
              {[
                'Must be over 18 years of age',
                'Stable vision prescription for at least 1 year',
                'Healthy eyes with no active infections or diseases',
                'Adequate corneal thickness for safe laser treatment',
                'No contraindications such as keratoconus or severe dry eye',
                'Myopia, hyperopia, or astigmatism within treatable range',
                'Realistic expectations about outcomes'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: 'rgba(61,139,110,0.08)',
              border: '1px solid rgba(61,139,110,0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <FileCheck size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Pre-Operative Assessment</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Every patient undergoes a thorough evaluation including corneal topography, pachymetry, wavefront analysis, and pupil assessment. Our diagnostic suite precisely maps your cornea to plan the most effective treatment approach.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                If LASIK is not suitable for your eyes, our specialists will discuss alternative vision correction options including SMILE PRO, PRESBYOND, or ICL implantation tailored to your specific needs.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Schedule Your Assessment
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* The Procedure */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">The Procedure</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              LASIK is a streamlined, well-established procedure with rapid recovery and excellent visual outcomes.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'Comprehensive Evaluation', desc: 'Advanced diagnostic tests map your cornea and measure your exact refractive error. Your surgeon reviews all parameters to plan a personalised treatment.' },
              { step: 2, icon: <Focus size={32} color="var(--primary)" />, title: 'Flap Creation', desc: 'A thin corneal flap is created using a microkeratome or femtosecond laser. Numbing drops ensure complete comfort. The flap is gently lifted to expose the underlying corneal tissue.' },
              { step: 3, icon: <Crosshair size={32} color="var(--primary)" />, title: 'Laser Reshaping', desc: 'The excimer laser precisely reshapes the corneal tissue according to your prescription. In Customised LASIK, wavefront data guides the laser for higher-order correction.' },
              { step: 4, icon: <Sun size={32} color="var(--primary)" />, title: 'Rapid Recovery', desc: 'The flap is repositioned and begins healing immediately without stitches. Recovery is comfortable and rapid -- most patients resume activities after a day with dramatically improved vision.' }
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

      {/* Recovery */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Recovery Timeline</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              LASIK recovery is comfortable and rapid, with most patients returning to normal life within days.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="recovery-card">
              <div className="recovery-badge">
                <ClockIcon size={18} />
                Day 1
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Immediate Improvement</h3>
              <p className="recovery-desc">
                Most patients notice significantly clearer vision within hours of the procedure. Some tearing, light sensitivity, and mild discomfort are normal and resolve quickly. Rest is recommended for the remainder of the day.
              </p>
            </div>
            <div className="recovery-card">
              <div className="recovery-badge">
                <Calendar size={18} />
                Week 1
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Back to Activities</h3>
              <p className="recovery-desc">
                Most patients can resume work, driving, and normal daily activities after just one day. Follow-up visits confirm proper healing. Avoid swimming, eye makeup, and dusty environments during the first week.
              </p>
            </div>
            <div className="recovery-card">
              <div className="recovery-badge">
                <CheckCircle size={18} />
                Month 1-3
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Full Stabilisation</h3>
              <p className="recovery-desc">
                Vision fully stabilises over the first one to three months. Final follow-up confirms optimal outcomes. The vast majority of patients achieve 20/20 vision or better, enjoying lasting freedom from glasses and contacts.
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
              A pioneer in laser vision correction in Chennai and Southeast Asia with decades of expertise.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '1st', label: 'Multiple LASIK Firsts in Chennai' },
              { value: '20+', label: 'Years of LASIK Excellence' },
              { value: '40+', label: 'Years of Eye Care Legacy' },
              { value: 'NASA', label: 'Approved Technology' }
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
            Uma Eye Clinic has been a pioneer in laser vision correction, being the first in Chennai and Southeast Asia to introduce multiple LASIK technologies. Our refractive surgery suite features the latest femtosecond and excimer laser platforms, complemented by advanced wavefront diagnostic systems. With a proven track record spanning over two decades and thousands of successful LASIK procedures, our experienced surgeons combine cutting-edge technology with personalised patient care to deliver exceptional visual outcomes.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Everything you need to know about LASIK at Uma Eye Clinic.
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
          Ready for a Life Without Glasses?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(232,237,245,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Join millions worldwide who have experienced the freedom of LASIK. Book your consultation at Uma Eye Clinic and take the first step towards clear, unaided vision.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-light">
            <Calendar size={18} />
            Book Consultation
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
