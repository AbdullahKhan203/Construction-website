import React from 'react'
import ContactInfoComp from './ContactInfoComp'
import { TiWorldOutline } from "react-icons/ti";
import { RiTimeZoneLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

export default function ContactInfo() {
  return (
     <div className='w-full bg-[#020c26]'>
    <div className='max-w-[960px] md:h-[420px] m-auto grid grid-cols-1 md:grid-cols-3 gap-2 ' >
        <ContactInfoComp heading="Our Location" detailOne="127, Manchaster city, London
"  detailTwo="86/A, green street, California, USA" linkName="Get Direction" Icon={TiWorldOutline} />
        <ContactInfoComp heading="Our Location" detailOne="127, Manchaster city, London
"  detailTwo="86/A, green street, California, USA" linkName="Get Direction" Icon={RiTimeZoneLine} />
        <ContactInfoComp heading="Our Location" detailOne="127, Manchaster city, London
"  detailTwo="86/A, green street, California, USA" linkName="Get Direction" Icon={MdOutlineMailOutline} />
       
    </div>
    </div>
  )
}
