import Image from 'next/image'
import React from 'react'
import cardImg from '../../../../public/assets/images/home-service-card.webp'
import Link from 'next/link';

export default function ServiceCard(props) {
  return (
    <>
    {/* <div className="h-auto smx:h-[400px] w-[80%] smx:w-[300px] border-2 flex flex-col mx-auto my-2 ">
   
   <div className="w-full h-[300px] border-amber-500 border-2">
     <Image src={cardImg} className="h-full w-full object-cover" alt="card-img" />
   </div>

   
   <div className=" flex-grow flex flex-col justify-between border-blue-500 border-2 py-2.5">
     <h1 className="text-[24px] font-semibold">Industrial construction</h1>
     <p className="text-sm text-gray-600">
       Waters make fish every without firmament saw had. Morning air subdue.
     </p>

     <Link href="/about">
       <span className="text-[#7a6a85] hover:underline">Read More</span>
     </Link>
   </div>
 </div> */}

{/* <div className='w-[90%]  sm:w-[60%] md:w-[350px] h-[400px]  lg:w-[300px] lg:h-[350px] border-2 m-auto my-2 flex flex-col'> 
  <div className='h-[300px] lg:h-[250px] w-full border-2'>
    <Image src={cardImg} className="h-full w-full object-cover" alt="card-img" />
  </div>
  <div className='border-red-400 border-2 flex  flex-1 flex-col justify-start lg:justify-between '>
    <h1 className='text-[28px] leading-6'>Industrial construction</h1>
    <p className='leading-4'>Waters make fish every without firmament saw had. Morning air subdue.</p>
    <a href="#">Read more</a>
  </div>
</div> */}



{/* <div className="w-[90%] sm:w-[60%] md:w-[350px] lg:w-[300px] h-[400px] lg:h-[350px] m-auto my-2 border-2 flex flex-col"> 
  <div className="w-full h-[300px] lg:h-[250px] border-2">
    <Image src={cardImg} alt="card-img" className="w-full h-full object-cover" />
  </div>

  <div className="flex flex-1 flex-col justify-start lg:justify-between border-2 border-red-400 p-2">
    <h1 className="text-[28px] leading-6">Industrial construction</h1>
    <p className="leading-4 text-sm">Waters make fish every without firmament saw had. Morning air subdue.</p>
    <a href="#" className="text-blue-600 hover:underline text-sm">Read more</a>
  </div>
</div> */}



<Link href={`/services/${props.slug}`} className="w-[90%] sm:w-[60%] md:w-[350px] lg:w-[300px]  md:h-[400px]   lg:h-[350px] m-auto my-2 border-2 flex flex-col"> 
  {/* Image Section */}
  <div className="w-full h-[300px] lg:h-[250px] border-2">
    <Image src={props.img} alt="card-img" className="w-full h-full object-cover" />
  </div>

  {/* Content Section */}
  <div className="flex flex-1 flex-col justify-start lg:justify-between border-2 border-red-400 p-2">
    <h1 className="text-[28px] leading-6">{props.title}</h1>
    <p className="leading-4 text-sm">{props.description}</p>
    <p href={`/services/${props.slug}`} className="text-blue-600 hover:underline text-sm">Read more</p>
  </div>
</Link>




</>


  )
}
