import Image from 'next/image'
import React from 'react'
import { RxResume } from "react-icons/rx";

import FounderImg from '../../../../public/assets/images/founder.jpg.webp' 
export default function Founder() {
  return (
    // <div className='max-w-[960px] grid grid-cols-2 relative mx-auto my-2'>
    //     <div className='h-[500px] max-w-[500px] border-2 relative '>
    //         <Image src={FounderImg} fill alt='founder-Img' className='absolute z-1' />
    //         <div className='h-[100px] w-[100px] rounded-[50%]  absolute z-2 top-[50%] bottom-[50%] translate-y-[-50%] right-0 translate-x-[50%] bg-white flex justify-center items-center cursor-pointer  border-2 padding-2' >
    //             {/* <RxResume className='h-[50px] w-[50px] font-bold bg-main' /> */}
    //            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-amber-400"></div>


    //         </div>
    //     </div>
    //     <div className='h-[500px] max-w-[400px] border-2 py-10 px-1 absolute right-0'>
    //         <p className='text-[16px]'>About Company</p>
    //         <h2 className='text-[44px] mt-3'>Deliver inovative Industrial solution</h2>
    //         <p className='text-[16px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique voluptate praesentium amet, deserunt omnis distinctio, ratione quia consequuntur facilis quasi? Laudantium rerum consectetur sint voluptatum cupiditate sunt distinctio iusto!</p>
    //     </div>
    // </div>
      <div className='max-w-[960px] flex-col items-center flex md:flex-row md:justify-around  mx-auto my-2'>
        <div className='h-[400px] md:h-[500px] w-[100%] smx:w-[400px] md:w-[500px]   mx-auto relative '>
            <Image src={FounderImg} fill alt='founder-Img' className='absolute z-1' />
            <div className='h-[80px] w-[80px] rounded-[50%]  absolute z-2  md:top-[50%] bottom-0 md:bottom-[50%] md:translate-y-[-50%] translate-y-[50%]   translate-x-[50%] right-[50%] md:right-0 md:translate-x-[50%] bg-white flex justify-center items-center cursor-pointer shadow-md padding-2' >
                {/* <RxResume className='h-[50px] w-[50px] font-bold bg-main' /> */}
               <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-amber-400"></div>


            </div>
        </div>
        <div className='h-auto md:h-[500px]  mx-auto  md:mx-0 w-[100%]  md:max-w-[350px] lg:max-w-[400px]  py-10 px-1 mr-0 lg:mr-[-20px] '>
            <p className='text-[16px] text-main'>About Company</p>
            <h2 className='text-[44px] mt-3'>Deliver inovative Industrial solution</h2>
            <p className='text-[16px] '>Siddique & Bashir Sons Construction Company is a constituent 
company of a group active in the field of construction and industries. 
The company includes a brilliant professional team for the purpose 
of constructing all types of low / high voltage transmission lines, 
substations, mechanical erection of industrial plants. S&BSCC is the 
No. 1 choice for engineering, construction, and project management. 
Their diverse portfolio encompasses Power Transmission Line & 
Substation Construction, Procurement, Installation & Erection of 
Electrical Equipment.</p>
        </div>
    </div>
  )
}
