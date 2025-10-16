

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










// 'use client';

// import { useState, useMemo } from 'react';
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
//   const [activeCategory, setActiveCategory] = useState('all');

//   // 1. Get unique categories
//   const categories = useMemo(() => {
//     const all = projectsData.map(p => p.category.toLowerCase());
//     return ['all', ...Array.from(new Set(all))];
//   }, []);

//   // 2. Filter projects based on active category
//   const filteredProjects = useMemo(() => {
//     if (activeCategory === 'all') return projectsData;
//     return projectsData.filter(p => p.category.toLowerCase() === activeCategory);
//   }, [activeCategory]);

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

//       {/* Category Buttons */}
//       <div className="flex flex-wrap gap-2 justify-center mb-6">
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//               activeCategory === category
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             } capitalize`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Masonry Grid */}
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {filteredProjects.map((project, index) => (
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








// 'use client';

// import { useState, useMemo } from 'react';
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
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Unique categories
//   const categories = useMemo(() => {
//     const all = projectsData.map(p => p.category.toLowerCase());
//     return ['all', ...Array.from(new Set(all))];
//   }, []);

//   // Filter projects
//   const filteredProjects = useMemo(() => {
//     if (activeCategory === 'all') return projectsData;
//     return projectsData.filter(p => p.category.toLowerCase() === activeCategory);
//   }, [activeCategory]);

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

//       {/* Category Buttons */}
//       <div className="flex flex-wrap gap-2 justify-center mb-8">
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//               activeCategory === category
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             } capitalize`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Masonry Grid */}
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {filteredProjects.map((project, index) => (
//           <div
//             key={index}
//             onClick={() => setSelectedProject(project)}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group w-[280px] h-[350px] mx-auto"
//           >
//             {/* Image Container */}
//             <div className="relative w-full h-[200px]">
//               <Image
//                 src={project.image.src}
//                 alt={project.title}
//                 fill
//                 // className="object-contain p-2"
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 priority
//               />
//             </div>

//             {/* Info Container */}
//             <div className="h-[150px] flex flex-col justify-center items-center text-center px-4">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition">
//                 {project.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-1">{project.company}</p>
//               <p className="text-xs text-gray-500 capitalize">
//                 {project.category}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Masonry>
//     </>
//   );
// }







// original
// 'use client';

// import { useState, useMemo } from 'react';
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
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Unique categories
//   const categories = useMemo(() => {
//     const all = projectsData.map(p => p.category.toLowerCase());
//     return ['all', ...Array.from(new Set(all))];
//   }, []);

//   // Filter projects
//   const filteredProjects = useMemo(() => {
//     if (activeCategory === 'all') return projectsData;
//     return projectsData.filter(p => p.category.toLowerCase() === activeCategory);
//   }, [activeCategory]);

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

//       {/* Category Buttons */}
//       <div className="flex flex-wrap gap-2 justify-center mb-8">
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//               activeCategory === category
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             } capitalize`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Masonry Grid */}
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {filteredProjects.map((project, index) => {
//           const isLongTitle =
//             project.title.length >=
//             '±660KV HVDC Line Matayri to Lahore Pakistan. Lot no. 08 Spacer, Clipping OPGW & Conductor'.length;

//           return (
//             <div
//               key={index}
//               onClick={() => setSelectedProject(project)}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group w-[280px] h-[350px] mx-auto"
//             >
//               {/* Image Container */}
//               <div className="relative w-full h-[200px]">
//                 <Image
//                   src={project.image.src}
//                   alt={project.title}
//                   fill
//                   // className="object-contain p-2"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   priority
//                 />
//               </div>

//               {/* Info Container */}
//               <div className="h-[150px] flex flex-col justify-center items-center text-center px-4">
//                 <h3
//                   className={`text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition ${
//                     isLongTitle ? 'leading-tight text-[15px]' : 'leading-snug'
//                   }`}
//                 >
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-1"><b>Company:</b> {project.company}</p>
//                 <p className="text-xs text-gray-500 capitalize">
//                  <b>Project type:</b> {project.category}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
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
  1280: 3,
  1024: 3,
  768: 2,
  480: 1,
  320: 1,
};

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => {
    const all = projectsData.map((p) => p.category.toLowerCase());
    return ['all', ...Array.from(new Set(all))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter(
      (p) => p.category.toLowerCase() === activeCategory
    );
  }, [activeCategory]);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
      )}

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
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
  breakpointCols={{
    default: 5,   // 5 columns on very large screens (≥1536px)
    1400: 4,      // 4 columns on large (≥1280px)
    1024: 4,      // 4 columns between 900px–1280px → fills gaps
    900: 3,       // 3 columns on slightly smaller screens
    768: 2,       // 2 on tablets
    480: 1,       // 1 on small mobile
  }}
  className="my-masonry-grid !-mx-2"
  columnClassName="my-masonry-grid_column !px-2"
>
  {filteredProjects.map((project, index) => {
    const isLongTitle =
      project.title.length >=
      '±660KV HVDC Line Matayri to Lahore Pakistan. Lot no. 08 Spacer, Clipping OPGW & Conductor'.length;

    return (
      <div
        key={index}
        onClick={() => setSelectedProject(project)}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group w-full max-w-[330px] lg:max-w-[300px] md:max-w-[280px] mx-auto mb-4"
      >
        {/* Image Container */}
        <div className="relative w-full h-[200px]">
          <Image
            src={project.image.src}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Info Container */}
        <div className="h-[150px] flex flex-col justify-center items-center text-center px-4">
          <h3
            className={`text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition ${
              isLongTitle ? 'leading-tight text-[15px]' : 'leading-snug'
            }`}
          >
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            <b>Company:</b> {project.company}
          </p>
          <p className="text-xs text-gray-500 capitalize">
            <b>Project type:</b> {project.category}
          </p>
        </div>
      </div>
    );
  })}
</Masonry>


    </>
  );
}

