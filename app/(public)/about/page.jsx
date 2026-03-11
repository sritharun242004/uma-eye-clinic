import Link from 'next/link'
import { Target, Eye, ShieldCheck, Award, Star, Calendar } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

export const metadata = {
  title: 'About Us | Uma Eye Clinic',
  description: 'Learn about Uma Eye Clinic — over 40 years of NABH-accredited excellence in eye care, pioneering technology, and compassionate service since 1984.',
}

const timelineData = [
  { year: '1984', desc: 'Uma Eye Clinic founded with a vision to provide world-class eye care to the community.', dot: 'primary' },
  { year: 'Early 1990s', desc: 'Dr. Arulmozhi Varman pioneered Phacoemulsification surgery in this part of the country.', dot: 'secondary' },
  { year: 'Mid 1990s', desc: 'First to implant the most number of Multifocal IOLs in India, delivering spectacle-free vision after cataract surgery.', dot: 'primary' },
  { year: '2000s', desc: 'Introduced Intralase (femtosecond) blade-less LASIK, advancing refractive surgery options for patients.', dot: 'secondary' },
  { year: '2014', desc: 'First in Tamil Nadu to introduce SMILE (Small Incision Lenticule Extraction) - a bladeless, flapless laser vision correction technology.', dot: 'primary' },
  { year: '2016', desc: 'First Catalys Femtosecond laser cataract surgery in Tamil Nadu, setting a new benchmark in precision cataract treatment.', dot: 'secondary' },
  { year: '2018', desc: 'First 3D Digital microscope in Chennai for intraocular surgeries, enabling unparalleled surgical visualization.', dot: 'primary' },
  { year: '2022', desc: 'SMILE PRO with ZEISS Visumax 800 (US FDA approved) - the latest advancement in minimally invasive refractive surgery.', dot: 'secondary' },
  { year: '2023', desc: 'First in Chennai to introduce Presbyond laser for near vision correction, freeing patients from reading glasses.', dot: 'primary' },
  { year: '2024', desc: 'First in South India for drop-free SLT glaucoma treatment, offering a painless alternative for glaucoma management.', dot: 'secondary' },
]

const clinicFirsts = [
  'Pioneer in Phacoemulsification in this part of the country',
  'One of the few to implant the most number of Multifocal IOLs in India',
  'Extended Depth of Focus lenses with seamless vision transition',
  'First in Chennai for 3D Digital microscope for intraocular surgeries',
  'Femto Laser Assisted Cataract Surgery with Catalys',
  'SMILE Pro with Zeiss Visumax 800 (US FDA approved)',
  'First in Chennai for Presbyond - 75+ patients benefited',
  'First in South India for drop-free SLT glaucoma treatment',
  'First in India for painless Cornea Collagen Cross Linking',
]

const equipmentData = [
  { img: IMAGES.equipment1, name: 'LipiScan (Tear Science)', desc: 'Advanced imaging for Meibomian Gland Dysfunction diagnosis' },
  { img: IMAGES.equipment2, name: 'ZEISS i.Profiler plus', desc: 'Complete visual profile analysis for day and night vision' },
  { img: IMAGES.equipment3, name: 'Optovue OCT', desc: 'High-resolution 3D retinal imaging for precise diagnostics' },
  { img: IMAGES.equipment4, name: 'Optos Wide-Field Camera', desc: 'Wide-field fundus photography without dilatation' },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.aboutHero} alt="About Uma Eye Clinic" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Timeline */}
      <AnimateOnScroll>
        <section className="timeline-section">
          <div className="section-header">
            <span className="section-label">
              <span className="label-line"></span>
              OUR JOURNEY
            </span>
            <h2 className="section-title">Four Decades of Excellence</h2>
            <p className="section-subtitle">
              From a single clinic in 1984 to a NABH-accredited centre of excellence, our journey reflects a relentless pursuit of better vision care.
            </p>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {timelineData.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className={`timeline-dot ${item.dot}`}></div>
                <div className="timeline-card">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Clinic Firsts */}
      <AnimateOnScroll>
        <section className="vm-section">
          <div className="section-header">
            <span className="section-label">
              <span className="label-line"></span>
              WHO WE ARE
            </span>
            <h2 className="section-title">Our Firsts &amp; Achievements</h2>
            <p className="section-subtitle">
              Uma Eye Clinic has consistently been at the forefront of ophthalmic innovation, bringing cutting-edge procedures and technology to patients first.
            </p>
          </div>
          <div className="vm-grid">
            <div className="vm-card mission">
              <div className="vm-icon">
                <Award size={24} />
              </div>
              <span className="vm-label">CLINIC FIRSTS</span>
              <h3 className="vm-title">Pioneering Eye Care</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {clinicFirsts.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <ShieldCheck size={16} style={{ flexShrink: 0, marginTop: 4, color: 'var(--primary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="vm-card vision">
              <div className="vm-icon">
                <Target size={24} />
              </div>
              <span className="vm-label">MISSION</span>
              <h3 className="vm-title">Accessible Excellence</h3>
              <p className="vm-desc">
                To deliver world-class eye care with compassion, integrity, and innovation &mdash; making advanced ophthalmic treatments accessible to every patient regardless of background.
              </p>
              <div className="vm-icon" style={{ marginTop: 24 }}>
                <Eye size={24} />
              </div>
              <span className="vm-label">VISION</span>
              <h3 className="vm-title">A World Without Preventable Blindness</h3>
              <p className="vm-desc">
                To be the most trusted eye care institution in the region, leading in clinical excellence, patient experience, and community outreach for preventable blindness.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Infrastructure */}
      <AnimateOnScroll>
        <section className="infra-section">
          <div className="section-header">
            <span className="section-label">
              <span className="label-line"></span>
              OUR EQUIPMENT
            </span>
            <h2 className="section-title">World-Class Infrastructure</h2>
            <p className="section-subtitle">
              Equipped with the latest diagnostic and surgical technology from global leaders in ophthalmic innovation.
            </p>
          </div>
          <div className="infra-grid">
            {equipmentData.map((item, i) => (
              <div className="infra-card" key={i}>
                <img src={item.img} style={{ width: '100%', height: '160px', objectFit: 'cover' }} alt={item.name} />
                <div className="infra-info">
                  <div className="infra-name">{item.name}</div>
                  <div className="infra-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Dr. Aadithreya Varman - Director */}
      <AnimateOnScroll>
        <section className="accred-section">
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 48, alignItems: 'start' }}>
            <img src={IMAGES.aadithreya} alt="Dr. Aadithreya Varman" style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: 380 }} />
            <div>
              <span className="section-label" style={{ marginBottom: 12 }}>
                <span className="label-line"></span>
                DIRECTOR
              </span>
              <h2 className="section-title" style={{ marginTop: 12 }}>Dr. Aadithreya Varman</h2>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 12, maxWidth: 600 }}>
                Director of Uma Eye Clinic, specializing in cataract, refractive, and presbyopia correction surgery.
              </p>
              <div className="accred-grid" style={{ marginTop: 24 }}>
                <div className="accred-card">
                  <div className="accred-icon teal">
                    <Star size={32} />
                  </div>
                  <div>
                    <div className="accred-title">Surgical Excellence</div>
                    <div className="accred-subtitle">
                      Youngest surgeon at 28 to perform live cataract surgery at an ophthalmology meeting. Over 3,000 cataract surgeries, 300 ICL procedures, and 1,500+ SMILE procedures performed.
                    </div>
                  </div>
                </div>
                <div className="accred-card">
                  <div className="accred-icon copper">
                    <Award size={32} />
                  </div>
                  <div>
                    <div className="accred-title">Awards &amp; Publications</div>
                    <div className="accred-subtitle">
                      3 best paper awards, Prof C.P.Gupta gold medal, ASCRS Best Paper 2024, FWCRS. 5 peer-reviewed publications in the Indian Journal of Ophthalmology.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Accreditations */}
      <AnimateOnScroll>
        <section className="accred-section">
          <div className="section-header">
            <span className="section-label">
              <span className="label-line"></span>
              TRUST &amp; QUALITY
            </span>
            <h2 className="section-title">Accreditations &amp; Recognition</h2>
          </div>
          <div className="accred-grid">
            <div className="accred-card">
              <div className="accred-icon teal">
                <ShieldCheck size={32} />
              </div>
              <div>
                <div className="accred-title">NABH Accredited</div>
                <div className="accred-subtitle">
                  National Accreditation Board for Hospitals &amp; Healthcare Providers &mdash; ensuring the highest standards of patient safety and clinical excellence.
                </div>
              </div>
            </div>
            <div className="accred-card">
              <div className="accred-icon copper">
                <Award size={32} />
              </div>
              <div>
                <div className="accred-title">40+ Years of Trust</div>
                <div className="accred-subtitle">
                  Four decades of dedicated service with over 200,000 successful surgeries and the trust of generations of patients and families.
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
