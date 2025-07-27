import Image from 'next/image'
import React from 'react'
import ProjectImg from '../../../../public/assets/images/project.png.webp'
export default function ProjectCard() {
  return (
     <div className="h-[320px] w-[320px] border-2 border-blue-500 flex flex-col m-auto my-2">
  {/* Top Image Section */}
  <div className="w-full h-[300px] relative border-2">
    <Image src={ProjectImg} fill alt="project-Image" />
  </div>

  {/* Bottom Section - fills remaining space */}
  <div className="flex-1 flex flex-col justify-start border-2 border-orange-500 w-full ">
    <p className='text-[18px] font-bold mt-[30px] mb-[9px]'>Industrial construction
</p>
    <h2 className='text-[20px]'>Research and development center
</h2>
  </div>
</div>
  )
}
