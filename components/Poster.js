import React from 'react'
import Image from 'next/image'

import PosterImg from "../public/assets/poster.png"
import Gradient from "../public/assets/gradient.png"

const Poster = () => {
  return (
    <div className='h-screen flex justify-center items-center relative'>
        <Image src={PosterImg}/>
        <Image src={Gradient} className='absolute -z-10 -top-14 -left-60'/>
    </div>
  )
}

export default Poster