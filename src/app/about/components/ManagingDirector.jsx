// import Image from 'next/image'
// import React from 'react'
// import MdImg from '../../../../public/assets/images/founder.jpg.webp';
// export default function ManagingDirector() {
//   return (
//     <div className='max-w-[860px] flex flex-col md:flex-row md:justify-around items-center mx-auto my-8'>
//       {/* Image */}
//       <div className='h-[360px] md:h-[420px] w-[100%] smx:w-[350px] md:w-[420px] mx-auto relative'>
//         <Image src={MdImg} fill alt='managing-director-img' className='absolute object-cover rounded-xl' />
//       </div>

//       {/* Content */}
//       <div className='h-auto md:h-[420px] mx-auto md:mx-0 w-[100%] md:max-w-[320px] lg:max-w-[360px] py-8 px-2'>
//         <p className='text-[16px] text-main'>About Managing Director</p>
//         <h2 className='text-[36px] mt-3 md:leading-[0.9] lg:leading-[1.1]'>Driving Operational Excellence</h2>
//         <p className='text-[15px] mt-3'>
//           Our Managing Director plays a pivotal role in overseeing operations and ensuring that
//           our strategic goals are achieved efficiently. With strong leadership and deep industry
//           insight, they guide teams to deliver projects that exceed expectations and uphold our
//           company’s reputation for quality and reliability.
//         </p>
//       </div>
//     </div>
//   )
// }






import Image from 'next/image'
import React from 'react'
import MdImg from '../../../../public/assets/images/founder.jpg.webp';
export default function ManagingDirector() {
  return (
    <div className='max-w-[860px] flex flex-col md:flex-row md:justify-around items-center mx-auto my-8'>
      
      {/* Content Section (Left side on large screens) */}
      <div className='h-auto md:h-[420px] mx-auto md:mx-0 w-[100%] md:max-w-[320px] lg:max-w-[360px] py-8 px-2 md:pr-8'>
        <p className='text-[16px] text-main'>About Managing Director</p>
        <h2 className='text-[36px] mt-3 md:leading-[0.9] lg:leading-[1.1]'>
          Driving Operational Excellence
        </h2>
        <p className='text-[15px] mt-3'>
          Our Managing Director plays a pivotal role in overseeing operations and ensuring that
          our strategic goals are achieved efficiently. With strong leadership and deep industry
          insight, they guide teams to deliver projects that exceed expectations and uphold our
          company’s reputation for quality and reliability.
        </p>
      </div>

      {/* Image Section (Right side on large screens) */}
      <div className='h-[360px] md:h-[420px] w-[100%] smx:w-[350px] md:w-[420px] mx-auto relative'>
        <Image
          src={MdImg}
          fill
          alt='managing-director-img'
          className='absolute object-cover rounded-xl'
        />
      </div>
    </div>
  )
}
