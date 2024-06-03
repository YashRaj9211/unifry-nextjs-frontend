import React from 'react';
import Image from 'next/image';
import iPhoneFront1 from '../public/assets/iPhone-13-Pro-Front-1.png';
import iPhoneFront2 from '../public/assets/iPhone-13-Pro-Front-2.png';
import ellipse from '../public/assets/ellipse.svg';
import gradient from '../public/assets/gradientsvg.svg';
import bell from '../public/assets/bell-02.svg'
import startWhite from "../public/assets/star-06.svg"

const Advantages = () => {
  return (
    <div>
      <section className="advantages py-4">
        <div className="items-center grid grid-cols-1 md:grid-cols-2 md:h-screen">
          <div className="p-4 md:p-5">
            <div className="title-class text-center md:mb-2 md:text-left">ADVANTAGES</div>
            <p className="heading-class text-center mb-4 md:text-left">Why Choose Uifry?</p>
            <div className="flex items-center mb-4">
              <div className='bg-customOrange rounded-full p-3 mr-2'>
                <Image src={bell} alt="Icon" className="" />
              </div>
              <span className="subheading2-class">Clever Notifications</span>
            </div>
            <p className="text-class">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>

          <div className="hidden md:flex justify-center items-center relative">
            <Image src={iPhoneFront1} alt="" className="absolute z-20 min-w-60  translate-x-24 translate-y-10" />
            <Image src={ellipse} alt="" className="absolute z-10 rotate-90 -translate-y-10" />
            <Image src={gradient} alt="" className="absolute -z-20 translate-y-10 -translate-x-10" />
          </div>
        </div>

        <div className="items-center grid grid-cols-1 md:grid-cols-2 md:h-screen">
          <div className="hidden md:flex justify-center items-center relative">
            <Image src={iPhoneFront2} alt="" className="absolute z-40 min-w-60 translate-y-10" />
            {/* <Image src={card} alt="" className="w-1/2 absolute z-50 -top-40" /> */}
            <Image src={ellipse} alt="" className="absolute z-10 -left-16" />
            <Image src={gradient} alt="" className="absolute -z-20 translate-y-16" />
          </div>
          <div className="p-4 md:p-5">
            <div className="flex items-center mb-4">
              <div className='bg-customOrange rounded-full p-3 mr-2'>
                <Image src={startWhite} alt="Icon" className="" />
              </div>
              <span className="subheading2-class">Budgeting Intervals</span>
            </div>
            <p className="text-class">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantages;
