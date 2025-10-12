// import Image from 'next/image'
// import React from 'react'
// import companyLogo from '../../public/assets/images/company-logo.png'
// import footerProject from '../../public/assets/images/footer-project.jpeg'
// import { FaPhone } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaGlobe } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <div className='bg-gradient-to-br from-white to-[#dd261e] px-[10px] lg:px-[40px]'>
//       <div className='w-full py-[10px] lg:py-[40px] grid gap-6 
//       grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
//         <div className='flex-1  bg-transpparent bg-opacity-80 p-2 rounded'>
//           <div className="logo h-[150px] w-[150px] relative flex justify-center items-center">
//             {/* <Image 
//               src={companyLogo} 
//               alt="company logo" 
//               fill 
//               className="object-contain"
//             /> */}
//             Logo
//           </div>
//           <address className="not-italic text-lg text-gray-800 leading-relaxed">
//             <strong className="block mb-1">ABC Constructions</strong>
//             123 Main Street, Block A<br />
//             Islamabad, Pakistan<br />

//             <a
//               href="tel:+92511234567"
//               className="flex items-center gap-2 hover:underline text-sm text-[#dd261e]"
//             >
//               <FaPhone className="w-4 h-4 shrink-0" />
//               <span>(051) 123-4567</span>
//             </a>

//             <a href="mailto:info@abcconstructions.com" className="text-blue-600 hover:underline flex items-center gap-2">
//               <MdEmail /> <span>info@abcconstructions.com</span>
//             </a>

//             <a
//               href="https://www.abcconstructions.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline flex items-center gap-2"
//             >
//               <FaGlobe /> <span>www.abcconstructions.com</span>
//             </a>
//           </address>
//         </div>

//         <div className='flex-1 bg-transpparent bg-opacity-80 p-2 rounded'>
//           <h2 className='text-lg font-bold'>Updates</h2>
//           {[1, 2, 3].map((_, i) => (
//             <div className="latest-projects" key={i}>
//               <div className='flex items-center'>
//                 <div className="h-[90px] w-[180px] relative mr-1">
//                   <Image className='h-[100%] w-[100%]' src={footerProject} alt='latest-project' fill />
//                 </div>
//                 <h2 className='font-bold'>CASA 1000-TW-01 500Kv</h2>
//               </div>
//               <p className='project-date'>August 13, 2021</p>
//             </div>
//           ))}
//         </div>

//         <div className='flex-1 bg-transpparent bg-opacity-80 p-2 rounded'>
//           <h2 className='text-lg font-bold'>Services</h2>
//           <ul className='flex flex-col gap-2'>
//             <li>EPC Projects</li>
//             <li>Civil Works</li>
//             <li>Erection & Installation</li>
//             <li>Optical Fiber</li>
//             <li>Scada</li>
//             <li>Training</li>
//             <li>Design & Engineering</li>
//           </ul>
//         </div>

//         <div className='flex-1 bg-transparent bg-opacity-80 p-2 rounded'>
//           <h2 className='text-lg font-bold'>Useful Links</h2>
//           <ul className='flex flex-col gap-2'>
//             <li>Home</li>
//             <li>Mission</li>
//             <li>About US</li>
//             <li>Experties</li>
//             <li>Transmisison Line</li>
//             <li>Sub Station</li>
//             <li>Telecom</li>
//             <li>Whistle blowing</li>
//           </ul>
//         </div>
//       </div>

//       <p className="text-sm text-gray-800 text-center border-t mt-3 h-[40px] flex items-center justify-center bg-transparent bg-opacity-80 rounded">
//         © {new Date().getFullYear()} Company Name Co. All rights reserved. Developed by:
//         <a href="" className="text-blue-500 hover:underline ml-1">
//           Abdullah Khan
//         </a>
//       </p>
//     </div>
//   )
// }
// // S & B Sons Construction








import Image from 'next/image'
import Link from 'next/link'; // Add this at the top if not already present
import React from 'react'
import companyLogo from '../../public/assets/images/company-logo.png'
import footerProject from '../../public/assets/images/footer-project.jpeg'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";

import { FaGlobe } from "react-icons/fa";
// to-[#dd261e]
export default function Footer() {
  return (
    <div className='bg-gradient-to-br from-white to-main px-[10px] lg:px-[40px]'>
      <div className='w-full py-[10px] lg:py-[40px] grid gap-6 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex-1  bg-transpparent bg-opacity-80 p-2 rounded'>
          <div className="logo h-[150px] w-[150px] relative flex justify-center items-center">
            <Image 
              src={companyLogo} 
              alt="company logo" 
              fill 
              className="object-contain"
            />
            {/* Logo */}
          </div>
          <address className="not-italic text-lg text-gray-800 leading-relaxed">
            <strong className="block mb-1">Siddique and Bashir Sons</strong>
            St # 1,Gulshan-e-Multan Colony,opp Maham Science School,40 Footi Road<br />
            Samijabad,Multan<br />
            Office 3,1st Floor,Plaza 42, Urban Boulevard,<br />
            Bahria Enclave,Islamabad<br />

            <a
              href="tel:+92511234567"
              className="flex items-center gap-2 hover:underline text-sm text-[#dd261e]"
            >
              <FaPhone className="w-4 h-4 shrink-0" />
              <span>0316-0670670</span>
            </a>

            <a href="mailto:info@abcconstructions.com" className="text-blue-600 hover:underline flex items-center gap-2">
              <IoMailOpenOutline  className="w-4 h-4 shrink-0" /> <span>usama.khan86277@gmail.com</span>
            </a>
            {/* <a href="mailto:info@abcconstructions.com" className="text-blue-600 hover:underline flex items-center gap-2 text-wrap">
              <IoMailOpenOutline  className="w-4 h-4 shrink-0" /> <span className='text-wrap'>sandbsonsconstructioncompany1@gmail.com
</span>
            </a> */}
       <a
  href="mailto:info@abcconstructions.com"
  className="text-blue-600 hover:underline flex items-start gap-2"
>
  <IoMailOpenOutline className="w-4 h-4 shrink-0 align-middle mt-0.5" />
  <span className="break-words min-w-0 leading-tight">
    sandbsonsconstructioncompany1@gmail.com
  </span>
</a>




            <a
              href="https://www.abcconstructions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              <FaGlobe  className="w-4 h-4 shrink-0" /> <span>www.siddiqueandbashirsons.com</span>
            </a>
          </address>
        </div>

        <div className='flex-1 bg-transpparent bg-opacity-80 p-2 rounded'>
          <h2 className='text-lg font-bold'>Updates</h2>
          {[1, 2, 3].map((_, i) => (
            <div className="latest-projects" key={i}>
              <div className='flex items-center'>
                <div className="h-[90px] w-[180px] relative mr-1">
                  <Image className='h-[100%] w-[100%]' src={footerProject} alt='latest-project' fill />
                </div>
                <h2 className='font-bold'>CASA 1000-TW-01 500Kv</h2>
              </div>
              <p className='project-date'>August 13, 2021</p>
            </div>
          ))}
        </div>

        {/* <div className='flex-1 bg-transpparent bg-opacity-80 p-2 rounded'>
          <h2 className='text-lg font-bold'>Services</h2>
          <ul className='flex flex-col gap-2'>
            <li>EPC Projects</li>
            <li>Civil Works</li>
            <li>Erection & Installation</li>
            <li>Optical Fiber</li>
            <li>Scada</li>
            <li>Training</li>
            <li>Design & Engineering</li>
          </ul>
        </div> */}

        {/* <div className='flex-1 bg-transparent bg-opacity-80 p-2 rounded'>
          <h2 className='text-lg font-bold'>Useful Links</h2>
          <ul className='flex flex-col gap-2'>
            <li>Home</li>
            <li>Mission</li>
            <li>About US</li>
            <li>Experties</li>
            <li>Transmisison Line</li>
            <li>Sub Station</li>
            <li>Telecom</li>
            <li>Whistle blowing</li>
          </ul>
        </div> */}


        <div className='flex-1 bg-transpparent bg-opacity-80 p-2 rounded'>
  <h2 className='text-lg font-bold'>Services</h2>
  <ul className='flex flex-col gap-2'>
    <li><Link href="/services/electrical-work">Electrical Work</Link></li>
    <li><Link href="/services/mechanical-work">Mechanical Work</Link></li>
    <li><Link href="/services/civil-work">Civil Work</Link></li>
    <li><Link href="/services/telecommunication-work">Telecommunation Work</Link></li>
    <li><Link href="/services/transmission-line">Transmission Line</Link></li>
    <li><Link href="/services/grid-station">Grid Station</Link></li>
    <li><Link href="/services/manpower-services">Manpower & EPTT</Link></li>
  </ul>
</div>

{/* Useful Links Section */}
<div className='flex-1 bg-transparent bg-opacity-80 p-2 rounded'>
  <h2 className='text-lg font-bold'>Useful Links</h2>
  <ul className='flex flex-col gap-2'>
    <li><Link href="/home">Home</Link></li>
    <li><Link href="/about">Mission</Link></li>
    <li><Link href="/about">About US</Link></li>
    <li><Link href="/services">Experties</Link></li>
    <li><Link href="/projects">Projects</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/getQuote">Get a Quote</Link></li>
    <li><Link href="/whistleBlowing">Whistle blowing</Link></li>
  </ul>
</div>
      </div>

      <p className="text-sm text-gray-800 text-center border-t mt-3 h-[40px] flex items-center justify-center bg-transparent bg-opacity-80 rounded">
        © {new Date().getFullYear()} Company Name Co. All rights reserved. Developed by:
        <a href="" className="text-blue-500 hover:underline ml-1">
          Abdullah Khan
        </a>
      </p>
    </div>
  )
}
// S & B Sons Construction
















