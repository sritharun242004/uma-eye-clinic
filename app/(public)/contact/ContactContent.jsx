'use client'

import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Calendar, MessageCircle } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'

// Fallback list when /api/doctors fails or DB has no doctors (e.g. production not seeded)
const FALLBACK_DOCTORS = [
  { id: '1', name: 'Dr. N. V. Arulmozhi Varman', designation: 'M.B.B.S, D.O, M.S Ophthalmology, Medical Director' },
  { id: '2', name: 'Mrs. Uma Varman', designation: 'Admin Director' },
  { id: '3', name: 'Dr. Aadithreya Varman', designation: 'M.S., Director of Uma Eye Clinic' },
  { id: '4', name: 'Dr. Venkateshar Ravisankar', designation: 'Vitreo-Retinal Surgeon' },
  { id: '5', name: 'Dr. M. P. Veenashree', designation: 'Corneal Surgeon' },
  { id: '6', name: 'Dr. Uma Ramesh', designation: 'Squint & Pediatric' },
  { id: '7', name: 'Dr. Kasinathan N', designation: 'Retina' },
  { id: '8', name: 'Dr. Prithi Udhay', designation: 'Oculoplasty & Facial Aesthetics' },
]

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    doctor: '',
    treatment: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [doctors, setDoctors] = useState([])
  const [doctorsLoading, setDoctorsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/doctors')
      .then(res => (res.ok ? res.json() : Promise.reject(new Error('API error'))))
      .then(data => {
        const list = Array.isArray(data) && data.length > 0 ? data : FALLBACK_DOCTORS
        setDoctors(list)
      })
      .catch(() => setDoctors(FALLBACK_DOCTORS))
      .finally(() => setDoctorsLoading(false))
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus(null)

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', email: '', date: '', time: '', doctor: '', treatment: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>

      {/* Form & Contact */}
      <AnimateOnScroll>
        <section style={{ padding: '80px 48px', background: 'var(--bg-cream)', borderRadius: 'var(--radius-lg)' }}>
          <div className="showroom-grid" style={{ gap: '40px' }}>
            {/* Left: Form */}
            <div style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Request an Appointment
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
                Fill in your details and we will get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      className="form-input"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Time</label>
                    <input
                      type="time"
                      name="time"
                      className="form-input"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Doctor</label>
                  <select
                    name="doctor"
                    className="form-select"
                    value={formData.doctor}
                    onChange={handleChange}
                    disabled={doctorsLoading}
                  >
                    <option value="">
                      {doctorsLoading ? 'Loading doctors...' : 'Select a doctor'}
                    </option>
                    {doctors.map(doc => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} {doc.designation ? `- ${doc.designation}` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Treatment</label>
                  <select
                    name="treatment"
                    className="form-select"
                    value={formData.treatment}
                    onChange={handleChange}
                  >
                    <option value="">Select a treatment</option>
                    <option value="cataract">Cataract Surgery</option>
                    <option value="lasik">LASIK</option>
                    <option value="smile">SMILE PRO</option>
                    <option value="presbyond">PRESBYOND</option>
                    <option value="glaucoma">Glaucoma Treatment</option>
                    <option value="retina">Retina Services</option>
                    <option value="pediatric">Pediatric Ophthalmology</option>
                    <option value="general">General Eye Checkup</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your concern or any specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div style={{ padding: '12px 16px', borderRadius: 8, background: '#D1FAE5', color: '#065F46', fontSize: 14 }}>
                    Your appointment request has been submitted successfully! We will contact you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{ padding: '12px 16px', borderRadius: 8, background: '#FEE2E2', color: '#991B1B', fontSize: 14 }}>
                    Something went wrong. Please try again or call us at <a href="tel:+919840491374" style={{ fontWeight: 600 }}>+91 98404 91374</a>.
                  </div>
                )}

                <button type="submit" className="btn btn-primary" disabled={submitting} style={{ alignSelf: 'flex-start' }}>
                  <Send size={18} />
                  {submitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>

            {/* Right: Contact Info + Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="contact-info-card">
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Contact Information
                </h3>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-info-label">Address</div>
                    <div className="contact-info-text">
                      O Block no 182 (old no 995), 2nd Avenue,<br />
                      Anna Nagar, Chennai 600040, India
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-text">
                      <a href="tel:+919840491374">+91 98404 91374</a><br />
                      <a href="tel:+914449023232">+91 44 49023232</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-text">
                      <a href="mailto:info@umaeyeclinic.in">info@umaeyeclinic.in</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="contact-info-label">WhatsApp</div>
                    <div className="contact-info-text">
                      <a href="https://wa.me/918123826296">+91 8123826296</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="contact-info-label">Working Hours</div>
                    <div className="contact-info-text">
                      Mon - Sat: 9:30 AM - 8:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '280px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2!3d13.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e8b1d3e8c7%3A0x2e3b1d3e8b1d3e8c!2sUma+Eye+Clinic!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Uma Eye Clinic Location"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
