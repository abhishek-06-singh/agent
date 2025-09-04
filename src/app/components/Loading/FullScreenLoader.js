import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import animation from '../../images/home.json'
const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="w-40 h-40">
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  )
}

export default FullScreenLoader
