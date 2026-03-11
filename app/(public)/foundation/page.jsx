import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'
import {
  Heart, Eye, Users, Award, Building, HeartHandshake,
  Stethoscope, ArrowRight, Phone
} from 'lucide-react'

export const metadata = {
  title: 'Uma Vision Foundation | Uma Eye Clinic',
  description: 'Uma Vision Foundation provides free community eye care — conducting ~30 eye camps and ~100 free surgeries per month to eliminate preventable blindness.',
}

export default function Foundation() {
  const impactStats = [
    { value: '~30', label: 'Eye Camps Per Month' },
    { value: '~100', label: 'Free Surgeries Per Month' },
    { value: 'Chennai & Beyond', label: 'Regions Covered' },
    { value: 'Full Diagnostic', label: 'Foundation Centre Facility' },
  ]

  const programs = [
    {
      image: IMAGES.foundation1,
      title: 'Eye Camp Operations',
      desc: 'The Vision Foundation conducts approximately 30 eye camps every month across Chennai and surrounding regions, bringing free eye care to communities that need it most.',
    },
    {
      image: IMAGES.foundation2,
      title: 'Vision Foundation Centre',
      desc: 'A dedicated facility equipped with full diagnostic capabilities, enabling comprehensive eye examinations and screenings for underprivileged patients.',
    },
    {
      image: IMAGES.foundation3,
      title: 'Free Surgical Services',
      desc: 'Approximately 100 free phacoemulsification procedures are performed monthly with foldable IOL implants, restoring sight to those who cannot afford advanced eye care.',
    },
  ]

  const csrActivities = [
    {
      icon: <Building size={24} />,
      title: 'Rotary Club of Madras',
      desc: 'A key partner in our mission, the Rotary Club of Madras has donated a van for patient transportation, enabling us to bring patients from remote areas to our facility for treatment.',
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Sathya Sai Organisation',
      desc: 'Collaborating with the Sathya Sai Organisation to extend the reach of our eye care programmes and serve communities across the region.',
    },
    {
      icon: <Stethoscope size={24} />,
      title: 'Equitas',
      desc: 'Partnering with Equitas to maximise the impact of our outreach programmes and provide accessible eye care to economically disadvantaged populations.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.foundationBanner} alt="Uma Vision Foundation" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Impact Stats */}
      <AnimateOnScroll>
        <section className="impact-section">
          <div className="impact-grid">
            {impactStats.map((stat, i) => (
              <div className="impact-item" key={i}>
                <div className="impact-value">{stat.value}</div>
                <div className="impact-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Community Programs */}
      <AnimateOnScroll>
        <section className="programs-section">
          <div className="section-header">
            <span className="section-label"><span className="label-line" /> Our Programmes</span>
            <h2 className="section-title">Community Programmes</h2>
            <p className="section-subtitle">Impactful initiatives designed to eliminate preventable blindness and provide highly advanced eye care to those who cannot afford it.</p>
          </div>
          <div className="programs-grid">
            {programs.map((program, i) => (
              <div className="program-card" key={i}>
                <div className="program-img">
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="program-body">
                  <h3 className="program-name">{program.title}</h3>
                  <p className="program-desc">{program.desc}</p>
                  <Link href="/contact" className="link-cta">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* CSR Activities */}
      <AnimateOnScroll>
        <section className="csr-section">
          <h2 className="csr-title">Our Partners</h2>
          <div className="csr-grid">
            {csrActivities.map((activity, i) => (
              <div className="csr-card" key={i}>
                <div className="csr-icon">{activity.icon}</div>
                <h3 className="csr-name">{activity.title}</h3>
                <p className="csr-desc">{activity.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Social Venture Gallery */}
      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '80px 48px' }}>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <span className="section-label"><span className="label-line" /> Gallery</span>
            <h2 className="section-title">Our Social Ventures</h2>
            <p className="section-subtitle">Glimpses from our eye camps, free surgical services, and community outreach programmes.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[IMAGES.foundation1, IMAGES.foundation2, IMAGES.foundation3, IMAGES.social21, IMAGES.social22, IMAGES.social23, IMAGES.social24].map((img, i) => (
              <div key={i} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img src={img} alt={`Social venture ${i + 1}`} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Patient Transport */}
      <AnimateOnScroll>
        <section className="involve-section">
          <div className="involve-icon-circle">
            <HeartHandshake size={32} />
          </div>
          <h2 className="involve-title">Join Us in Making a Difference</h2>
          <p className="involve-desc">
            Whether through volunteering, donations, or partnerships, your support helps us bring the gift of sight to thousands in need. The Rotary Club of Madras-donated van enables us to transport patients from remote areas to our Vision Foundation Centre for treatment.
          </p>
          <div className="involve-actions">
            <Link href="/contact" className="btn btn-intl-primary">Donate Now</Link>
            <Link href="/contact" className="btn btn-intl-ghost">
              <Heart size={18} />
              Volunteer With Us
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
