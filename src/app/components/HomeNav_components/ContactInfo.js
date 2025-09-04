import React from 'react'
export default function ContactInfo() {
  return (
    <div className="space-y-6 text-left">
      <div>
        <h4 className="font-semibold text-lg text-textnormal mb-3">Address</h4>
        <p className="text-textnormal text-sm">123 Proptech Lane, New York</p>
      </div>

      <div>
        <h4 className="font-semibold text-lg text-textnormal mb-3">Email</h4>
        <p className="text-textnormal text-xs break-words sm:text-sm">support@alianzablackdog.com</p>
      </div>

      <div>
        <h4 className="font-semibold text-lg text-textnormal mb-3">Phone</h4>
        <p className="text-textnormal text-sm">+1 (555) 123-4567</p>
      </div>

      <div>
        <h4 className="font-semibold text-lg text-textnormal mb-3">
          Support Hours
        </h4>
        <p className="text-textnormal text-sm">
          MON–FRI · 9:00 AM – 6:00 PM IST
        </p>
      </div>
    </div>
  )
}
