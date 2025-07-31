

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
//           className="relative group overflow-hidden rounded-lg"
//         >
//           {/* Image container with natural height */}
//           <div className="relative w-full">
//             <Image
//               src={project.image.src}
//               alt={project.title}
//               width={500}
//               height={project.image.height || 300}
//               className="w-full h-auto object-cover"
//               sizes="(max-width: 768px) 100vw, 33vw"
//               priority
//             />
//           </div>

//           {/* Overlay: default */}
//           <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
//             {project.company}
//           </div>

//           {/* Overlay: on hover */}
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

// import { useState } from 'react';
// import Masonry from 'react-masonry-css';
// import Image from 'next/image';
// import { projectsData } from '@/data/projectsData';
// import ProjectDetailModal from '@/components/ProjectDetailModal';

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   768: 2,
//   500: 1,
// };

// export default function ProjectsContainer() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <>
//       {/* Modal */}
//       {selectedProject && (
//         <ProjectDetailModal
//           project={selectedProject}
//           onClose={handleCloseModal}
//         />
//       )}

//       {/* Masonry Grid */}
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {projectsData.map((project, index) => (
//           <div
//             key={index}
//             className="relative group overflow-hidden rounded-lg cursor-pointer"
//             onClick={() => setSelectedProject(project)}
//           >
//             {/* Image container */}
//             <div className="relative w-full">
//               <Image
//                 src={project.image.src}
//                 alt={project.title}
//                 width={500}
//                 height={project.image.height || 300}
//                 className="w-full h-auto object-cover"
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 priority
//               />
//             </div>

//             {/* Overlay (default) */}
//             <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
//               {project.company}
//             </div>

//             {/* Overlay (hover) */}
//             <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20">
//               <p className="text-sm font-semibold">{project.company}</p>
//               <h3 className="text-base font-bold">{project.title}</h3>
//             </div>
//           </div>
//         ))}
//       </Masonry>
//     </>
//   );
// }










'use client';

import { useState, useMemo } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';
import ProjectDetailModal from '@/components/ProjectDetailModal';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // 1. Get unique categories
  const categories = useMemo(() => {
    const all = projectsData.map(p => p.category.toLowerCase());
    return ['all', ...Array.from(new Set(all))];
  }, []);

  // 2. Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter(p => p.category.toLowerCase() === activeCategory);
  }, [activeCategory]);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } capitalize`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image container */}
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

            {/* Overlay (default) */}
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium z-10 transition duration-300 group-hover:opacity-0">
              {project.company}
            </div>

            {/* Overlay (hover) */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-black/40 text-white p-4 transition-opacity duration-300 z-20">
              <p className="text-sm font-semibold">{project.company}</p>
              <h3 className="text-base font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </Masonry>
    </>
  );
}
