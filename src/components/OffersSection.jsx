import React from 'react'

const cards = [
  {
    title: 'Web Development',
    desc: 'Custom websites and platforms that are fast, secure, and scalable.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS & Android apps designed for performance and user experience.',
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Reliable cloud infrastructure and DevOps for agility and scalability.',
    img: 'https://images.unsplash.com/photo-1581091014534-06f3c1a41a4a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Smart solutions powered by data, automation, and AI-driven insights.',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive and user-friendly experiences that keep customers engaged.',
    img: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'IT Consulting',
    desc: 'Expert guidance to align technology with your business goals.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
  }
]

const OffersSection = () => (
  <section className="px-4 pb-16">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">What We Offer</h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Our services are designed to solve real business challenges while unlocking new opportunities for growth.
        </p>
      </div>
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {cards.map(card => (
          <div key={card.title} className="bg-white border rounded-2xl shadow-sm p-4">
            <img src={card.img} alt={card.title} className="w-full rounded-xl object-cover grayscale" style={{ aspectRatio: '16 / 9' }} />
            <h3 className="mt-4 font-semibold text-lg text-gray-900 text-center">{card.title}</h3>
            <p className="mt-2 text-gray-600 text-sm text-center max-w-sm mx-auto">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default OffersSection



