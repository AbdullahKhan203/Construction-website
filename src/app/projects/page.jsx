import Image from 'next/image'
import React from 'react'
import ProjectImg from '../../../public/assets/images/project.png.webp'
export default function Projects() {
  return (
    <div className='max-w-[960px] m-auto border-2 flex flex-wrap gap-2'>
      <div className='h-[310px] w-[291px]'>
      <div className='w-[100%] h-[208px] relative border-2'>
          <Image src={ProjectImg} fill alt='project-Image'  />
      </div>
       <div className='flex-1 border-2 border-orange-500 w-full'></div>
      </div>
     
    </div>
  )
}
