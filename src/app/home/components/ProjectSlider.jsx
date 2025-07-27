// // components/ProjectSlider.tsx
// 'use client'; // Mark as Client Component since we're using useState

// import { useState } from 'react';
// import Image from 'next/image';
// import FirstImg from '../../../../public/assets/images/Frame2.png'
// import SecondImg from '../../../../public/assets/images/Frame4.png'
// import ThirdImg from '../../../../public/assets/images/Frame1.png'


// const ProjectSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Sample data for your slider
//   const slides = [
//     {
//       id: 1,
//       title: "Industrial construction",
//       image: FirstImg // Update with your image path
//     },
//     {
//       id: 2,
//       title: "Research and development center",
//       image: SecondImg // Update with your image path
//     },
//     {
//       id: 3,
//       title: "Machine engineering",
//       image: ThirdImg // Update with your image path
//     },
//     {
//       id: 4,
//       title: "Project of technological park",
//       image: FirstImg // Update with your image path
//     }
//   ];

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full h-[500px]">
//       {/* Background Image with overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={SecondImg} // Update with your background image path
//           alt="Projects background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       </div>
      
//       {/* Content */}
//       <div className="relative z-10 container mx-auto h-full flex items-center px-4">
//         {/* Left section with text and buttons */}
//         <div className="w-full md:w-1/2 text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Take a look around our projects</h2>
//           <p className="mb-8">
//             Velders make fish every without firmament saw had.<br />
//             Morning air subdue.
//           </p>
          
//           <div className="flex items-center gap-8">
//             <button 
//               onClick={goToPrevSlide}
//               className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
//               aria-label="Previous project"
//             >
//               {/* <span className="text-2xl">&lt;</span> */}
//               <span className="text-2xl text-black">&lt;</span>
//             </button>
            
//             <button 
//               onClick={goToNextSlide}
//               className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
//               aria-label="Next project"
//             >
//               <span className="text-2xl  text-black">&gt;</span>
//             </button>
            
//             <span className="text-lg">More Projects</span>
//           </div>
//         </div>
        
//         {/* Right section with sliding images */}
//         <div className="hidden md:block md:w-1/2 relative h-full">
//           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3/4">
//             <div className="relative overflow-hidden">
//               <div 
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {slides.map((slide) => (
//                   <div key={slide.id} className="w-full flex-shrink-0 px-4">
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                       <div className="relative h-64 w-full mb-4">
//                         <Image
//                           src={slide.image}
//                           alt={slide.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <h3 className="text-xl font-semibold">{slide.title}</h3>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectSlider;
























// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import FirstImg from '../../../../public/assets/images/Frame2.png'
// import SecondImg from '../../../../public/assets/images/Frame4.png'
// import ThirdImg from '../../../../public/assets/images/Frame1.png'

// const projects = [
//   {
//     category: 'Industrial construction',
//     title: 'Research and development center',
//     image: FirstImg,
//   },
//   {
//     category: 'Machine engineering',
//     title: 'Project of technological park',
//     image: SecondImg,
//   },
//   {
//     category: 'Urban Planning',
//     title: 'City Infrastructure Project',
//     image: ThirdImg,
//   },
// ];

// export default function SliderSection() {
//   const [startIndex, setStartIndex] = useState(0);

//   const handleNext = () => {
//     setStartIndex((prev) => (prev + 1) % projects.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const visibleProjects = [
//     projects[startIndex],
//     projects[(startIndex + 1) % projects.length],
//   ];

//   return (
//     <div className="relative w-full h-[600px] bg-[url('/images/bg.jpg')] bg-cover bg-center text-white flex items-center px-10">
//       {/* Left Section */}
//       <div className="w-1/2 space-y-6 z-10">
//         <h2 className="text-4xl font-bold leading-tight">Take a look around our projects</h2>
//         <p className="text-sm max-w-md">
//           Waters make fish every without firmament saw had. <br />
//           Morning air subdue.
//         </p>
//         <div className="flex space-x-4 mt-4">
//           <button onClick={handlePrev} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
//             &#8592;
//           </button>
//           <button onClick={handleNext} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
//             &#8594;
//           </button>
//         </div>
//         <button className="underline text-sm mt-4">More Projects</button>
//       </div>

//       {/* Right Section - Slider */}
//       <div className="w-1/2 flex space-x-6 z-10 overflow-hidden">
//         {visibleProjects.map((project, index) => (
//           <div key={index} className="w-1/2 shrink-0">
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={500}
//               height={300}
//               className="object-cover w-full h-64"
//             />
//             <p className="text-sm mt-2 text-orange-400">{project.category}</p>
//             <h3 className="text-lg font-semibold">{project.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Background overlay */}
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//     </div>
//   );
// }

















// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import FirstImg from '../../../../public/assets/images/Frame2.png'
// import SecondImg from '../../../../public/assets/images/Frame4.png'
// import ThirdImg from '../../../../public/assets/images/Frame1.png'

// const projects = [
//   {
//     category: 'Industrial construction',
//     title: 'Research and development center',
//     image: FirstImg,
//   },
//   {
//     category: 'Machine engineering',
//     title: 'Project of technological park',
//     image: SecondImg,
//   },
//   {
//     category: 'Urban Planning',
//     title: 'City Infrastructure Project',
//     image: ThirdImg,
//   },
//   {
//     category: 'Urban Planning',
//     title: 'City Infrastructure Project',
//     image: FirstImg,
//   },
// ];

// export default function ProjectSlider() {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % projects.length);
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   return (
//     <div className="relative w-full h-[600px] bg-[url('/images/bg.jpg')] bg-cover bg-center text-white flex items-center px-10 overflow-hidden">
      
//       {/* Left Section */}
//       <div className="w-1/2 z-10 space-y-6">
//         <h2 className="text-4xl font-bold leading-tight">Take a look around our projects</h2>
//         <p className="text-sm max-w-md">
//           Waters make fish every without firmament saw had. <br />
//           Morning air subdue.
//         </p>
//         <div className="flex space-x-4 mt-4">
//           <button onClick={handlePrev} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
//             &#8592;
//           </button>
//           <button onClick={handleNext} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
//             &#8594;
//           </button>
//         </div>
//         <button className="underline text-sm mt-4">More Projects</button>
//       </div>

//       {/* Right Section with full carousel */}
//       <div className="w-1/2 relative overflow-hidden z-10">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${index * 50}%)`, // because we show 2 items side-by-side (each 50%)
//           }}
//         >
//           {projects.concat(projects).map((project, idx) => (
//             <div key={idx} className="w-1/2 px-2 shrink-0">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={500}
//                 height={300}
//                 className="object-cover w-full h-64"
//               />
//               <p className="text-sm mt-2 text-orange-400">{project.category}</p>
//               <h3 className="text-lg font-semibold">{project.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//     </div>
//   );
// }











'use client';

import { useState } from 'react';
import Image from 'next/image';
import FirstImg from '../../../../public/assets/images/Frame2.png';
import SecondImg from '../../../../public/assets/images/Frame4.png';
import ThirdImg from '../../../../public/assets/images/Frame1.png';

const projects = [
  {
    category: 'Industrial construction',
    title: 'Research and development center',
    image: FirstImg,
  },
  {
    category: 'Machine engineering',
    title: 'Project of technological park',
    image: SecondImg,
  },
  {
    category: 'Urban Planning',
    title: 'City Infrastructure Project',
    image: ThirdImg,
  },
  {
    category: 'Urban Planning',
    title: 'City Infrastructure Project',
    image: FirstImg,
  },
];

export default function ProjectSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const duplicatedProjects = projects.concat(projects); // for infinite loop look

  return (
    <div className="relative w-full min-h-[600px] bg-[url('/images/bg.jpg')] bg-cover bg-center text-white overflow-hidden px-4 py-8 md:flex md:items-center md:justify-between md:px-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Mobile Image Slider */}
      <div className="md:hidden relative z-10 w-full mb-6">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {projects.map((project, idx) => (
            <div key={idx} className="min-w-full px-2">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover w-full h-64 rounded"
              />
              <p className="text-sm mt-2 text-orange-400">{project.category}</p>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Text Section */}
      <div className="md:hidden text-center relative z-20">
        <h2 className="text-2xl font-bold leading-tight">Take a look around our projects</h2>
        <p className="text-sm mt-2">
          Waters make fish every without firmament saw had. <br />
          Morning air subdue.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={handlePrev} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
            &#8592;
          </button>
          <button onClick={handleNext} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
            &#8594;
          </button>
        </div>
        <button className="underline text-sm mt-4">More Projects</button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:w-1/2 z-10 flex-col space-y-6">
        <h2 className="text-4xl font-bold leading-tight">Take a look around our projects</h2>
        <p className="text-sm max-w-md">
          Waters make fish every without firmament saw had. <br />
          Morning air subdue.
        </p>
        <div className="flex space-x-4 mt-4">
          <button onClick={handlePrev} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
            &#8592;
          </button>
          <button onClick={handleNext} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white rounded">
            &#8594;
          </button>
        </div>
        <button className="underline text-sm mt-4">More Projects</button>
      </div>

      <div className="hidden md:block md:w-1/2 relative overflow-hidden z-10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 50}%)`,
          }}
        >
          {duplicatedProjects.map((project, idx) => (
            <div key={idx} className="w-1/2 px-2 shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-64"
              />
              <p className="text-sm mt-2 text-orange-400">{project.category}</p>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}











