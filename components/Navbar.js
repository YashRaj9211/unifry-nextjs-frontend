import React from 'react'
import Image from 'next/image'

import Logo from "../public/assets/Frame.png"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center mb-4 z-50 font-medium text-lg'>
            <div className='flex gap-8 items-center'>
                <div className='flex items-center gap-2'>
                    <Image src={Logo} />
                    <span className='hidden md:inline font-semibold text-2xl'>uifry</span>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer hover:duration-300'>Home</li>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer hover:duration-300'>About Us</li>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer hover:duration-300'>Pricing</li>
                        <li className='px-4 duration-300 hover:text-customOrange cursor-pointer hover:duration-300'>Features</li>
                    </ul>
                </div>
            </div>

            <div>
                <button className='bg-black text-white px-6 py-2 rounded-md'>Download</button>
            </div>
        </nav>
    )
}

export default Navbar