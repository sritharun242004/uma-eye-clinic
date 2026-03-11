'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Activity, ShieldCheck, AlertTriangle, ScanEye, Syringe, Camera, Heart, Calendar, CheckCircle, Phone, ChevronDown } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function DiabeticRetinopathyContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'How often should diabetic patients get their eyes checked?',
      a: 'Every individual with diabetes must have a comprehensive eye checkup at least once a year. If diabetic retinopathy has already been detected, your ophthalmologist may recommend more frequent visits — every 3 to 6 months — depending on the severity of the condition.'
    },
    {
      q: 'Can diabetic retinopathy be reversed?',
      a: 'Early-stage diabetic retinopathy can often be managed and its progression slowed or halted through strict blood sugar control, blood pressure management, and timely treatment. However, damage already caused to the retina cannot be fully reversed, which is why early detection through regular screening is critical.'
    },
    {
      q: 'What are the warning signs of diabetic retinopathy?',
      a: 'In the early stages, diabetic retinopathy may have no symptoms at all. As it progresses, you may notice blurred or fluctuating vision, dark spots or floaters, difficulty seeing at night, and gradual vision loss. Uncontrolled sugar can also lead to allergies, eyelid boils, and premature cataracts.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.diabeticBanner} alt="Diabetic Retinopathy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT DIABETIC RETINOPATHY</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What is Diabetic Retinopathy?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                Diabetic retinopathy is a diabetes complication that affects the blood vessels of the retina. High blood sugar levels can damage retinal blood vessels, causing them to leak or become blocked, leading to vision loss if untreated. Regular eye screening is essential for all diabetic patients.
              </p>
            </div>
            <img src={IMAGES.diabeticRight} alt="Diabetic retinopathy diagnosis" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Overview */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Understanding Diabetic Retinopathy</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Diabetes impacts approximately 40% of the population and can affect all structures of the eye. The retina, which functions like camera film at the back of your eye, is especially vulnerable to damage from high blood sugar levels.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,111,165,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Blood Sugar Impact</h3>
              <p className="step-desc">Uncontrolled blood sugar damages the tiny blood vessels in the retina, causing them to leak fluid or bleed, progressively impairing your vision.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,111,165,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Retina as Camera Film</h3>
              <p className="step-desc">The retina captures light and converts it into signals for the brain. When damaged by diabetes, this delicate tissue can no longer produce clear images.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,111,165,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Annual Screening Essential</h3>
              <p className="step-desc">Every individual with diabetes must have an eye checkup at least once a year. Early detection is the single most effective way to prevent vision loss.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Risk Factors */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Risk Factors</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Several factors increase the likelihood and severity of diabetic retinopathy. Managing these risks is crucial for preserving your vision.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Key Risk Factors</h3>
              {[
                'Poorly controlled blood sugar levels',
                'Kidney disorders (diabetic nephropathy)',
                'Hypertension (high blood pressure)',
                'Anaemia',
                'High cholesterol levels',
                'Long duration of diabetes',
                'Pregnancy in diabetic women'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <AlertTriangle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: 'rgba(74,111,165,0.08)',
              border: '1px solid rgba(74,111,165,0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Heart size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Beyond the Retina</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Uncontrolled sugar affects more than just the retina. It can lead to allergies, recurrent eyelid boils, premature cataracts, and other complications affecting all structures of the eye.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                A comprehensive diabetic eye screening evaluates not just the retina, but the entire eye to catch all diabetes-related changes early.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Schedule Diabetic Eye Screening
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Diagnostics & Treatment */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Diagnostics & Treatment</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Uma Eye Clinic employs advanced diagnostic tools and world-class treatment modalities to manage diabetic retinopathy effectively.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'Advanced Imaging', desc: 'OCT, Angiovue (dye-free retinal angiography), FFA, and fundus photography provide a comprehensive map of retinal health.' },
              { step: 2, icon: <Eye size={32} color="var(--primary)" />, title: 'Retinal Laser Therapy', desc: 'Targeted laser treatment seals leaking blood vessels and prevents the growth of abnormal new vessels to stabilise vision.' },
              { step: 3, icon: <Syringe size={32} color="var(--primary)" />, title: 'Intraocular Injections', desc: 'Anti-VEGF agents (Ranibizumab, Aflibercept) and Ozurdex implants reduce swelling and halt disease progression effectively.' },
              { step: 4, icon: <ShieldCheck size={32} color="var(--primary)" />, title: 'Advanced Surgery', desc: 'For severe cases, the Alcon Constellation stitchless surgical system with Zeiss Lumera 700 microscope delivers precision vitreoretinal surgery.' }
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

      {/* Technology */}
      <section style={{ padding: '80px 48px', background: 'var(--surface-dark)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered" style={{ color: 'var(--text-light)' }}>Our Technology</h2>
            <p className="section-subtitle centered" style={{ color: 'rgba(232,237,245,0.6)', textAlign: 'center' }}>
              State-of-the-art diagnostic and surgical equipment for comprehensive diabetic eye care.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ScanEye size={28} color="var(--primary)" />
              </div>
              <h3>OCT & Angiovue</h3>
              <p>
                Optical Coherence Tomography provides cross-sectional images of the retina at microscopic resolution. Angiovue offers dye-free retinal angiography, mapping blood vessel health without injecting contrast dye — safer and more comfortable for patients.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={28} color="var(--primary)" />
              </div>
              <h3>Alcon Constellation & Zeiss Lumera 700</h3>
              <p>
                The Alcon Constellation stitchless surgical system combined with the Zeiss Lumera 700 microscope enables our surgeons to perform the most advanced vitreoretinal procedures with exceptional precision, minimal trauma, and faster patient recovery.
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
              Trusted expertise in diabetic eye care with advanced diagnostics and personalised treatment plans.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '40+', label: 'Years of Eye Care' },
              { value: 'Dye-Free', label: 'Retinal Angiography' },
              { value: 'Stitchless', label: 'Surgical Systems' },
              { value: 'Annual', label: 'Screening Programmes' }
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
            Uma Eye Clinic combines decades of retinal expertise with the latest diagnostic and surgical technology to provide comprehensive diabetic eye care. From early screening with OCT and Angiovue to advanced vitreoretinal surgery with the Alcon Constellation system, we offer the complete spectrum of care under one roof. Our specialists work closely with your diabetologist to ensure coordinated management of your overall health and vision.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Common questions about diabetic retinopathy and its management.
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
          Protect Your Vision from Diabetes
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(232,237,245,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Early detection is the key to preventing vision loss. Schedule your comprehensive diabetic eye screening at Uma Eye Clinic today.
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
