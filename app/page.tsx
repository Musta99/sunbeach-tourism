import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Packages />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
