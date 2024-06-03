import React from "react";
import Image from "next/image";

import Iphone1 from "../public/assets/iPhone-13-Pro-Front-1.png"
import Iphone2 from "../public/assets/iPhone-13-Pro-Front-2.png"
import Gradient from "../public/assets/gradient.png"
import Ellipse from "../public/assets/ellipse.png"
import HeroBanner from "../public/assets/banner.svg"
import RightArrow from "../public/assets/right-arrow.svg"
import PlayIcon from "../public/assets/play_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import Stars from "../public/assets/twinkle-starts.svg"

const Hero = () => {
    return (
        <section className="grid grid-cols-1 mb-20 md:grid-cols-5 gap-2 py-4 md:p-0 font-medium relative">
            <div className="col-span-3 flex flex-col justify-center p-4 md:p-0 translate-y-24">
                <p className="text-3xl max-w-xl md:text-6xl font-bold mb-4">Make The Best Financial Decisions</p>
                <p className="text-base max-w-xl text-gray-500 font-medium md:text-lg mb-6">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
                    faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <button className="getstart-btn flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">Get Started <span><Image src={RightArrow} className="getstart-img"/></span></button>
                    <div className="space-x-2 watch-button hover:z-50">
                        <button className="watch-btn flex items-center gap-2 bg-transparent text-gray-700 px-4 py-2"><span><Image src={PlayIcon}/></span>Watch Video</button>
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
                    className="absolute min-w-60 -rotate-[16deg] z-30 -translate-y-14  -translate-x-8" />
                <Image src={Iphone1} className="block absolute min-w-60 -rotate-[16deg] z-20 translate-x-20" />
                <Image src={Iphone2} className="block absolute min-w-60 -rotate-[16deg] z-10 translate-x-48 translate-y-10" />
                <Image src={Gradient} className="block absolute translate-y-60" />
                <Image src={Ellipse} className="block absolute scale-150 -translate-y-10" />
                <Image src={Stars} className="block z-30 w-1/12 -translate-x-32 translate-y-56" />
            </div>
            <Image src={Stars} className="absolute z-30 w-14 -top-10 -right-14 hidden md:block" />
            <Image src={Stars} className="absolute z-30 w-14 bottom-36 left-10 hidden md:block" />
        </section>
    );
}

export default Hero;