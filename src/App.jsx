import React from 'react'
import Navbar from './components/Navbar'
import Ribbon from './components/Ribbon'
import Hero from './components/Hero'
import MediaShowcase from './components/MediaShowcase'
import StatsGrid from './components/StatsGrid'
import RosterSection from './components/RosterSection'
import PhilosophySection from './components/PhilosophySection'
import GuestbookSection from './components/GuestbookSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between selection:bg-[#2997ff]/30 selection:text-white" id="top">
      <div>
        <Navbar />
        <Ribbon />
        <main>
          <Hero />
          <MediaShowcase />
          <StatsGrid />
          <RosterSection />
          <PhilosophySection />
          <GuestbookSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}
