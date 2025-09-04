import React from 'react'
import Image from 'next/image'
import Dashboard from '../../images/aboutusheader.svg'

export default function AboutDashboard() {
  return (
    <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row gap-6 md:gap-8 px-4">
      {/* Dashboard Image */}
      <div className=" w-full lg:w-7/12   overflow-hidden z-10 flex justify-center items-center">
      <div className="relative w-full bg-gradient-to-t from-background to-orange-300 rounded-2xl overflow-hidden z-10 flex justify-center items-center">

        <Image
          src={Dashboard}
          alt="dashboard"
          // width={800}
          // height={600}
          className="w-[90%] h-auto mt-6 md:mt-10 ml-[9%] "
        />
      </div>
      </div>


      {/* Mission & Vision */}
      <div className="flex flex-col justify-center gap-8 w-full lg:w-5/12">
        {/* Mission */}
        <div className="w-full">
          <h1 className="text-xl md:text-2xl font-bold text-textheading font-glancyr mb-2">
            Our Mission
          </h1>
          <p className="text-sm md:text-base text-textnormal leading-relaxed">
            To simplify and optimize how real estate professionals manage
            properties, leads, commissions, and contracts — all in one smart
            platform.
          </p>
        </div>

        {/* Vision */}
        <div className="w-full">
          <h1 className="text-xl md:text-2xl font-bold text-textheading font-glancyr mb-2">
            Our Vision
          </h1>
          <p className="text-sm md:text-base text-textnormal leading-relaxed">
            To be the most trusted digital ecosystem for the real estate
            industry, promoting productivity, transparency, and collaboration.
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-xl md:text-2xl font-bold text-textheading font-glancyr mb-2">
            Our Work
          </h1>
          <p className="text-sm md:text-base text-textnormal leading-relaxed">
            To be the most trusted digital ecosystem for the real estate
            industry, promoting productivity, transparency, and collaboration.
          </p>
        </div>
      </div>
    </div>
  )
}
