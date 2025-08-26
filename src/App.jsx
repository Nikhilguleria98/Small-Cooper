import React from 'react'
import Hero from './components/Hero'
import OffersSection from './components/OffersSection'
import WorkShowcase from './components/WorkShowcase'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <Hero />
        <OffersSection />
        <WorkShowcase />
      </main>
    </div>
  )
}

export default App
