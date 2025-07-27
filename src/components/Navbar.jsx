// "use client";

// import { useState, useEffect } from "react";
// import { 
//   RiPlanetLine, 
//   RiMenuLine, 
//   RiCloseLine, 
//   RiArrowDownSLine,
//   RiPieChartLine,
//   RiArrowUpDownLine,
//   RiBarChartLine,
//   RiUserLine,
//   RiLockLine,
//   RiMessage3Line
// } from "react-icons/ri";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 250);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <header className={`w-full bg-[hsl(220,24%,12%)] shadow-[0_2px_16px_hsla(220,32%,8%,0.3)] z-[100] transition-all duration-300 ${
//         isScrolled ? "fixed top-0 left-0 animate-slideDown" : "static"
//       }`}>
//         <nav className="max-w-[960px] mx-auto px-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             {/* Logo and toggle button */}
//             <div className="flex items-center justify-between h-14 md:h-[5.5rem]">
//               <a href="#" className="flex items-center gap-1 text-white font-semibold">
//                 <RiPlanetLine className="text-xl" />
//                 <span>Siddiue <br /> and Bashir  <br /> Sons</span>
//               </a>
              
//               <button 
//                 className="relative w-8 h-8 cursor-pointer md:hidden"
//                 onClick={toggleMenu}
//               >
//                 <RiMenuLine className={`absolute inset-0 m-auto text-xl text-white transition-all duration-200 ${
//                   isMenuOpen ? "opacity-0 rotate-90" : "opacity-100"
//                 }`} />
//                 <RiCloseLine className={`absolute inset-0 m-auto text-xl text-white transition-all duration-200 ${
//                   isMenuOpen ? "opacity-100 rotate-90" : "opacity-0"
//                 }`} />
//               </button>
//             </div>

//             {/* Navigation menu */}
//             <div className={`${isMenuOpen ? "block" : "hidden"} md:block md:h-[5.5rem] relative`}>
//               <ul className="bg-[hsl(220,24%,12%)] md:flex md:items-center md:h-full md:gap-6">
//                                {/* Home Link */}
//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      Home
//                    </a>
//                 </li>
                
//                 {/* About Link */}
//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      About
//                    </a>
//                  </li>
                
//                 {/* Services Dropdown */}
//                 <li className="group relative cursor-pointer">
//                   <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                     <span>Services</span>
//                     <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
//                   </div>
                  
//                   <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
//                     {/* Dropdown items */}
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiUserLine className="text-xl" />
//                          <span>Project 1</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiLockLine className="text-xl" />
//                          <span>Project 2</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiMessage3Line className="text-xl" />
//                          <span>Project 3</span>
//                        </a>
//                      </li>
//                   </ul>
//                 </li>
//                 <li className="group relative cursor-pointer">
//                   <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                     <span>Projects</span>
//                     <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
//                   </div>
                  
//                   <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
//                     {/* Dropdown items */}
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiUserLine className="text-xl" />
//                          <span>Project 1</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiLockLine className="text-xl" />
//                          <span>Project 2</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiMessage3Line className="text-xl" />
//                          <span>Project 3</span>
//                        </a>
//                      </li>
//                   </ul>
//                 </li>
//                 <li className="group relative cursor-pointer">
//                   <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                     <span>Blog</span>
//                     <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
//                   </div>
                  
//                   <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
//                     {/* Dropdown items */}
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiUserLine className="text-xl" />
//                          <span>Blog 1</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiLockLine className="text-xl" />
//                          <span>Blog 2</span>
//                        </a>
//                      </li>
//                   </ul>
//                 </li>

//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      Contact
//                    </a>
//                 </li>
//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      Get a Quote
//                    </a>
//                 </li>
                
//                 {/* ... other dropdowns ... */}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {isScrolled && <div className="h-[5.5rem]"></div>}
//     </>
//   );
// };

// export default Navbar;









// "use client";

// import { useState, useEffect } from "react";
// import CompanyLogo from '../../public/assets/images/company-logo.png' 
// import Image from "next/image";
// import { 
//   RiPlanetLine, 
//   RiMenuLine, 
//   RiCloseLine, 
//   RiArrowDownSLine,
//   RiPieChartLine,
//   RiArrowUpDownLine,
//   RiBarChartLine,
//   RiUserLine,
//   RiLockLine,
//   RiMessage3Line
// } from "react-icons/ri";
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 250);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <header className={`w-full bg-[hsl(220,24%,12%)] shadow-[0_2px_16px_hsla(220,32%,8%,0.3)] z-[100] transition-all duration-300 ${
//         isScrolled ? "fixed top-0 left-0 animate-slideDown" : "static"
//       }`}>
//         <nav className="max-w-[960px] mx-auto px-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             {/* Logo and toggle button */}
//             <div className="flex items-center justify-between h-14 md:h-[5.5rem]">
//               <a href="#" className="flex items-center gap-1 text-white font-semibold">
//                 {/* <RiPlanetLine className="text-xl" /> */}
//                 <div className="h-[40px] md:h-[80px] w-[40px] md:w-[80px] border-2 border-orange-500 relative">
//                  <Image src={CompanyLogo} fill alt="siddique and bashir sons logo" />
//                 </div>
//                 {/* <Image  /> */}
//                 <span className="leading-[15px]">Siddiue <br /> and Bashir  <br /> Sons</span>
//               </a>
              
//               <button 
//                 className="relative w-8 h-8 cursor-pointer md:hidden"
//                 onClick={toggleMenu}
//               >
//                 <RiMenuLine className={`absolute inset-0 m-auto text-xl text-white transition-all duration-200 ${
//                   isMenuOpen ? "opacity-0 rotate-90" : "opacity-100"
//                 }`} />
//                 <RiCloseLine className={`absolute inset-0 m-auto text-xl text-white transition-all duration-200 ${
//                   isMenuOpen ? "opacity-100 rotate-90" : "opacity-0"
//                 }`} />
//               </button>
//             </div>

//             {/* Navigation menu */}
//             <div className={`${isMenuOpen ? "block" : "hidden"} md:block md:h-[5.5rem] relative`}>
//               <ul className="bg-[hsl(220,24%,12%)] md:flex md:items-center md:h-full md:gap-6">
//                                {/* Home Link */}
//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      Home
//                    </a>
//                 </li>
                
//                 {/* About Link */}
//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      About
//                    </a>
//                  </li>
                
//                 {/* Services Dropdown */}
//                 <li className="group relative cursor-pointer">
//                   <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                     <span>Services</span>
//                     <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
//                   </div>
                  
//                   <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
//                     {/* Dropdown items */}
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiUserLine className="text-xl" />
//                          <span>Project 1</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiLockLine className="text-xl" />
//                          <span>Project 2</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiMessage3Line className="text-xl" />
//                          <span>Project 3</span>
//                        </a>
//                      </li>
//                   </ul>
//                 </li>
//                 <li className="group relative cursor-pointer">
//                   <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                     <span>Projects</span>
//                     <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
//                   </div>
                  
//                   <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
//                     {/* Dropdown items */}
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiUserLine className="text-xl" />
//                          <span>Project 1</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiLockLine className="text-xl" />
//                          <span>Project 2</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiMessage3Line className="text-xl" />
//                          <span>Project 3</span>
//                        </a>
//                      </li>
//                   </ul>
//                 </li>
//                 <li className="group relative cursor-pointer">
//                   <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                     <span>Blog</span>
//                     <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
//                   </div>
                  
//                   <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
//                     {/* Dropdown items */}
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiUserLine className="text-xl" />
//                          <span>Blog 1</span>
//                        </a>
//                      </li>
//                      <li>
//                        <a href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
//                          <RiLockLine className="text-xl" />
//                          <span>Blog 2</span>
//                        </a>
//                      </li>
//                   </ul>
//                 </li>

//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      Contact
//                    </a>
//                 </li>
//                  <li>
//                    <a href="#" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
//                      Get a Quote
//                    </a>
//                 </li>
                
//                 {/* ... other dropdowns ... */}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {isScrolled && <div className="h-[5.5rem]"></div>}
//     </>
//   );
// };

// export default Navbar;













"use client";

import { useState, useEffect } from "react";
import CompanyLogo from '../../public/assets/images/company-logo.png' 
import Image from "next/image";
import Link from "next/link";
import { servicesData as data } from '../data/servicesData';
import { 
  RiPlanetLine, 
  RiMenuLine, 
  RiCloseLine, 
  RiArrowDownSLine,
  RiPieChartLine,
  RiArrowUpDownLine,
  RiBarChartLine,
  RiUserLine,
  RiLockLine,
  RiMessage3Line
} from "react-icons/ri";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`w-full bg-[hsl(220,24%,12%)] shadow-[0_2px_16px_hsla(220,32%,8%,0.3)] z-[100] transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 animate-slideDown" : "static"
      }`}>
        <nav className="max-w-[960px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo and toggle button */}
            <div className="flex items-center justify-between h-14 md:h-[5.5rem]">
              <Link href="#" className="flex items-center gap-1 text-white font-semibold">
                {/* <RiPlanetLine className="text-xl" /> */}
                {/* <div className="h-[40px] md:h-[80px] w-[40px] md:w-[80px]  relative flex justify-center items-center"> */}
                 {/* <Image src={CompanyLogo} fill alt="siddique and bashir sons logo" /> */}
                 {/* Logo
                </div> */}
                <div className="h-[40px] md:h-[80px] w-[40px] md:w-[80px] relative flex justify-center items-center">
  Logo
</div>

                {/* <Image  /> */}
                {/* <span className="leading-[15px]">Siddiue <br /> and Bashir  <br /> Sons</span> */}
                <span className="leading-[15px]">Company <br /> Name</span>
              </Link>
              
              <button 
                className="relative w-8 h-8 cursor-pointer md:hidden"
                onClick={toggleMenu}
              >
                <RiMenuLine className={`absolute inset-0 m-auto text-xl text-white transition-all duration-200 ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100"
                }`} />
                <RiCloseLine className={`absolute inset-0 m-auto text-xl text-white transition-all duration-200 ${
                  isMenuOpen ? "opacity-100 rotate-90" : "opacity-0"
                }`} />
              </button>
            </div>

            {/* Navigation menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block md:h-[5.5rem] relative`}>
              <ul className="bg-[hsl(220,24%,12%)] md:flex md:items-center md:h-full md:gap-6">
                               {/* Home Link */}
                 <li>
                   <Link href="/home" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
                     Home
                   </Link>
                </li>
                
                {/* About Link */}
                 <li>
                   <Link href="/about" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
                     About
                   </Link>
                 </li>
                
                {/* Services Dropdown */}
                <li className="group relative cursor-pointer">
                  <Link href="/services" className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
                    <span>Services</span>
                    <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
                  </Link>
                  
                  <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
                    {/* Dropdown items */}
                    {data.map((item,i)=>{
                       return  <li key={i}>
                       <Link   key={i} href={`/services/${item.slug}`} className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <span>{item.title}</span>
                       </Link>
                     </li>
                    })}
                    
                     {/* <li>
                       <Link href="/services/service2"  className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <span>MECHANICAL WORK</span>
                       </Link>
                     </li>
                     <li>
                       <Link href="/services/service3"  className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <span>CIVIL WORK</span>
                       </Link>
                     </li>
                     <li>
                       <Link href="/services/service3"  className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <span className="letter-wrap">TELECOMMUNICATION WORK</span>
                       </Link>
                     </li>
                     <li>
                       <Link href="/services/service3"  className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <span>TRANSMISSION LINE </span>
                       </Link>
                     </li>
                     <li>
                       <Link href="/services/service3"  className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <span>GRID STATION</span>
                       </Link>
                     </li>
                     <li>
                       <Link href="/services/service3"  className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <span>MANPOWER (MANPOWER & EPTT)</span>
                       </Link>
                     </li> */}
                  </ul>
                </li>
                <li className="group relative cursor-pointer">
                  <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
                    <Link href='/projects'>Projects</Link>
                    <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
                  </div>
                  
                  <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
                    {/* Dropdown items */}
                     <li>
                       <Link href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         {/* <RiUserLine className="text-xl" /> */}
                         <span>Project 1</span>
                       </Link>
                     </li>
                     <li>
                       <Link href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         {/* <RiLockLine className="text-xl" /> */}
                         <span>Project 2</span>
                       </Link>
                     </li>
                     <li>
                       <Link href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         {/* <RiMessage3Line className="text-xl" /> */}
                         <span>Project 3</span>
                       </Link>
                     </li>
                  </ul>
                </li>
                <li className="group relative cursor-pointer">
                  <div className="flex items-center justify-between h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
                    <span>Blog</span>
                    <RiArrowDownSLine className="ml-1 text-xl transition-transform duration-400 group-hover:rotate-180" />
                  </div>
                  
                  <ul className="max-h-0 overflow-hidden transition-all duration-400 ease-out group-hover:max-h-[1000px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in md:absolute md:left-0 md:top-full md:w-48 bg-[hsl(220,24%,15%)] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:z-[101]">
                    {/* Dropdown items */}
                     <li>
                       <Link href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <RiUserLine className="text-xl" />
                         <span>Blog 1</span>
                       </Link>
                     </li>
                     <li>
                       <Link href="#" className="flex items-center gap-2 px-6 py-3 pl-12 text-white font-semibold bg-[hsl(220,24%,15%)] hover:bg-[hsl(220,24%,12%)] md:px-4 md:pl-4">
                         <RiLockLine className="text-xl" />
                         <span>Blog 2</span>
                       </Link>
                     </li>
                  </ul>
                </li>

                 <li>
                   <Link href="/contact" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
                     Contact
                   </Link>
                </li>
                 <li>
                   <Link href="/getQuote" className="flex items-center h-full px-6 py-5 text-white font-semibold hover:bg-[hsl(220,24%,15%)] md:hover:bg-transparent md:px-0 md:py-0">
                     Get a Quote
                   </Link>
                </li>
                
                {/* ... other dropdowns ... */}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {isScrolled && <div className="h-[5.5rem]"></div>}
    </>
  );
};

export default Navbar;