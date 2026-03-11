import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { IMAGES } from '@/lib/images'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link href="/" className="footer-logo">
              <Image src={IMAGES.logo} alt="" width={28} height={28} className="footer-logo-img" />
              <span>Uma Eye Clinic</span>
            </Link>
            <p className="footer-desc">Chennai's trusted eye care centre, pioneering advanced ophthalmic solutions since 1984.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="Youtube"><Youtube size={16} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Clinic</Link></li>
              <li><Link href="/doctors">Our Doctors</Link></li>
              <li><Link href="/treatments">Treatments</Link></li>
              <li><Link href="/training">Training</Link></li>
              <li><Link href="/international">International Patients</Link></li>
              <li><Link href="/foundation">Vision Foundation</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/videos">Videos</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/treatments">SMILE PRO</Link></li>
              <li><Link href="/cataract">Cataract</Link></li>
              <li><Link href="/lasik">LASIK</Link></li>
              <li><Link href="/presbyond">Presbyond</Link></li>
              <li><Link href="/glaucoma">Glaucoma</Link></li>
              <li><Link href="/optical">Optical Showroom</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li><MapPin size={14} className="footer-contact-icon" /><span>O Block no 182 (old no 995), 2nd Avenue,<br/>Anna Nagar, Chennai 600040</span></li>
              <li><Phone size={14} className="footer-contact-icon" /><a href="tel:+914449023232">+91 44 49023232</a></li>
              <li><Mail size={14} className="footer-contact-icon" /><a href="mailto:info@umaeyeclinic.in">info@umaeyeclinic.in</a></li>
              <li><Clock size={14} className="footer-contact-icon" /><span>Mon - Sat: 9:30 AM - 8:00 PM<br/>Sunday: Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">Copyright @ 2019 umaeyeclinic. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link href="/faqs">FAQs</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
