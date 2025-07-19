import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <div className='h-auto max-w-[960px] m-auto my-[20px] md:my-[40px]'>

        <p className='font-bold text-orange-500 text-center'>OUR SERVICES</p>
        <h1 className='  text-center text-[32px] font-rubik my-1 smx:my-2'>We provide all of your
industrial solution</h1>
        <div className=" grid gap:1 md:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
  <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        </div>
      
    </div>
  )
}
