'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, ShieldCheck, Sparkles, ScanEye, FileCheck, Activity, Sun, Clock as ClockIcon, Calendar, CheckCircle, Phone, ChevronDown, CircleDot, Crosshair, Microscope } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function CataractContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'What is a cataract?',
      a: 'A cataract is a clouding of the natural lens inside the eye that leads to a progressive decrease in vision. It is the most common cause of reversible blindness worldwide. The lens, which normally helps focus light onto the retina, becomes opaque over time, making vision blurry, hazy, or less colourful.'
    },
    {
      q: 'What are the symptoms of cataract?',
      a: 'Common symptoms include blurred or cloudy vision, difficulty seeing at night, sensitivity to light and glare, seeing halos around lights, fading or yellowing of colours, double vision in one eye, and frequent changes in spectacle prescription. Symptoms develop gradually and may initially be managed with updated glasses before surgery is needed.'
    },
    {
      q: 'Who is at risk of developing cataract?',
      a: 'While age is the most common factor, cataracts can also be caused by diabetes, prolonged use of corticosteroids, excessive UV exposure, smoking, eye injuries, and certain congenital conditions. Most people over the age of 60 develop some degree of cataract, though they can occur at younger ages as well.'
    },
    {
      q: 'How is cataract treated?',
      a: 'The only effective treatment for cataract is surgery, in which the cloudy natural lens is removed and replaced with an artificial intraocular lens (IOL). At Uma Eye Clinic, we use advanced phacoemulsification and femtosecond laser-assisted techniques for a quick, painless procedure under topical anaesthesia with a success rate exceeding 98%.'
    },
    {
      q: 'What does cataract surgery cost?',
      a: 'At Uma Eye Clinic, cataract surgery typically costs between Rs 20,000 and Rs 50,000 depending on the type of intraocular lens (IOL) chosen and the surgical technique used. A detailed cost breakdown is provided during your consultation, and we work with most insurance providers to ensure accessible care.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.cataractBanner} alt="Cataract Surgery" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* About Cataract */}
      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT CATARACT</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What is Cataract?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                A cataract is a clouding of the natural lens inside the eye, leading to blurred vision, glare, and difficulty with daily activities. It is the most common cause of reversible blindness worldwide. Modern cataract surgery replaces the clouded lens with a premium artificial intraocular lens (IOL) to restore clear vision.
              </p>
            </div>
            <img src={IMAGES.cataractRight} alt="Cataract treatment" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* What Is It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">What Is Cataract?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Cataract surgery is the most common surgical procedure worldwide. A cataract forms when the natural crystalline lens of the eye becomes cloudy, leading to progressive vision loss. Surgery replaces the clouded lens with a clear artificial intraocular lens (IOL), restoring sharp, vibrant vision.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,144,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Crosshair size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Precise Incisions</h3>
              <p className="step-desc">Femtosecond laser technology creates exact incisions with unmatched precision, replacing manual blade-based methods for superior outcomes.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,144,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Quick & Painless</h3>
              <p className="step-desc">Performed under topical anaesthesia with no injections, the procedure is comfortable and takes just minutes, with patients going home the same day.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,144,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Customised Treatment</h3>
              <p className="step-desc">Every surgery is tailored to the patient with personalised IOL selection and laser parameters for optimal visual results.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* IOL Options */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Intraocular Lens (IOL) Options</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              We offer a comprehensive range of premium IOLs to match your lifestyle and visual needs. Your surgeon will recommend the best option during your consultation.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { title: 'Monofocal IOL', desc: 'Provides excellent vision at one fixed distance, typically set for distance vision. An ideal choice for patients comfortable wearing reading glasses for near tasks.' },
              { title: 'Toric IOL', desc: 'Specifically designed to correct astigmatism alongside cataract removal, delivering sharp distance vision without the need for cylindrical glasses after surgery.' },
              { title: 'EDOF IOL', desc: 'Extended Depth of Focus lenses provide a continuous range of vision from distance to intermediate, reducing dependence on glasses for most daily activities.' },
              { title: 'Trifocal IOL', desc: 'The most advanced option providing clear vision at near, intermediate, and far distances, offering the greatest freedom from glasses for all activities.' }
            ].map(({ title, desc }, i) => (
              <div className="step-card" key={i}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,144,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CircleDot size={28} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* The Procedure */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">The Procedure</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Our femtosecond laser-assisted cataract surgery ensures the highest level of safety, precision, and comfort.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'Comprehensive Evaluation', desc: 'Advanced diagnostics including biometry, topography, and OCT imaging to precisely measure your eye and select the ideal IOL power and type.' },
              { step: 2, icon: <Crosshair size={32} color="var(--primary)" />, title: 'Laser Precision', desc: 'The Catalys femtosecond laser from AMO/Johnson & Johnson creates precise corneal incisions and gently fragments the cataract, replacing manual techniques.' },
              { step: 3, icon: <Eye size={32} color="var(--primary)" />, title: 'Lens Replacement', desc: 'The clouded natural lens is removed through gentle phacoemulsification and replaced with a crystal-clear artificial IOL tailored to your vision needs.' },
              { step: 4, icon: <Sun size={32} color="var(--primary)" />, title: 'Rapid Recovery', desc: 'Vision begins improving within hours. Most patients resume normal activities the next day. No stitches, no patches, no overnight hospital stay required.' }
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
              Uma Eye Clinic is equipped with the latest cataract surgery technology to deliver world-class results.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Crosshair size={28} color="var(--primary)" />
              </div>
              <h3>Catalys Femtosecond Laser</h3>
              <p>
                The Catalys Precision Laser System from AMO/Johnson & Johnson enables Femto Laser Assisted Cataract Surgery (FLACS). It automates the most delicate steps of surgery with image-guided precision, creating perfect incisions and gently fragmenting the lens for safer, faster removal.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Microscope size={28} color="var(--primary)" />
              </div>
              <h3>3D Digital Microscope</h3>
              <p>
                Uma Eye Clinic was the first in Chennai to use a 3D Digital microscope for cataract surgery. This advanced visualisation system provides the surgeon with an immersive, high-resolution 3D view, enabling greater precision and improved surgical outcomes.
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
              A legacy of pioneering cataract care, trusted by thousands of patients across Chennai and beyond.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '98%+', label: 'Success Rate' },
              { value: '1st', label: '3D Microscope in Chennai' },
              { value: '40+', label: 'Years of Eye Care Legacy' },
              { value: '1st', label: 'Phaco Pioneer in Region' }
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
            Dr. Arulmozhi Varman pioneered phacoemulsification (sutureless cataract surgery) in the region, establishing Uma Eye Clinic as a centre of excellence for cataract care. We were the first in Chennai to adopt 3D Digital microscopy and Femto Laser Assisted Cataract Surgery with the Catalys system from AMO/Johnson & Johnson. With over four decades of trusted expertise, thousands of successful surgeries, and a commitment to the latest technology, Uma Eye Clinic continues to set the standard for cataract treatment.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Everything you need to know about cataract surgery at Uma Eye Clinic.
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
          Restore Your Clear Vision Today
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(232,237,245,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Don't let cataracts hold you back. Experience world-class cataract surgery with advanced femtosecond laser technology and premium IOL options at Uma Eye Clinic.
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
