import Image from 'next/image'
import React from 'react'
import MemberImg from '../../../../public/assets/images/founder.jpg.webp' // change path accordingly

export default function OtherMember() {
  return (
    <div className='max-w-[840px] flex flex-col md:flex-row md:justify-around items-center mx-auto my-8'>
      {/* Image */}
      <div className='h-[340px] md:h-[400px] w-[100%] smx:w-[340px] md:w-[400px] mx-auto relative'>
        <Image src={MemberImg} fill alt='member-img' className='absolute object-cover rounded-xl' />
      </div>

      {/* Content */}
      <div className='h-auto md:h-[400px] mx-auto md:mx-0 w-[100%] md:max-w-[300px] lg:max-w-[340px] py-8 px-2'>
        <p className='text-[16px] text-main'>About Team Member</p>
        <h2 className='text-[32px] mt-3  md:leading-[0.9] lg:leading-[1.1]'>Empowering Growth and Excellence</h2>
        <p className='text-[15px]  mt-3'>
          Our team members play a vital role in achieving our mission. Their dedication,
          creativity, and technical expertise ensure that every project we deliver meets the
          highest standards of quality and safety.
        </p>
      </div>
    </div>
  )
}
