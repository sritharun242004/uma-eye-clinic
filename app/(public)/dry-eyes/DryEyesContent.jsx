'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Droplets, Wind, Monitor, ScanEye, Thermometer, ShieldCheck, Clock as ClockIcon, Calendar, CheckCircle, Phone, ChevronDown } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function DryEyesContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'Can watery eyes actually be a symptom of dry eyes?',
      a: 'Yes, this is one of the most counterintuitive aspects of dry eye disease. When the tear film is unstable or of poor quality, the eye becomes irritated and responds by producing excess reflex tears. However, these reflex tears lack the proper composition to nourish and protect the eye surface, so the underlying dryness persists despite the watering.'
    },
    {
      q: 'What is LIPIFLOW and how does it work?',
      a: 'LIPIFLOW is the most modern treatment for Meibomian Gland Dysfunction, the leading cause of dry eyes. It is a 12 to 15 minute in-office procedure that applies controlled heat and gentle pressure to the inner eyelids, clearing blocked Meibomian glands and restoring healthy oil production. This addresses the root cause rather than just the symptoms.'
    },
    {
      q: 'Are computer users more prone to dry eyes?',
      a: 'Yes, prolonged computer and screen usage significantly increases dry eye risk. Normal blink rate is 8 to 12 times per minute, but during focused activities like computer work, it drops to just 1 to 2 blinks per minute. This dramatically reduced blinking leads to faster tear evaporation and chronic dryness. Additionally, air conditioning in offices accelerates tear evaporation further.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.dryEyesBanner} alt="Dry Eyes Treatment" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT DRY EYES</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What are Dry Eyes?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                Dry eye syndrome occurs when your tears cannot provide adequate lubrication for your eyes. This can happen when you do not produce enough tears or when your tears evaporate too quickly. It causes discomfort, visual disturbance, and can damage the ocular surface if left untreated.
              </p>
            </div>
            <img src={IMAGES.dryEyesRight} alt="Dry eyes treatment" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Overview */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Understanding Dry Eye Disease</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Dry eye is a tear film dysfunction that causes discomfort and visual disturbance. Meibomian Gland Dysfunction accounts for 86% of all dry eye cases, making it the primary target for effective treatment.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,111,165,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Droplets size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Tear Film Dysfunction</h3>
              <p className="step-desc">The tear film has three layers — oil, water, and mucin. When any layer is compromised, tears evaporate too quickly or fail to spread evenly, causing chronic irritation and blurred vision.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,111,165,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Monitor size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Reduced Blinking</h3>
              <p className="step-desc">Normal blink rate is 8-12 times per minute in infants and 4-6 in adults. During focused activities like screen use, it drops to just 1-2 blinks per minute, starving the eyes of essential moisture.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,111,165,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wind size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Environmental Factors</h3>
              <p className="step-desc">Air conditioning accelerates tear evaporation, and prolonged screen time in climate-controlled environments creates the perfect conditions for chronic dry eye disease to develop.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Causes & Symptoms */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Causes & Symptoms</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Dry eye disease presents with a wide range of symptoms and has multiple contributing factors. Understanding these helps in choosing the right treatment approach.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Common Symptoms</h3>
              {[
                'Gritty, sandy sensation in the eyes',
                'Burning, stinging, or redness',
                'Excessive watering (reflex tearing)',
                'Blurred vision that fluctuates with blinking',
                'Eye fatigue, especially after screen use',
                'Sensitivity to light and wind',
                'Discomfort with contact lens wear'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
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
                <Eye size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>The 86% Factor</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Meibomian Gland Dysfunction (MGD) accounts for 86% of all dry eye cases. The Meibomian glands in your eyelids produce the oil layer of your tear film. When these glands become blocked or dysfunctional, tears evaporate too quickly.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Counterintuitively, watering of eyes is also a symptom of dry eyes. The eye overproduces low-quality reflex tears in response to surface irritation, but these tears cannot adequately protect the eye.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Get a Dry Eye Assessment
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Treatment */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Treatment Options</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              From conventional lubricating drops to the most modern LIPIFLOW technology, Uma Eye Clinic offers a complete range of dry eye treatments.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'LIPISCAN Diagnosis', desc: 'Infrared imaging technology assesses the viability and structure of your Meibomian glands, providing a clear picture of gland health to guide treatment planning.' },
              { step: 2, icon: <Droplets size={32} color="var(--primary)" />, title: 'Lubricating Drops', desc: 'Artificial tears provide temporary relief by supplementing your natural tear film. While effective for mild cases, they address symptoms rather than the underlying cause.' },
              { step: 3, icon: <Thermometer size={32} color="var(--primary)" />, title: 'LIPIFLOW Treatment', desc: 'The most modern dry eye treatment — a 12 to 15 minute procedure applying controlled pressure and heat to unblock Meibomian glands and restore natural oil production.' },
              { step: 4, icon: <ShieldCheck size={32} color="var(--primary)" />, title: 'Ongoing Management', desc: 'Personalised maintenance plans including environmental modifications, blinking exercises, and follow-up assessments to sustain long-term comfort and tear film health.' }
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
              Advanced diagnostic and treatment systems for comprehensive dry eye management.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ScanEye size={28} color="var(--primary)" />
              </div>
              <h3>LIPISCAN Imaging</h3>
              <p>
                LIPISCAN uses advanced infrared imaging technology to capture detailed images of your Meibomian glands. This non-invasive scan reveals gland structure, identifies blockages, and assesses gland viability — helping your doctor determine the most effective treatment strategy for your specific condition.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Thermometer size={28} color="var(--primary)" />
              </div>
              <h3>LIPIFLOW Thermal Pulsation</h3>
              <p>
                LIPIFLOW is the most modern treatment for Meibomian Gland Dysfunction. During the 12 to 15 minute in-office procedure, the device applies precisely controlled heat to the inner eyelid surface while simultaneously delivering gentle pulsating pressure, safely clearing blocked glands and restoring their natural function.
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
              Comprehensive dry eye care with the latest diagnostic and treatment technology, backed by decades of ophthalmic expertise.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: 'LIPIFLOW', label: 'Advanced Treatment' },
              { value: 'LIPISCAN', label: 'Infrared Diagnostics' },
              { value: '12-15 min', label: 'Procedure Duration' },
              { value: '40+', label: 'Years of Eye Care' }
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
            Uma Eye Clinic goes beyond temporary lubricating drops to address the root cause of dry eye disease. With LIPISCAN diagnostic imaging and LIPIFLOW thermal pulsation therapy, we identify and treat Meibomian Gland Dysfunction — responsible for 86% of dry eye cases — directly. Our specialists create personalised treatment plans that combine advanced technology with practical lifestyle modifications for lasting relief and improved quality of life.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Common questions about dry eye disease and its treatment.
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
          End the Cycle of Dry Eye Discomfort
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(232,237,245,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Stop relying on temporary drops. Get a comprehensive dry eye assessment and discover how LIPIFLOW can provide lasting relief.
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
