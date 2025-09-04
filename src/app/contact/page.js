import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/common/Footer'
import ContactForm from '../components/HomeNav_components/ContactForm'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="px-5">
        {' '}
        <ContactForm />
      </div>

      <Footer />
    </div>
  )
}
