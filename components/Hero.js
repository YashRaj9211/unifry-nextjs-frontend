import React from "react";
import Image from "next/image";

import Iphone1 from "../public/assets/iPhone-13-Pro-Front-1.png"
import Iphone2 from "../public/assets/iPhone-13-Pro-Front-2.png"
import Gradient from "../public/assets/gradient.png"
import Ellipse from "../public/assets/ellipse.png"
import HeroBanner from "../public/assets/hero-banner.png"
import RightArrow from "../public/assets/right-arrow.png"
import PlayIcon from "../public/assets/play-button.png"
import Stars from "../public/assets/twinkle-twinkle-star.png"

const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-5 gap-2 h-full py-4 md:p-0 mb-20 font-medium relative">
            <div className="col-span-3 flex flex-col justify-center p-4 md:p-0 translate-y-24">
                <p className="text-3xl md:text-6xl font-bold mb-4">Make The Best Financial Decisions</p>
                <p className="text-base text-gray-500 font-medium md:text-lg mb-6">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
                    faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <button className="btn-anim flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">Get Started <span><Image src={RightArrow} /></span></button>
                    <div className="space-x-2 watch-button hover:z-50">
                        <button className="flex items-center gap-2 bg-transparent  text-gray-700 px-4 py-2"><span><Image src={PlayIcon} /></span>Watch Video</button>
                    </div>
                </div>
                <Image src={Gradient} className="absolute -z-50 w-2/3 translate-x-10 -translate-y-64" />
                <div>
                    <Image src={HeroBanner} className="w-10/12" />
                </div>
            </div>
            <div className="hidden md:flex md:col-span-2 justify-center items-center relative">
                <Image
                    src={Iphone2}
                    className="absolute min-w-60 -rotate-[16deg] z-30 right-10 -top-14" />
                <Image src={Iphone1} className="absolute min-w-60 -rotate-[16deg] z-20 -right-20 top-0" />
                <Image src={Iphone2} className="absolute min-w-60 -rotate-[16deg] z-10 -right-48 -bottom-10" />
                <Image src={Gradient} className="absolute  -bottom-20 right-16" />
                <Image src={Ellipse} className="absolute scale-125 top-0 right-4" />
                <Image src={Stars} className="z-30 w-1/12 -translate-x-32 translate-y-56" />
            </div>
            <Image src={Stars} className="absolute z-30 w-14 -top-10 -right-14" />
            <Image src={Stars} className="absolute z-30 w-14 bottom-36 left-10" />
        </section>
    );
}

export default Hero;