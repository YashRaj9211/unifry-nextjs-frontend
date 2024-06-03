import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Images
import iPhoneImage from '../public/assets/iPhone-13-Pro-Front-1.png';
import ellipseImage from '../public/assets/ellipse.svg';
import gradientImage from '../public/assets/gradientsvg.svg';
import hexIcon from '../public/assets/Icon.svg';
import startIcon from "../public/assets/star-05.svg"
import cubeIcon from "../public/assets/cube-04.svg"

const Features = () => {

  useGSAP(
    () => {
      gsap.from('.swipe-in',
        { x: 200,opacity:0, duration: 0.5, stagger: 0.3 ,
          scrollTrigger:{trigger: '.swipe-in', start:'top 80%', end:'+=300', scrub:true}
        });
    }
  )

  return (
    <div className='h-fit py-0 md:py-16'>
      <section className="features grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen md:p-0">
        <div className="hidden sm:flex justify-center items-center relative p-4 md:p-0">
          <Image src={iPhoneImage} alt="iPhone 13 Pro" className="absolute z-50 min-w-60 translate-y-14" />
          <Image src={ellipseImage} alt="Ellipse" className="absolute z-10 -translate-x-14" />
          <Image src={gradientImage} alt="Gradient" className="absolute -translate-x-40 -translate-y-16 -z-20" />
        </div>

        <div className="flex flex-col justify-center relative p-4 md:p-5">
          <p className="title-class mb-2">FEATURES</p>
          <h3 className="heading-class mb-4">Uifry Premium</h3>

          <div className="swipe-in mt-7">
            <div className="flex items-center">
              <Image src={startIcon} alt="Icon" className="mr-2" />
              <span className="font-semibold text-base md:text-lg">Budgeting Intervals</span>
            </div>
            <p className="mt-2 text-base text-gray-500 font-medium md:text-lg">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>

          <div className="swipe-in mt-7">
            <div className="flex items-center">
              <Image src={cubeIcon} alt="Icon" className="mr-2" />
              <span className="font-semibold text-base md:text-lg">Budgeting Intervals</span>
            </div>
            <p className="mt-2 text-base text-gray-500 font-medium md:text-lg">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>

          <div className="swipe-in mt-7">
            <div className="flex items-center">
              <Image src={hexIcon} alt="Icon" className="mr-2" />
              <span className="font-semibold text-base md:text-lg">Budgeting Intervals</span>
            </div>
            <p className="mt-2 text-base text-gray-500 font-medium md:text-lg">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <Image src={gradientImage} className='absolute -z-10 -translate-y-28 translate-x-96' />
        </div>
      </section>
    </div>
  )
}

export default Features;
