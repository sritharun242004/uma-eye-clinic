'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, AlertTriangle, ShieldCheck, Sparkles, ScanEye, FileCheck, Activity, Sun, Clock as ClockIcon, Calendar, CheckCircle, Phone, ChevronDown, Search, Gauge, Droplets, Zap } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function GlaucomaContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'What is glaucoma and why is it called the "silent thief of vision"?',
      a: 'Glaucoma is a group of eye conditions that damage the optic nerve, which is essential for vision. It is called the "silent thief of vision" because it typically develops gradually with no pain or noticeable symptoms in its early stages. By the time vision loss becomes apparent, significant and irreversible damage may have already occurred. This is why regular eye examinations are critical for early detection.'
    },
    {
      q: 'Who is at risk for glaucoma?',
      a: 'People at higher risk include those over 40 years of age, individuals with a family history of glaucoma, people with myopia (nearsightedness) or hyperopia (farsightedness), diabetics, those who have experienced eye trauma, and patients on prolonged corticosteroid use. If you belong to any of these risk groups, regular screening is essential for early detection and treatment.'
    },
    {
      q: 'Can glaucoma be cured?',
      a: 'While vision lost to glaucoma cannot be restored, early detection and proper treatment can effectively slow or halt further progression. Treatment options include medicated eye drops, laser procedures like SLT (Selective Laser Trabeculoplasty), and surgical interventions. At Uma Eye Clinic, we were the first in South India to introduce drop-free SLT, providing a safe, painless alternative to daily eye drops for many glaucoma patients.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.glaucomaBanner} alt="Glaucoma Treatment" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT GLAUCOMA</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>Understanding Glaucoma</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                Glaucoma is a group of eye conditions that damage the optic nerve, often due to abnormally high pressure in the eye. It is one of the leading causes of irreversible blindness worldwide. Early detection through regular eye exams is crucial, as vision loss from glaucoma cannot be recovered.
              </p>
            </div>
            <img src={IMAGES.glaucomaRight} alt="Glaucoma diagnosis" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* What Is It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Understanding Glaucoma</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Glaucoma occurs when fluid accumulation in the eye increases intraocular pressure, gradually damaging the optic nerve. Because the condition is asymptomatic in its early stages, it often goes undetected until significant, irreversible vision loss has occurred. Regular comprehensive eye exams are the only way to catch glaucoma early.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(139,107,74,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Silent Progression</h3>
              <p className="step-desc">Glaucoma typically has no early warning signs. Peripheral vision is lost gradually, and by the time central vision is affected, the damage is severe and permanent.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(139,107,74,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Gauge size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Pressure Damage</h3>
              <p className="step-desc">Elevated intraocular pressure from fluid buildup damages the delicate optic nerve fibres. Even normal pressure can cause glaucoma in susceptible individuals.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(139,107,74,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Irreversible Loss</h3>
              <p className="step-desc">Vision lost to glaucoma cannot be recovered. However, with early detection and proper treatment, further damage can be slowed or halted entirely.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Risk Factors */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Who Is at Risk?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Certain groups face a higher risk of developing glaucoma. If you belong to any of these categories, regular screening is essential.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>High-Risk Groups</h3>
              {[
                'Adults over 40 years of age',
                'People with myopia (nearsightedness) or hyperopia (farsightedness)',
                'Individuals with diabetes',
                'Those with a family history of glaucoma',
                'People who have experienced eye trauma or injury',
                'Patients on prolonged corticosteroid medication',
                'Those with elevated intraocular pressure'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: 'rgba(139,107,74,0.08)',
              border: '1px solid rgba(139,107,74,0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <FileCheck size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Screening Recommendation</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                If you are over 40 or belong to any high-risk group, we recommend a comprehensive glaucoma screening at least once a year. Early detection through regular screening is the single most effective way to prevent glaucoma-related vision loss.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Our screening includes intraocular pressure testing, visual field analysis, optic nerve evaluation, and advanced imaging -- providing a complete picture of your eye health.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Schedule Glaucoma Screening
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Diagnostic Technology */}
      <section style={{ padding: '80px 48px', background: 'var(--surface-dark)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered" style={{ color: 'var(--text-light)' }}>Advanced Diagnostics</h2>
            <p className="section-subtitle centered" style={{ color: 'rgba(243,235,226,0.6)', textAlign: 'center' }}>
              Uma Eye Clinic uses the latest diagnostic technology to detect glaucoma at its earliest stages and monitor progression precisely.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { title: 'IOP Testing & ORA', icon: <Gauge size={28} color="var(--primary)" />, desc: 'Intraocular Pressure (IOP) testing measures the fluid pressure inside your eye. The Ocular Response Analyzer (ORA) goes further by measuring corneal biomechanical properties for more accurate pressure readings, accounting for individual corneal characteristics.' },
              { title: 'HFA Visual Field Testing', icon: <ScanEye size={28} color="var(--primary)" />, desc: 'The Humphrey Field Analyzer (HFA) maps your complete field of vision to detect even subtle peripheral vision loss. This test is essential for identifying early glaucoma damage and tracking progression over time.' },
              { title: 'OCT Imaging', icon: <Search size={28} color="var(--primary)" />, desc: 'Optical Coherence Tomography (OCT) provides high-resolution cross-sectional images of the optic nerve and retinal nerve fibre layer, detecting structural damage before vision loss becomes noticeable to the patient.' },
              { title: 'OCT-Angiovue', icon: <Activity size={28} color="var(--primary)" />, desc: 'Advanced OCT-Angiovue technology visualises blood flow in the optic nerve and retina without injectable dyes. This non-invasive vascular imaging helps assess the microvascular health of the optic nerve head for earlier and more accurate glaucoma detection.' }
            ].map(({ title, icon, desc }, i) => (
              <div className="tech-card" key={i}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Treatment Options */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Treatment Options</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Our glaucoma specialists offer a comprehensive range of treatments tailored to the type and severity of your condition.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <Zap size={32} color="var(--primary)" />, title: 'SLT Laser', desc: 'Selective Laser Trabeculoplasty (SLT) is a safe, painless laser treatment that improves fluid drainage from the eye. No admission required -- performed as an outpatient. Uma Eye Clinic was the first in South India to introduce drop-free SLT.' },
              { step: 2, icon: <Sun size={32} color="var(--primary)" />, title: 'Cyclo G6 Laser', desc: 'An advanced laser treatment for more resistant forms of glaucoma. The Cyclo G6 uses micropulse technology to reduce fluid production in the eye, effectively lowering intraocular pressure with minimal tissue damage.' },
              { step: 3, icon: <Droplets size={32} color="var(--primary)" />, title: 'Medicated Eye Drops', desc: 'The most common first-line treatment, medicated eye drops reduce intraocular pressure by either decreasing fluid production or increasing drainage. Your specialist will prescribe the optimal combination for your condition.' },
              { step: 4, icon: <Eye size={32} color="var(--primary)" />, title: 'Trabeculoplasty Surgery', desc: 'For cases where laser and medication are insufficient, surgical trabeculoplasty creates a new drainage pathway for fluid to leave the eye. This microsurgical procedure provides long-term pressure control.' }
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

      {/* Why Uma */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Why Uma Eye Clinic?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Pioneering glaucoma care in South India with advanced diagnostics and innovative laser treatments.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '1st', label: 'Drop-free SLT in South India' },
              { value: '5+', label: 'Advanced Diagnostic Tools' },
              { value: '40+', label: 'Years of Eye Care Legacy' },
              { value: '100%', label: 'Commitment to Early Detection' }
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
            Uma Eye Clinic was the first in South India to introduce drop-free Selective Laser Trabeculoplasty (SLT), providing glaucoma patients with a safe, painless, and convenient alternative to daily eye drops. Our glaucoma department is equipped with the most advanced diagnostic technology including IOP testing, HFA visual field analysis, ORA, OCT, and OCT-Angiovue imaging. With over four decades of eye care excellence, our glaucoma specialists combine diagnostic precision with personalised treatment plans to protect your vision for life.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Everything you need to know about glaucoma and its treatment at Uma Eye Clinic.
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
          Protect Your Vision Before It's Too Late
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(243,235,226,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Glaucoma damage is irreversible, but early detection can save your sight. Schedule a comprehensive glaucoma screening at Uma Eye Clinic today.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-light">
            <Calendar size={18} />
            Book Screening
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
