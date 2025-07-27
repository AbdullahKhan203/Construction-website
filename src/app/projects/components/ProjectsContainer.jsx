
// 'use client';

// import Masonry from 'react-masonry-css';
// import Image from 'next/image';
// import { projectsData } from '@/data/projectsData';

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   768: 2,
//   500: 1,
// };

// export default function ProjectsContainer() {
//   return (
//     <Masonry
//       breakpointCols={breakpointColumnsObj}
//       className="flex gap-4"
//       columnClassName="flex flex-col gap-4"
//     >
//       {projectsData.map((project, index) => (
//         <div
//           key={index}
//           className="relative group overflow-hidden rounded-lg aspect-square" // aspect-square ensures equal width/height
//         >
//           {/* Image */}
//           <Image
//             src={project.image.src}
//             alt={project.title}
//             width={500}
//             height={400}
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay for default (Company name only) */}
//           <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
//             {project.company}
//           </div>

//           {/* Overlay on hover (Company + Title) */}
//           <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20">
//             <p className="text-sm font-semibold">{project.company}</p>
//             <h3 className="text-base font-bold">{project.title}</h3>
//           </div>
//         </div>
//       ))}
//     </Masonry>
//   );
// }





// 'use client'

// import Image from 'next/image'
// import { projectsData } from '@/data/projectsData'
// import { useEffect, useRef } from 'react'

// export default function ProjectsContainer() {
//   const gridRef = useRef(null)

//   useEffect(() => {
//     // This effect will properly size grid items after load
//     if (gridRef.current) {
//       const resizeAllGridItems = () => {
//         const grid = gridRef.current
//         const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
//         const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
        
//         grid.querySelectorAll('.grid-item').forEach(item => {
//           const content = item.querySelector('.grid-content')
//           const rowSpan = Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))
//           item.style.gridRowEnd = `span ${rowSpan}`
//         })
//       }

//       // Run initially and after images load
//       resizeAllGridItems()
//       window.addEventListener('resize', resizeAllGridItems)
      
//       // Cleanup
//       return () => window.removeEventListener('resize', resizeAllGridItems)
//     }
//   }, [])

//   return (
//     <div 
//       ref={gridRef}
//       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-auto-rows-[10px]"
//     >
//       {projectsData.map((project, index) => (
//         <div key={index} className="grid-item">
//           <div className="grid-content relative group">
//             {/* Image with natural aspect ratio */}
//             <Image
//               src={project.image.src}
//               alt={project.title}
//               width={project.image.width}
//               height={project.image.height}
//               className="w-full h-auto rounded-lg"
//             />

//             {/* Overlays */}
//             <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
//               {project.company}
//             </div>
//             <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20 rounded-lg">
//               <p className="text-sm font-semibold">{project.company}</p>
//               <h3 className="text-base font-bold">{project.title}</h3>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }




// 'use client';

// import Masonry from 'react-masonry-css';
// import Image from 'next/image';
// import { projectsData } from '@/data/projectsData';

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   768: 2,
//   500: 1,
// };

// export default function ProjectsContainer() {
//   return (
//     <Masonry
//   breakpointCols={breakpointColumnsObj}
//   className="my-masonry-grid"
//   columnClassName="my-masonry-grid_column"
// >
//       {projectsData.map((project, index) => (
//         <div
//           key={index}
//           className="relative group overflow-hidden rounded-lg aspect-square" // aspect-square ensures equal width/height
//         >
//           {/* Image */}
//           <Image
//             src={project.image.src}
//             alt={project.title}
//             width={400}
//             height={500}
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay for default (Company name only) */}
//           <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
//             {project.company}
//           </div>

//           {/* Overlay on hover (Company + Title) */}
//           <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20">
//             <p className="text-sm font-semibold">{project.company}</p>
//             <h3 className="text-base font-bold">{project.title}</h3>
//           </div>
//         </div>
//       ))}
//     </Masonry>
//   );
// }




// 'use client';
// import Masonry from 'react-masonry-css';
// import { projectsData } from '@/data/projectsData';

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   768: 2,
//   500: 1,
// };

// export default function ProjectsContainer() {
//   return (
//     <Masonry
//       breakpointCols={breakpointColumnsObj}
//       className="flex gap-4"
//       columnClassName="flex flex-col gap-4"
//     >
//       {projectsData.map((project, index) => (
//         <div key={index} className="rounded overflow-hidden shadow-lg bg-white">
//           <img
//             src={project.image.src} // for imported image objects in Next.js
//             alt={project.title}
//             className="w-full h-auto object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
//             <p className="text-sm text-gray-700 font-medium">
//               {project.company}
//             </p>
//             <p className="text-xs text-gray-500 capitalize">
//               Category: {project.category}
//             </p>
//           </div>
//         </div>
//       ))}
//     </Masonry>
//   );
// }






'use client';

import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

export default function ProjectsContainer() {
  return (
   <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>
  {projectsData.map((project, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-lg"
    >
      <Image
        src={project.image.src}
        alt={project.title}
        width={500}
        height={400}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
        {project.company}
      </div>

      <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20">
        <p className="text-sm font-semibold">{project.company}</p>
        <h3 className="text-base font-bold">{project.title}</h3>
      </div>
    </div>
  ))}
</Masonry>
  )
}

