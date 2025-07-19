import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function TopNav() {
  return (
    <div className='h-[40px] flex items-center justify-between  bg-[#dd261e] text-white '>
     <div className="left-side  flex ml-2">
        <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'><FaPhone className='mx-1'/><p >0123456789</p></span>
        <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'><IoMdMail className='mx-1' /><p>abc@gmail.com</p></span>
     </div>
     <div className="right-side  flex  mr-2">
        <span className='flex items-center-safe mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'>Blog</span>
        <span className='flex items-center-safe  mx-1 smx:mx-4 text-[12px] smx:text-[16px] md:text-[18px]'>FAQ</span>
     </div>
    </div>
  )
}
