import React, { useMemo } from 'react'

const ShowcaseCard = ({ title, image }) => (
  <div className="shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-3xl border shadow-sm overflow-hidden">
    <div className="p-4 flex items-center justify-between text-xs text-gray-500">
      <span className="px-3 py-1 rounded-full border bg-gray-50">Web-Service</span>
      <span className="px-3 py-1 rounded-full border bg-gray-50">2024</span>
    </div>
    <h3 className="px-4 text-3xl font-extrabold tracking-tight">{title}</h3>
    <div className="p-4">
      <img src={image} alt={title} className="w-full rounded-2xl object-cover" style={{ aspectRatio: '4 / 3' }} />
    </div>
  </div>
)

const WorkShowcase = () => {
  const cards = [
    {
      title: 'ADIDAS',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'ADIDAS',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'ADIDAS',
      image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1400&auto=format&fit=crop'
    }
  ]

  // Duplicate list to create seamless marquee effect
  const marqueeItems = useMemo(() => [...cards, ...cards], [cards])

  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-6">Our Work in Action</h2>

        <div className="relative">
          <div className="overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
            <div className="flex gap-6 px-2 animate-[scrollx_25s_linear_infinite] hover:[animation-play-state:paused]">
              {marqueeItems.map((c, i) => (
                <ShowcaseCard key={i} title={c.title} image={c.image} />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent rounded-3xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

export default WorkShowcase


