// 'use client';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import firstImage from '../../../../public/assets/images/Frame1.png'
// import secondImg from '../../../../public/assets/images/Frame2.png'
// import thirdImg from '../../../../public/assets/images//Frame3.png'

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

//   return (
//     <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
//       {/* Image fills container and covers it */}
//       <Image
//         src={images[currentIndex]}
//         alt="Hero"
//         fill
//         className="object-cover"
//         priority
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//         <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
//           {heading}
//         </h1>
//       </div>

//       {/* Vertical Bullets on the Right */}
//       <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 z-20">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full border border-white ${
//               i === currentIndex ? 'bg-white' : 'bg-gray-500'
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
// import { useState, useEffect } from 'react';
// import firstImage from '../../../../public/assets/images/Frame1.png';
// import secondImg from '../../../../public/assets/images/Frame2.png';
// import thirdImg from '../../../../public/assets/images/Frame3.png';

// const pageHeadings = {
//   '/home': 'Welcome to the Home Page',
//   '/about': 'Learn More About Us',
//   '/services': 'What We Offer',
// };

// const images = [
//   firstImage,
//   secondImg,
//   thirdImg,
// ];

// // Define your desired aspect ratio (width:height)
// const ASPECT_RATIO = 16 / 9; // Change this to match your images' aspect ratio

// export default function HeroCarousel() {
//   const pathname = usePathname();
//   const heading = pageHeadings[pathname] || 'Default Page';
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-rotate slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden bg-black"
//       style={{
//         // Calculate height based on aspect ratio
//         paddingTop: `${(1 / ASPECT_RATIO) * 100}%`,
//         position: 'relative'
//       }}
//     >
//       {/* Image container - fills the aspect ratio box */}
//       <div className="absolute inset-0">
//         <Image
//           src={images[currentIndex]}
//           alt="Hero"
//           fill
//           className="object-cover" // Cover ensures it fills the container
//           priority
//           sizes="100vw"
//         />
//       </div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
//         <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
//           {heading}
//         </h1>
//       </div>

//       {/* Vertical Bullets on the Right */}
//       <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 z-20">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full border border-white transition-colors ${
//               i === currentIndex ? 'bg-white' : 'bg-transparent'
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }









'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import firstImage from '../../../../public/assets/images/Frame1.png';
import secondImg from '../../../../public/assets/images/Frame2.png';
import thirdImg from '../../../../public/assets/images/Frame3.png';

const pageHeadings = {
  '/home': 'Welcome to the Home Page',
  '/about': 'Learn More About Us',
  '/services': 'What We Offer',
};

const images = [
  firstImage,
  secondImg,
  thirdImg,
];

// Slightly reduced height ratio (original 16:9 = 56.25%, adjusted to 50%)
const ASPECT_RATIO = 16 / 8; // Changed from 16:9 to 16:8 for slightly shorter height

export default function HeroCarousel() {
  const pathname = usePathname();
  const heading = pageHeadings[pathname] || 'Default Page';
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black"
      style={{
        // Reduced height while maintaining responsive width
        paddingTop: `${(1 / ASPECT_RATIO) * 100}%`, // Now 50% instead of 56.25%
        position: 'relative'
      }}
    >
      {/* Image container */}
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex]}
          alt="Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center px-4">
          {heading}
        </h1>
      </div>

      {/* Vertical Bullets on the Right */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full border border-white transition-colors ${
              i === currentIndex ? 'bg-white' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}









// 'use client';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import firstImage from '../../../../public/assets/images/Frame1.png';
// import secondImg from '../../../../public/assets/images/Frame2.png';
// import thirdImg from '../../../../public/assets/images/Frame3.png';

// // Enhanced card data for homepage
// const homeCards = [
//   {
//     title: "Premium Services",
//     description: "Experience our award-winning solutions tailored to your needs",
//     cta: "Explore Services",
//     link: "/services",
//     icon: "🛠️"
//   },
//   {
//     title: "Latest Projects",
//     description: "Discover our recent successful implementations and case studies",
//     cta: "View Projects",
//     link: "/projects",
//     icon: "🏗️"
//   },
//   {
//     title: "Contact Us",
//     description: "Get in touch with our team for personalized solutions",
//     cta: "Contact Now",
//     link: "/contact",
//     icon: "📞"
//   }
// ];

// const pageHeadings = {
//   '/': '',
//   '/about': 'Learn More About Us',
//   '/services': 'What We Offer',
//   '/projects': 'Our Portfolio',
//   '/contact': 'Get In Touch'
// };

// const images = [
//   firstImage,
//   secondImg,
//   thirdImg,
// ];

// const ASPECT_RATIO = 16 / 7; // Slightly taller than 16:8 for better card visibility

// export default function HeroCarousel() {
//   const pathname = usePathname();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-rotate slides with pause on hover
//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     const carousel = document.querySelector('.carousel-container');
    
//     const startInterval = () => {
//       interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//       }, 5000);
//     };
    
//     const pauseInterval = () => clearInterval(interval);
    
//     startInterval();
//     carousel?.addEventListener('mouseenter', pauseInterval);
//     carousel?.addEventListener('mouseleave', startInterval);
    
//     return () => {
//       clearInterval(interval);
//       carousel?.removeEventListener('mouseenter', pauseInterval);
//       carousel?.removeEventListener('mouseleave', startInterval);
//     };
//   }, []);

//   return (
//     <div className="carousel-container relative w-full overflow-hidden bg-black"
//       style={{
//         paddingTop: `${(1 / ASPECT_RATIO) * 100}%`,
//         position: 'relative'
//       }}
//     >
//       {/* Image container with transition effect */}
//       <div className="absolute inset-0 transition-opacity duration-1000">
//         {images.map((image, index) => (
//           <Image
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             fill
//             className={`object-cover transition-opacity duration-1000 ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
//             }`}
//             priority={index === 0}
//             sizes="100vw"
//           />
//         ))}
//       </div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center z-10">
//         {pathname === '/' ? (
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {homeCards.map((card, index) => (
//                 <div 
//                   key={index}
//                   className="group bg-white/90 hover:bg-white backdrop-blur-sm rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
//                 >
//                   <div className="text-4xl mb-3">{card.icon}</div>
//                   <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{card.title}</h2>
//                   <p className="text-gray-600 mb-5">{card.description}</p>
//                   <a 
//                     href={card.link}
//                     className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 group-hover:px-7"
//                   >
//                     {card.cta}
//                     <span className="group-hover:translate-x-1 transition-transform">→</span>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-center px-4">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
//               {pageHeadings[pathname] || 'Welcome'}
//             </h1>
//             <p className="text-xl text-white/80 max-w-2xl mx-auto">
//               {pathname === '/about' && 'Discover our story and values'}
//               {pathname === '/services' && 'Tailored solutions for your business'}
//               {pathname === '/projects' && 'See our work in action'}
//               {pathname === '/contact' && 'We would love to hear from you'}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Navigation Bullets */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               i === currentIndex ? 'bg-white w-8' : 'bg-white/50'
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }