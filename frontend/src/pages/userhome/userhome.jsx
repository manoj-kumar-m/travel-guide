import React from 'react'

import GalleryComp from '../../AllComponents/userhomeComponents/galleryComp/galleryComp'
import Footer from '../../AllComponents/components/footer/footer'
import Navbar from '../../AllComponents/navbarcomponents/navbar/navbar'

const Userhome = () => {
  return (
    <>
      <Navbar/>
      <GalleryComp />
      <Footer/>
    </>
  )
}

export default Userhome