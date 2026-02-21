import React, { useEffect } from "react";

function Footer() {

  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-800 text-white py-8 px-4">

      {/* Instagram Feed Section */}
      <div className="max-w-6xl mx-auto mb-10">
                  
        {/* Elfsight Widget */}
        <div
          className="elfsight-app-828c182a-0e00-4ba3-a29f-be830f3caeef"
          data-elfsight-app-lazy
        ></div>
      </div>
      {/*Map Section*/}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl text-center font-bold mb-4">Our Location</h2>
          <div className="w-full h-64">
            <iframe
              title="LensAura Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1234567890123!2d90.12345678901234!3d23.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12345678901%3A0xabcdef1234567890!2sLensAura%20Photography%20Studio!5e0!3m2!1sen!2sbd!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

     
      <div className="text-center border-t border-gray-700 pt-6">
        <p className="text-sm">
          &copy; 2026 LensAura Photography. All rights reserved.
        </p>

        <p className="text-sm">Designed by LensAura Team</p>

        <p className="text-sm">Follow us on social media</p>  
       
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img src="src/assets/facebook.png" alt="Facebook" className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/kru_creation_photography_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img src="src/assets/instagram.png" alt="Instagram" className="w-6 h-6" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img src="src/assets/youtube.png" alt="YouTube" className="w-6 h-6" />
          </a>

          
        </div>
      </div>
    </div>
  );
}

export default Footer;