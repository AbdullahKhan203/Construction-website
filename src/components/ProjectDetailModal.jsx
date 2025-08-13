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




// 'use client';

// import { useEffect } from 'react';
// import Image from 'next/image';
// import { IoClose } from 'react-icons/io5';

// export default function ProjectDetailModal({ project, onClose }) {
//   if (!project) return null;

//   useEffect(() => {
//     document.body.classList.add('modal-open');
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Image - Let it resize automatically based on natural size */}
//         <div className="w-full">
//           <Image
//             src={project.image.src}
//             alt={project.title}
//             width={1200}
//             height={600}
//             className="w-full h-auto rounded-t-xl object-contain"
//             priority
//           />
//         </div>

       
//         {/* Project Content */}
// <div className="p-6 space-y-4 bg-white rounded-b-xl">
//   <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
//   <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
//   <p className="text-sm font-semibold text-blue-600">{project.category}</p>
//   <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
//     {project.description}
//   </p>
// </div>
//       </div>
//     </div>
//   );
// }













// 'use client';

// import { useEffect } from 'react';
// import Image from 'next/image';
// import { IoClose } from 'react-icons/io5';

// export default function ProjectDetailModal({ project, onClose }) {
//   if (!project) return null;

//   useEffect(() => {
//     document.body.classList.add('modal-open');
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

//   const { images = [], client, consultant, startingDate, energizationDate } = project;
//    console.log("image is ProjectDetailModal",images);
   
//   return (
//     <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Hero Image */}
//         <div className="w-full">
//           <Image
//             src={project.image?.src}
//             alt={project.title}
//             width={1200}
//             height={600}
//             className="w-full h-auto rounded-t-xl object-contain"
//             priority
//           />
//         </div>

//         {/* Project Content */}
//         <div className="p-6 space-y-4 bg-white rounded-b-xl">
//           <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
//           <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
//           <p className="text-sm font-semibold text-blue-600">{project.category}</p>
//           <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
//             {project.description}
//           </p>

//           {/* Extra Metadata */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//             {client && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Client</h4>
//                 <p className="text-gray-800">{client}</p>
//               </div>
//             )}
//             {consultant && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Consultant</h4>
//                 <p className="text-gray-800">{consultant}</p>
//               </div>
//             )}
//             {startingDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Starting Date</h4>
//                 <p className="text-gray-800">{startingDate}</p>
//               </div>
//             )}
//             {energizationDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Energization Date</h4>
//                 <p className="text-gray-800">{energizationDate}</p>
//               </div>
//             )}
//           </div>

//           {/* Images layout */}
//           <div className="mt-6 space-y-4">
//             {images.length >= 1 && (
//               <div className="flex gap-4">
//                 <div className="w-[60%]">
//                   <Image
//                     src={images[0].src}
//                     alt={`Image 1`}
//                     width={800}
//                     height={500}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//                 {images[1] && (
//                   <div className="w-[40%]">
//                     <Image
//                       src={images[1].src}
//                       alt={`Image 2`}
//                       width={600}
//                       height={500}
//                       className="rounded-lg w-full h-auto object-cover"
//                     />
//                   </div>
//                 )}
//               </div>
//             )}

//             {images[2] && (
//               <div>
//                 <Image
//                   src={images[2].src}
//                   alt={`Image 3`}
//                   width={1200}
//                   height={600}
//                   className="rounded-lg w-full h-auto object-cover"
//                 />
//               </div>
//             )}

//             {images[3] && images[4] && (
//               <div className="flex gap-4">
//                 <div className="w-[40%]">
//                   <Image
//                     src={images[3].src}
//                     alt={`Image 4`}
//                     width={500}
//                     height={400}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//                 <div className="w-[60%]">
//                   <Image
//                     src={images[4].src}
//                     alt={`Image 5`}
//                     width={800}
//                     height={400}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Certificate Card */}
//           <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Project Completion Certificate
//             </h3>
//             <p className="text-gray-700 mb-4 text-sm leading-relaxed">
//               It is a long-established fact that a reader will be distracted by the readable content
//               of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
//               more-or-less normal distribution of letters, as opposed to using.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
//               Download
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useEffect } from 'react';
// import Image from 'next/image';
// import { IoClose } from 'react-icons/io5';

// export default function ProjectDetailModal({ project, onClose }) {
//   if (!project) return null;

//   useEffect(() => {
//     document.body.classList.add('modal-open');
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

//   // Convert object to array
//   const { images = {}, client, consultant, startingDate, energizationDate } = project;
//   const imageArray = Object.values(images); // 👈 Fix: convert { img1, img2, ... } to [img1, img2, ...]

//   return (
//     <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Hero Image */}
//         <div className="w-full">
//           <Image
//             src={project.image?.src}
//             alt={project.title}
//             width={1200}
//             height={600}
//             className="w-full h-auto rounded-t-xl object-contain"
//             priority
//           />
//         </div>

//         {/* Project Content */}
//         <div className="p-6 space-y-4 bg-white rounded-b-xl">
//           <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
//           <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
//           <p className="text-sm font-semibold text-blue-600">{project.category}</p>
//           <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
//             {project.description}
//           </p>

//           {/* Extra Metadata */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//             {client && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Client</h4>
//                 <p className="text-gray-800">{client}</p>
//               </div>
//             )}
//             {consultant && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Consultant</h4>
//                 <p className="text-gray-800">{consultant}</p>
//               </div>
//             )}
//             {startingDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Starting Date</h4>
//                 <p className="text-gray-800">{startingDate}</p>
//               </div>
//             )}
//             {energizationDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Energization Date</h4>
//                 <p className="text-gray-800">{energizationDate}</p>
//               </div>
//             )}
//           </div>

//           {/* Images layout */}
//           <div className="mt-6 space-y-4">
//             {imageArray.length >= 1 && (
//               <div className="flex gap-4">
//                 <div className="w-[60%]">
//                   <Image
//                     src={imageArray[0].src || imageArray[0]}
//                     alt="Image 1"
//                     width={800}
//                     height={500}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//                 {imageArray[1] && (
//                   <div className="w-[40%]">
//                     <Image
//                       src={imageArray[1].src || imageArray[1]}
//                       alt="Image 2"
//                       width={600}
//                       height={500}
//                       className="rounded-lg w-full h-auto object-cover"
//                     />
//                   </div>
//                 )}
//               </div>
//             )}

//             {imageArray[2] && (
//               <div>
//                 <Image
//                   src={imageArray[2].src || imageArray[2]}
//                   alt="Image 3"
//                   width={1200}
//                   height={600}
//                   className="rounded-lg w-full h-auto object-cover"
//                 />
//               </div>
//             )}

//             {imageArray[3] && imageArray[4] && (
//               <div className="flex gap-4">
//                 <div className="w-[40%]">
//                   <Image
//                     src={imageArray[3].src || imageArray[3]}
//                     alt="Image 4"
//                     width={500}
//                     height={400}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//                 <div className="w-[60%]">
//                   <Image
//                     src={imageArray[4].src || imageArray[4]}
//                     alt="Image 5"
//                     width={800}
//                     height={400}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Certificate Card */}
//           <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Project Completion Certificate
//             </h3>
//             <p className="text-gray-700 mb-4 text-sm leading-relaxed">
//               It is a long-established fact that a reader will be distracted by the readable content
//               of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
//               more-or-less normal distribution of letters, as opposed to using.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
//               Download
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






















// 'use client';

// import { useEffect } from 'react';
// import { IoClose } from 'react-icons/io5';

// export default function ProjectDetailModal({ project, onClose }) {
//   if (!project) return null;

//   useEffect(() => {
//     document.body.classList.add('modal-open');
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

//   const { images = {}, client, consultant, startingDate, energizationDate } = project;
//   const imageArray = Object.values(images);

//   // Split images into rows (two per row)
//   const imageRows = [];
//   for (let i = 0; i < imageArray.length; i += 2) {
//     if (i + 1 < imageArray.length) {
//       imageRows.push([imageArray[i], imageArray[i + 1]]);
//     } else {
//       imageRows.push([imageArray[i]]);
//     }
//   }

//   return (
//     <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Hero Image */}
//         {project.image?.src && (
//           <div className="w-full h-[300px] bg-cover bg-center rounded-t-xl" style={{
//             backgroundImage: `url(${project.image.src})`,
//             backgroundSize: '100% 100%',
//           }} />
//         )}

//         {/* Project Content */}
//         <div className="p-6 space-y-4 bg-white rounded-b-xl">
//           <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
//           <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
//           <p className="text-sm font-semibold text-blue-600">{project.category}</p>
//           <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
//             {project.description}
//           </p>

//           {/* Extra Metadata */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//             {client && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Client</h4>
//                 <p className="text-gray-800">{client}</p>
//               </div>
//             )}
//             {consultant && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Consultant</h4>
//                 <p className="text-gray-800">{consultant}</p>
//               </div>
//             )}
//             {startingDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Starting Date</h4>
//                 <p className="text-gray-800">{startingDate}</p>
//               </div>
//             )}
//             {energizationDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Energization Date</h4>
//                 <p className="text-gray-800">{energizationDate}</p>
//               </div>
//             )}
//           </div>

//           {/* Images Layout */}
//           <div className="mt-6 space-y-4">
//             {imageRows.map((row, index) => (
//               <div className="flex gap-4 h-[300px]" key={index}>
//                 {row.length === 1 ? (
//                   <div
//                     className="w-full rounded-lg bg-cover bg-center"
//                     style={{
//                       backgroundImage: `url(${row[0].src || row[0]})`,
//                       backgroundSize: '100% 100%',
//                     }}
//                   />
//                 ) : (
//                   <>
//                     <div
//                       className={`rounded-lg bg-cover bg-center ${index % 2 === 0 ? 'w-[60%]' : 'w-[40%]'}`}
//                       style={{
//                         backgroundImage: `url(${row[0].src || row[0]})`,
//                         backgroundSize: '100% 100%',
//                       }}
//                     />
//                     <div
//                       className={`rounded-lg bg-cover bg-center ${index % 2 === 0 ? 'w-[40%]' : 'w-[60%]'}`}
//                       style={{
//                         backgroundImage: `url(${row[1].src || row[1]})`,
//                         backgroundSize: '100% 100%',
//                       }}
//                     />
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Certificate Card */}
//           <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Project Completion Certificate
//             </h3>
//             <p className="text-gray-700 mb-4 text-sm leading-relaxed">
//               It is a long-established fact that a reader will be distracted by the readable content
//               of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
//               more-or-less normal distribution of letters, as opposed to using.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
//               Download
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

















// 'use client';

// import { useEffect } from 'react';
// import Image from 'next/image';
// import { IoClose } from 'react-icons/io5';

// export default function ProjectDetailModal({ project, onClose }) {
//   if (!project) return null;

//   useEffect(() => {
//     document.body.classList.add('modal-open');
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

//   const { images = {}, client, consultant, startingDate, energizationDate } = project;
//   const imageArray = Object.values(images);

//   // Split images into rows of two
//   const imageRows = [];
//   for (let i = 0; i < imageArray.length; i += 2) {
//     if (i + 1 < imageArray.length) {
//       imageRows.push([imageArray[i], imageArray[i + 1]]);
//     } else {
//       imageRows.push([imageArray[i]]);
//     }
//   }

//   return (
//     <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Hero Image (untouched) */}
//         {project.image?.src && (
//           <div className="w-full">
//             <Image
//               src={project.image.src}
//               alt={project.title}
//               width={1200}
//               height={600}
//               className="w-full h-auto rounded-t-xl object-contain"
//               priority
//             />
//           </div>
//         )}

//         {/* Content Section */}
//         <div className="p-6 space-y-4 bg-white rounded-b-xl">
//           <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
//           <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
//           <p className="text-sm font-semibold text-blue-600">{project.category}</p>
//           <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
//             {project.description}
//           </p>

//           {/* Metadata */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//             {client && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Client</h4>
//                 <p className="text-gray-800">{client}</p>
//               </div>
//             )}
//             {consultant && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Consultant</h4>
//                 <p className="text-gray-800">{consultant}</p>
//               </div>
//             )}
//             {startingDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Starting Date</h4>
//                 <p className="text-gray-800">{startingDate}</p>
//               </div>
//             )}
//             {energizationDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Energization Date</h4>
//                 <p className="text-gray-800">{energizationDate}</p>
//               </div>
//             )}
//           </div>

//           {/* Images Below */}
//           <div className="mt-6 space-y-4">
//             {imageRows.map((row, index) => (
//               <div key={index} className="flex gap-4 h-[300px]">
//                 {row.length === 1 ? (
//                   <div
//                     className="w-full rounded-lg bg-cover bg-center"
//                     style={{
//                       backgroundImage: `url(${row[0].src || row[0]})`,
//                       backgroundSize: '100% 100%',
//                       backgroundRepeat: 'no-repeat',
//                       backgroundPosition: 'center',
//                     }}
//                   />
//                 ) : (
//                   <>
//                     <div
//                       className={`rounded-lg bg-cover bg-center ${index % 2 === 0 ? 'w-[60%]' : 'w-[40%]'}`}
//                       style={{
//                         backgroundImage: `url(${row[0].src || row[0]})`,
//                         backgroundSize: '100% 100%',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundPosition: 'center',
//                       }}
//                     />
//                     <div
//                       className={`rounded-lg bg-cover bg-center ${index % 2 === 0 ? 'w-[40%]' : 'w-[60%]'}`}
//                       style={{
//                         backgroundImage: `url(${row[1].src || row[1]})`,
//                         backgroundSize: '100% 100%',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundPosition: 'center',
//                       }}
//                     />
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Certificate */}
//           <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Project Completion Certificate
//             </h3>
//             <p className="text-gray-700 mb-4 text-sm leading-relaxed">
//               It is a long-established fact that a reader will be distracted by the readable content
//               of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
//               more-or-less normal distribution of letters, as opposed to using.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
//               Download
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useEffect } from 'react';
// import Image from 'next/image';
// import { IoClose } from 'react-icons/io5';

// export default function ProjectDetailModal({ project, onClose }) {
//   if (!project) return null;

//   useEffect(() => {
//     document.body.classList.add('modal-open');
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

//   const { images = {}, client, consultant, startingDate, energizationDate } = project;
//   const imageArray = Object.values(images);

//   // Group images in rows of two
//   const imageRows = [];
//   for (let i = 0; i < imageArray.length; i += 2) {
//     if (i + 1 < imageArray.length) {
//       imageRows.push([imageArray[i], imageArray[i + 1]]);
//     } else {
//       imageRows.push([imageArray[i]]);
//     }
//   }

//   return (
//     <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Hero Image */}
//         {project.image?.src && (
//           <div className="w-full">
//             <Image
//               src={project.image.src}
//               alt={project.title}
//               width={1200}
//               height={600}
//               className="w-full h-auto rounded-t-xl object-contain"
//               priority
//             />
//           </div>
//         )}

//         {/* Content */}
//         <div className="p-6 space-y-4 bg-white rounded-b-xl">
//           <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
//           <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
//           <p className="text-sm font-semibold text-blue-600">{project.category}</p>
//           <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
//             {project.description}
//           </p>

//           {/* Project Details */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//             {client && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Client</h4>
//                 <p className="text-gray-800">{client}</p>
//               </div>
//             )}
//             {consultant && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Consultant</h4>
//                 <p className="text-gray-800">{consultant}</p>
//               </div>
//             )}
//             {startingDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Starting Date</h4>
//                 <p className="text-gray-800">{startingDate}</p>
//               </div>
//             )}
//             {energizationDate && (
//               <div>
//                 <h4 className="text-gray-500 text-sm font-semibold">Energization Date</h4>
//                 <p className="text-gray-800">{energizationDate}</p>
//               </div>
//             )}
//           </div>

//           {/* Responsive Image Grid */}
//           <div className="mt-6 space-y-4">
//             {imageRows.map((row, index) => (
//               <div key={index} className="flex flex-col sm:flex-row gap-4 h-[300px]">
//                 {row.map((img, idx) => {
//                   const isEven = index % 2 === 0;
//                   const widthClass = row.length === 1
//                     ? 'w-full'
//                     : idx === 0
//                       ? isEven ? 'sm:w-[60%]' : 'sm:w-[40%]'
//                       : isEven ? 'sm:w-[40%]' : 'sm:w-[60%]';

//                   return (
//                     <div
//                       key={idx}
//                       className={`rounded-lg bg-cover bg-center ${widthClass} h-[300px]`}
//                       style={{
//                         backgroundImage: `url(${img.src || img})`,
//                         backgroundSize: 'cover',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundPosition: 'center',
//                       }}
//                     />
//                   );
//                 })}
//               </div>
//             ))}
//           </div>

//           {/* Certificate Section */}
//           <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Project Completion Certificate
//             </h3>
//             <p className="text-gray-700 mb-4 text-sm leading-relaxed">
//               It is a long-established fact that a reader will be distracted by the readable content
//               of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
//               more-or-less normal distribution of letters, as opposed to using.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
//               Download
//             </button>
//           </div>
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

  const { images = {}, client, consultant, startingDate, energizationDate } = project;
  const imageArray = Object.values(images);

  // Group images in rows of two
  const imageRows = [];
  for (let i = 0; i < imageArray.length; i += 2) {
    if (i + 1 < imageArray.length) {
      imageRows.push([imageArray[i], imageArray[i + 1]]);
    } else {
      imageRows.push([imageArray[i]]);
    }
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 flex justify-center overflow-y-auto py-10 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black rounded-full p-2 z-[999] hover:bg-gray-800"
        >
          <IoClose size={24} />
        </button>

        {/* Hero Image */}
        {project.image?.src && (
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
        )}

        {/* Content */}
        <div className="p-6 space-y-4 bg-white rounded-b-xl">
          <p className="text-sm font-medium text-gray-500 uppercase">{project.company}</p>
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <p className="text-sm font-semibold text-blue-600">{project.category}</p>
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {client && (
              <div>
                <h4 className="text-gray-500 text-sm font-semibold">Client</h4>
                <p className="text-gray-800">{client}</p>
              </div>
            )}
            {consultant && (
              <div>
                <h4 className="text-gray-500 text-sm font-semibold">Consultant</h4>
                <p className="text-gray-800">{consultant}</p>
              </div>
            )}
            {startingDate && (
              <div>
                <h4 className="text-gray-500 text-sm font-semibold">Starting Date</h4>
                <p className="text-gray-800">{startingDate}</p>
              </div>
            )}
            {energizationDate && (
              <div>
                <h4 className="text-gray-500 text-sm font-semibold">Energization Date</h4>
                <p className="text-gray-800">{energizationDate}</p>
              </div>
            )}
          </div>

          {/* Responsive Image Grid */}
          <div className="mt-6 space-y-4">
            {imageRows.map((row, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4">
                {row.map((img, idx) => {
                  const isEven = index % 2 === 0;
                  const widthClass =
                    row.length === 1
                      ? 'w-full'
                      : idx === 0
                        ? isEven
                          ? 'sm:w-[60%]'
                          : 'sm:w-[40%]'
                        : isEven
                          ? 'sm:w-[40%]'
                          : 'sm:w-[60%]';

                  return (
                    <div
                      key={idx}
                      className={`rounded-lg ${widthClass} w-full h-[200px] sm:h-[300px]`}
                      style={{
                        backgroundImage: `url(${img.src || img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Certificate Section */}
          <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Project Completion Certificate
            </h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              It is a long-established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
