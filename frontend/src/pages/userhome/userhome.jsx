import React from 'react'

import Gallery from '../../AllComponents/userhomeComponents/galleryComp/galleryComp'
import Footer from '../../AllComponents/components/footer/footer'
import Navbar from '../../AllComponents/navbarcomponents/navbar/navbar'

const Userhome = () => {
  return (
    <>
      <Navbar/>
      <Gallery />
      <Footer/>
    </>
  )
}

export default Userhome