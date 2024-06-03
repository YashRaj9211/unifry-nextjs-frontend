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
import ellipseImage from '../public/assets/ellipse.png';
import gradientImage from '../public/assets/gradient.png';
import hexIcon from '../public/assets/cube-02.png';
import startIcon from "../public/assets/star-05.png"
import cubeIcon from "../public/assets/cube-04.png"

const Features = () => {

  useGSAP(
    () => {
      gsap.from('.swipe-in',
        { x: 200, duration: 0.5, stagger: 0.3 ,
          scrollTrigger:{trigger: '.swipe-in', start:'center center', end:'', scrub:true}
        });
    }
  )

  return (
    <div className='h-fit py-16'>
      <section className="features grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen md:p-0">
        <div className="hidden sm:flex justify-center items-center relative p-4 md:p-0">
          <Image src={iPhoneImage} alt="iPhone 13 Pro" className="absolute z-50 min-w-60 top-0" />
          <Image src={ellipseImage} alt="Ellipse" className="absolute z-10 -left-16" />
          <Image src={gradientImage} alt="Gradient" className="absolute top-0 -left-28 -z-20" />
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
          <Image src={gradientImage} className='absolute top-0 -right-80 -z-10' />
        </div>
      </section>
    </div>
  )
}

export default Features;
