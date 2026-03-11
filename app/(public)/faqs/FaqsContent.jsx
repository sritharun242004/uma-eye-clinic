'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, HelpCircle, Eye, Monitor, Gauge, Layers, Activity, Phone, ArrowRight, Mail } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

const faqCategories = [
  { id: 'retinal', label: 'Retinal Detachment', icon: Eye },
  { id: 'cvs', label: 'Computer Vision Syndrome', icon: Monitor },
  { id: 'cataract', label: 'Cataract', icon: Eye },
  { id: 'glaucoma', label: 'Glaucoma', icon: Gauge },
  { id: 'corneal', label: 'Corneal Grafting', icon: Layers },
  { id: 'diabetic', label: 'Diabetic Eye Issues', icon: Activity }
]

const faqItems = [
  // Retinal Detachment
  {
    id: 1,
    category: 'retinal',
    question: 'Who is at risk for retinal detachment?',
    answer: 'People over 40 years of age are more at risk. Men are more likely to develop retinal detachment than women. Those who are nearsighted, have a family history of retinal detachment, or have other eye diseases are also at higher risk.'
  },
  {
    id: 2,
    category: 'retinal',
    question: 'What is retinal detachment?',
    answer: 'Retinal detachment is a condition where the retina is pulled from its normal position at the back of the eye. It is a medical emergency that requires prompt treatment to prevent permanent vision loss.'
  },
  {
    id: 3,
    category: 'retinal',
    question: 'What are the symptoms of retinal detachment?',
    answer: 'The symptoms include a sudden increase in floaters (small dark spots or squiggly lines that float across your vision), flashes of light in one or both eyes, and a curtain-like shadow over your field of vision.'
  },
  // Computer Vision Syndrome
  {
    id: 4,
    category: 'cvs',
    question: 'What is Computer Vision Syndrome?',
    answer: 'Computer Vision Syndrome (CVS) refers to a group of vision-related problems that result from prolonged computer, tablet, e-reader, and cell phone use. It is also known as Digital Eye Strain.'
  },
  {
    id: 5,
    category: 'cvs',
    question: 'What are the symptoms of Computer Vision Syndrome?',
    answer: 'Common symptoms include eye strain, blurred vision, dry eyes, and headaches. Some people may also experience neck and shoulder pain due to poor posture while using digital devices.'
  },
  {
    id: 6,
    category: 'cvs',
    question: 'Who is affected by Computer Vision Syndrome?',
    answer: 'About 75% of computer users who work 3-4 or more hours a day on computers are affected by Computer Vision Syndrome. The condition is becoming increasingly common as digital device usage continues to rise.'
  },
  {
    id: 7,
    category: 'cvs',
    question: 'What are the reasons for Computer Vision Syndrome?',
    answer: 'The main reasons include uncorrected refractive error, decreased blink rate while using screens, glare from digital screens, and poor ergonomics such as improper viewing distance, angle, and lighting conditions.'
  },
  // Cataract
  {
    id: 8,
    category: 'cataract',
    question: 'What is a cataract?',
    answer: 'A cataract is a clouding of the natural lens inside the eye, which leads to blurred vision. The lens, which is normally clear, sits behind the iris and the pupil. When it becomes cloudy, it prevents light from passing clearly to the retina, causing vision problems.'
  },
  {
    id: 9,
    category: 'cataract',
    question: 'What are the symptoms of cataract?',
    answer: 'Symptoms include cloudy or blurry vision, problems with glare from lamps or sunlight, faded or washed-out colors, poor night vision, double vision in the affected eye, and frequent changes in eyeglass or contact lens prescription.'
  },
  {
    id: 10,
    category: 'cataract',
    question: 'Who gets cataracts?',
    answer: 'Cataracts are most common in people over 60 years of age. However, infants can also be born with congenital cataracts. Other risk factors include diabetes, prolonged exposure to sunlight, smoking, and a family history of cataracts.'
  },
  {
    id: 11,
    category: 'cataract',
    question: 'How is cataract treated?',
    answer: 'Cataract is treated with surgery, which typically takes about 10-20 minutes and is performed under local anesthesia. During the procedure, the cloudy natural lens is removed and replaced with an artificial intraocular lens (IOL) to restore clear vision.'
  },
  {
    id: 12,
    category: 'cataract',
    question: 'How effective is cataract surgery?',
    answer: 'Cataract surgery has a success rate of over 98%. It is one of the most commonly performed and safest surgical procedures in medicine today, with the vast majority of patients experiencing significantly improved vision after surgery.'
  },
  {
    id: 13,
    category: 'cataract',
    question: 'What is the cost of cataract surgery?',
    answer: 'The cost of cataract surgery typically ranges from Rs 20,000 to Rs 50,000 per eye, depending on the type of intraocular lens (IOL) chosen and the surgical technique used. Premium lenses such as multifocal or toric IOLs may cost more.'
  },
  // Glaucoma
  {
    id: 14,
    category: 'glaucoma',
    question: 'What is glaucoma?',
    answer: 'Glaucoma is a condition caused by an abnormal rise in the pressure of the aqueous humor (the fluid inside the eye). The normal intraocular pressure ranges from 12-18 mmHg. When this pressure rises beyond normal levels, it can damage the optic nerve and lead to vision loss.'
  },
  {
    id: 15,
    category: 'glaucoma',
    question: 'Can glaucoma be cured?',
    answer: 'No, glaucoma cannot be cured. It can only be controlled with proper treatment. Vision that has already been lost due to glaucoma cannot be regained. This is why early detection and treatment are crucial to prevent further vision loss.'
  },
  {
    id: 16,
    category: 'glaucoma',
    question: 'Who gets glaucoma?',
    answer: 'People over 40, those with a family history of glaucoma, diabetics, individuals with high intraocular pressure, nearsighted people, those who have used steroids for prolonged periods, and people with a history of eye injury are at higher risk of developing glaucoma.'
  },
  {
    id: 17,
    category: 'glaucoma',
    question: 'How is intraocular pressure (IOP) measured?',
    answer: 'Intraocular pressure is measured using an instrument called a tonometer. This is a painless test that can be performed during a routine eye examination. Regular IOP monitoring is essential for early detection and management of glaucoma.'
  },
  {
    id: 18,
    category: 'glaucoma',
    question: 'What causes high intraocular pressure?',
    answer: 'High intraocular pressure is caused by the clogging of the drainage paths and chambers inside the eye, which prevents the aqueous humor from draining properly. When the fluid cannot drain at the rate it is produced, pressure builds up inside the eye.'
  },
  {
    id: 19,
    category: 'glaucoma',
    question: 'How is glaucoma treated?',
    answer: 'Glaucoma is a chronic disease that requires ongoing management. Treatment typically begins with medication (eye drops) to lower intraocular pressure. If medication is unsuccessful in controlling the pressure, surgical procedures may be recommended to improve fluid drainage from the eye.'
  },
  // Corneal Grafting
  {
    id: 20,
    category: 'corneal',
    question: 'What is corneal grafting?',
    answer: 'Corneal grafting, also known as corneal transplantation, is a surgical procedure in which a damaged or diseased cornea is replaced by a healthy cornea obtained from a deceased donor.'
  },
  {
    id: 21,
    category: 'corneal',
    question: 'What is the cornea?',
    answer: 'The cornea is the clear, dome-shaped outer layer at the front of the eye. It plays a crucial role in focusing and transmitting light into the eye, contributing to a significant portion of the eye\'s total focusing power.'
  },
  {
    id: 22,
    category: 'corneal',
    question: 'Who needs a corneal graft?',
    answer: 'Patients who may need a corneal graft include those with congenital abnormalities of the cornea, corneas that have become clouded from disease, corneas damaged by trauma or injury, and those with degenerative corneal conditions.'
  },
  {
    id: 23,
    category: 'corneal',
    question: 'Who can donate their cornea?',
    answer: 'Anyone can pledge to donate their corneas after death, regardless of age, gender, or blood type. However, corneas from individuals with infectious diseases such as HIV, hepatitis, or certain other communicable diseases cannot be used for transplantation.'
  },
  {
    id: 24,
    category: 'corneal',
    question: 'What care should be taken after corneal grafting surgery?',
    answer: 'After surgery, patients should not rub their eyes, avoid exposure to dust and pollution, wear sunglasses when outdoors, avoid contact sports and strenuous activities, and take 2-4 weeks off from work to allow proper healing. Follow all medication schedules and attend follow-up appointments as directed by your doctor.'
  },
  // Diabetic Eye Issues
  {
    id: 25,
    category: 'diabetic',
    question: 'Does diabetes cause eye problems?',
    answer: 'Yes, diabetes can cause several eye problems including diabetic retinopathy, glaucoma, cataracts, and eye infections. Diabetic retinopathy is the most common and serious diabetic eye disease, caused by damage to the blood vessels in the retina.'
  },
  {
    id: 26,
    category: 'diabetic',
    question: 'What are the symptoms of diabetic retinopathy?',
    answer: 'In the early stages, diabetic retinopathy may have no noticeable symptoms. As the condition progresses, symptoms may include floaters (dark spots or strings floating in your vision) and a mild reduction in vision. This is why regular eye examinations are essential for diabetic patients to detect changes early.'
  },
]

export default function FaqsContent() {
  const [activeCategory, setActiveCategory] = useState('retinal')
  const [openFaq, setOpenFaq] = useState(null)

  const filteredFaqs = faqItems.filter(item => item.category === activeCategory)

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.faqBanner} alt="FAQ" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* FAQ Section */}
      <AnimateOnScroll>
        <section className="faq-section">
          <div className="faq-container">
            {/* Sidebar */}
            <div className="faq-sidebar">
              {faqCategories.map(cat => {
                const Icon = cat.icon
                return (
                  <button
                    key={cat.id}
                    className={`faq-category${activeCategory === cat.id ? ' active' : ''}`}
                    onClick={() => { setActiveCategory(cat.id); setOpenFaq(null) }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon size={16} />
                      {cat.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* FAQ List */}
            <div className="faq-list">
              <div className="faq-section-group">
                {filteredFaqs.map(faq => (
                  <div key={faq.id} className={`faq-item${openFaq === faq.id ? ' active' : ''}`}>
                    <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                      <span>{faq.question}</span>
                      <ChevronDown size={18} />
                    </div>
                    <div className="faq-answer">
                      <div className="faq-answer-content">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Still Have Questions CTA */}
      <AnimateOnScroll>
        <section className="faq-cta">
          <div className="involve-icon-circle" style={{ background: 'rgba(212,145,110,0.12)' }}>
            <HelpCircle size={32} color="var(--primary)" />
          </div>
          <h2 className="section-title centered">Still Have Questions?</h2>
          <p className="section-subtitle centered">
            Our team is happy to help you with any queries. Reach out to us by phone or email, or book an appointment to speak with a specialist.
          </p>
          <div className="cta-banner-actions">
            <Link href="/contact" className="btn btn-primary">
              <Phone size={18} />
              Contact Us
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              <Mail size={18} />
              Book Appointment
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
