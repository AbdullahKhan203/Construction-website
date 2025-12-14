// import Image from "next/image";
// import {servicesData} from "../../../data/servicesData";

// import React from 'react'

// export default function ServicePage({params}) {
//     const service = servicesData.find(s => s.slug === params.slug);
//     // console.log("service",service);
    
//     if (!service) {
//     return <div className="max-w-[960px] mx-auto p-4">Service not found</div>;
//   }
//   return (
//     <div className='max-w-[1200px] m-auto my-6'>
//      <div className="w-full h-[250px] flex justify-center items-center bg-[#cbc7c4]">
//     <h1 className="text-[48px] text-center text-red-600 ">{service.title}</h1>
//      </div>
//      <h2 className="text-main text-[28px]">{service.title}</h2>
//      <p>{service.longDescription}</p>
      
//       {/* <div  className="h-[500px] w-full relative">
//       <Image src={service.image} className="h-[100%] w-[100%]" fill alt="project-img" />
//       </div> */}
    
//     </div>
//   )
// }


// import Image from "next/image";
// import { servicesData } from "../../../data/servicesData";

// export default function ServicePage({ params }) {
//   const service = servicesData.find((s) => s.slug === params.slug);

//   if (!service) {
//     return (
//       <div className="max-w-[960px] mx-auto p-4">Service not found</div>
//     );
//   }

//   // Convert image object to array (since you stored them inside `{}` in data file)
//   const imageArray = Object.values(service.image);

//   return (
//     <div className="max-w-[1200px] m-auto my-6">
//       {/* Header Section */}
//       <div className="w-full h-[250px] flex justify-center items-center bg-[#cbc7c4]">
//         <h1 className="text-[48px] text-center text-red-600">
//           {service.title}
//         </h1>
//       </div>

//       {/* Description */}
//       <h2 className="text-main text-[28px] mt-6">{service.title}</h2>
//       <p className="mt-2 mb-8">{service.longDescription}</p>

//       {/* Images Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {imageArray.map((img, index) => {
//           const isLastOdd =
//             imageArray.length % 2 !== 0 && index === imageArray.length - 1;

//           return (
//             <div
//               key={index}
//               className={`relative w-full ${
//                 isLastOdd ? "sm:col-span-2" : ""
//               }`}
//             >
//               <Image
//                 src={img}
//                 alt={`service-img-${index}`}
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] object-cover rounded-xl"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }








// import Image from "next/image";
// import { servicesData } from "../../../data/servicesData";

// export default async function ServicePage({ params }) {
//   // const service = servicesData.find((s) => s.slug === params.slug);
//   // const service = servicesData.find((s) => s.slug === (Array.isArray(params.slug) ? params.slug[0] : params.slug));
//   const slug = params?.slug ? (Array.isArray(params.slug) ? params.slug[0] : params.slug) : null;
// const service = slug ? servicesData.find((s) => s.slug === slug) : null;



//   if (!service) {
//     return (
//       <div className="max-w-[960px] mx-auto p-4">Service not found</div>
//     );
//   }

//   // Convert image object to array
//   const imageArray = Object.values(service.image);

//   return (
//     <div className="max-w-[1200px] my-6 mx-2 smx:mx-auto">
//       {/* Header Section */}
//       <div className="w-full h-[250px] flex justify-center items-center bg-[#cbc7c4]">
//         <h1 className="text-[48px] text-center text-red-600">
//           {service.title}
//         </h1>
//       </div>

//       {/* Description */}
//       <h2 className="text-main text-[28px] mt-6">{service.title}</h2>
//       <p className="mt-2 mb-8">{service.longDescription}</p>

//       {/* Images Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {imageArray.map((img, index) => {
//           const isLastOdd =
//             imageArray.length % 2 !== 0 && index === imageArray.length - 1;

//           return (
//             <div
//               key={index}
//               className={`relative w-full aspect-square bg-gray-100 flex justify-center items-center ${
//                 isLastOdd ? "sm:col-span-2" : ""
//               }`}
//             >
//               <Image
//                 src={img}
//                 alt={`service-img-${index}`}
//                 fill
//                 // className="object-contain rounded-xl"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }








import Image from "next/image";
import { servicesData } from "../../../data/servicesData";

export default async function ServicePage({ params }) {
  // ✅ FIX: resolve params first (ONLY CHANGE)
  const resolvedParams = await params;

  // const service = servicesData.find((s) => s.slug === params.slug);
  // const service = servicesData.find((s) => s.slug === (Array.isArray(params.slug) ? params.slug[0] : params.slug));
  const slug = resolvedParams?.slug
    ? Array.isArray(resolvedParams.slug)
      ? resolvedParams.slug[0]
      : resolvedParams.slug
    : null;

  const service = slug ? servicesData.find((s) => s.slug === slug) : null;

  if (!service) {
    return (
      <div className="max-w-[960px] mx-auto p-4">Service not found</div>
    );
  }

  // Convert image object to array
  const imageArray = Object.values(service.image);

  return (
    <div className="max-w-[1200px] my-6 mx-2 smx:mx-auto">
      {/* Header Section */}
      <div className="w-full h-[250px] flex justify-center items-center bg-[#cbc7c4]">
        <h1 className="text-[48px] text-center text-red-600">
          {service.title}
        </h1>
      </div>

      {/* Description */}
      <h2 className="text-main text-[28px] mt-6">{service.title}</h2>
      <p className="mt-2 mb-8">{service.longDescription}</p>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {imageArray.map((img, index) => {
          const isLastOdd =
            imageArray.length % 2 !== 0 && index === imageArray.length - 1;

          return (
            <div
              key={index}
              className={`relative w-full aspect-square bg-gray-100 flex justify-center items-center ${
                isLastOdd ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={img}
                alt={`service-img-${index}`}
                fill
                // className="object-contain rounded-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
