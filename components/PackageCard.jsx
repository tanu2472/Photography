import React, { useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function PackageCard() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const queryId = searchParams.get('id')
  const packageId = id || queryId

  const packagesData = {
    1: {
      title: 'Wedding',
      image: '/src/assets/wed.webp',
      description: 'Capture your special day with our comprehensive wedding photography package including pre-wedding shoots, ceremony, reception, and candid moments.',
      features: ['8-10 hours coverage', 'High-resolution digital copies', 'Album included', 'Professional editing'],
      price: '$3,500',
      details: 'Our wedding package includes full-day coverage with two photographers, professional editing, and a beautifully crafted album. We will capture every precious moment of your big day, from the intimate pre-wedding shoots to the grand ceremony and lively reception. Our team is dedicated to providing you with stunning photos that tell the story of your love and celebration.' 
    },
    2: {
      title: 'Engagement',
      image: '/src/assets/Engagement.jpeg',
      description: 'Celebrate your love story with a personalized engagement photoshoot.',
      features: ['2-3 hours session', 'Multiple locations', '100+ edited photos', 'Instant digital copies'],
      price: '$800',
      details: 'Perfect for save-the-dates and pre-wedding announcements.'
    },
    3: {
      title: 'Baby Shower',
      image: '/src/assets/baby_shower.jpg',
      description: 'Preserve the joy and anticipation of welcoming a new life.',
      features: ['3-4 hours coverage', 'Candid & posed shots', 'Gift opening moments', 'Digital album included'],
      price: '$1,200',
      details: 'Capture candid moments and heartfelt emotions during your special celebration.'
    },
    4: {
      title: 'Pre-Wedding',
      image: '/src/assets/pre-wed.jpg',
      description: 'Create lasting memories with our pre-wedding photoshoot package.',
      features: ['2-3 hours session', 'Multiple locations', '100+ edited photos', 'Instant digital copies'],
      price: '$900',
      details: 'Perfect for capturing your love story before the big day.'
    },
    5: {
      title: 'Family Portraits',
      image: '/src/assets/Family.png',
      description: 'Capture your family\'s unique bond and create timeless memories.',
      features: ['1-2 hours session', 'Multiple poses', '50+ edited photos', 'Digital album included'],
      price: '$600',
      details: 'Professional family portrait photography at your preferred location.'
    },
    6: {
      title: 'Event Coverage',
      image: '/src/assets/Event.jpg',
      description: 'Document your special events with comprehensive coverage.',
      features: ['4-6 hours coverage', 'Candid & posed shots', 'High-resolution digital copies', 'Professional editing'],
      price: '$1,800',
      details: 'Perfect for birthdays, anniversaries, corporate gatherings, and other special occasions.'
    }
  }

  const [showDetails, setShowDetails] = useState(false)
  const packageData = packagesData[packageId] || packagesData[1]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Link to="/" className="text-blue-500 hover:text-blue-600 mb-6 inline-block"><img src='/src/assets/arrow.png' alt='Back' className='w-6 h-6 mr-2 inline-block'></img> <b>Back to Packages</b></Link>
        
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{packageData.title}</h1>
        {packageData.image && (
            <img src={packageData.image} alt={packageData.title} className="w-full h-96 object-cover rounded-lg mb-6" />
        )}
        <p className="text-3xl font-bold text-blue-600 mb-6">{packageData.price}</p>
        
        <p className="text-lg text-gray-700 mb-6">{packageData.description}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Features</h2>
          <ul className="space-y-3">
            {packageData.features.map((feature, idx) => (
              <li key={idx} className="text-gray-700 flex items-center">
                <span className="text-blue-600 font-bold mr-3">🔷</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => setShowDetails(!showDetails)} 
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition font-semibold mb-6"
        >
          {showDetails ? 'Hide Details' : 'View Full Details'}
        </button>
        
        {showDetails && (
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Package Details</h3>
            <p className="text-gray-700 mb-4">{packageData.details}</p>
            <button 
              onClick={() => navigate(`/booking/${packageId}`)}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition font-semibold"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PackageCard;
