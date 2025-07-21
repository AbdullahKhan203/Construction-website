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

// const images = [firstImage, secondImg, thirdImg];

// export default function HeroCarousel() {
//   const pathname = usePathname();
//   const heading = pageHeadings[pathname] || 'Default Page';
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//      <div className="w-full relative">
//       {/* Image displayed at natural aspect ratio */}
//       <Image
//         src={images[currentIndex]}
//         alt="Hero"
//         width={1920}
//         height={1080}
//         className="w-full h-auto"
//         priority
//       /> 

//       {/* Overlay */}
//       <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
//         <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
//           {heading}
//         </h1>
//       </div>

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
import FirstImage from '../../public/assets/images/Frame1.png';
import SecondImg from '../../public/assets/images/Frame2.png';
import ThirdImg from '../../public/assets/images/Frame3.png';

const pageHeadings = {
  '/home': 'Welcome to the Home Page',
  '/about': 'Learn More About Us',
  '/services': 'What We Offer',
};

const images = [
  FirstImage,
  SecondImg,
  ThirdImg,
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