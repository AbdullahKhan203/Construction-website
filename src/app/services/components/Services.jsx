import React from 'react'
import ServiceCard from './ServiceCard'
import { servicesData as data } from '../../../data/servicesData';
export default function Services() {
      // console.log("data",data);
      
  return (
    <div className='h-auto max-w-[960px] m-auto my-[20px] md:my-[40px]'>

        <p className='font-bold text-orange-500 text-center'>OUR SERVICES</p>
        <h1 className='  text-center text-[32px] font-rubik my-1 smx:my-2'>We provide all of your
industrial solution</h1>
        <div className=" grid gap:1 md:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">


     {data.map((item,i)=>{
         return <ServiceCard key={i} title={item.title} description={item.shortDescription} img={item.image} slug={item.slug} />
     })}
   
   
    
     
        {/* <ServiceCard />
        <ServiceCard /> */}
        </div>
      
    </div>
  )
}
