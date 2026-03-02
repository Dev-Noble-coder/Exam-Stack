import React from 'react'
import NavBar from '../components/NavBar'
import CourseMaterials from '../components/CourseMaterials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const page = () => {
  return (
    <>
    <NavBar />
    <CourseMaterials />
    <Newsletter />
    <Footer />
    </>
  )
}

export default page