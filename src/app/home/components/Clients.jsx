"use client";
import { useRef, useEffect, useState } from "react";

const clients = [
  "Jilin Power & Substation Co.",
  "Martech Engineering & Construction Company",
  "Ghulam Rasool Construction Company",
  "National Power Construction company (NPCC)",
  "Netracon Technologies (PVT). Ltd",
  "Sarfaraz Construction Company (SCC)",
  "Alamdar Construction Company",
  "C.P.P.",
  "Habib Khan Construction Company",
];

const gradients = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-purple-500 to-pink-500",
  "from-blue-500 to-teal-400",
  "from-green-500 to-lime-400",
  "from-orange-500 to-pink-400",
  "from-cyan-500 to-blue-500",
  "from-indigo-500 to-purple-500",
  "from-rose-500 to-pink-500",
  "from-emerald-500 to-teal-500",
];

export default function ClientMarquee() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;

    const scrollStep = () => {
      scrollContainer.scrollLeft += 1; // speed
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth / 2
      ) {
        // reset to half (infinite loop illusion)
        scrollContainer.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // drag sensitivity
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative max-w-[960px] mx-auto overflow-hidden">
      {/* <p className='font-bold text-orange-500 text-center mt-4'>OUR Clients</p>
        <h1 className='  text-center text-[32px] font-rubik my-1 smx:my-2'>Friends of Our Work</h1> */}
         <p className='font-bold text-orange-500 text-center mt-4'>Our Clients</p>
        <h1 className='  text-center text-[32px] font-rubik my-1 smx:my-2'>Friends of Our Work</h1>
      <div
        ref={scrollRef}
        className="flex gap-6 py-6 whitespace-nowrap cursor-grab select-none overflow-x-scroll scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* duplicate list twice for infinite effect */}
        {[...Array(2)].map((_, dup) =>
          clients.map((name, i) => (
            <span
              key={dup + "-" + i}
              className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg text-sm sm:text-base bg-gradient-to-r ${
                gradients[i % gradients.length]
              }`}
            >
              {name}
            </span>
          ))
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
