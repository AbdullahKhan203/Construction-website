import Image from "next/image";
import {servicesData} from "../../../data/servicesData";

import React from 'react'

export default function ServicePage({params}) {
    const service = servicesData.find(s => s.slug === params.slug);
    // console.log("service",service);
    
    if (!service) {
    return <div className="max-w-[960px] mx-auto p-4">Service not found</div>;
  }
  return (
    <div className='max-w-[960px] m-auto my-6'>
     <div className="w-full h-[250px] flex justify-center items-center  border-2">
    <h1 className="text-[48px]">{service.title}</h1>
     </div>
     <p>{service.shortDescription}</p>
     <p>{service.longDescription}</p>
      
      <div className="h-[500px] w-full relative">
      <Image src={service.image} className="h-[100%] w-[100%]" fill alt="project-img" />
      </div>
    
    </div>
  )
}
