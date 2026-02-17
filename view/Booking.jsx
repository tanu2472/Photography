import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

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
  const [loading, setLoading] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.eventDate) {
      alert('Please fill in all required fields')
      return
    }

    if (!bookingData.termsAccepted) {
      alert('Please accept the terms and conditions')
      return
    }

    setLoading(true)

    const templateParams = {
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      eventDate: bookingData.eventDate,
      location: bookingData.location,
      guestCount: bookingData.guestCount,
      additionalNotes: bookingData.additionalNotes,
      packageName: packageNames[id] || 'Custom Package',
      packagePrice: packagePrices[id] || 'Contact for price'
    }

    emailjs.send(
      'service_c4iijcs',
      'template_480ysbf',
      templateParams,
      'kKJwiuy84soJW7C1Y'
    )
    .then(() => {
      return emailjs.send(
        'service_c4iijcs',
        'template_jqplwqq',
        templateParams,
        'kKJwiuy84soJW7C1Y'
      )
    })
    .then(() => {
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
    })
    .catch((error) => {
      console.error('Booking email error:', error)
      alert('Failed to submit booking. Please try again.')
    })
    .finally(() => {
      setLoading(false)
    })
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
          <img src='/src/assets/arrow.png' alt='Back' className='w-6 h-6 mr-2 inline-block' />
          <b>Back</b>
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Session</h1>

        <p className="text-lg text-gray-600 mb-8">
          Package: <span className="font-bold text-blue-600">
            {packageNames[id] || 'Custom Package'}
          </span> - {packagePrices[id] || 'Contact for price'}
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            <input type="text" name="name" value={bookingData.name}
              onChange={handleChange} placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg" required />

            <input type="email" name="email" value={bookingData.email}
              onChange={handleChange} placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg" required />

            <input type="tel" name="phone" value={bookingData.phone}
              onChange={handleChange} placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-lg" required />

            <input type="date" name="eventDate" value={bookingData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg" required />

            <input type="text" name="location"
              value={bookingData.location}
              onChange={handleChange}
              placeholder="Event Location"
              className="w-full px-4 py-2 border rounded-lg" />

            <input type="number" name="guestCount"
              value={bookingData.guestCount}
              onChange={handleChange}
              placeholder="Guest Count"
              className="w-full px-4 py-2 border rounded-lg" />

            <textarea name="additionalNotes"
              value={bookingData.additionalNotes}
              onChange={handleChange}
              placeholder="Additional Notes"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg" />

            {/* Terms Checkbox */}
            <label className="flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={bookingData.termsAccepted}
                onChange={handleChange}
                className="mr-2 mt-1"
              />
              <span>
                I agree to the{" "}
                <span
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => setShowTermsModal(true)}
                >
                  terms and conditions
                </span>{" "}
                *
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold ${
                loading
                  ? 'bg-gray-400 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Booking Request'}
            </button>

          </form>
        </div>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowTermsModal(false)}
          ></div>

          <div className="relative max-w-2xl w-full mx-4 bg-white rounded-lg shadow-lg z-60">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-900">
                  Terms & Conditions
                </h2>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
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
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Booking
