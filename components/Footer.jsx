import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-4 text-center">
        <p className="text-sm ">&copy; 2026 LensAura Photography. All rights reserved.</p>
        <p className="text-sm ">Designed by LensAura Team </p>
        <p className="text-sm "> Follow us on social media</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com/login" className="text-gray-400 hover:text-white transition">
            <img src="src/assets/facebook.png" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/login" className="text-gray-400 hover:text-white transition">
          <img src="src/assets/instagram.png" alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/login" className="text-gray-400 hover:text-white transition"> 
          <img src="src/assets/youtube.png" alt="YouTube" className="w-5 h-5" />
          </a>
        </div>
     
    </div>
  )
}

export default Footer;
