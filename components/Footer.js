import React from 'react';
import Image from 'next/image';

import Logo from "../public/assets/Frame.png";
import Mail from "../public/assets/mail.png";
import Phone from "../public/assets/phone.png";

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row w-full justify-between'>
      <div className='flex flex-col mb-4 md:mb-0'>
        <div className='flex mb-4'>
          <Image src={Logo} className='mr-2' alt="Logo" />
          <span className='font-semibold text-3xl'>uifry</span>
        </div>

        <div className='flex mb-4'>
          <Image src={Mail} className='mr-2' alt="Mail" />  
          <span className='footerbase-class'>Help@Frybix.com</span>
        </div>

        <div className='flex'>
          <Image src={Phone} className='mr-2' alt="Phone" />
          <span className='footerbase-class'>+1 234 456 678 89</span>
        </div>
      </div>

      <div className='mb-4 md:mb-0'>
        <p className='footerhead-class mb-4'>Links</p>
        <ul className='footerbase-class'>
          <li className='mb-4'>Home</li>
          <li className='mb-4'>About Us</li>
          <li className='mb-4'>Bookings</li>
          <li className='mb-4'>Blog</li>
        </ul>
      </div>

      <div className='mb-4 md:mb-0'>
        <p className='footerhead-class mb-4'>Legal</p>
        <ul className='footerbase-class'>
          <li className='mb-4'>Terms of Use</li>
          <li className='mb-4'>Privacy Policy</li>
          <li className='mb-4'>Cookie Policy</li>
        </ul>
      </div>

      <div className='mb-4 md:mb-0'>
        <p className='footerhead-class mb-4'>Product</p>
        <ul className='footerbase-class'>
          <li className='mb-4'>Take Tour</li>
          <li className='mb-4'>Live Chat</li>
          <li className='mb-4'>Reviews</li>
        </ul>
      </div>

      <div>
        <p className='footerhead-class mb-4'>Newsletter</p>
        <p className='footerbase-class mb-4'>Stay Up To Date</p>
        <div className='w-fit flex'>
          <input 
            placeholder='Your email '
            className='w-44 rounded-md p-2 mr-2'/>
          <button className='bg-black text-white p-2 rounded-md'>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
