import './globals.css'
import { IMAGES } from '@/lib/images'

export const metadata = {
  title: 'Uma Eye Clinic | Advanced Eye Care in Chennai',
  description: 'Uma Eye Clinic is a NABH-accredited, state-of-the-art eye care centre in Anna Nagar, Chennai. Offering SMILE PRO, LASIK, cataract surgery, and comprehensive ophthalmic services since 1984.',
  icons: {
    icon: IMAGES.logo,
    apple: IMAGES.logo,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logos/Change%20Image%20Color%20Tool%20copy%202.png"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
