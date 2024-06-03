import React from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAQ = () => {

  useGSAP(
    () => {
      gsap.from('.swipe-in-right',
        { x: 200,opacity:0, duration: 0.5, stagger: 0.3 ,
          scrollTrigger:{trigger: '.swipe-in-right', start:'top 50%', end:'+=300', scrub:true}
        });
      gsap.from('.swipe-in-left',
        {x: -200, opacity:0, duration: 0.5, stagger:0.3,
          scrollTrigger:{trigger: '.swipe-in-left', start:'top 50%', end:'+=300', scrub:true}
        }
      )
    }
  )

  return (
    <section className="h-fit py-8 md:px-8">
      <p className="title-class mb-2 text-center md:text-left">FAQ</p>
      <p className="heading-class mb-8 text-center md:text-left">Frequently Asked <br /> Questions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: 'bg-customOrange', textColor: 'text-white', animation: 'swipe-in-left' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: '', textColor: '',  animation: 'swipe-in-right' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: '', textColor: '',  animation: 'swipe-in-left' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: 'bg-customOrange', textColor: 'text-white',  animation: 'swipe-in-right' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: 'bg-customOrange', textColor: 'text-white',  animation: 'swipe-in-left' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: '', textColor: '',  animation: 'swipe-in-right' },
        ].map((item, index) => (
          <div key={index} className={`${item.animation} flex flex-col p-6 w-fit ${item.bgColor} flex-shrink-0 rounded-md`}>
            <p className={`faqtitle-class ${item.textColor}`}>{item.title}</p>
            <p className={`faqtext-class ${item.textColor}`}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
