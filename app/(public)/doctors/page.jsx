import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'
import { Users, HeartHandshake } from 'lucide-react'

export const metadata = {
  title: 'Our Doctors | Uma Eye Clinic',
  description: 'Meet the specialist ophthalmologists and eye care team at Uma Eye Clinic — experienced surgeons dedicated to preserving and restoring your vision.',
}

const doctors = [
  { id: '1', name: 'Dr. N. V. Arulmozhi Varman', designation: 'M.B.B.S, D.O, M.S Ophthalmology, Medical Director', image: '/images/doctors/arulmozhi-varman.webp' },
  { id: '2', name: 'Mrs. Uma Varman', designation: 'Admin Director', image: '/images/doctors/team-member-2.webp' },
  { id: '3', name: 'Dr. Aadithreya Varman', designation: 'M.S., Director of Uma Eye Clinic', image: '/images/doctors/aadithreya-varman.webp' },
  { id: '4', name: 'Dr. Venkateshar Ravisankar', designation: 'Vitreo-Retinal Surgeon', image: '/images/doctors/Dr. Venkateshar Ravisankar.png' },
  { id: '5', name: 'Dr. M. P. Veenashree', designation: 'Corneal Surgeon', image: '/images/doctors/Dr. M. P. Veenashree.png' },
  { id: '6', name: 'Dr. Uma Ramesh', designation: 'Squint & Pediatric', image: '/images/doctors/Dr. Uma Ramesh.png' },
  { id: '7', name: 'Dr. Kasinathan N', designation: 'Retina', image: '/images/doctors/Dr. Kasinathan N.png' },
  { id: '8', name: 'Dr. Prithi Udhay', designation: 'Oculoplasty & Facial Aesthetics', image: '/images/doctors/Dr. Prithi Udhay.png' },
]

export default function Doctors() {

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img
          src={IMAGES.teamHero}
          alt="Our team of expert ophthalmologists"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
      </section>

      {/* Doctors Section - single 4x2 grid, correct order with photos */}
      <section className="doctors-section">
        <div className="doctors-section-inner">
          <AnimateOnScroll>
            <div className="section-header" style={{ marginBottom: 48 }}>
              <div className="section-label">
                <span className="label-line" />
                OUR SPECIALISTS
              </div>
              <h2 className="section-title centered">Leaders in Eye Care</h2>
            </div>
            <div className="doctors-grid">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className="doctor-card-block"
                >
                  <div className="doctor-card-block-img-wrap">
                    {doc.image ? (
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="doctor-card-block-img"
                        style={{ objectPosition: 'top center' }}
                      />
                    ) : (
                      <div className="doctor-card-block-placeholder">
                        <Users size={48} color="var(--primary)" style={{ opacity: 0.4 }} />
                      </div>
                    )}
                  </div>
                  <div className="doctor-card-block-info">
                    <h4 className="doctor-card-block-name">{doc.name}</h4>
                    <p className="doctor-card-block-designation">{doc.designation}</p>
                    {doc.education && (
                      <p className="doctor-card-block-education">{doc.education}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="support-team-section">
        <AnimateOnScroll>
          <div className="support-team-inner">
            <div className="support-team-icon">
              <HeartHandshake size={28} color="var(--text-light)" />
            </div>
            <h2 className="support-team-title">Our Support Team</h2>
            <p className="support-team-desc">
              Behind every successful treatment is a team of compassionate professionals
              with exceptional people skills, trained in medical assistance to ensure
              your experience is seamless, comfortable, and reassuring at every step.
            </p>
            <div className="support-team-stats">
              {[
                { value: '50+', label: 'Team Members' },
                { value: '24/7', label: 'Emergency Care' },
                { value: '100%', label: 'Patient Focused' },
              ].map((stat) => (
                <div key={stat.label} className="support-team-stat">
                  <span className="support-team-stat-value">{stat.value}</span>
                  <span className="support-team-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  )
}
