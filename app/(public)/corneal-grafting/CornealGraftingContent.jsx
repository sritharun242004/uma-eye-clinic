'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, ShieldCheck, Sparkles, ScanEye, FileCheck, Heart, Sun, Clock as ClockIcon, Calendar, CheckCircle, Phone, ChevronDown, Layers, AlertCircle, Stethoscope, Scissors } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function CornealGraftingContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'What is corneal grafting and when is it needed?',
      a: 'Corneal grafting (corneal transplant) is a surgical procedure that replaces a damaged or diseased cornea with healthy donor tissue. It is needed when the cornea becomes clouded or misshapen due to congenital abnormalities, childhood infections, trauma, degenerative diseases like keratoconus, or corneal scarring that significantly impairs vision and cannot be treated with glasses, contact lenses, or other therapies.'
    },
    {
      q: 'What is the recovery process like after corneal grafting?',
      a: 'Recovery from corneal grafting is gradual. The one-hour operation involves fine stitches that remain in place for up to two years. Complete healing takes approximately one year. During the initial recovery period, you may experience blurred vision and light sensitivity. You should avoid rubbing your eyes, follow your medication schedule strictly, wear sunglasses outdoors, avoid contact sports, and plan for 2-4 weeks off work. Some patients may need glasses or contact lenses after the graft heals fully.'
    },
    {
      q: 'What is the difference between partial and full thickness corneal grafting?',
      a: 'Partial thickness (lamellar) grafting replaces only the damaged layers of the cornea while preserving the healthy layers. This approach reduces the risk of rejection and allows faster recovery. Full thickness (penetrating) grafting replaces the entire cornea and is used when all layers are damaged. Your surgeon will recommend the most appropriate technique based on the nature and extent of your corneal condition.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.cornealGraftingBanner} alt="Corneal Grafting" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT CORNEAL GRAFTING</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What is Corneal Grafting?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                Corneal grafting (keratoplasty) is a surgical procedure to replace damaged or diseased corneal tissue with healthy donor tissue. It is performed to restore vision, reduce pain, and improve the appearance of a damaged cornea.
              </p>
            </div>
            <img src={IMAGES.cornealGraftingRight} alt="Corneal grafting" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* What Is It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">What Is Corneal Grafting?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Corneal grafting, also known as corneal transplantation, is a surgical procedure that replaces a damaged or diseased cornea with healthy donor tissue. The cornea is the clear, dome-shaped surface at the front of the eye that plays a crucial role in focusing light. When it becomes scarred, clouded, or misshapen, vision is severely affected, and a transplant may be the only way to restore sight.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(91,127,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Donor Tissue</h3>
              <p className="step-desc">Healthy corneal tissue from a generous donor replaces the damaged cornea, offering a renewed window of clarity and the gift of restored vision to the recipient.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(91,127,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Multiple Techniques</h3>
              <p className="step-desc">Both partial thickness (lamellar) and full thickness (penetrating) grafting techniques are available, selected based on the nature and depth of corneal damage.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(91,127,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Proven Outcomes</h3>
              <p className="step-desc">Corneal transplantation is one of the most successful tissue transplant procedures, with high graft survival rates when combined with proper post-operative care.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Causes */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">When Is Corneal Grafting Needed?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Several conditions can damage the cornea to the point where transplantation becomes the best option for restoring vision.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Common Causes</h3>
              {[
                'Congenital corneal abnormalities present from birth',
                'Childhood infections causing corneal scarring',
                'Trauma or injury resulting in corneal damage',
                'Degenerative diseases such as keratoconus',
                'Corneal dystrophies affecting clarity',
                'Failed previous corneal surgery',
                'Severe corneal ulcers or infections'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: 'rgba(91,127,164,0.08)',
              border: '1px solid rgba(91,127,164,0.2)',
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
                A thorough evaluation determines the extent of corneal damage, the health of other eye structures, and the most appropriate grafting technique. Advanced corneal imaging and topography guide the surgical plan.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Our corneal specialists will discuss the expected outcomes, recovery timeline, and any additional treatments that may be needed to maximise your visual result after transplantation.
              </p>
              <Link href="/contact" className="btn btn-primary-sm" style={{ width: 'fit-content', marginTop: 8 }}>
                Schedule Your Assessment
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Grafting Types */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Types of Corneal Grafting</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              The type of grafting recommended depends on which layers of the cornea are affected and the specific nature of the condition.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="step-card" style={{ padding: 32 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(91,127,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Partial Thickness (Lamellar)</h3>
              <p className="step-desc" style={{ fontSize: 15 }}>
                Only the damaged layers of the cornea are replaced while healthy layers are preserved. This selective approach offers several advantages including lower risk of graft rejection, faster visual recovery, and greater structural integrity of the eye. Lamellar keratoplasty is increasingly preferred when the deepest corneal layer (endothelium) remains healthy.
              </p>
            </div>
            <div className="step-card" style={{ padding: 32 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(91,127,164,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Scissors size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Full Thickness (Penetrating)</h3>
              <p className="step-desc" style={{ fontSize: 15 }}>
                The entire cornea is replaced with donor tissue when all layers are damaged beyond repair. Penetrating keratoplasty is the traditional gold-standard technique for severe corneal conditions. The procedure involves precise trephination and meticulous suturing. While recovery is longer, this technique effectively addresses the most advanced corneal diseases.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* The Procedure & Recovery */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">The Procedure</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Corneal grafting is a carefully orchestrated surgical procedure performed with microsurgical precision.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'Thorough Evaluation', desc: 'Complete assessment of corneal damage, eye health, and donor tissue compatibility. Advanced imaging guides the surgical plan for the best possible outcome.' },
              { step: 2, icon: <Scissors size={32} color="var(--primary)" />, title: 'Tissue Replacement', desc: 'The damaged cornea is carefully removed and replaced with the healthy donor tissue. The one-hour operation uses microsurgical techniques under anaesthesia for complete comfort.' },
              { step: 3, icon: <Stethoscope size={32} color="var(--primary)" />, title: 'Fine Suturing', desc: 'Ultra-fine stitches secure the donor tissue in place. These sutures remain for up to two years to ensure proper healing and integration of the graft.' },
              { step: 4, icon: <Sun size={32} color="var(--primary)" />, title: 'Gradual Recovery', desc: 'Complete healing takes approximately one year. Vision improves progressively as the graft heals. Regular follow-up visits monitor healing and detect any signs of rejection early.' }
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

      {/* Recovery Guidelines */}
      <section style={{ padding: '80px 48px', background: 'var(--surface-dark)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered" style={{ color: 'var(--text-light)' }}>Recovery Guidelines</h2>
            <p className="section-subtitle centered" style={{ color: 'rgba(232,237,245,0.6)', textAlign: 'center' }}>
              Following these guidelines carefully is essential for optimal healing and graft survival after corneal transplantation.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertCircle size={28} color="var(--primary)" />
              </div>
              <h3>Important Precautions</h3>
              <p>
                Avoid rubbing your eyes at all times. Follow your prescribed medication schedule strictly, including anti-rejection eye drops. Wear sunglasses outdoors to protect against UV light and wind. Avoid contact sports and any activities with a risk of eye injury. Plan for 2-4 weeks off work to allow initial healing.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(232,237,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ClockIcon size={28} color="var(--primary)" />
              </div>
              <h3>What to Expect</h3>
              <p>
                Blurred vision and light sensitivity are normal in the weeks following surgery and improve gradually. Some patients may need glasses or contact lenses after the graft heals fully to achieve their best vision. Complete healing takes approximately one year, with sutures remaining in place for up to two years. Regular follow-up appointments are essential throughout the healing process.
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
              Pioneering corneal treatments in India with advanced surgical expertise and compassionate patient care.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '1st', label: 'Painless CXL in India' },
              { value: '40+', label: 'Years of Eye Care Legacy' },
              { value: 'Expert', label: 'Corneal Surgeons' },
              { value: 'Complete', label: 'Pre & Post-Op Care' }
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
            Uma Eye Clinic was the first in India to perform painless Cornea Collagen Cross Linking (CXL) with Riboflavin for keratoconus, a pioneering treatment that strengthens the cornea and can delay or prevent the need for transplantation. Our corneal surgeons bring decades of specialised experience in both partial and full thickness grafting techniques, ensuring the most appropriate approach for each patient. From advanced diagnostics and microsurgical precision to comprehensive long-term follow-up care, we are committed to achieving the best possible visual outcomes for our corneal transplant patients.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Everything you need to know about corneal grafting at Uma Eye Clinic.
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
          Restore Your Corneal Health Today
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(232,237,245,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Whether you need a corneal transplant or treatment for keratoconus, our corneal specialists are here to help. Book your consultation at Uma Eye Clinic today.
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
