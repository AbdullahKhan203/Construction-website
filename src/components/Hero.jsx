import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
 <div className="h-[500px] w-[100%] m-auto bg-[url('/assets/images/hero-construction.jpg')] bg-cover bg-center bg-no-repeat relative">
     <div className="w-[250px] smx:w-[300px] sm:w-[400px] md:w-[500px] h-[150px] smx:h-[200px] sm:h-[260px] bg-white absolute top-[30px] sm:top-[60px] left-[50px] smx:left-[80px] sm:left-[100px] p-[10px] sm:p-[40px] ">
       <p className='text-orange-500'>Quality work.trustable services.Dedicated team</p>
       <h1 className='text-[28px] sm:text-[42px]'>We Provide you insustrial Solution</h1>
       <button className='h-[50px] w-[200px] bg-orange-500 absolute bottom-0 flex justify-center items-center gap-2 '><p>Our Services </p><FaArrowRightLong className="h-[16px] text-white " /></button>
     </div>
    </div>

  );
}