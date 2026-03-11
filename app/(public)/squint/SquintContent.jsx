'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Users, ShieldCheck, AlertTriangle, Glasses, ScanEye, Baby, Scissors, Calendar, CheckCircle, Phone, ChevronDown } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function SquintContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'Will squint correct itself over time?',
      a: 'No, squint will never correct by itself. While it is normal for newborns to have slightly misaligned eyes, alignment should be established by 3 to 4 weeks of age. If misalignment persists beyond this period, it requires professional evaluation and treatment. Delaying treatment can lead to permanent vision problems including amblyopia (lazy eye).'
    },
    {
      q: 'At what age should squint be treated?',
      a: 'Squint should be evaluated and treatment initiated as early as possible. If left untreated by age 10, children may develop amblyopia (permanent reduction in vision), chronic eye strain, headaches, and abnormal head postures. Early intervention gives the best chance of achieving normal binocular vision and proper eye alignment.'
    },
    {
      q: 'Is squint surgery safe for children?',
      a: 'Yes, squint surgery is a well-established and safe procedure performed routinely in children. The surgery adjusts the muscles controlling eye movement to achieve proper alignment. It is performed under general anaesthesia in children and typically takes 30 to 60 minutes. Most children recover quickly and can return to normal activities within a few days.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.squintBanner} alt="Squint Treatment" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT SQUINT</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What is Squint?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                Squint (strabismus) is a condition where the eyes do not look in the same direction simultaneously. One eye may turn inward, outward, upward, or downward while the other eye looks straight ahead. Early treatment is important to prevent amblyopia (lazy eye) and to restore binocular vision.
              </p>
            </div>
            <img src={IMAGES.squintRight} alt="Squint correction" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Overview */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Understanding Squint (Strabismus)</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Squint is caused by a lack of coordination between the six muscles that control each eye's movement. When these muscles fail to work together, the eyes point in different directions, affecting vision, depth perception, and confidence.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Muscle Imbalance</h3>
              <p className="step-desc">Each eye is controlled by six muscles. When these muscles do not work in coordination, the eyes become misaligned — turning inward, outward, upward, or downward.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Baby size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Common in Children</h3>
              <p className="step-desc">While newborns' eyes are typically misaligned, they should be aligned by 3-4 weeks of age. Persistent misalignment beyond this point requires prompt evaluation and treatment.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Will Not Self-Correct</h3>
              <p className="step-desc">Squint will never correct by itself. Without timely treatment, children risk developing amblyopia (lazy eye), poor depth perception, and permanent visual impairment.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Consequences & Goals */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Why Early Treatment Matters</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              If left untreated by age 10, squint can cause lasting damage. Understanding the goals and urgency of treatment helps parents make informed decisions.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Consequences If Untreated</h3>
              {[
                'Amblyopia (lazy eye) — permanent reduction in vision',
                'Chronic eye strain and fatigue',
                'Persistent headaches',
                'Abnormal head posture to compensate for misalignment',
                'Loss of binocular (3D) vision and depth perception',
                'Social and psychological impact on self-confidence'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <AlertTriangle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
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
                <ShieldCheck size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Treatment Goals</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                The goals of squint treatment are threefold: preserve and restore vision in both eyes, straighten the eyes to achieve proper cosmetic alignment, and restore binocular vision for normal depth perception.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Treatment follows a structured approach — first correcting any refractive errors with glasses, then treating amblyopia if present, and finally performing surgery if needed to align the eyes.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Schedule a Squint Assessment
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Treatment Process */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Treatment Process</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Squint management is a step-by-step process tailored to each patient's specific type and severity of misalignment.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'Comprehensive Assessment', desc: 'Detailed evaluation of eye alignment, muscle function, visual acuity, and binocular vision to determine the type and degree of squint.' },
              { step: 2, icon: <Glasses size={32} color="var(--primary)" />, title: 'Correct Refractive Errors', desc: 'Prescribing the right glasses is the first step. In some cases, correcting the refractive error alone can significantly improve or even resolve the squint.' },
              { step: 3, icon: <Eye size={32} color="var(--primary)" />, title: 'Treat Amblyopia', desc: 'If a lazy eye has developed, patching therapy and vision exercises are used to strengthen the weaker eye before considering surgical correction.' },
              { step: 4, icon: <Scissors size={32} color="var(--primary)" />, title: 'Surgical Correction', desc: 'When glasses and therapy are insufficient, surgery on the eye muscles precisely adjusts their tension and position to achieve straight, well-aligned eyes.' }
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
            <h2 className="section-title centered" style={{ color: 'var(--text-light)' }}>Our Approach</h2>
            <p className="section-subtitle centered" style={{ color: 'rgba(243,235,226,0.6)', textAlign: 'center' }}>
              A multidisciplinary approach combining optical, therapeutic, and surgical interventions for the best outcomes.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Baby size={28} color="var(--primary)" />
              </div>
              <h3>Paediatric Squint Care</h3>
              <p>
                Our paediatric ophthalmologists specialise in evaluating and treating squint in children of all ages. We use child-friendly assessment techniques, advanced orthoptic evaluation tools, and age-appropriate treatment protocols. Early intervention during the critical visual development years is our top priority.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Scissors size={28} color="var(--primary)" />
              </div>
              <h3>Precision Strabismus Surgery</h3>
              <p>
                When surgery is required, our experienced surgeons perform precise adjustments to the eye muscles using advanced microsurgical techniques. Surgery is planned based on detailed measurements of the misalignment, ensuring optimal cosmetic and functional outcomes for both children and adults.
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
              Experienced paediatric ophthalmologists, comprehensive orthoptic services, and advanced surgical capabilities under one roof.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '40+', label: 'Years of Experience' },
              { value: 'All Ages', label: 'Children & Adults' },
              { value: '3-Step', label: 'Treatment Protocol' },
              { value: 'Expert', label: 'Paediatric Team' }
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
            Uma Eye Clinic's squint and paediatric ophthalmology department provides end-to-end care for patients of all ages. From the first assessment to post-surgical follow-up, our team follows a structured, evidence-based treatment protocol — correcting refractive errors first, addressing amblyopia, and performing surgery only when necessary. Our child-friendly environment, experienced paediatric specialists, and commitment to early intervention have helped countless children achieve straight eyes and healthy binocular vision.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Common questions about squint and its treatment.
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
          Early Intervention Changes Lives
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(243,235,226,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Squint will not correct itself. The sooner treatment begins, the better the outcome. Book a comprehensive squint assessment at Uma Eye Clinic today.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-light">
            <Calendar size={18} />
            Book Assessment
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
