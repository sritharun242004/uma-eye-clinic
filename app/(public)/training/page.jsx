import Link from 'next/link'
import { GraduationCap, CheckCircle, Users, Award, BookOpen, Clock, Phone, Mail, ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export const metadata = {
  title: 'Training & Education | Uma Eye Clinic',
  description: 'World-class PHACO surgical training programmes at Uma Eye Clinic — 150+ programmes conducted, 300+ ophthalmologists trained, with USA and UK university tie-ups.',
}

export default function Training() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.trainingHero} alt="Training & Education" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Program Overview */}
      <AnimateOnScroll>
        <section className="intl-section">
          <div className="intl-section-header">
            <div className="intl-section-label">
              <span className="label-line" />
              Training Programs
            </div>
            <h2 className="intl-section-title">World-Class PHACO Surgical Training</h2>
          </div>

          <div className="showroom-grid">
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Instructor Card */}
              <div className="coordinator-card" style={{ maxWidth: '100%' }}>
                <div className="coordinator-avatar">
                  <Users size={32} />
                </div>
                <div className="coordinator-details">
                  <div className="coordinator-name">Dr. Arulmozhi Varman</div>
                  <div className="coordinator-info">
                    <div className="coordinator-info-row">
                      <Award size={16} />
                      <span>Master Surgeon with 30+ Years of Experience</span>
                    </div>
                    <div className="coordinator-info-row">
                      <BookOpen size={16} />
                      <span>Trained 300+ Ophthalmologists Worldwide</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <AnimateOnScroll stagger>
                <div className="bring-card" style={{ border: 'none', background: 'var(--bg-cream)' }}>
                  <div className="bring-card-icon">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>Over 150 PHACO Training Programmes</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Conducted over 150 PHACO training programmes with hands-on surgical mentorship.
                    </p>
                  </div>
                </div>
                <div className="bring-card" style={{ border: 'none', background: 'var(--bg-cream)' }}>
                  <div className="bring-card-icon">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>300+ Ophthalmologists Trained</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Trained about 300 ophthalmologists from across India and abroad.
                    </p>
                  </div>
                </div>
                <div className="bring-card" style={{ border: 'none', background: 'var(--bg-cream)' }}>
                  <div className="bring-card-icon">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>USA &amp; UK University Tie-Ups</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Our centre has tie-ups with USA and UK Universities for international training collaborations.
                    </p>
                  </div>
                </div>
                <div className="bring-card" style={{ border: 'none', background: 'var(--bg-cream)' }}>
                  <div className="bring-card-icon">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>Zeiss ARTEVO 3D Microscope</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Trainees operate with the latest digital visualization using the Zeiss ARTEVO 3D microscope for enhanced depth perception training.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '320px' }}>
                <img
                  src={IMAGES.trainingProg}
                  alt="Training program"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Why Train at Uma */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-light)' }}>
                  Why Train at Uma
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Master surgeon with 30+ years experience as faculty',
                    '150+ PHACO training programmes conducted',
                    'Access to Zeiss ARTEVO 3D microscope',
                    'USA and UK university partnerships',
                    '300+ alumni across India and abroad'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="rgba(243,235,226,0.8)" />
                      <span style={{ fontSize: '14px', color: 'rgba(243,235,226,0.87)', fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Trainee CTA */}
      <AnimateOnScroll>
        <section className="cta-banner">
          <div className="cta-banner-inner">
            <div className="involve-icon-circle">
              <GraduationCap size={32} />
            </div>
            <h2 className="cta-banner-title">Begin Your Surgical Training Journey</h2>
            <p className="cta-banner-subtitle">
              Applications are now open for the 2026-2027 fellowship cohort. Join a legacy of excellence in ophthalmic education.
            </p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-cta-primary">
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-cta-ghost">
                Download Brochure
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '32px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="rgba(243,235,226,0.6)" />
                <a href="tel:+914449023232" style={{ fontSize: '14px', color: 'rgba(243,235,226,0.6)' }}>+91 44 49023232</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="rgba(243,235,226,0.6)" />
                <a href="mailto:info@umaeyeclinic.in" style={{ fontSize: '14px', color: 'rgba(243,235,226,0.6)' }}>info@umaeyeclinic.in</a>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
