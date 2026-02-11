import React from 'react'

function Contact() {
  return (
   
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Get in touch with Lensora Photography for your photography needs.
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
      </div>
    </div>
  )
}


 
export default Contact;
