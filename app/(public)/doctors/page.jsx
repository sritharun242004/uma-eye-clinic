import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'
import { Users, Star, HeartHandshake, Calendar } from 'lucide-react'
import prisma from '@/lib/prisma'

export const metadata = {
  title: 'Our Doctors | Uma Eye Clinic',
  description: 'Meet the specialist ophthalmologists and eye care team at Uma Eye Clinic — experienced surgeons dedicated to preserving and restoring your vision.',
}

export const dynamic = 'force-dynamic'

export default async function Doctors() {
  const doctors = await prisma.doctor.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  })

  const leadDoctor = doctors.find(d => d.designation === 'Medical Director')
  const otherDoctors = doctors.filter(d => d.designation !== 'Medical Director')

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

      {/* Doctors Section */}
      <section
        style={{
          background: 'var(--bg-white)',
          borderRadius: 'var(--radius-lg)',
          padding: '80px 48px',
        }}
      >
        <AnimateOnScroll>
          <div className="section-header" style={{ marginBottom: 48 }}>
            <div className="section-label">
              <span className="label-line" />
              OUR SPECIALISTS
            </div>
            <h2 className="section-title centered">Leaders in Eye Care</h2>
          </div>
        </AnimateOnScroll>

        {/* Lead Doctor Card */}
        {leadDoctor && (
          <AnimateOnScroll>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '400px 1fr',
                gap: 48,
                background: 'var(--bg)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: 48,
              }}
            >
              <img
                src={leadDoctor.image || IMAGES.leadDoctor}
                alt={leadDoctor.name}
                style={{
                  width: '400px',
                  height: '100%',
                  objectFit: 'cover',
                  minHeight: 420,
                }}
              />
              <div
                style={{
                  padding: '40px 40px 40px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(212,145,110,0.12)',
                    color: 'var(--primary)',
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    width: 'fit-content',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  <Star size={14} />
                  {leadDoctor.designation}
                </span>
                <h3
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: -0.5,
                  }}
                >
                  {leadDoctor.name}
                </h3>
                {leadDoctor.education && (
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: 'var(--primary)',
                    }}
                  >
                    {leadDoctor.education}
                  </p>
                )}
                {leadDoctor.bio && (
                  <p
                    style={{
                      fontSize: 16,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      maxWidth: 520,
                    }}
                  >
                    {leadDoctor.bio}
                  </p>
                )}
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    marginTop: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { label: 'Experience', value: '30+ Yrs' },
                    { label: 'Trained', value: '300+ Doctors' },
                    { label: 'PHACO Programmes', value: '150+' },
                  ].map((stat) => (
                    <span
                      key={stat.label}
                      style={{
                        background: 'var(--bg-white)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px 20px',
                        fontSize: 14,
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {stat.value}{' '}
                      <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>
                        {stat.label}
                      </span>
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ marginTop: 8, width: 'fit-content' }}
                >
                  <Calendar size={16} />
                  Book Consultation
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        )}

        {/* Doctor Cards Grid */}
        <AnimateOnScroll stagger>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 24,
            }}
          >
            {otherDoctors.map((doc) => (
              <div
                key={doc.id}
                style={{
                  background: 'var(--bg)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s',
                }}
              >
                {doc.image ? (
                  <img
                    src={doc.image}
                    alt={doc.name}
                    style={{
                      width: '100%',
                      height: 280,
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: 280,
                    background: 'rgba(212,145,110,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Users size={48} color="var(--primary)" style={{ opacity: 0.4 }} />
                  </div>
                )}
                <div style={{ padding: '20px 24px 24px' }}>
                  <h4
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: 4,
                    }}
                  >
                    {doc.name}
                  </h4>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'var(--primary)',
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    {doc.designation}
                  </p>
                  {doc.education && (
                    <p
                      style={{
                        fontSize: 13,
                        color: 'var(--text-muted)',
                      }}
                    >
                      {doc.education}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Support Team Section */}
      <section
        style={{
          background: 'var(--primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '80px 48px',
          textAlign: 'center',
          color: 'var(--text-light)',
        }}
      >
        <AnimateOnScroll>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(243,235,226,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeartHandshake size={28} color="var(--text-light)" />
            </div>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 700,
                letterSpacing: -0.5,
                lineHeight: 1.15,
              }}
            >
              Our Support Team
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 560,
                opacity: 0.8,
              }}
            >
              Behind every successful treatment is a team of compassionate professionals
              with exceptional people skills, trained in medical assistance to ensure
              your experience is seamless, comfortable, and reassuring at every step.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 48,
                marginTop: 24,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {[
                { value: '50+', label: 'Team Members', icon: Users },
                { value: '24/7', label: 'Emergency Care', icon: Calendar },
                { value: '100%', label: 'Patient Focused', icon: HeartHandshake },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 36,
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      opacity: 0.73,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  )
}
