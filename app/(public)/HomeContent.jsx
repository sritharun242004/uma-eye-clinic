'use client'

import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { ArrowRight, CircleCheck, ScanEye, Eye, Zap, Glasses, Gauge, Layers, Activity, Scan, Droplet, Move, Cpu, Award, ShieldCheck, Users, GraduationCap, Star, Phone, Calendar, Clock, Play } from 'lucide-react'
import { IMAGES } from '@/lib/images'
import { useState, useEffect } from 'react'

export default function HomeContent() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const banners = [IMAGES.heroBanner, IMAGES.heroBanner2, IMAGES.heroBanner3, IMAGES.heroBanner4]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  const tickerItems = [
    'SMILE PRO Surgery Now Available',
    'NABH Accredited Hospital',
    'Free Eye Screening Every Saturday',
    'International Patient Services'
  ]

  const services = [
    { icon: <ScanEye size={28} />, name: 'SMILE PRO', desc: 'Most advanced technology in refractive laser treatments, robotic precision, flapless', link: '/treatments' },
    { icon: <Eye size={28} />, name: 'Cataract', desc: 'Most commonly performed surgery worldwide, precision and skill', link: '/cataract' },
    { icon: <Zap size={28} />, name: 'LASIK', desc: 'Blade-free laser eye surgery', link: '/lasik' },
    { icon: <Glasses size={28} />, name: 'Presbyond', desc: 'PRESBYOND\u00ae Laser Blended Vision from ZEISS for presbyopia', link: '/presbyond' },
    { icon: <Gauge size={28} />, name: 'Glaucoma', desc: 'Advanced pressure management', link: '/glaucoma' },
    { icon: <Layers size={28} />, name: 'Corneal Grafting', desc: 'Corneal transplant procedures', link: '/corneal-grafting' },
    { icon: <Activity size={28} />, name: 'Diabetic Retinopathy', desc: 'Diabetes-related eye care', link: '/diabetic-retinopathy' },
    { icon: <Scan size={28} />, name: 'Retina & Vitreous', desc: 'Retinal disorder treatment', link: '/retina-vitreous' },
    { icon: <Droplet size={28} />, name: 'Dry Eyes', desc: 'Chronic dry eye management', link: '/dry-eyes' },
    { icon: <Move size={28} />, name: 'Squint Correction', desc: 'Eye alignment surgery', link: '/squint' }
  ]

  const doctors = [
    { name: 'Dr. N. V. Arulmozhi Varman', role: 'M.B.B.S, D.O, M.S Ophthalmology, Medical Director', image: '/images/doctors/arulmozhi-varman.webp' },
    { name: 'Mrs. Uma Varman', role: 'Admin Director', image: '/images/doctors/team-member-2.webp' },
    { name: 'Dr. Aadithreya Varman', role: 'M.S., Director of Uma Eye Clinic', image: '/images/doctors/aadithreya-varman.webp' },
    { name: 'Dr. Venkateshar Ravisankar', role: 'Vitreo-Retinal Surgeon', image: '/images/doctors/venkateshar-ravisankar.webp' },
    { name: 'Dr. M. P. Veenashree', role: 'Corneal Surgeon', image: '/images/doctors/m-p-veenashree.webp' },
    { name: 'Dr. Uma Ramesh', role: 'Squint & Pediatric', image: '/images/doctors/team-member-10.webp' },
    { name: 'Dr. Kasinathan N', role: 'Retina', image: '/images/doctors/team-member-11.webp' },
    { name: 'Dr. Prithi Udhay', role: 'Oculoplasty & Facial Aesthetics', image: '/images/doctors/team-member-9.webp' },
  ]

  const testimonials = [
    { name: 'Preksha Dugar', procedure: 'SMILE PRO Surgery', quote: 'Dr. Aadithreya and the team were incredible. They made sure I was comfortable and informed at every step.', featured: true },
    { name: 'Rachel Regina', procedure: 'Eye Care', quote: 'Doctors at Uma Eye Clinic are true experts. They take great care of you.' },
    { name: 'Rupal Sancheti', procedure: 'SMILE PRO Surgery', quote: 'Got SMILE Pro surgery done a month ago. My vision has become much better.' },
    { name: 'Phyllis Edwards', procedure: 'General Eye Care', quote: 'Family has been patients for more than 15 years. Best experience.' },
    { name: 'Praveen Raj', procedure: 'SMILE Treatment', quote: 'Recently had SMILE treatment with Dr. Aadithreya Varman. Very pleased with results.' },
    { name: 'Keerthana Thamburaj', procedure: 'Vision Correction', quote: 'Recently underwent vision correction. More than happy with results.' }
  ]

  return (
    <>
      {/* Hero with rotating banners */}
      <AnimateOnScroll>
        <section className="hero">
          {banners.map((banner, i) => (
            <img
              key={i}
              src={banner}
              alt={`Uma Eye Clinic banner ${i + 1}`}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', zIndex: 0,
                opacity: currentBanner === i ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            />
          ))}
          <div className="home-hero-content">
            <div className="home-hero-actions">
              <Link href="/contact" className="hero-cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 40px', fontSize: 16, fontWeight: 700, borderRadius: 50, background: 'var(--primary)', color: '#fff', textDecoration: 'none', boxShadow: '0 6px 28px rgba(212,145,110,0.5)', animation: 'heroPulse 2s ease-in-out infinite' }}>
                <Calendar size={20} />
                Book an Appointment
              </Link>
              <Link href="/treatments" className="home-hero-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 40px', fontSize: 16, fontWeight: 700, borderRadius: 50, background: '#fff', color: 'var(--text-primary)', textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                Explore Treatments <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Announcement Ticker */}
      <AnimateOnScroll>
        <div className="announcement-ticker">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span className="ticker-item" key={i}>
                <span className="orange-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Trust Indicators */}
      <AnimateOnScroll>
        <section className="trust-indicators">
          <div className="trust-inner">
            <div className="trust-stat">
              <span className="trust-number">40+</span>
              <span className="trust-label">Years of Excellence</span>
            </div>
            <div className="trust-stat">
              <span className="trust-number">1500+</span>
              <span className="trust-label">SMILE PRO Surgeries</span>
            </div>
            <div className="trust-stat">
              <span className="trust-number">300+</span>
              <span className="trust-label">Ophthalmologists Trained</span>
            </div>
            <div className="trust-stat">
              <span className="trust-number">
                4.7 <Star size={20} className="trust-star" fill="var(--primary)" />
              </span>
              <span className="trust-label">Patient Rating</span>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* About Snapshot */}
      <AnimateOnScroll>
        <section className="about-snapshot">
          <div className="about-snapshot-inner">
            <div className="about-snapshot-image">
              <img src={IMAGES.aboutSnapshot} alt="Uma Eye Clinic" style={{width:'100%',height:'480px',objectFit:'cover',borderRadius:'20px'}} />
            </div>
            <div className="about-snapshot-content">
              <div className="section-label">
                <span className="label-line" />
                ABOUT US
              </div>
              <h2 className="section-title">Pioneering Eye Care Since 1984</h2>
              <p>
                Uma Eye Clinic is a state-of-the-art tertiary care, super specialty eye care center in Anna Nagar, Chennai. Since its inception in 1984, our journey began with a commitment to provide cutting-edge treatments across all facets of ophthalmology.
              </p>
              <div className="pioneer-milestones">
                <div className="milestone-item">
                  <CircleCheck size={18} className="milestone-icon" />
                  First SMILE PRO centre in Tamil Nadu
                </div>
                <div className="milestone-item">
                  <CircleCheck size={18} className="milestone-icon" />
                  NABH accredited facility
                </div>
                <div className="milestone-item">
                  <CircleCheck size={18} className="milestone-icon" />
                  Trained 300+ ophthalmologists worldwide
                </div>
                <div className="milestone-item">
                  <CircleCheck size={18} className="milestone-icon" />
                  State-of-the-art robotic laser technology
                </div>
              </div>
              <Link href="/about" className="link-cta">
                Learn Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Featured Treatments */}
      <AnimateOnScroll>
        <section className="featured-treatments">
          <div className="featured-treatments-inner">
            <div className="section-header">
              <div className="section-label">
                <span className="label-line" />
                FEATURED
              </div>
              <h2 className="section-title centered">Advanced Treatment Options</h2>
              <p className="section-subtitle centered">Pioneering procedures that deliver exceptional visual outcomes with minimal recovery time.</p>
            </div>
            <div className="featured-cards">
              <div className="featured-card">
                <div className="featured-card-badge">First in Tamil Nadu</div>
                <div className="featured-card-icon">
                  <ScanEye size={28} />
                </div>
                <h3 className="featured-card-title">SMILE PRO</h3>
                <p className="featured-card-desc">Most advanced technology in refractive laser treatments, robotic precision, flapless. Completed in just 9 seconds per eye.</p>
                <Link href="/treatments" className="link-cta">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
              <div className="featured-card">
                <div className="featured-card-icon style-blue">
                  <Eye size={28} />
                </div>
                <h3 className="featured-card-title">Cataract</h3>
                <p className="featured-card-desc">Most commonly performed surgery worldwide, with precision and skill. Premium IOL implantation for crystal-clear vision restoration.</p>
                <Link href="/cataract" className="link-cta">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
              <div className="featured-card">
                <div className="featured-card-badge">40+ Age Group</div>
                <div className="featured-card-icon">
                  <Glasses size={28} />
                </div>
                <h3 className="featured-card-title">PRESBYOND</h3>
                <p className="featured-card-desc">PRESBYOND&reg; Laser Blended Vision from ZEISS for presbyopia. Frees you from reading glasses, ideal for correction after 40.</p>
                <Link href="/presbyond" className="link-cta">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* All Services */}
      <AnimateOnScroll>
        <section className="all-services">
          <div className="all-services-inner">
            <div className="section-header">
              <div className="section-label">
                <span className="label-line" />
                OUR SERVICES
              </div>
              <h2 className="section-title centered">Comprehensive Eye Care</h2>
              <p className="section-subtitle centered">From routine check-ups to complex surgical procedures, we offer a full spectrum of ophthalmic services.</p>
            </div>
            <div className="services-grid">
              {services.map((s, i) => (
                <Link href={s.link} className="service-card" key={i}>
                  <div className="service-icon">{s.icon}</div>
                  <h4 className="service-name">{s.name}</h4>
                  <p className="service-desc">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Why Choose Us */}
      <AnimateOnScroll>
        <section className="why-choose-us">
          <div className="why-choose-inner">
            <div className="section-header">
              <div className="section-label">
                <span className="label-line" />
                WHY US
              </div>
              <h2 className="section-title centered">Why Choose Uma Eye Clinic</h2>
            </div>
            <div className="bento-grid">
              <div className="bento-row">
                <div className="bento-card bento-tech">
                  <Cpu size={32} className="bento-icon" />
                  <h3 className="bento-title">Cutting-Edge Technology</h3>
                  <p className="bento-desc">Equipped with ZEISS VisuMax 800, femtosecond lasers, and AI-powered diagnostic systems for unparalleled precision.</p>
                </div>
                <div className="bento-card bento-pioneer">
                  <Award size={32} className="bento-icon" />
                  <h3 className="bento-title">Pioneer in Innovation</h3>
                  <p className="bento-desc">First in Tamil Nadu to introduce SMILE PRO surgery with over 1500+ successful procedures.</p>
                </div>
              </div>
              <div className="bento-row">
                <div className="bento-card bento-nabh">
                  <ShieldCheck size={32} className="bento-icon" />
                  <h3 className="bento-title">NABH Accredited</h3>
                  <p className="bento-desc">Nationally accredited for quality and patient safety standards, ensuring world-class healthcare delivery.</p>
                </div>
                <div className="bento-card bento-team">
                  <Users size={32} className="bento-icon" />
                  <h3 className="bento-title">Expert Team</h3>
                  <p className="bento-desc">Led by internationally trained ophthalmologists with decades of combined experience in subspecialty eye care.</p>
                </div>
                <div className="bento-card bento-training">
                  <GraduationCap size={32} className="bento-icon" />
                  <h3 className="bento-title">Training Hub</h3>
                  <p className="bento-desc">A recognized training centre that has mentored 300+ ophthalmologists from across India and abroad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Doctor Spotlight */}
      <AnimateOnScroll>
        <section className="doctor-spotlight">
          <div className="doctor-spotlight-inner">
            <div className="section-header">
              <div className="section-label">
                <span className="label-line" />
                OUR DOCTORS
              </div>
              <h2 className="section-title centered">Meet Our Specialists</h2>
              <p className="section-subtitle centered">Our team of experienced ophthalmologists brings expertise across every subspecialty of eye care.</p>
            </div>
            <div className="doctor-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {doctors.map((doc, i) => (
                <Link href="/doctors" className="doctor-card" key={i}>
                  <div className="doctor-image">
                    <img src={doc.image} alt={doc.name} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                  </div>
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doc.name}</h3>
                    <p className="doctor-role">{doc.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Awards Section */}
      <AnimateOnScroll>
        <section className="home-awards-section">
          <h2 className="home-awards-title">Awards & Achievements</h2>
          <div className="home-awards-grid">
            {[IMAGES.award1, IMAGES.award2, IMAGES.award3].map((img, i) => (
              <div key={i} className="home-awards-item">
                <img src={img} alt={`Award ${i + 1}`} style={{ width: 180, height: 180, objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Video Thumbnails Section */}
      <AnimateOnScroll>
        <section className="home-videos-section">
          <div className="section-header-row">
            <div>
              <div className="section-label">
                <span className="label-line" />
                WATCH & LEARN
              </div>
              <h2 className="section-title" style={{ marginTop: 16 }}>Patient Stories & Insights</h2>
            </div>
            <Link href="/videos" className="link-cta">
              View All Videos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="home-videos-grid">
            {[
              { ytId: 'lvYxlDD8yg8', title: 'SMILE Pro Procedure' },
              { ytId: 'X4P8tY76Sdk', title: 'Modern Cataract Surgery' },
              { ytId: 'LhwwAWC09VI', title: 'Glasses or LASIK?' },
              { ytId: 'JSo5apXWeqQ', title: 'Eye Test At Home' },
              { ytId: 'H7yiwL1Q5LM', title: 'Eye Floaters' },
            ].map((vid, i) => (
              <a href={`https://www.youtube.com/watch?v=${vid.ytId}`} target="_blank" rel="noopener noreferrer" key={i} className="home-video-thumb">
                <img src={`https://img.youtube.com/vi/${vid.ytId}/hqdefault.jpg`} alt={vid.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div className="home-video-overlay">
                  <div className="home-video-play">
                    <Play size={20} fill="white" color="white" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Testimonials */}
      <AnimateOnScroll>
        <section className="testimonials">
          <div className="testimonials-inner">
            <div className="section-header">
              <div className="section-label">
                <span className="label-line" />
                TESTIMONIALS
              </div>
              <h2 className="section-title centered">What Our Patients Say</h2>
            </div>
            <div className="testimonial-grid">
              <div className="testimonial-col">
                <div className={`testimonial-card${testimonials[0].featured ? ' testimonial-featured' : ''}`}>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="star-filled" fill="var(--primary)" />)}
                  </div>
                  <p className="testimonial-quote">&ldquo;{testimonials[0].quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{testimonials[0].name}</span>
                    <span className="testimonial-procedure">{testimonials[0].procedure}</span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="star-filled" fill="var(--primary)" />)}
                  </div>
                  <p className="testimonial-quote">&ldquo;{testimonials[1].quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{testimonials[1].name}</span>
                    <span className="testimonial-procedure">{testimonials[1].procedure}</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-col">
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="star-filled" fill="var(--primary)" />)}
                  </div>
                  <p className="testimonial-quote">&ldquo;{testimonials[2].quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{testimonials[2].name}</span>
                    <span className="testimonial-procedure">{testimonials[2].procedure}</span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="star-filled" fill="var(--primary)" />)}
                  </div>
                  <p className="testimonial-quote">&ldquo;{testimonials[3].quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{testimonials[3].name}</span>
                    <span className="testimonial-procedure">{testimonials[3].procedure}</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-col">
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="star-filled" fill="var(--primary)" />)}
                  </div>
                  <p className="testimonial-quote">&ldquo;{testimonials[4].quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{testimonials[4].name}</span>
                    <span className="testimonial-procedure">{testimonials[4].procedure}</span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="star-filled" fill="var(--primary)" />)}
                  </div>
                  <p className="testimonial-quote">&ldquo;{testimonials[5].quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{testimonials[5].name}</span>
                    <span className="testimonial-procedure">{testimonials[5].procedure}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Optical Showroom Teaser */}
      <AnimateOnScroll>
        <section className="optical-showroom">
          <div className="optical-showroom-bg">
            <img src={IMAGES.opticalShowroom} alt="Optical Showroom" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute'}} />
            <div className="optical-overlay" />
          </div>
          <div className="optical-content">
            <div className="section-label" style={{color:'var(--text-light)'}}>
              <span className="label-line" style={{background:'var(--text-light)'}} />
              OPTICAL SHOWROOM
            </div>
            <h2 className="optical-title">Premium Eyewear Collection</h2>
            <p className="optical-subtitle">Explore our curated collection of designer frames, precision lenses, and specialized eyewear from world-renowned brands.</p>
            <Link href="/optical" className="btn btn-ghost">
              Visit Showroom <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Blog Preview */}
      <AnimateOnScroll>
        <section className="blog-preview">
          <div className="blog-preview-inner">
            <div className="section-header-row">
              <div>
                <div className="section-label">
                  <span className="label-line" />
                  FROM OUR BLOG
                </div>
                <h2 className="section-title" style={{marginTop:'16px'}}>Latest Insights</h2>
              </div>
              <Link href="/blog" className="link-cta">
                View All Articles <ArrowRight size={16} />
              </Link>
            </div>
            <div className="blog-cards">
              <Link href="/blog" className="blog-card">
                <div className="blog-card-image">
                  <img src={IMAGES.blogHome1} alt="SMILE Laser Surgery" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                  <span className="blog-tag tag-treatment">Treatment</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">SMILE! - Everything You Need to Know About SMILE Laser Surgery</h3>
                  <div className="blog-card-meta">
                    <span><Clock size={12} className="meta-icon" /> 5 min read</span>
                  </div>
                </div>
              </Link>
              <Link href="/blog" className="blog-card">
                <div className="blog-card-image">
                  <img src={IMAGES.blogHome2} alt="LASIK" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                  <span className="blog-tag tag-treatment">Treatment</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">LASIK - A Complete Guide to Laser Vision Correction</h3>
                  <div className="blog-card-meta">
                    <span><Clock size={12} className="meta-icon" /> 4 min read</span>
                  </div>
                </div>
              </Link>
              <Link href="/blog" className="blog-card">
                <div className="blog-card-image">
                  <img src={IMAGES.blogHome3} alt="Glaucoma" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                  <span className="blog-tag tag-wellness">Wellness</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">Glaucoma - Understanding the Silent Thief of Sight</h3>
                  <div className="blog-card-meta">
                    <span><Clock size={12} className="meta-icon" /> 6 min read</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Banner */}
      <AnimateOnScroll>
        <section className="cta-banner">
          <div className="cta-banner-inner">
            <h2 className="cta-banner-title">Your Vision is Our Mission</h2>
            <p className="cta-banner-subtitle">Schedule a consultation with our expert team and take the first step towards clearer, brighter vision. Call us at +91 98404 91374 / +91 44 49023232</p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-cta-primary">
                <Calendar size={18} /> Book an Appointment
              </Link>
              <a href="tel:+919840491374" className="btn btn-cta-ghost">
                <Phone size={18} /> Call Us Now
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
