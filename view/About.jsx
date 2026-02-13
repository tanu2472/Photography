import React from 'react'

function About() {
  return (
   <div>
     <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About LensAura Photography</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to LensAura Photography, where we capture life's most precious moments.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With years of experience in professional photography, we specialize in capturing 
          beautiful moments that tell your unique story.
        </p>
        <p className="text-lg text-gray-700">
          Our passion is bringing your vision to life through our lens.
        </p>
       
        <p className="text-lg text-gray-700 mt-6">
          Let us help you preserve your precious memories with our professional photography services.
        </p>
       
       

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg border-l-4 border-amber-500">
            <div className="flex items-start gap-4">
              <div className="text-4xl">👁️</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the most trusted and innovative photography studio, known for capturing authentic moments 
                  and delivering exceptional artistry that resonates with our clients for a lifetime.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg border-l-4 border-amber-500">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to preserve life's precious moments through creative photography, delivering 
                  outstanding quality and personalized service. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-amber-50 border-2 border-amber-400 p-6  rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-gray-700">State-of-the-art equipment and professional editing techniques ensure stunning results every time.</p>
            </div>
            <div className="bg-amber-50 border-2 border-amber-400 p-6  rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years of Experience</h3>
              <p className="text-gray-700">15+ years capturing precious moments with expertise, creativity, and a personal touch.</p>
            </div>
            <div className="bg-amber-50 border-2 border-amber-400 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Focused</h3>
              <p className="text-gray-700">Your vision is our priority. We listen, communicate, and deliver beyond your expectations.</p>
            </div>
            <div className="bg-amber-50 border-2 border-amber-400 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-gray-700">Recognized for excellence in photography with multiple industry awards and accolades.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-amber-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weddings</h3>
              <p className="text-gray-700">Capture your special day with elegance and artistry. Full-day coverage and albums available.</p>
            </div>
            <div className="bg-white border-2 border-amber-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Portraits</h3>
              <p className="text-gray-700">Professional headshots, family portraits, and maternity shoots in studio or outdoor settings.</p>
            </div>
            <div className="bg-white border-2 border-amber-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Events</h3>
              <p className="text-gray-700">Corporate events, parties, and celebrations documented with attention to every detail.</p>
            </div>
            <div className="bg-white border-2 border-amber-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial</h3>
              <p className="text-gray-700">Product photography and commercial shoots tailored to your brand and business needs.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-8 rounded-lg text-center text-white">
              <h3 className="text-5xl font-bold mb-2">1000+</h3>
              <p className="text-lg font-medium">Events Captured</p>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-8 rounded-lg text-center text-white">
              <h3 className="text-5xl font-bold mb-2">98%</h3>
              <p className="text-lg font-medium">Client Satisfaction</p>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-8 rounded-lg text-center text-white">
              <h3 className="text-5xl font-bold mb-2">15+</h3>
              <p className="text-lg font-medium">Years of Experience</p>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-8 rounded-lg text-center text-white">
              <h3 className="text-5xl font-bold mb-2">50+</h3>
              <p className="text-lg font-medium">Industry Awards</p>
            </div>
          </div>
        </div>

      </div>
    </div>


   </div>
  )
}

export default About;
