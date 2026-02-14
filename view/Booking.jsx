import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: id || '1',
    location: '',
    guestCount: '',
    additionalNotes: '',
    termsAccepted: false
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  const packageNames = {
    1: 'Wedding',
    2: 'Engagement',
    3: 'Baby Shower',
    4: 'Pre-Wedding',
    5: 'Family Portraits',
    6: 'Event Coverage'
  }

  const packagePrices = {
    1: '$3,500',
    2: '$800',
    3: '$1,200',
    4: '$900',
    5: '$600',
    6: '$1,800'
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setBookingData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.eventDate) {
      alert('Please fill in all required fields')
      return
    }

    if (!bookingData.termsAccepted) {
      alert('Please accept the terms and conditions')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...bookingData,
          packageId: id,
          packageName: packageNames[id] || 'Custom Package',
          packagePrice: packagePrices[id] || 'Contact for price',
          bookingDate: new Date().toISOString()
        })
      })

      if (response.ok) {
        setShowSuccess(true)
        setBookingData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventType: id || '1',
          location: '',
          guestCount: '',
          additionalNotes: '',
          termsAccepted: false
        })
        setTimeout(() => {
          navigate('/')
        }, 3000)
      } else {
        alert('Failed to submit booking. Please try again.')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('Error submitting booking. Please check your connection.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          <p className="font-semibold">Booking request submitted successfully!</p>
          <p className="text-sm">We'll contact you soon to confirm your booking.</p>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:text-blue-600 mb-6 inline-block font-semibold"
        >
          <img src='/src/assets/arrow.png' alt='Back' className='w-6 h-6 mr-2 inline-block'></img> <b>Back </b>
        </button>
   
        

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Session</h1>
        <p className="text-lg text-gray-600 mb-8">
          Package: <span className="font-bold text-blue-600">{packageNames[id] || 'Custom Package'}</span> - {packagePrices[id] || 'Contact for price'}
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Event Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={bookingData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Event Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Event Location</label>
                  <input
                    type="text"
                    name="location"
                    value={bookingData.location}
                    onChange={handleChange}
                    placeholder="Enter event location or venue"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Guest Count</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={bookingData.guestCount}
                    onChange={handleChange}
                    placeholder="Approximate number of guests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes Section */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Additional Notes or Requirements</label>
              <textarea
                name="additionalNotes"
                value={bookingData.additionalNotes}
                onChange={handleChange}
                placeholder="Tell us about any special requests, themes, or specific moments you want captured..."
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={bookingData.termsAccepted}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-1 mr-3"
                />
                <span className="text-gray-700">
                  I agree to the booking <button type="button" onClick={() => setShowTermsModal(true)} className="text-blue-600 underline">terms and conditions</button>. I understand that a deposit may be required to confirm the booking, and I will be contacted shortly to finalize the details.
                  <span className="text-red-500"> *</span>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg transition font-semibold text-lg"
            >
              Submit Booking Request
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-900 mb-2">Next Steps</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ Submit your booking request above</li>
              <li>✓ We'll contact you within 24 hours to confirm availability</li>
              <li>✓ Discuss final details and confirm the date</li>
              <li>✓ Secure your booking with a deposit</li>
              <li>✓ Receive a confirmation email with all details</li>
            </ul>
          </div>
          {/* Terms Modal */}
          {showTermsModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowTermsModal(false)}></div>
              <div className="relative max-w-2xl w-full mx-4 bg-white rounded-lg shadow-lg z-60">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
                    <button onClick={() => setShowTermsModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
                  </div>
                  <div className="mt-4 max-h-72 overflow-y-auto text-gray-700 space-y-3">
                    <p><strong>Booking & Deposit:</strong> A deposit may be required to secure your date. Deposit amount and payment details will be confirmed during follow-up.</p>
                    <p><strong>Cancellation & Rescheduling:</strong> Please notify us as soon as possible to reschedule. Cancellations may be subject to a fee depending on timing.</p>
                    <p><strong>Image Usage:</strong> LensAura may use non-identifying images for portfolio and marketing unless you request otherwise in writing.</p>
                    <p><strong>Final Delivery:</strong> Turnaround times for edited images will be provided during confirmation and may vary by package.</p>
                    <p><strong>Liability:</strong> We are not liable for unforeseen events beyond our control. Clients are responsible for necessary permissions at venues.</p>
                    <p><strong>Privacy:</strong> Contact information is used only for booking communication and will not be shared.</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button onClick={() => setShowTermsModal(false)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Booking
