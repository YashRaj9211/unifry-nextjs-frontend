import React from 'react';
import Image from 'next/image';
import iPhoneFront1 from '../public/assets/iPhone-13-Pro-Front-1.png';
import iPhoneFront2 from '../public/assets/iPhone-13-Pro-Front-2.png';
import card from '../public/assets/Card.png';
import ellipse from '../public/assets/ellipse.png';
import gradient from '../public/assets/gradient.png';
import cubeIcon from '../public/assets/cube-02.png';
import bell from '../public/assets/bell-02.png'
import startWhite from "../public/assets/star-05-white.png"

const Advantages = () => {
  return (
    <div>
      <section className="advantages py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen items-center  md:py-4">
          <div className="p-4 md:p-5">
            <div className="title-class md:mb-2">ADVANTAGES</div>
            <p className="heading-class md:mb-4">Why Choose Uifry?</p>
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

          <div className="flex justify-center items-center relative">
            <Image src={iPhoneFront1} alt="" className="absolute z-20 min-w-60  translate-x-24" />
            <Image src={ellipse} alt="" className="absolute z-10" />
            <Image src={gradient} alt="" className="absolute -top-36 -left-14 -z-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen items-center p-4 md:p-0">
          <div className="flex justify-center items-center p-4 relative ">
            <Image src={iPhoneFront2} alt="" className="absolute z-40 min-w-60" />
            {/* <Image src={card} alt="" className="w-1/2 absolute z-50 -top-40" /> */}
            <Image src={ellipse} alt="" className="absolute z-10 -left-16" />
            <Image src={gradient} alt="" className="absolute -top-24 -z-20" />
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
