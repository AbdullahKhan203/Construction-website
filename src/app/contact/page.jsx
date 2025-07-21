import React from 'react'
import Input from './components/Input'
import Buton from '../../components/Buton'
import Info from './components/Info'
import { AiOutlineHome } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import ContactInfo from '@/components/ContactInfo';
import ConsultationInvite from '@/components/ConsultationInvite';
import  EmbedMap from './components/EmbedMap'
export default function Contact() {
  return (
    <div>
    <div className='w-[90%] md:max-w-[960px] m-auto my-2'>
        <h1 className='text-[27px] font-Rubik font-semibold'>Get in Touch</h1>
        <div className='w-full flex flex-col md:flex-row justify-between'>
            <div className='w-full  md:w-[660px]  m-auto md:mx-0   my-2  md:my-0'>
               <form className=' w-full' action="">
               <textarea
  className="w-full h-[190px] border-1 outline-none p-2"
  name=""
  id=""
  placeholder="Type your message here..."
/>

                 <div className='flex flex-col md:flex-row justify-between'>
                   <Input stylee="my-1 border-1 w-[100%] md:w-[47%] h-[48px] p-2  outline-none" type="text" placeholder="Enter your text" width='50%' />
                   <Input  stylee="my-1 border-1 w-[100%]  md:w-[47%] h-[48px] p-2 outline-none" type="email"  placeholder="Enter your email"  width='50%' />
                    </div> 
                    <div>
                    <Input  stylee="my-1 border-1 w-[100%] h-[48px] p-2 outline-none" type="text" placeholder="Enter subject" />    
                    </div> 
                    
                    <Buton stylee="w-[100px] h-[50px] flex items-center justify-center border-2 text-white hover:text-main border-main  hover:bg-transparent mt-6" value="Send" />    
               </form>
            </div>
            <div className='w-[100%] sm:w-[60%]  md:w-[240px]  '>
                {/* for region and local address */}
              <Info icon={AiOutlineHome}  first="Buttonwood, California." second="Rosemead, CA 91770" />
                {/* phone and phone time */}
              <Info icon={FaMobileAlt}  first="+1 253 565 2365" second="Mon to Fri 9am to 6pm" />
                {/* email and Text */}
              <Info icon={MdOutlineMailOutline}  first="support@colorlib.com" second="Send us your query anytime!

" />
            </div>

        </div>
    </div>
    

            <ContactInfo />
            {/* <EmbedMap /> */}
            {/* <ConsultationInvite /> */}
            </div>
  )
}
