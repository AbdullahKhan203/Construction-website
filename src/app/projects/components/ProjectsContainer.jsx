




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
//       className="my-masonry-grid"
//       columnClassName="my-masonry-grid_column"
//     >
//       {projectsData.map((project, index) => (
//         <div
//           key={index}
//           className="relative group overflow-hidden rounded-lg shadow-md bg-white"
//         >
//           <Image
//             src={project.image.src}
//             alt={project.title}
//             width={500}
//             height={400}
//             className="w-full h-auto object-cover"

//           />

//           {/* Overlay: Always visible */}
//           <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
//             {project.company}
//           </div>

//           {/* Overlay: On hover */}
//           <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20">
//             <p className="text-sm font-semibold">{project.company}</p>
//             <h3 className="text-base font-bold">{project.title}</h3>
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
          {/* Image container with natural height */}
          <div className="relative w-full">
            <Image
              src={project.image.src}
              alt={project.title}
              width={500}
              height={project.image.height || 300}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Overlay: default */}
          <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
            {project.company}
          </div>

          {/* Overlay: on hover */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20">
            <p className="text-sm font-semibold">{project.company}</p>
            <h3 className="text-base font-bold">{project.title}</h3>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
