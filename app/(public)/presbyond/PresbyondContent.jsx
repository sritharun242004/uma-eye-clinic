'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Glasses, ShieldCheck, Sparkles, ScanEye, FileCheck, Focus, Sun, Clock as ClockIcon, Calendar, CheckCircle, Phone, ChevronDown, Layers, Zap } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function PresbyondContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'What is presbyopia?',
      a: 'Presbyopia is a natural age-related condition that typically begins in your 40s, where the eye gradually loses its ability to focus on nearby objects. It happens because the natural lens inside the eye becomes less flexible over time. Common signs include holding reading material at arm\'s length, difficulty reading small print, and needing brighter light for close-up tasks.'
    },
    {
      q: 'How does PRESBYOND Laser Blended Vision work?',
      a: 'PRESBYOND Laser Blended Vision from Carl Zeiss uses a combination of femtosecond and excimer lasers to reshape each cornea slightly differently. The dominant eye is optimised primarily for distance vision while the non-dominant eye is adjusted for near vision, with an overlapping "blend zone" created between the two focal points. This allows the brain to seamlessly merge the images for clear vision at all distances.'
    },
    {
      q: 'Is the procedure painful and what is recovery like?',
      a: 'The procedure is virtually painless. Numbing eye drops are applied before treatment, and most patients report only mild pressure sensation. The entire laser application takes just minutes. Recovery is quick -- most patients notice improved vision within 24 hours and can return to normal activities within a day or two. Minimal discomfort and reduced dry eye compared to traditional LASIK are key advantages of this bladeless approach.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.presbyondBanner} alt="Presbyond Treatment" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* About Presbyond */}
      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT PRESBYOND</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>How PRESBYOND Works</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                Presbyopia is a natural age-related condition where the eye gradually loses its ability to focus on nearby objects. PRESBYOND® Laser Blended Vision from ZEISS corrects this by precisely adjusting each eye to create a seamless blend of near and distance vision, freeing you from reading glasses.
              </p>
            </div>
            <img src={IMAGES.presbyondWork} alt="How Presbyond works" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* What Is It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">What Is PRESBYOND?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              PRESBYOND Laser Blended Vision is an advanced treatment from Carl Zeiss that addresses presbyopia -- the age-related loss of near vision that typically begins in your 40s. Unlike traditional monovision, PRESBYOND creates a unique "blend zone" that allows both eyes to work together seamlessly for clear vision at all distances.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(123,104,174,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Bladeless Procedure</h3>
              <p className="step-desc">The entire treatment uses femtosecond and excimer lasers with no blades, ensuring superior precision, safety, and comfort throughout the procedure.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(123,104,174,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Blend Zone Technology</h3>
              <p className="step-desc">A unique overlap zone is created between distance and near focal points, allowing the brain to seamlessly merge images for continuous, natural vision.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(123,104,174,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Quick Recovery</h3>
              <p className="step-desc">Minimal discomfort with reduced dry eye symptoms. Most patients experience improved vision within 24 hours and return to daily activities rapidly.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Who Needs It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Who Needs PRESBYOND?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              PRESBYOND is designed for adults experiencing presbyopia who want freedom from reading glasses and bifocals.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Ideal Candidates</h3>
              {[
                'Adults aged 40 and above experiencing near vision loss',
                'Those tired of reading glasses, bifocals, or progressive lenses',
                'People with active lifestyles who find glasses inconvenient',
                'Patients with stable overall eye health',
                'Those seeking a long-term solution to presbyopia',
                'Individuals who want clear vision at all distances'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: 'rgba(123,104,174,0.08)',
              border: '1px solid rgba(123,104,174,0.2)',
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
                A thorough assessment evaluates corneal thickness, refractive error, and identifies your dominant eye to create the optimal treatment plan. The blend zone parameters are customised specifically for each patient.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                All patients achieve normal or better visual clarity following PRESBYOND treatment. Our specialists will determine if this procedure is the right choice for your eyes and lifestyle.
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
              PRESBYOND Laser Blended Vision is a refined, multi-step process designed for precision and patient comfort.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'Detailed Assessment', desc: 'Comprehensive evaluation of corneal thickness, refractive error, and dominant eye identification to create your personalised treatment profile.' },
              { step: 2, icon: <Focus size={32} color="var(--primary)" />, title: 'Flap Creation', desc: 'A femtosecond laser creates a precise, thin corneal flap with bladeless technology, ensuring superior accuracy and safety compared to mechanical methods.' },
              { step: 3, icon: <Eye size={32} color="var(--primary)" />, title: 'Corneal Reshaping', desc: 'The excimer laser reshapes each cornea to its customised prescription, creating the unique blend zone for seamless distance-to-near vision transition.' },
              { step: 4, icon: <Sun size={32} color="var(--primary)" />, title: 'Immediate Results', desc: 'The flap naturally adheres back in place. Vision improvement begins within hours, and most patients notice dramatically reduced dependence on reading glasses.' }
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

      {/* Benefits */}
      <section style={{ padding: '80px 48px', background: 'var(--surface-dark)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered" style={{ color: 'var(--text-light)' }}>Key Benefits</h2>
            <p className="section-subtitle centered" style={{ color: 'rgba(243,235,226,0.6)', textAlign: 'center' }}>
              PRESBYOND offers significant advantages over traditional presbyopia treatments and reading glasses.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={28} color="var(--primary)" />
              </div>
              <h3>Completely Bladeless</h3>
              <p>
                Both the flap creation and corneal reshaping are performed using advanced lasers with no blades involved. This bladeless approach significantly enhances precision, reduces healing time, and minimises the risk of complications.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3>Reduced Dry Eye</h3>
              <p>
                PRESBYOND is associated with significantly lower incidence of post-operative dry eye compared to conventional LASIK treatments. The advanced laser parameters preserve more corneal tissue and nerve fibres, promoting faster and more comfortable recovery.
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
              Pioneering presbyopia correction in Chennai with world-class technology and experienced surgeons.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '1st', label: 'In Chennai for PRESBYOND' },
              { value: '75+', label: 'Patients Benefited' },
              { value: '100%', label: 'Visual Clarity Achieved' },
              { value: '40+', label: 'Years of Eye Care Legacy' }
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
            Uma Eye Clinic was the first centre in Chennai to introduce PRESBYOND Laser Blended Vision from Carl Zeiss, bringing this revolutionary presbyopia treatment to the region. Over 75 patients have already benefited from this procedure, with all patients achieving normal or better visual clarity. Our experienced refractive surgeons combine decades of expertise with the latest Carl Zeiss technology to deliver personalised, life-changing results for patients seeking freedom from reading glasses.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Everything you need to know about PRESBYOND at Uma Eye Clinic.
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
          Say Goodbye to Reading Glasses
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(243,235,226,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Experience the freedom of clear vision at every distance with PRESBYOND Laser Blended Vision. Book your consultation at Uma Eye Clinic today.
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
