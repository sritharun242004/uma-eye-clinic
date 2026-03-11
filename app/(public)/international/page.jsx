import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata = {
  title: 'International Patients | Uma Eye Clinic',
  description: 'Medical tourism eye care services at Uma Eye Clinic — world-class treatment combined with Eastern hospitality for international patients visiting Chennai, India.',
}

export default function International() {
  return (
    <>
      {/* Hero Banner */}
      <section className="intl-hero" style={{ position: 'relative' }}>
        <img
          src="/images/international/international-banner.webp"
          alt="International Patients Banner"
          className="intl-hero-bg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
      </section>

      {/* Introduction */}
      <AnimateOnScroll>
        <section className="intl-section">
          <p className="intl-intro">
            Uma Eye Clinic is much more than cutting-edge medical care. We unite exceptional success rates and superior technology with our century-old Eastern hospitality. We take extra care to address your concerns and queries to get you into your comfort zone before you embark on your journey.
          </p>
        </section>
      </AnimateOnScroll>

      {/* What to Bring - Icon Cards */}
      <AnimateOnScroll>
        <section className="intl-section">
          <div className="intl-icons-grid">
            <div className="intl-icon-card">
              <img src="/images/international/icon-1.webp" alt="Imaging Scans" />
              <p>CD copies of any scans like MRI/CT/ECHO.</p>
            </div>
            <div className="intl-icon-card">
              <img src="/images/international/icon-2.webp" alt="Medical Reports" />
              <p>Copy/originals of all medical reports &amp; medication details.</p>
            </div>
            <div className="intl-icon-card">
              <img src="/images/international/icon-3.webp" alt="Referral Notes" />
              <p>Any referral notes from your doctor.</p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Upon Arrival */}
      <AnimateOnScroll>
        <section className="intl-section">
          <h2 className="intl-section-heading">Upon Arrival</h2>
          <p className="intl-paragraph">
            You will be received at the airport by our representative and will be taken to a hotel or hospital as per the admission plan. Upon arrival at the hospital, you will be registered under our consultant who will be your primary doctor.
          </p>
        </section>
      </AnimateOnScroll>

      {/* Payment Methods */}
      <AnimateOnScroll>
        <section className="intl-section">
          <h2 className="intl-section-heading">Payment Methods</h2>
          <p className="intl-paragraph">
            You will need to pay a deposit as per the Procedure. In case it is a package, the package amount should be paid at the time of admission. We accept payments through Travelers Cheques, Credit Cards (Master, Visa, or Amex), and foreign currency. You will be given a receipt for all payments made to us and at the time of discharge an itemized bill will be issued. In case your visit has been coordinated through our representative office in your home country, you can pay us in advance through the representative office with our consent. For all your queries no matter how trivial write or call us. Our International Patient Service Coordinator will get in touch with you with the required clarification.
          </p>
        </section>
      </AnimateOnScroll>

      {/* Contact Section */}
      <AnimateOnScroll>
        <section className="intl-section intl-contact-section">
          <div className="intl-contact-grid">
            <div className="intl-contact-item">
              <img src="/images/international/map.webp" alt="Location" className="intl-contact-icon" />
              <p>Uma Eye Clinic, 1957, 10th Main Road, Anna Nagar West, Chennai 600040, India</p>
            </div>
            <div className="intl-contact-item">
              <img src="/images/international/mail.webp" alt="Email" className="intl-contact-icon" />
              <p>
                <a href="mailto:info@umaeyeclinic.in">info@umaeyeclinic.in</a>
              </p>
            </div>
            <div className="intl-contact-item">
              <img src="/images/international/call.webp" alt="Phone" className="intl-contact-icon" />
              <p>
                <a href="tel:+919840442288">+91 98404 42288</a>
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
