import Image from 'next/image'
import React from 'react'
import { TiWorldOutline } from "react-icons/ti";

export default function ContactInfoComp({Icon,heading,detailOne,detailTwo,linkName}) {
  return (
   
    <div className='w-[250px] h-[250px] relative m-auto'>
        < Icon className='h-[100%] w-[100%] z-1 absolute text-gray-500 opacity-[0.5] font-thin'/>
        <div className='z-2 absolute w-[100%] h-[100%]  flex flex-col  justify-center items-center text-center text-white'>
            <h1>{heading}</h1>
            <p>{detailOne}</p>
            <p>{detailTwo}</p>
            <a className='font-bold text-main' href="#">{linkName}</a>
        </div>
    </div>
  )
}
