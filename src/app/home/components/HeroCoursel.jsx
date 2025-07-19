// 'use client';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import firstImage from '../../../../public/assets/images/hero-construction.jpg'
// import secondImg from '../../../../public/assets/images/home-service-card.webp'
// import thirdImg from '../../../../public/assets/images/homepage-project-bg.jpg'
// // const slides = [
// //   { src: '/images/slide1.jpg' },
// //   { src: '/images/slide2.jpg' },
// //   { src: '/images/slide3.jpg' },
// // ];
// const slides = [
//   { src: firstImage },
//   { src: secondImg },
//   { src: thirdImg },
// ];

// const headings = {
//   '/': 'Welcome to Home Page',
//   '/about': 'About Us and Our Story',
//   '/services': 'Explore Our Services',
// };

// export default function HeroCarousel() {
//   const pathname = usePathname();
//   const [current, setCurrent] = useState(0);

//   // auto-change slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[500px] w-full overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//             index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//         >
//           <Image
//             src={slide.src}
//             alt={`Slide ${index}`}
//             fill
//              className="object-cover"
//             priority={index === 0}
//           />
         

//         </div>
//       ))}

//       <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-3xl font-bold z-20">
//         <h1 className="text-center px-4">{headings[pathname] || 'Welcome'}</h1>
//       </div>

//       <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full border border-white ${
//               index === current ? 'bg-white' : 'bg-transparent'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




// 'use client';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import firstImage from '../../../../public/assets/images/hero-construction.jpg'
// import secondImg from '../../../../public/assets/images/home-service-card.webp'
// import thirdImg from '../../../../public/assets/images/homepage-project-bg.jpg'

// const pageHeadings = {
//   '/': 'Welcome to the Home Page',
//   '/about': 'Learn More About Us',
//   '/services': 'What We Offer',
// };

// const images = [
//   firstImage,
//   secondImg,
//   thirdImg,
// ];

// export default function HeroCarousel() {
//   const pathname = usePathname();
//   const heading = pageHeadings[pathname] || 'Default Page';

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = (i) => setCurrentIndex(i);

//   return (
//     <div className="relative w-full aspect-[16/6] overflow-hidden bg-black text-white">
//       {/* Background Image */}
//       <Image
//         src={images[currentIndex]}
//         alt="Hero"
//         fill
//         className="object-contain" // Ensures no cropping
//         priority
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-center px-4">
//         <h1 className="text-3xl md:text-5xl font-bold">{heading}</h1>
//       </div>

//       {/* Vertical Bullets on Right */}
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => nextSlide(i)}
//             className={`w-3 h-3 rounded-full border ${
//               i === currentIndex ? 'bg-white' : 'bg-gray-500'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }





'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import firstImage from '../../../../public/assets/images/hero-construction.jpg'
import secondImg from '../../../../public/assets/images/home-service-card.webp'
import thirdImg from '../../../../public/assets/images/homepage-project-bg.jpg'

const pageHeadings = {
  '/': 'Welcome to the Home Page',
  '/about': 'Learn More About Us',
  '/services': 'What We Offer',
};

const images = [
  firstImage,
  secondImg,
  thirdImg,
];

export default function HeroCarousel() {
  const pathname = usePathname();
  const heading = pageHeadings[pathname] || 'Default Page';
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Image fills container and covers it */}
      <Image
        src={images[currentIndex]}
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
          {heading}
        </h1>
      </div>

      {/* Vertical Bullets on the Right */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full border border-white ${
              i === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
