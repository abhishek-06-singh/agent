import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactInfo from './ContactInfo'
import React from 'react'

export default function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-background rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-glancyr text-textnormal font-semibold text-center mb-16">
          Get in Touch
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 ">
          {/* Contact Form */}
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-medium text-textnormal mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textnormal mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-textnormal mb-1">
                Company/Agency Name (optional)
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textnormal mb-1">
                Message
              </label>
              <textarea
                placeholder="Tell us how we can help you"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-buttonbg text-white py-2 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
