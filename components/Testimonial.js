import React from 'react'
import Image from 'next/image'
import GroupImage from "../public/assets/Group 1000002332.png"
import GroupPeopleImage from "../public/assets/GroupGrid.svg"
import Gradient from "../public/assets/gradient.png"

const Testimonial = () => {
  return (
    <div>
        <div>
            <p className='title-class mx-auto w-fit mb-4'>TESTIMONIAL</p>
            <div className='heading-class w-fit md:mx-auto md:w-3/5 text-center'>What Our Users Say About Us?</div>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <div className='flex-1 relative'>
                    <Image src={GroupImage} className='sm:max-w-md'/>
                    <Image src={Gradient} className='absolute -z-10 -translate-y-96 rotate-45 -translate-x-10 '/>
                </div>
                <div className='flex flex-col flex-1 gap-4'>
                    <p className='subheading-class'>The best financial accounting app ever!</p>
                    <p className='text-class'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    <div><Image src={GroupPeopleImage}/></div>
                    <div className='subheading-class'>Nick Johnas</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial