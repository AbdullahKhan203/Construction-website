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

const images = [firstImage, secondImg, thirdImg];

export default function HeroCarousel() {
  const pathname = usePathname();
  const heading = pageHeadings[pathname] || 'Default Page';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
     <div className="w-full relative">
      {/* Image displayed at natural aspect ratio */}
      <Image
        src={images[currentIndex]}
        alt="Hero"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      /> 

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
          {heading}
        </h1>
      </div>

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