'use client'
import React,{ useState } from 'react'
import Link from 'next/link'

export default function ForgetPasswordButton({ onClick }) {
  const [loading, setLoading] = useState(false)

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onClick(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="submit"
        onClick={handleClick}
        className="w-full flex justify-center items-center gap-2 bg-buttonbg text-white py-3 px-4 rounded-lg hover:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 font-medium disabled:opacity-70"
        disabled={loading}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {loading ? 'Sending...' : 'Send Reset Link'}
      </button>
     
      <button
        type="submit"
        // onClick={handleClick}
        className="w-full text-textheading flex justify-center items-center gap-2 py- "
        // disabled={loading}
      >
          <Link href={'/signin'}>
        Back to Sign In
        </Link>
      </button>
     
    </>
  )
}
