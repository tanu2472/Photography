import React from 'react'

function Gallery() {
  return (
    <div className="gallery min-h-screen py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src="https://i.pinimg.com/originals/53/90/0e/53900e0e0bac340e56b571bd54eb8cda.jpg" alt="Gallery Image 1" className="w-full  h-95 md:h-80  object-cover rounded-lg shadow-lg" />
            <img src="https://www.atlhea.in/wp-content/uploads/2022/05/pose-for-pre-wedding-shoot.jpg" alt="Gallery Image 2" className="w-full h-95 md:h-80 object-cover rounded-lg shadow-lg" />
            <img src="https://tse4.mm.bing.net/th/id/OIP.fsT0XypvND89Y5ittjoy2AHaJQ?pid=ImgDet&w=474&h=592&rs=1&o=7&rm=3" alt="Gallery Image 3" className="w-full h-95 md:h-80 object-cover rounded-lg shadow-lg" />
            <img src="https://vinusimages.com/wp-content/uploads/2024/12/best-maternity-photographer-in-bangalore-at-vinus-images.jpg" alt="Gallery Image 4" className="w-full h-95 md:h-80 object-cover rounded-lg shadow-lg" />
            <img src="https://i.pinimg.com/originals/f0/2f/1b/f02f1b59de35082ce3cd2c022afe320c.jpg" alt="Gallery Image 5" className="w-full h-95 md:h-80 object-cover rounded-lg shadow-lg" />
            <img src="https://static.wixstatic.com/media/89e88a_969bc99c7ebc42c0810591a5c06fac15~mv2_d_7920_5269_s_4_2.jpg/v1/fit/w_1045,h_790,q_73,usm_8.40_0.13_0.07/89e88a_969bc99c7ebc42c0810591a5c06fac15~mv2_d_7920_5269_s_4_2.jpg" alt="Gallery Image 6" className="w-full h-95 md:h-80 object-cover rounded-lg shadow-lg" />
        </div>
    </div>
  )
}

export default Gallery;
