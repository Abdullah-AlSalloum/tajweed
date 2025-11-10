import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import BookIntroduction from '@/components/BookIntroduction'
import BookContent from '@/components/BookContent'
import Features from '@/components/Features'
import Statistics from '@/components/Statistics'
import Topics from '@/components/Topics'
import Testimonials from '@/components/Testimonials'
import UserVideos from '@/components/UserVideos'
import Author from '@/components/Author'
import Distributors from '@/components/Distributors'
import Languages from '@/components/Languages'
import BookExplanations from '@/components/BookExplanations'
import FinalCTA from '@/components/FinalCTA'
import BookTypes from '@/components/BookTypes'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import DigitalVersion from '@/components/DigitalVersion'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <VideoSection />
      <BookIntroduction />
      <BookContent />
      <Features />
      <Statistics />
      <Topics />
      <Testimonials />
      <UserVideos />
      <Author />
      <Distributors />
      <Languages />
      <BookExplanations />
      <DigitalVersion />
      <BookTypes />
      <FinalCTA />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}

