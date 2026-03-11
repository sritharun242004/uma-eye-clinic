import './globals.css'

export const metadata = {
  title: 'Uma Eye Clinic | Advanced Eye Care in Chennai',
  description: 'Uma Eye Clinic is a NABH-accredited, state-of-the-art eye care centre in Anna Nagar, Chennai. Offering SMILE PRO, LASIK, cataract surgery, and comprehensive ophthalmic services since 1984.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
