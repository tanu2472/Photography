import React from 'react'

function Contact() {
  return (
   
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Get in touch with LensAura Photography for your photography needs.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 resize-none"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-amber-400 text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-amber-500 transition" onClick={console.log("Thank you")}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Studio</h3>
             <img src="src/assets/studio.png" alt="Studio" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-gray-700">LensAura Photography</p>
            <p className="text-gray-700">123 Elm Street</p>
            <p className="text-gray-700">Springfield, IL 62701</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <img src="src/assets/contact-information.png" alt="Contact" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-gray-700">Phone: (555) 123-4567</p>
            <p className="text-gray-700">Email: hello@lensaura.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-700">Mon–Fri: 9am – 6pm</p>
            <p className="text-gray-700">Sat: 10am – 4pm</p>
            <p className="text-gray-700">Sun: Closed</p>

            <h3 className="text-xl font-semibold mt-4 mb-3">Follow Us On : </h3>
            <div className="flex flex-wrap gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded hover:bg-gray-50">
                <img src="src/assets/instagram.png" alt="" className="w-5 h-5" />
                <span className="text-amber-500 font-medium">Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Follow on YouTube" className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded hover:bg-gray-50">
                <img src="src/assets/youtube.png" alt="" className="w-5 h-5" />
                <span className="text-amber-500 font-medium">YouTube</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded hover:bg-gray-50">
                <img src="src/assets/facebook.png" alt="" className="w-5 h-5" />
                <span className="text-amber-500 font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}


 
export default Contact;
