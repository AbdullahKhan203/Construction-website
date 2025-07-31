// 'use client';

// import { useEffect } from 'react';
// import Image from 'next/image';
// import { IoClose } from 'react-icons/io5';

// export default function ProjectDetailModal({ project, onClose }) {
//   if (!project) return null;

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     document.body.classList.add('modal-open');
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-modal bg-black/70 flex items-start justify-center py-10 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl relative max-h-full flex flex-col">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Image (hero style) */}
//         {/* <div className="w-full h-[300px] relative rounded-t-xl overflow-hidden">
//           <Image
//             src={project.image.src}
//             alt={project.title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-xl"
//             priority
//           />
//         </div> */}

//         <div className="w-full bg-black">
//   <Image
//     src={project.image.src}
//     alt={project.title}
//     width={1200}
//     height={800}
//     objectFit="contain"
//     className="w-full h-auto rounded-t-xl"
//     priority
//   />
// </div>




//         {/* Scrollable Project Content */}
//         <div className="overflow-y-auto p-6 space-y-4">
//           <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
//           <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
//           <p className="text-sm font-semibold text-blue-600">{project.category}</p>
//           <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
//             {project.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
        >
          <IoClose size={24} />
        </button>

        {/* Image - Let it resize automatically based on natural size */}
        <div className="w-full">
          <Image
            src={project.image.src}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-t-xl object-contain"
            priority
          />
        </div>

        {/* Project Content */}
        {/* <div className="p-6 space-y-4">
          <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <p className="text-sm font-semibold text-blue-600">{project.category}</p>
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>
        </div> */}
        {/* Project Content */}
<div className="p-6 space-y-4 bg-white rounded-b-xl">
  <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
  <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
  <p className="text-sm font-semibold text-blue-600">{project.category}</p>
  <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
    {project.description}
  </p>
</div>
      </div>
    </div>
  );
}
