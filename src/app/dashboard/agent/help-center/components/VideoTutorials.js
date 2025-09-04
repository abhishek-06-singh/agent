'use client'
import React from 'react'
import { Play } from 'lucide-react' // Optional: use any icon lib or replace with SVG

const tutorials = [
  {
    title: 'How to list your first property',
    duration: '5 min',
    thumbnail: '', // Replace with actual thumbnail URL if needed
  },
  {
    title: 'How to list your first property',
    duration: '5 min',
    thumbnail: '',
  },
  {
    title: 'How to list your first property',
    duration: '5 min',
    thumbnail: '',
  },
]

export default function VideoTutorials() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
      <h2 className="text-base font-semibold text-textnormal mb-6">
        Watch & Learn: Step-by-Step Tutorials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
        {tutorials.map((video, index) => (
          <div
            key={index}
            className="rounded-xl border border-bordercolor overflow-hidden bg-cardbg hover:shadow transition"
          >
            {/* Thumbnail */}
            <div className="bg-cardHeading h-40 flex flex-col items-center justify-center text-background text-sm">
              <Play className="w-6 h-6 mb-1 fill-current" />
              <span>Video Tutorial</span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-medium text-textnormal">{video.title}</h3>
              <span className="inline-block bg-bordercolor  text-textnormal text-xs px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
