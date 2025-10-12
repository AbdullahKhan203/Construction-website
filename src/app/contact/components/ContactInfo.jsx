import React from 'react'
import ContactInfoComp from './ContactInfoComp'
import { TiWorldOutline } from "react-icons/ti";
import { RiTimeZoneLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

export default function ContactInfo() {
  return (
     <div className='w-full bg-[#020c26]'>
    <div className='max-w-[960px] md:h-[420px] m-auto grid grid-cols-1 md:grid-cols-3 gap-2 ' >
        <ContactInfoComp heading="Our Location" detailOne=" St # 1,Gulshan-e-Multan Colony,opp Maham Science School,40 Footi Road
            Samijabad,Multan.
"  detailTwo="Office 3,1st Floor,Plaza 42, Urban Boulevard
            Bahria Enclave,Islamabad" linkName="Get Direction" Icon={TiWorldOutline} />
        <ContactInfoComp heading="Opening hour" detailOne="Mon-Fri (9.00-19.00)
"  detailTwo="Sat-Sun (Closed)" linkName="" Icon={RiTimeZoneLine} />
        <ContactInfoComp heading="Drop a message
" detailOne="usama.khan86277@gmail.com"  detailTwo="sandbsonsconstructioncompany1@gmail.com" linkName="Mail Us" Icon={MdOutlineMailOutline} />
       
    </div>
    </div>
  )
}
