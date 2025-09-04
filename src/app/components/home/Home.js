// 'use client'
// import { useEffect, useState } from 'react'
// import FullScreenLoader from '../Loading/FullScreenLoader' // Adjust path if needed
import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from './homepageHero/Hero'
import PlatformBenefits from './PlatformBenefits'
import KeyFeatures from './KeyFeatures'
import AudienceSection from './AudienceSection'
import SeeItInAction from './SeeItInAction'
import WhoChoose from './WhoChoose'
import TrustedBy from './TrustedBy'
import Security from './Security'
import Footer from '../common/Footer'

const Homemain = () => {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   // Set a timer to hide loader after 5 seconds
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)

  //   return () => clearTimeout(timer) // Cleanup on unmount
  // }, [])

  return (
    <div>
      {/* {loading ? (
        <FullScreenLoader />
      ) : (
        <div className="">
          <Navbar />
        </div>
      )} */}
      
      <Navbar />
      <Hero />
      <PlatformBenefits />
      <KeyFeatures />
      <AudienceSection />
      <SeeItInAction />
      <TrustedBy />
      <Security />
       <WhoChoose />
      <Footer />
    
    </div>
  )
}

export default Homemain
