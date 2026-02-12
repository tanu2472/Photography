import React from 'react'

function ServiceCards() {
  const packages = [
    {
      id: 1,
      title: 'Wedding',
      description: 'Capture your special day with our comprehensive wedding photography package including pre-wedding shoots, ceremony, reception, and candid moments.',
      features: ['8-10 hours coverage', 'High-resolution digital copies ', 'Album included', 'Professional editing'],
      image: '/src/assets/wed.webp',
      buttonColor: 'bg-blue-300 hover:bg-blue-400 transition'
    },
    {
      id: 2,
      title: 'Engagement',
      description: 'Celebrate your love story with a personalized engagement photoshoot. Perfect for save-the-dates and pre-wedding announcements.',
      features: ['2-3 hours session', 'Multiple locations', '100+ edited photos', 'Instant digital copies'],
       image: '/src/assets/Engagement.jpeg',
      buttonColor: 'bg-blue-300 hover:bg-blue-400 transition'
    },
    {
      id: 3,
      title: 'Baby Shower',
      description: 'Preserve the joy and anticipation of welcoming a new life with our baby shower photography package, capturing candid moments and heartfelt emotions.',
      features: ['3-4 hours coverage', 'Candid & posed shots', 'Gift opening moments', 'Digital album included'],
      image: '/src/assets/baby_shower.jpg',
     buttonColor: 'bg-blue-300 hover:bg-blue-400 transition'
    },
    {
      id:4,
      title: 'Pre-Wedding',
      description:' Create lasting memories with our pre-wedding photoshoot package, perfect for capturing your love story before the big day.',
      features: ['2-3 hours session', 'Multiple locations', '100+ edited photos', 'Instant digital copies'],
      image: '/src/assets/pre-wed.jpg',
     buttonColor: 'bg-blue-300 hover:bg-blue-400 transition'
    },
    {
      id:5,
      title: 'Family Portraits',
      description:'Capture your family\'s unique bond and create timeless memories with our professional family portrait photography package.',
      features: ['1-2 hours session', 'Multiple poses', '50+ edited photos', 'Digital album included'],
      image: '/src/assets/Family.png',
      buttonColor: 'bg-blue-300 hover:bg-blue-400 transition'
    },
    {
      id:6,
      title: 'Event Coverage',
      description:'Document your special events with our comprehensive event coverage package, perfect for birthdays, anniversaries, and corporate gatherings.',
      features: ['4-6 hours coverage', 'Candid & posed shots', 'High-resolution digital copies', 'Professional editing'],
      image: '/src/assets/Event.jpg',
    buttonColor: 'bg-blue-300 hover:bg-blue-400 transition'
    } 
 ]

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Photography Packages</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
            {pkg.image ? (
              <img src={pkg.image} alt={pkg.title} className="w-full h-75  md:h-56  object-cover" />
            ) : (
              <div className={`bg-gradient-to-r ${pkg.gradient}h-48 md:h-56  `}></div>
            )}
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h4>
              <p className="text-gray-700 mb-4">
                {pkg.description}
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>○ {feature}</li>
                ))}
              </ul>
              <button  className={`w-full ${pkg.buttonColor} text-white py-2 rounded-lg transition font-semibold`}>
                View Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCards;
