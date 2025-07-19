import React from 'react'
import { AiOutlineHome } from "react-icons/ai";

export default function Info({ icon: Icon, first, second }) {
  return (
               <div className='w-full h-auto flex justify-start items-center mb-4'>
                <div  className='h-[30px] w-[30px] flex-shrink-0'>
                    
                    {/* <AiOutlineHome className='h-[100%] w-[100%]' /> */}
                    < Icon  className='h-[100%] w-[100%] ' />
                </div>
                <div className='h-[100%] w-max overflow-hidden ml-2'>
                    <h3 className='text-[16px]  '>{first}</h3>
                    <p className='text-[14px]'>{second}</p>
                </div>
               </div>
  )
}
