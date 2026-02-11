import React from 'react'
import ServiceCards from '../components/ServiceCards'

function Home() {
  return (
    <div className="home">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome to Lensora Photography</h1>
      <img src="/src/assets/photography-Home.jpg" alt="Photography" className="w-full h-160 object-cover rounded-lg shadow-lg" />
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Capturing Moments, Creating Memories</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Lensora Photography, we believe that every moment is worth capturing.
            Whether it's a wedding, a family portrait, or a special event, we are dedicated to creating beautiful images that tell your unique story.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With years of experience and a passion for photography, we strive to provide exceptional service and stunning results.
          </p>
          <p className="text-lg text-gray-700">
            Let us help you preserve your precious memories with our professional photography services.
          </p>
        </div>

        <ServiceCards />
      </div>
    </div>
  )
}

export default Home;
