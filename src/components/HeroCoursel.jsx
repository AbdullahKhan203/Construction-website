// 'use client';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { FaArrowRightLong } from "react-icons/fa6";

// const pageHeadings = {
//   '/home': 'Welcome to the Home Page',
//   '/about': 'Learn More About Us',
//   '/services': 'What We Offer',
//   '/contact': 'Contact Us',
//   '/getQuote': 'Request a Quote',
//   '/projects': 'Our Projects',
//   '/whistleBlowing': 'Our Projects',
//   '/blog': 'Our Blogs Posts',
// };

// // Image paths
// const images = [
//   '/assets/images/Frame1.jpg',
//   '/assets/images/Frame2.png',
//   '/assets/images/Frame3.png',
// ];

// export default function HeroCarousel() {
//   const pathname = usePathname();
//   const heading = pageHeadings[pathname] || 'Default Page';
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   if (!hasMounted) return null; // prevent hydration mismatch

//   return (
//     <div className="w-full relative">
//       <Image
//         src={images[currentIndex]}
//         alt="Hero"
//         width={1920}
//         height={1080}
//         className="w-full h-auto"
//         priority
//       />

//       {/* Conditionally render based on pathname */}
//       {pathname === '/home' ? (
//         <div className="w-[200px] smx:w-[300px] sm:w-[450px] md:w-[500px] h-[150px] smx:h-[200px] sm:h-[260px] bg-white absolute top-[15px] smx:top-[30px] lg:top-[180px] left-[40px] smx:left-[80px] sm:left-[100px] p-[10px] sm:p-[40px] z-10">
//           <p className="text-orange-500 text-[12px] smx:text-[16px]">Quality work.trustable services.Dedicated team</p>
//           <h1 className="text-[22px] smx:text-[28px] sm:text-[42px] leading-[22px] smx:leading-[30px] sm:leading-[40px] md:leading-[62px]">
//             We Provide you insustrial Solution
//           </h1>
//           <button className="h-[30px] w-[150px] smx:h-[50px] smx:w-[200px] bg-orange-500 absolute bottom-0 flex justify-center items-center gap-2 right-0">
//             <p>Our Services</p>
//             <FaArrowRightLong className="h-[16px] text-white" />
//           </button>
//         </div>
//       ) : (
//         <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center px-4">
//             {heading}
//           </h1>
//         </div>
//       )}

//       {/* Vertical bullets */}
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







'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const pageHeadings = {
  '/home': 'Welcome to the Home Page',
  '/about': 'Learn More About Us',
  '/services': 'What We Offer',
  '/contact': 'Contact Us',
  '/getQuote': 'Request a Quote',
  '/projects': 'Our Projects',
  '/whistleBlowing': 'Our Projects',
  '/whistleBlowing': 'Talk With Us',
};

// Image paths
const images = [
  '/assets/images/Frame1.jpg',
  '/assets/images/Frame2.png',
  '/assets/images/Frame3.jpg',
];

export default function HeroCarousel() {
  const pathname = usePathname();
  const heading = pageHeadings[pathname] || 'Default Page';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!hasMounted) return null; // prevent hydration mismatch

  return (
    <div className="w-full max-w-[1920px] h-[200px] smx:h-[300px] sm:h-[400px] md:h-[600px] relative overflow-hidden mx-auto">
      {/* Background image — fill parent without crop/shrink */}
      <Image
        src={images[currentIndex]}
        alt="Hero"
        fill
        // className="object-contain"   // Ensures full image fits without cropping
        priority
      />

      {/* Conditionally render based on pathname */}
      {pathname === '/home' ? (
        <div className="w-[200px] smx:w-[300px] sm:w-[450px] md:w-[500px] h-[150px] smx:h-[200px] sm:h-[260px] bg-white absolute top-[15px] smx:top-[30px] lg:top-[180px] left-[40px] smx:left-[80px] sm:left-[100px] p-[10px] sm:p-[40px] z-10">
          <p className="text-orange-500 text-[12px] smx:text-[16px]">Quality work.trustable services.Dedicated team</p>
          <h1 className="text-[22px] smx:text-[28px] sm:text-[42px] leading-[22px] smx:leading-[30px] sm:leading-[40px] md:leading-[62px]">
            We Provide you insustrial Solution
          </h1>
          <button className="h-[30px] w-[150px] smx:h-[50px] smx:w-[200px] bg-orange-500 absolute bottom-0 flex justify-center items-center gap-2 right-0">
            <p>Our Services</p>
            <FaArrowRightLong className="h-[16px] text-white" />
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center px-4">
            {heading}
          </h1>
        </div>
      )}

      {/* Vertical bullets */}
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





