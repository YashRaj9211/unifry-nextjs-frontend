import React, { useState } from 'react';
import Image from 'next/image';

import Logo from "../public/assets/Logo.svg";
import Mail from "../public/assets/Vector.svg";
import Phone from "../public/assets/phone.svg";

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    links: false,
    legal: false,
    product: false,
    // newsletter: false
  });

  const toggleDropdown = (section) => {
    setIsOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

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
        <p 
          className='footerhead-class mb-4 cursor-pointer md:cursor-default' 
          onClick={() => toggleDropdown('links')}
        >
          Links
        </p>
        <ul className={`footerbase-class ${isOpen.links ? '' : 'hidden'} md:block`}>
          <li className='footerhover-class'>Home</li>
          <li className='footerhover-class'>About Us</li>
          <li className='footerhover-class'>Bookings</li>
          <li className='footerhover-class'>Blog</li>
        </ul>
      </div>

      <div className='mb-4 md:mb-0'>
        <p 
          className='footerhead-class mb-4 cursor-pointer md:cursor-default' 
          onClick={() => toggleDropdown('legal')}
        >
          Legal
        </p>
        <ul className={`footerbase-class ${isOpen.legal ? '' : 'hidden'} md:block`}>
          <li className='footerhover-class'>Terms of Use</li>
          <li className='footerhover-class'>Privacy Policy</li>
          <li className='footerhover-class'>Cookie Policy</li>
        </ul>
      </div>

      <div className='mb-4 md:mb-0'>
        <p 
          className='footerhead-class mb-4 cursor-pointer md:cursor-default' 
          onClick={() => toggleDropdown('product')}
        >
          Product
        </p>
        <ul className={`footerbase-class ${isOpen.product ? '' : 'hidden'} md:block`}>
          <li className='footerhover-class'>Take Tour</li>
          <li className='footerhover-class'>Live Chat</li>
          <li className='footerhover-class'>Reviews</li>
        </ul>
      </div>

      <div>
        <p 
          className='footerhead-class mb-4 cursor-pointer md:cursor-default' 
        >
          Newsletter
        </p>
        <div className={`footerbase-class`}>
          <p className='footerbase-class footerhover-class'>Stay Up To Date</p>
          <div className='w-fit flex'>
            <input 
              placeholder='Your email '
              className='w-44 rounded-md p-2 mr-2'/>
            <button className='bg-black text-white p-2 rounded-md'>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
