// import React from 'react'
// import Founder from './components/Founder'
// import CEO from './components/CEO';
// import OtherMember from './components/OtherMember';
// import Achievements from './components/Achievements';
// import ManagingDirector from './components/ManagingDirector';

// export const metadata = {
//   title: "About Us | Siddique & Bashir Sons Co",
//   description:
//     "Learn more about Siddique & Bashir Sons Co, our mission, values, and decades of expertise in delivering top-notch construction and engineering solutions in Pakistan.",
//   keywords: [
//     "About Siddique & Bashir Sons",
//     "Construction Experts Pakistan",
//     "Engineering Company About",
//     "Company Profile",
//     "Civil Engineering Leaders",
//   ],
// };

// export default function About() {
//   return (
//     <>
//     {/* <Founder /> */}
//     <CEO />
//     <ManagingDirector />
//     <Achievements />
//     </>
//   )
// }


import React from 'react'
import CEO from './components/CEO';
import ManagingDirector from './components/ManagingDirector';
import Achievements from './components/Achievements';

export const metadata = {
  title: "About Us | Siddique & Bashir Sons Co",
  description:
    "Learn more about Siddique & Bashir Sons Co, our mission, values, and decades of expertise in delivering top-notch construction and engineering solutions in Pakistan.",
  keywords: [
    "About Siddique & Bashir Sons",
    "Construction Experts Pakistan",
    "Engineering Company About",
    "Company Profile",
    "Civil Engineering Leaders",
  ],
};

export default function About() {
  return (
    <>
      {/* Wrapper with background rectangle */}
      <div className="relative">
        {/* Shared Background Rectangle (visible only on large screens) */}
        <div
          className="
            hidden md:block
            absolute
            left-1/2
            top-[50%]
            -translate-x-1/2 -translate-y-1/2
            w-[80%]
            h-[300px]
            bg-amber-100
            rounded-3xl
            -z-10
          "
        ></div>

        {/* Main Sections */}
        <CEO />
        <ManagingDirector />
      </div>

      {/* Achievements Section */}
      <Achievements />
    </>
  )
}
