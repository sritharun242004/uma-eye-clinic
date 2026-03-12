import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'
import { CheckCircle, MapPin, Phone, Clock } from 'lucide-react'

export const metadata = {
  title: 'Optical Showroom | Uma Eye Clinic',
  description: 'Explore premium eyewear at Uma Eye Clinic\'s optical showroom — national and international lenses, frames, and sunglasses with expert optometrist guidance.',
}

export default function Optical() {
  const frameTypes = [
    { name: 'Shell Frames', tagline: 'Durable tortoiseshell or plastic, suitable for higher power lenses' },
    { name: 'Carbon Frames', tagline: 'Lightweight, flexible, available in various colors' },
    { name: 'Metal Frames', tagline: 'Aluminum, cobalt, monel, beryllium, flexon, nickel silver and more' },
  ]

  const lensOptions = [
    'Resilens (CR 39) - UV protection from screens and sunlight',
    'Photochromatic - Darken in sunlight, clear indoors',
    'Hi-Index - Thinner, more elegant for higher prescriptions',
    'Progressive Lenses - For presbyopia, seamless distance-to-near vision',
    'Corrective Glasses - Precision lenses tailored to your prescription',
    'Sunglasses - Block harmful UV radiation for outdoor protection',
  ]

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.opticalHero} alt="Optical Showroom" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Photo Gallery */}
      <AnimateOnScroll>
        <section style={{ background: 'var(--bg-cream)', borderRadius: 'var(--radius-lg)', padding: '48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[IMAGES.opticalPho1, IMAGES.opticalPho2, IMAGES.opticalPho3, IMAGES.opticalPho4].map((img, i) => (
              <div key={i} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img src={img} alt={`Showroom ${i + 1}`} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Showroom Description */}
      <AnimateOnScroll>
        <section className="showroom-section">
          <div className="showroom-grid">
            <div className="showroom-text">
              <h2 className="showroom-title">Lenses & Glasses</h2>
              <p className="showroom-desc">
                Our optical showroom offers the latest range of lenses, glasses and frames, both national and international. Whether you need corrective glasses or sunglasses that block harmful UV radiation, our expert optometrists will guide you to the perfect fit.
              </p>
              <div className="showroom-features">
                {lensOptions.map((option, i) => (
                  <div className="showroom-feature" key={i}>
                    <CheckCircle size={18} />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="showroom-image">
              <img
                src={IMAGES.opticalDesc}
                alt="Optical showroom interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Frame Types */}
      <AnimateOnScroll>
        <section className="brands-section">
          <div className="section-header">
            <span className="section-label"><span className="label-line" /> Frame Types</span>
            <h2 className="section-title">Frames We Offer</h2>
            <p className="section-subtitle">A wide selection of frame types to suit every style, comfort and prescription need.</p>
          </div>
          <div className="brand-grid optical-frame-grid">
            {frameTypes.map((frame, i) => (
              <div className="brand-card" key={i}>
                <div className="brand-name">{frame.name}</div>
                <div className="brand-tagline">{frame.tagline}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Visit CTA */}
      <AnimateOnScroll>
        <section className="visit-section">
          <div className="visit-grid">
            <div className="visit-info">
              <h2 className="visit-title">Visit Our Showroom</h2>
              <p className="visit-desc">
                Walk in to explore our collection or book an appointment for a personalised eyewear consultation with our certified optometrists.
              </p>
              <div className="visit-details">
                <div className="visit-detail">
                  <MapPin size={18} />
                  <span>O Block no 182 (old no 995), 2nd Avenue, Anna Nagar, Chennai 600040</span>
                </div>
                <div className="visit-detail">
                  <Phone size={18} />
                  <a href="tel:+914449023232">+91 44 49023232</a>
                </div>
                <div className="visit-detail">
                  <Clock size={18} />
                  <span>Mon - Sat: 9:30 AM - 8:00 PM | Sunday: Closed</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary-sm" style={{ marginTop: 8, width: 'fit-content' }}>
                Book Appointment
              </Link>
            </div>
            <div className="visit-map" style={{ minHeight: 280 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2!3d13.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e8b1d3e8c7%3A0x2e3b1d3e8b1d3e8c!2sUma+Eye+Clinic!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 280 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Uma Eye Clinic – Optical Showroom Location"
              />
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
