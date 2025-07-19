import React from 'react'
import BgImg from '../../public/assets/images/homepage-project-bg.jpg'
import Image from 'next/image'
import { MdArrowRightAlt } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ConsultationInvite() {
  return (
  <div className="w-full relative">
  <Image
    src={BgImg}
    alt="Background image"
    width={1920}
    height={1080}
    className="w-full h-auto absolute z-1 opacity-[0.5]"
    priority
  />
  <div className='w-[280px] smx:w-[350px] sm:w-[450px] lg:w-[520px] h-[150px] smx:h-[250px] sm:h-[350px] lg:h-[400px] bg-main  absolute z-2 p-[15px] smx:p-[30px] lg:pt-[69px] lg:pr-[45px] lg:pb-[114px] lg:pl-[64px] top-[30px] sm:top-[60px] md:top-[110px] lg:top-[150px] left-[20px] smx:left-[50px] sm:left-[80px] lg:left-[95px] text-white'>
     <h1 className='text-[24px] sm:text-[32px] lg:text-[44px] font-normal leading-[25px] smx:leading-[30px]  sm:leading-[40px] lg:leading-[56px] mb-[2px] sm:mb-[12px]'>Let’s talk about your
industrial problems</h1>
<p className='text-[12px] smx:text-[16px]'>Our team is ready to help you find reliable, efficient solutions for your construction or manufacturing needs.</p>
   
  <button className="w-[150px] sm:w-[210px] h-[30px] smx:h-[40px] sm:h-[64px] bg-black text-white absolute bottom-0 right-0 flex items-center justify-center gap-2">
  <span className="flex items-center gap-1 sm:gap-2 leading-none">
    <span className="text-base">Request a Quote</span>
    <MdArrowRightAlt className="text-[20px] relative top-[2px] border-amber-200 " />
  </span>
</button>
   {/* <button className='h-[50px] w-[200px] bg-orange-500 absolute bottom-0 flex justify-center items-center gap-2 '><p>Our Services </p><FaArrowRightLong className="h-[16px] text-white " /></button> */}
  </div>
</div>






  )
}
