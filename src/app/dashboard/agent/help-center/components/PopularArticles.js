'use client'
import React from 'react'
import Image from 'next/image'
import key from '../../../components/icons/Lightmode_icons/help/key.svg'
import plus from '../../../components/icons/Lightmode_icons/help/plus.svg'
import Handshaking from '../../../components/icons/Lightmode_icons/help/Handshake.svg'
import parag from '../../../components/icons/Lightmode_icons/help/parag.svg'
import mobile from '../../../components/icons/Lightmode_icons/help/mobile.svg'

const articles = [
  { icon: <Image src={key} alt="key"/>, title: 'How to reset your password' },
  { icon: <Image src={plus} alt="plus"/>, title: 'How to add a new listing' },
  { icon: <Image src={Handshaking} alt="Handshaking"/>, title: 'What is the referral system?' },
  { icon: <Image src={parag} alt="parag"/>, title: 'Understanding commission tracking' },
  { icon: <Image src={mobile} alt="mobile"/>, title: 'Using the mobile app' },
]

export default function PopularArticles() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
      <h2 className="text-base font-semibold text-textnormal mb-6">Popular Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-bordercolor rounded-md px-4 py-4 bg-cardbg shadow hover:shadow-shadow transition"
          >
            <div className="text-textnormal">{article.icon}</div>
            <span className="text-sm text-textnormal">{article.title}</span>
          </div>
        ))}

        {/* Repeat for second column */}
        {articles.map((article, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-2 border border-bordercolor rounded-md px-4 py-4 bg-cardbg shadow hover:shadow-shadow transition"
          >
            <div className="text-textnormal">{article.icon}</div>
            <span className="text-sm text-textnormal">{article.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
