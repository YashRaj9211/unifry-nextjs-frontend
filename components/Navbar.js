import React, { useState } from 'react'
import Image from 'next/image'
// import { MenuIcon, XIcon } from '@heroicons/react/outline' // You can use any icon library

import Logo from "../public/assets/Logo.svg"
import Ham from "../public/assets/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import Cros from "../public/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center w-full md:py-4'>
            <div className='flex items-center gap-6'>
                <div className='flex flex-row justify-center gap-2'>
                    <Image src={Logo} alt="Logo" />
                    <span className='hidden md:block font-semibold text-2xl'>uifry</span>
                </div>
                <div className='hidden font-medium text-lg md:flex md:gap-8'>
                    <ul className='flex space-x-4'>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer'>Home</li>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer'>About Us</li>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer'>Pricing</li>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer'>Features</li>
                    </ul>
                </div>
            </div>
            <div className='hidden md:block'>
                <button className='btn-anim bg-black text-white px-6 py-2 rounded-md'>Download</button>
            </div>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <Image src={Cros} className='h-8 w-8 text-black' />
                    ) : (
                        <Image src={Ham} className='h-8 w-8 text-black' />
                    )}
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden'>
                    <ul className='flex flex-col space-y-4 p-4'>
                        <li className='px-4 py-2 duration-300 hover:text-customOrange cursor-pointer'>Home</li>
                        <li className='px-4 py-2 duration-300 hover:text-customOrange cursor-pointer'>About Us</li>
                        <li className='px-4 py-2 duration-300 hover:text-customOrange cursor-pointer'>Pricing</li>
                        <li className='px-4 py-2 duration-300 hover:text-customOrange cursor-pointer'>Features</li>
                    </ul>
                    <div className='p-4'>
                        <button className='bg-black text-white px-6 py-2 rounded-md w-full'>Download</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
