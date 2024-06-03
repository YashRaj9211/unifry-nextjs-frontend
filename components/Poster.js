import React from 'react'
import Image from 'next/image'

import PosterImg from "../public/assets/poster.png"
import Gradient from "../public/assets/gradient.png"

const Poster = () => {
  return (
    <div className='h-fit mb-20 md:h-screen flex justify-center items-center relative'>
        <Image src={PosterImg}/>
        <Image src={Gradient} className='absolute -z-10 -translate-y-36 -translate-x-96'/>
    </div>
  )
}

export default Poster