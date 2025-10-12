import Image from 'next/image'
import React from 'react'
import CeoImg from '../../../../public/assets/images/founder.jpg.webp' // change path accordingly

export default function Ceo() {
  return (
    <div className='max-w-[860px] flex flex-col md:flex-row-reverse md:justify-around items-center mx-auto my-8'>
      {/* Image */}
      <div className='h-[360px] md:h-[420px] w-[100%] smx:w-[350px] md:w-[420px] mx-auto relative'>
        <Image src={CeoImg} fill alt='ceo-img' className='absolute object-cover rounded-xl' />
      </div>

      {/* Content */}
      <div className='h-auto md:h-[420px] mx-auto md:mx-0 w-[100%] md:max-w-[320px] lg:max-w-[360px] py-8 px-2'>
        <p className='text-[16px] text-main'>About CEO</p>
        <h2 className='text-[36px] mt-3'>Leading with Vision and Integrity</h2>
        <p className='text-[15px]'>
          Our CEO drives the company’s strategic direction with a focus on innovation,
          sustainability, and excellence. With years of leadership experience, the CEO ensures
          that every project reflects our core values and commitment to client satisfaction.
        </p>
      </div>
    </div>
  )
}
