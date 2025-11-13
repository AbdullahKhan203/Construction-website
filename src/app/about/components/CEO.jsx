// import Image from 'next/image'
// import React from 'react'
// import CeoImg from '../../../../public/assets/images/founder.jpg.webp' // change path accordingly

// export default function Ceo() {
//   return (
//     <div className='max-w-[860px] flex flex-col md:flex-row-reverse md:justify-around items-center mx-auto my-8'>
//       {/* Image */}
//       <div className='h-[360px] md:h-[420px] w-[100%] smx:w-[350px] md:w-[420px] mx-auto relative'>
//         <Image src={CeoImg} fill alt='ceo-img' className='absolute object-cover rounded-xl' />
//       </div>

//       {/* Content */}
//       <div className='h-auto md:h-[420px] mx-auto md:mx-0 w-[100%] md:max-w-[320px] lg:max-w-[360px] py-8 px-2'>
//         <p className='text-[16px] text-main'>About CEO</p>
//         <h2 className='text-[36px] mt-3  md:leading-[0.9] lg:leading-[1.1]'>Leading with Vision and Integrity</h2>
//         <p className='text-[15px] mt-3'>
//           Our CEO drives the company’s strategic direction with a focus on innovation,
//           sustainability, and excellence. With years of leadership experience, the CEO ensures
//           that every project reflects our core values and commitment to client satisfaction.
//         </p>
//       </div>
//     </div>
//   )
// }





'use client';
import Image from 'next/image';
import React from 'react';
import FounderImg from '../../../../public/assets/images/founder.jpg.webp';
import CEOImg from '../../../../public/assets/images/CEO.jpeg';

export default function CEO() {
  return (
    <div className="max-w-[960px] mx-auto my-6 flex flex-col md:flex-row items-center md:justify-between gap-8 px-4">

      {/* Image Section */}
      <div className="relative w-full sm:w-[400px] md:w-[450px] aspect-square mx-auto flex-shrink-0 ">
        <Image
          src={CEOImg}
          alt="CEO Image"
          fill
          className="object-cover rounded-xl"
          priority
        />

        {/* Play Button */}
        <div
          className="
            h-[80px] w-[80px] rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer
            absolute
            md:top-1/2 md:right-0 md:translate-x-1/2 md:-translate-y-1/2
            bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
            md:bottom-auto md:left-auto
          "
        >
          <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-amber-400"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:max-w-[450px] text-left">
        <p className="text-[16px] text-main mb-2">About Our CEO</p>
        <h2 className="text-[36px] md:text-[42px] leading-tight font-semibold mb-4">
          Delivering Innovative Industrial Solutions
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-700">
          Siddique & Bashir Sons Construction Company is a constituent company of a group
          active in the field of construction and industries. The company includes a brilliant
          professional team for the purpose of constructing all types of low/high voltage
          transmission lines, substations, and mechanical erection of industrial plants.
          S&BSCC is the No. 1 choice for engineering, construction, and project management.
          Their diverse portfolio encompasses Power Transmission Line & Substation
          Construction, Procurement, Installation & Erection of Electrical Equipment.
        </p>
      </div>
    </div>
  );
}









