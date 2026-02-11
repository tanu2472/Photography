import React from 'react'

function Gallery() {
  return (
    <div className="gallery min-h-screen py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src="/src/assets/gallery1.jpg" alt="Gallery Image 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/src/assets/gallery2.jpg" alt="Gallery Image 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/src/assets/gallery3.jpg" alt="Gallery Image 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/src/assets/gallery4.jpg" alt="Gallery Image 4" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/src/assets/gallery5.jpg" alt="Gallery Image 5" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/src/assets/gallery6.jpg" alt="Gallery Image 6" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        </div>
    </div>
  )
}

export default Gallery;
