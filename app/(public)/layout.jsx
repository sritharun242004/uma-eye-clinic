import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PublicLayout({ children }) {
  return (
    <div className="page-wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
