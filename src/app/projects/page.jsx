// import Image from 'next/image'
// import React from 'react'

// import ProjectCard from './components/ProjectCard'
// export default function Projects() {
//   return (
//     <div className='w-full border-2 flex flex-wrap gap-2 flex-col  border-orange-500'>
//       <h1 className=' text-[32px] font-Rubik text-center mt-4 mb-8 '>Our Projects</h1>
//       <div className='max-w-[1500px] h-auto border-2 border-blue-600 grid grid-cols-3 m-auto'>
//        <ProjectCard />
//        <ProjectCard />
//        <ProjectCard />
     

//      </div>
//     </div>
//   )
// }





import Image from 'next/image'
import React from 'react'

import ProjectCard from './components/ProjectCard'
import ProjectsContainer from './components/ProjectsContainer'

export default function Projects() {
  return (
    <ProjectsContainer />
  )
}




// <div className="w-full border-2 flex flex-col items-center border-orange-500 px-4">
    //   <h1 className="text-[32px] font-Rubik text-center mt-4 mb-8">Our Projects</h1>

    //   {/* Fixed container */}
    //   <div className="w-full max-w-[1500px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-blue-600 mx-auto">
    //     {/* <ProjectCard />
    //     <ProjectCard />
    //     <ProjectCard /> */}
    //     <ProjectsContainer />
    //   </div>
    // </div>