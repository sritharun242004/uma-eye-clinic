const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const doctors = [
  {
    name: 'Dr. N.V. Arulmozhi Varman',
    department: 'Ophthalmology',
    education: 'M.B.B.S, D.O, M.S Ophthalmology',
    designation: 'Medical Director',
    image: '/images/doctors/arulmozhi-varman.webp',
    bio: 'A pioneer in Phacoemulsification, Dr. Arulmozhi Varman introduced multifocal IOLs to the region. A master surgeon with over 30 years of experience, he has trained 300+ ophthalmologists and conducted over 150 PHACO training programmes.',
    active: true,
    order: 1,
  },
  {
    name: 'Mrs. Uma Varman',
    department: 'Administration',
    education: '',
    designation: 'Admin Director',
    image: '/images/doctors/team-member-2.webp',
    bio: '',
    active: true,
    order: 2,
  },
  {
    name: 'Dr. Aadithreya Varman',
    department: 'Cataract & Refractive Surgery',
    education: 'M.S',
    designation: 'Director of Uma Eye Clinic',
    image: '/images/doctors/aadithreya-varman.webp',
    bio: '',
    active: true,
    order: 3,
  },
  {
    name: 'Dr. Venkateshar Ravisankar',
    department: 'Vitreo-Retinal Surgery',
    education: '',
    designation: 'Vitreo-Retinal Surgeon',
    image: '/images/doctors/venkateshar-ravisankar.webp',
    bio: '',
    active: true,
    order: 4,
  },
  {
    name: 'Dr. M.P. Veenashree',
    department: 'Corneal Surgery',
    education: '',
    designation: 'Corneal Surgeon',
    image: '/images/doctors/m-p-veenashree.webp',
    bio: '',
    active: true,
    order: 5,
  },
  {
    name: 'Dr. Uma Ramesh',
    department: 'Squint & Pediatric Ophthalmology',
    education: '',
    designation: 'Squint & Pediatric',
    image: '/images/doctors/team-member-10.webp',
    bio: '',
    active: true,
    order: 6,
  },
  {
    name: 'Dr. Kasinathan N',
    department: 'Retina',
    education: '',
    designation: 'Retina',
    image: '/images/doctors/team-member-11.webp',
    bio: '',
    active: true,
    order: 7,
  },
  {
    name: 'Dr. Prithi Udhay',
    department: 'Oculoplasty',
    education: '',
    designation: 'Oculoplasty & Facial Aesthetics',
    image: '/images/doctors/team-member-9.webp',
    bio: '',
    active: true,
    order: 8,
  },
]

const blogPosts = [
  {
    slug: 'presbyond-glasses-free-vision',
    title: 'Rediscover Your Freedom: Presbyond for Glasses-Free Vision After 40',
    excerpt: 'Imagine a world without the constant struggle of searching for your glasses, the frustration of fogged lenses, or the limitations imposed by progressive lenses.',
    content: JSON.stringify([
      'Imagine a world without the constant struggle of searching for your glasses, the frustration of fogged lenses, or the limitations imposed by progressive lenses. For millions of people over the age of 40, presbyopia — the gradual loss of the eye\'s ability to focus on nearby objects — is an inevitable part of ageing.',
      '## What Is Presbyopia?',
      'Presbyopia is a completely natural part of ageing. As we get older, the lens inside the eye gradually loses its flexibility, making it harder to focus on close-up objects. By the age of 45, almost everyone experiences some degree of presbyopia, typically reaching for reading glasses or bifocals.',
      '## How PRESBYOND Works',
      'PRESBYOND (developed by Carl Zeiss) is a laser blended vision technique that adjusts each eye slightly differently:\n\n- **The dominant eye** is corrected for distance vision\n- **The non-dominant eye** is corrected for near vision\n- A unique **blend zone** is created where the two focal points overlap\n\nThe brain seamlessly merges the images from both eyes, providing a continuous range of clear vision from near to far — without the jarring transition of traditional monovision.',
      '## Am I a Candidate?',
      'PRESBYOND may be suitable if you:\n\n- Are over 40 years old\n- Rely on reading glasses for close-up tasks\n- Want to reduce or eliminate dependence on glasses\n- Have healthy eyes with no significant disease\n\nA comprehensive assessment including corneal mapping, wavefront analysis, and dominant eye testing will confirm your suitability.',
      '## The Procedure',
      'PRESBYOND is a quick outpatient procedure:\n\n1. Anaesthetic eye drops are applied — no injections\n2. The laser treatment takes approximately 30 seconds per eye\n3. Both eyes are treated in a single session\n4. Total time in the laser suite: about 15 minutes',
      '## Recovery and Results',
      'Most patients notice improved vision within 24 hours. The blend zone adaptation typically takes 1–2 weeks as your brain learns to merge the images. Over 97% of patients achieve functional near and distance vision without glasses.',
      '## Is PRESBYOND Right for You?',
      'At Uma Eye Clinic, we have helped hundreds of patients over 40 regain their visual independence. Book a consultation to find out if PRESBYOND can work for you.',
    ]),
    image: '/images/blog/blog1.webp',
    tag: 'Treatment Guides',
    tagClass: 'tag-treatment-guides',
    category: 'treatment-guides',
    author: 'Dr. Aadithreya Varman',
    readTime: '6 min read',
    published: true,
    publishedAt: new Date('2025-01-23'),
  },
  {
    slug: 'smile-and-smile-pro',
    title: 'SMILE and SMILE Pro: The Evolution of Vision Correction',
    excerpt: 'At Uma Eye Clinic in Anna Nagar, Chennai, we\'ve always been committed to providing our patients with the most advanced and effective vision correction.',
    content: JSON.stringify([
      'At Uma Eye Clinic in Anna Nagar, Chennai, we\'ve always been committed to providing our patients with the most advanced and effective vision correction treatments available.',
      '## What Is SMILE?',
      'SMILE (Small Incision Lenticule Extraction) is a minimally invasive laser vision correction procedure.',
      '## How SMILE Pro Works',
      'SMILE PRO is the latest evolution in laser vision correction, using the Zeiss VisuMax 800.',
      '## Key Advantages',
      '**Minimally invasive:** No flap creation means greater corneal stability.\n\n**Reduced dry eye risk:** SMILE preserves more corneal nerves.',
    ]),
    image: '/images/blog/blog2.webp',
    tag: 'Treatment Guides',
    tagClass: 'tag-treatment-guides',
    category: 'treatment-guides',
    author: 'Dr. Aadithreya Varman',
    readTime: '7 min read',
    published: true,
    publishedAt: new Date('2024-12-31'),
  },
  {
    slug: 'smile',
    title: 'SMILE! Everything About Small Incision Lenticule Extraction',
    excerpt: 'SMILE is the most recent and advanced form of laser-assisted refractive surgery.',
    content: JSON.stringify([
      'SMILE is the most recent and advanced form of laser-assisted refractive surgery. SMILE stands for \'Small Incision Lenticule Extraction\'.',
      '## How Does SMILE Work?',
      'SMILE uses a femtosecond laser to create a small, lens-shaped piece of tissue within the cornea.',
    ]),
    image: '/images/blog/blog3.webp',
    tag: 'Treatment Guides',
    tagClass: 'tag-treatment-guides',
    category: 'treatment-guides',
    author: 'Dr. N.V. Arulmozhi Varman',
    readTime: '6 min read',
    published: true,
    publishedAt: new Date('2024-12-03'),
  },
  {
    slug: 'lasik-guide',
    title: 'LASIK: A Complete Guide to Laser Vision Correction',
    excerpt: 'Individuals wearing glasses to see clearly can have their glasses removed and have perfect vision without glasses.',
    content: JSON.stringify([
      'LASIK has been the gold standard in refractive surgery for over two decades.',
      '## What Is LASIK?',
      'LASIK is a laser eye surgery that permanently changes the shape of the cornea.',
    ]),
    image: '/images/blog/blog4.webp',
    tag: 'Treatment Guides',
    tagClass: 'tag-treatment-guides',
    category: 'treatment-guides',
    author: 'Dr. N.V. Arulmozhi Varman',
    readTime: '7 min read',
    published: true,
    publishedAt: new Date('2024-12-03'),
  },
  {
    slug: 'glaucoma-silent-thief',
    title: 'GLAUCOMA: Understanding the Silent Thief of Sight',
    excerpt: 'The eye is a fluid filled structure. The increase in eye pressure damages the nerve of the eye.',
    content: JSON.stringify([
      'Glaucoma is one of the leading causes of irreversible blindness worldwide.',
      '## Why Is Glaucoma Called the Silent Thief of Sight?',
      'It often progresses without symptoms until significant vision loss has occurred.',
    ]),
    image: '/images/blog/blog5.webp',
    tag: 'Eye Health',
    tagClass: 'tag-eye-health',
    category: 'eye-health',
    author: 'Dr. N.V. Arulmozhi Varman',
    readTime: '6 min read',
    published: true,
    publishedAt: new Date('2024-12-03'),
  },
  {
    slug: 'digital-eye-strain',
    title: 'Digital Eye Strain: Protecting Your Vision in a Screen-First World',
    excerpt: 'Practical tips and expert recommendations for reducing eye fatigue and protecting long-term eye health.',
    content: JSON.stringify([
      'In today\'s world, most of us spend 8–10 hours a day staring at screens.',
      '## What Is Digital Eye Strain?',
      'Digital eye strain is a group of eye and vision-related problems from prolonged screen use.',
    ]),
    image: '/images/blog/blog6.webp',
    tag: 'Eye Health',
    tagClass: 'tag-eye-health',
    category: 'eye-health',
    author: 'Dr. Uma Mallaiah',
    readTime: '5 min read',
    published: true,
    publishedAt: new Date('2026-02-08'),
  },
]

async function main() {
  console.log('Seeding database...')

  // Create admin user
  const passwordHash = await bcrypt.hash('admin123', 12)
  await prisma.adminUser.upsert({
    where: { email: 'admin@umaeyeclinic.in' },
    update: {},
    create: {
      email: 'admin@umaeyeclinic.in',
      passwordHash,
      name: 'Admin',
      role: 'admin',
    },
  })
  console.log('Admin user created: admin@umaeyeclinic.in / admin123')

  // Seed doctors
  for (const doc of doctors) {
    const existing = await prisma.doctor.findFirst({ where: { name: doc.name } })
    if (!existing) {
      await prisma.doctor.create({ data: doc })
    }
  }
  console.log(`${doctors.length} doctors seeded`)

  // Seed blog posts
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }
  console.log(`${blogPosts.length} blog posts seeded`)

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
