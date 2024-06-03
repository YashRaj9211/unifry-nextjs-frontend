import React from 'react'
import Image from 'next/image'

import PosterImg from "../public/assets/poster.svg"
import Gradient from "../public/assets/gradientsvg.svg"
import Star from "../public/assets/twinkle-starts.svg"
const Poster = () => {
  return (
    <div className='h-fit mb-20 md:h-screen flex justify-center items-center relative'>
        <Image src={PosterImg}/>
        <Image src={Gradient} className='absolute -z-10 -translate-y-36 -translate-x-96'/>
        <Image src={Star} className='absolute -translate-x-[45vw] -translate-y-10'/>
    </div>    
  )
}

export default Poster