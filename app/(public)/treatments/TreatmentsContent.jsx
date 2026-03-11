'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Zap, ShieldCheck, Minimize, ScanEye, FileCheck, Focus, Sun, Clock as ClockIcon, Calendar, CheckCircle, Phone, ChevronDown } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export default function TreatmentsContent() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: 'Is SMILE PRO painful?',
      a: 'No, SMILE PRO is virtually painless. Numbing eye drops are applied before the procedure, and most patients report only a mild pressure sensation during the 8-second laser application. Post-operative discomfort is minimal compared to other refractive procedures.'
    },
    {
      q: 'How long does the procedure take?',
      a: 'The actual laser treatment takes approximately 8 seconds per eye. Including preparation and post-operative checks, your entire visit typically lasts about 30-45 minutes. Most patients are surprised by how quick and comfortable the experience is.'
    },
    {
      q: 'Am I a good candidate for SMILE PRO?',
      a: 'Ideal candidates are adults aged 18 and above with stable vision for at least one year, myopia up to -10 diopters, and astigmatism up to -5 diopters. A comprehensive pre-operative evaluation at Uma Eye Clinic will determine your suitability.'
    },
    {
      q: 'What is the recovery time?',
      a: 'Most patients experience significantly improved vision within 24 hours. You can typically return to normal activities within 1-2 days. Full visual stabilisation occurs within 1-4 weeks, with continued improvement over the following months.'
    },
    {
      q: 'How does SMILE PRO differ from LASIK?',
      a: 'Unlike LASIK, SMILE PRO does not require creating a corneal flap. Instead, a small lenticule is created within the cornea and removed through a tiny 2mm incision. This flapless approach preserves more corneal biomechanical strength, reduces dry eye risk, and allows faster recovery.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.smileProBanner} alt="SMILE PRO Surgery" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Description with image */}
      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label"><span className="label-line" />ABOUT SMILE PRO</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>The Future of Vision Correction</h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 16 }}>
                SMILE PRO represents the most advanced technology in refractive laser treatments. Using the ZEISS VISUMAX 800, this robotic, flapless procedure corrects myopia and astigmatism in just 8 seconds per eye with unmatched precision. Uma Eye Clinic is the first centre in Tamil Nadu to offer this revolutionary treatment.
              </p>
            </div>
            <img src={IMAGES.smileImg} alt="SMILE PRO procedure" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>
      </AnimateOnScroll>

      {/* What Is It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">What Is SMILE PRO?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Small Incision Lenticule Extraction (SMILE) PRO is the latest evolution in laser vision correction — faster, safer, and more precise than ever before.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Lightning Fast</h3>
              <p className="step-desc">The entire laser procedure takes just 8 seconds per eye — the fastest refractive surgery available today.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Flapless & Safe</h3>
              <p className="step-desc">No corneal flap means greater structural integrity, reduced dry eye risk, and enhanced long-term stability.</p>
            </div>
            <div className="step-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,145,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Minimize size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Minimally Invasive</h3>
              <p className="step-desc">A tiny 2mm incision preserves corneal nerves and biomechanics, ensuring faster healing and recovery.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Who Needs It */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Who Needs SMILE PRO?</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              SMILE PRO is ideal for a wide range of patients looking to reduce or eliminate their dependence on glasses and contact lenses.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Ideal Candidates</h3>
              {[
                'Adults aged 18 years and above',
                'Stable prescription for at least 12 months',
                'Myopia (nearsightedness) up to -10 diopters',
                'Astigmatism up to -5 diopters',
                'Those seeking freedom from glasses or contacts',
                'Active individuals and sports enthusiasts',
                'Patients with dry eye concerns (lower risk than LASIK)'
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
                <FileCheck size={24} color="var(--primary)" />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Pre-Operative Assessment</h3>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Every patient undergoes a comprehensive eye examination before being approved for SMILE PRO. Our diagnostic suite evaluates corneal thickness, topography, pupil size, and overall eye health to ensure optimal outcomes.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Not everyone is a candidate for SMILE PRO. If you are not eligible, our specialists will recommend the best alternative treatment tailored to your needs.
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
              SMILE PRO is a streamlined, patient-friendly experience from start to finish.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: 1, icon: <ScanEye size={32} color="var(--primary)" />, title: 'Comprehensive Evaluation', desc: 'Advanced diagnostic scans map your cornea in detail. Your surgeon reviews every parameter to plan a personalised treatment.' },
              { step: 2, icon: <Eye size={32} color="var(--primary)" />, title: 'Numbing & Preparation', desc: 'Anaesthetic drops ensure complete comfort. The VISUMAX 800 is precisely aligned and calibrated for your eye.' },
              { step: 3, icon: <Focus size={32} color="var(--primary)" />, title: '8-Second Laser', desc: 'The femtosecond laser creates a thin lenticule within the cornea through a tiny 2mm keyhole incision in just 8 seconds.' },
              { step: 4, icon: <Sun size={32} color="var(--primary)" />, title: 'Immediate Clarity', desc: 'Vision begins improving within hours. Most patients achieve functional vision the same day and return to activities within 24 hours.' }
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
            <p className="section-subtitle centered" style={{ color: 'rgba(243,235,226,0.6)', textAlign: 'center' }}>
              Uma Eye Clinic invests in the most advanced ophthalmic technology to deliver world-class outcomes.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={28} color="var(--primary)" />
              </div>
              <h3>ZEISS VISUMAX 800</h3>
              <p>
                The latest generation femtosecond laser platform from ZEISS, enabling the fastest SMILE procedure worldwide. Featuring advanced centration technology, robotic eye tracking, and a gentle suction system for unparalleled patient comfort and surgical precision.
              </p>
            </div>
            <div className="tech-card">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(243,235,226,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ScanEye size={28} color="var(--primary)" />
              </div>
              <h3>Advanced Diagnostics</h3>
              <p>
                Our pre-operative diagnostic suite includes corneal topography, wavefront aberrometry, pachymetry, and OCT imaging. These advanced tools ensure precise surgical planning and help identify patients who will benefit most from SMILE PRO.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Recovery */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)' }}>
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Recovery Timeline</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              SMILE PRO offers one of the fastest recovery experiences in refractive surgery.
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
                Most patients notice significantly clearer vision within hours of the procedure. Mild tearing and light sensitivity are normal and typically resolve by evening. Rest is recommended for the remainder of the day.
              </p>
            </div>
            <div className="recovery-card">
              <div className="recovery-badge">
                <Calendar size={18} />
                Week 1
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Return to Normal</h3>
              <p className="recovery-desc">
                Vision continues to improve and stabilise. You can return to office work, light exercise, and most daily activities. Follow-up visits ensure everything is healing perfectly. Avoid swimming and eye makeup.
              </p>
            </div>
            <div className="recovery-card">
              <div className="recovery-badge">
                <CheckCircle size={18} />
                Month 1
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Full Stabilisation</h3>
              <p className="recovery-desc">
                Your vision is fully stabilised and you can enjoy all activities without restrictions. Final follow-up confirms optimal outcomes. Most patients achieve 20/20 vision or better by this milestone.
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
              Decades of trusted expertise, world-class infrastructure, and a patient-first approach define our commitment to your vision.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
            {[
              { value: '1,500+', label: 'SMILE Procedures' },
              { value: '10+', label: 'Years of Excellence' },
              { value: '1st', label: 'In Chennai for SMILE PRO' },
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
            Uma Eye Clinic has been at the forefront of ophthalmic innovation since 1985. As one of the first centres in Chennai to offer SMILE PRO with the ZEISS VISUMAX 800, we combine cutting-edge technology with the warmth and personalised care that our patients have trusted for over four decades. Our experienced surgeons, dedicated support team, and state-of-the-art facility ensure every patient receives an exceptional experience from consultation to complete recovery.
          </p>
        </AnimateOnScroll>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2 className="section-title centered">Frequently Asked Questions</h2>
            <p className="section-subtitle centered" style={{ textAlign: 'center' }}>
              Everything you need to know about SMILE PRO at Uma Eye Clinic.
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
          Ready to See the World Clearly?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(243,235,226,0.8)', maxWidth: 600, lineHeight: 1.6 }}>
          Take the first step towards a life free from glasses and contact lenses. Book your SMILE PRO consultation at Uma Eye Clinic today.
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
