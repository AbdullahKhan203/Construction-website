import React from 'react'
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";
import  Image from 'next/image';
export default function Projects() {
  return (

<div className="relative w-full h-[600px] border-2 border-red-700 overflow-hidden flex justify-end">
  {/* Background Image */}
  <Image
    src="/assets/images/homepage-project-bg.jpg"
    alt="project-img"
    fill
    className="object-cover opacity-50 absolute z-0"
  />

  {/* Foreground Content */}
  <div className="absolute z-10 p-8 flex justify-end">
    <div className=" h-[400px] w-[300px] flex flex-col gap-6 border-2">
      <h1 className="text-[32px] leading-none">Take a look around our projects</h1>
      <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
      <div className="forward-reverse my-[80px] flex gap-1.5 ml-[20px]">
        <button className="bg-transparent h-[50px] w-[50px] rounded border-2 flex justify-center items-center hover:text-orange-500">
          <FaArrowLeftLong className="text-[30px]" />
        </button>
        <button className="bg-transparent h-[50px] w-[50px] rounded border-2 flex justify-center items-center hover:text-orange-500">
          <FaArrowRightLong className="text-[30px]" />
        </button>
      </div>
    </div>
    <div className="relative h-[500px] w-[500px] border-4 border-amber-500 flex flex-col">
      <div className="project-img h-[350px] w-[350px]">
        <Image className='h-[100%] w-[100%]' src="/assets/images/homepage-project-bg.jpg" alt='project img'  fill/> 
      </div>
      <p className='relative z-index-30 service-name'>Inductrial Construction</p>
      <h1 className='project-name'>Research and development Center</h1>
    </div>
  </div>
</div>







  )
}



{/* <div className="relative w-full h-[600px] border-2 border-red-700 overflow-hidden">
  <Image
    src="/assets/images/homepage-project-bg.jpg"
    alt="project-img"
    fill
    className="object-cover opacity-[0.5] absolute z-1"
  />
   
  <div className="relative z-10 p-8 flex justify-end">
    <div className="content h-[400px] w-[300px] flex flex-col gap-6 border-2">
      <h1 className="text-[32px] leading-none ">Take a look around our projects</h1>
      <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
      <div className="forward-reverse my-[80px] flex gap-1.5 ml-[20px]">
      <button className='bg-transparent h-[50px] w-[50px] rounded  border-2 flex justify-center items-center hover:text-orange-500' >
    <FaArrowLeftLong  className='text-[30px]' />
      </button>
      <button className='bg-transparent h-[50px] w-[50px] rounded  border-2 flex justify-center items-center  hover:text-orange-500' >
    <FaArrowRightLong  className='text-[30px]' />
      </button>
     </div>
    </div>
    <div className="projects  h-[500px] w-[500px] border-2">
        <div className="project-img h-[350px] w-[350px]">
        {/* <Image className='h-[100%] w-[100%]' src="/assets/images/homepage-project-bg.jpg" alt='project img'  fill/> */}

     {/*   </div>
    </div>
  </div>
</div>  */}

