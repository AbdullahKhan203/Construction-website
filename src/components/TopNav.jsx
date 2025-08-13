import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function TopNav() {
  return (
    // <div className='w-full flex items-center justify-between  bg-[#dd261e] text-white '>
    //   <div className='max-w-[960px] m-auto border-2 border-blue-600 flex justify-between'>
    //  <div className="left-side  flex ml-2">
    //     <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'><FaPhone className='mx-1'/><p >0123456789</p></span>
    //     <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'><IoMdMail className='mx-1' /><p>abc@gmail.com</p></span>
    //  </div>
    //  <div className="right-side  flex mr-2">
    //     <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'>Blog</span>
    //     <span className='flex items-center-safe  mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'>FAQ</span>
    //  </div>
    //  </div>
    // </div>
    // original color of nav #dd261e
    <div className='w-full   bg-main text-white'>
    <div className='max-w-[960px] m-auto flex justify-between'>
       <div className="flex ml-2">
         <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'><FaPhone className='mx-1'/><p >0123456789</p></span>
         <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'><IoMdMail className='mx-1' /><p>abc@gmail.com</p></span>
      </div>
      <div className="right-side  flex mr-2">
         <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'>Blog</span>
         <span className='flex items-center-safe  mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'>FAQ</span>
      </div>
     
    </div>
    </div>
  )
}
