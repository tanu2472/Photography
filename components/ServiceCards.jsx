import React from 'react'

function ServiceCards() {
  const packages = [
    {
      id: 1,
      title: 'Wedding',
      description: 'Capture your special day with our comprehensive wedding photography package including pre-wedding shoots, ceremony, reception, and candid moments.',
      features: ['8-10 hours coverage', 'High-resolution digital copies ', 'Album included', 'Professional editing'],
      image: '/src/assets/wed.webp',
      buttonColor: 'bg-rose-500 hover:bg-rose-600'
    },
    {
      id: 2,
      title: 'Engagement',
      description: 'Celebrate your love story with a personalized engagement photoshoot. Perfect for save-the-dates and pre-wedding announcements.',
      features: ['2-3 hours session', 'Multiple locations', '100+ edited photos', 'Instant digital copies'],
       image: '/src/assets/Engagement.jpeg',
      buttonColor: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 3,
      title: 'Baby Shower',
      description: 'Preserve precious moments of your special celebration with friends and family during baby shower events.',
      features: ['3-4 hours coverage', 'Candid & posed shots', 'Gift opening moments', 'Digital album included'],
      image: '/src/assets/baby_shower.jpg',
      buttonColor: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      id:4,
      title: 'Pre-Wedding',
      description:'',
      feature:[''],
      image:'',
      buttonColor:'bg-green-500 hover:bg-green-600'
    }
  ]

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Photography Packages</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
            {pkg.image ? (
              <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            ) : (
              <div className={`bg-gradient-to-r ${pkg.gradient} h-48`}></div>
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
