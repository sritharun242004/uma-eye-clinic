'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Layers, ShieldCheck, AlertTriangle, ScanEye, Zap, Snowflake, Wrench, Calendar, CheckCircle, Phone, ChevronDown } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function RetinaVitreousContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'What are the warning signs of retinal detachment?',
      a: 'The key warning signs include a sudden increase in floaters (tiny specks drifting across your vision), flashes of light in one or both eyes, a shadow or curtain-like appearance over part of your visual field, and a sudden decline in vision. If you experience any of these symptoms, seek immediate medical attention as retinal detachment is a medical emergency.'
    },
    {
      q: 'Can retinal detachment be successfully treated?',
      a: 'Yes, over 90% of retinal detachments can be successfully treated with modern surgical techniques. The key to success is early detection and prompt treatment. The sooner the retina is reattached, the better the chance of restoring good vision. Delayed treatment can lead to permanent vision loss.'
    },
    {
      q: 'Who is at risk for retinal detachment?',
      a: 'Risk factors include age over 40, high myopia (severe nearsightedness), previous retinal detachment in the other eye, family history of retinal detachment, prior eye injury, and previous eye surgery such as cataract removal. Regular eye examinations are essential if you have any of these risk factors.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.retinaVitreousBanner} alt="Retina & Vitreous Disorders" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT RETINA & VITREOUS</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What are Retinal Disorders?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                The retina is the light-sensitive tissue at the back of the eye. Vitreous is the gel-like substance filling the eye. Disorders of these structures can lead to serious vision loss. Early diagnosis and treatment by a retinal specialist is critical for preserving vision.
              </p>
            </div>
            <img src={IMAGES.retinaVitreousRight} alt="Retina treatment" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Overview */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Understanding Retinal & Vitreous Conditions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              The retina is the light-sensitive layer at the back of your eye, and the vitreous is the gel-like substance that fills the eye. Both are critical for clear vision and can be affected by degenerative diseases linked to aging and genetic factors.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Rhegmatogenous Detachment</h3>
              <p className="step-desc">The most common type, caused by tears or holes in the retina that allow fluid to seep underneath, separating the retina from its supporting tissue.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wrench size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Tractional Detachment</h3>
              <p className="step-desc">Fibrous tissue grows on the retinal surface and contracts, pulling the retina away from its underlying layer. Often associated with diabetic retinopathy.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Exudative Detachment</h3>
              <p className="step-desc">Fluid accumulates beneath the retina without any tears or breaks. This can be caused by inflammatory disorders, tumours, or vascular abnormalities.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Risk Factors & Symptoms */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Risk Factors & Symptoms</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Recognising the warning signs and understanding your risk profile can mean the difference between saving and losing your vision.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Risk Factors</h3>
              {[
                'Age over 40 years',
                'High myopia (severe nearsightedness)',
                'Previous retinal detachment in the other eye',
                'Family history of retinal detachment',
                'Prior eye injury or trauma',
                'Previous eye surgery (e.g., cataract removal)'
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
                <AlertTriangle size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Warning Symptoms</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Seek immediate medical attention if you experience a sudden increase in floaters, flashes of light in your vision, a shadow or curtain-like appearance over part of your visual field, or a sudden decline in vision.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                The vitreous, a gel-like substance filling the eye, can become opaque from bleeding and cause sudden vision changes. These symptoms are a medical emergency and require prompt evaluation.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Get Emergency Evaluation
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Treatments */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Treatment Options</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Our retina specialists employ a range of advanced surgical techniques tailored to the type and severity of your condition.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: <Zap size={32} color="var(--primary)" />, title: 'Laser Indirect Ophthalmoscopy', desc: 'Targeted laser is applied around retinal tears to create adhesion and prevent fluid from passing through, sealing breaks before detachment occurs.' },
              { icon: <Snowflake size={32} color="var(--primary)" />, title: 'Cryopexy', desc: 'A freezing probe is applied to the outer wall of the eye to create a scar that seals the retinal tear. Often used when laser treatment is not feasible.' },
              { icon: <Eye size={32} color="var(--primary)" />, title: 'Pneumoretinopexy', desc: 'A gas bubble is injected into the eye to push the detached retina back into position. Combined with laser or cryopexy to permanently seal the tear.' },
              { icon: <ShieldCheck size={32} color="var(--primary)" />, title: 'Scleral Buckling', desc: 'A silicone band is placed around the eye to gently push the eye wall against the detached retina, facilitating reattachment and long-term stability.' },
              { icon: <ScanEye size={32} color="var(--primary)" />, title: 'Vitrectomy', desc: 'The vitreous gel is removed and replaced with a gas bubble or silicone oil. This allows direct access to the retina for repair of complex detachments.' },
              { icon: <Layers size={32} color="var(--primary)" />, title: 'Combined Procedures', desc: 'For complex cases, our surgeons may combine multiple techniques in a single surgery to achieve the best possible outcome for retinal reattachment.' }
            ].map(({ icon, title, desc }, i) => (
              <div className="step-card" key={i}>
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
            <p className="section-subtitle centered" style={{ color: 'rgba(243,235,226,0.6)', textAlign: 'center' }}>
              World-class vitreoretinal surgical infrastructure for the most complex retinal conditions.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ScanEye size={28} color="var(--primary)" />
              </div>
              <h3>Advanced Retinal Imaging</h3>
              <p>
                Our comprehensive imaging suite including OCT, fundus photography, and fluorescein angiography enables precise diagnosis and surgical planning. High-resolution imaging allows our specialists to detect the earliest retinal changes before they become sight-threatening.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={28} color="var(--primary)" />
              </div>
              <h3>Alcon Constellation Surgical System</h3>
              <p>
                The Alcon Constellation platform with the Zeiss Lumera 700 microscope provides our surgeons with unparalleled precision for vitreoretinal procedures. The stitchless surgical system reduces surgical time, minimises trauma, and accelerates patient recovery.
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
              Expert retinal surgeons, advanced infrastructure, and a proven track record in treating complex vitreoretinal conditions.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '90%+', label: 'Treatment Success Rate' },
              { value: '40+', label: 'Years of Experience' },
              { value: 'Stitchless', label: 'Surgical Approach' },
              { value: '24/7', label: 'Emergency Retina Care' }
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
            Uma Eye Clinic's retina department is equipped with the latest vitreoretinal surgical technology and staffed by fellowship-trained retinal specialists. From routine retinal screenings to complex detachment repairs, our team delivers comprehensive care with a success rate exceeding 90%. We understand that retinal emergencies require immediate attention, which is why our specialists are available to evaluate urgent cases promptly.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Common questions about retinal and vitreous conditions.
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
          Don't Ignore the Warning Signs
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(243,235,226,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Sudden floaters, flashes, or vision changes require immediate evaluation. Our retina specialists are ready to protect your sight.
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
