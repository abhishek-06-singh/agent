import React from 'react'
import Homemain from './components/home/Home'

export default function Home() {
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) return null

  return (
    <main className="min-h-screen bg-background ">
      <Homemain />
    </main>
  )
}
