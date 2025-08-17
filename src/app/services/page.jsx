import React from 'react'
import Services from './components/Services'

export const metadata = {
  title: "Our Services | Siddique & Bashir Sons Co",
  description:
    "Explore our wide range of services including Electrical Works, Civil Engineering, Mechanical Services, and Telecommunication Solutions tailored to your needs.",
  keywords: [
    "Construction Services",
    "Electrical Works Pakistan",
    "Civil Engineering Services",
    "Mechanical Services",
    "Telecommunication Solutions",
  ],
};


export default function Service() {
  return (
    <div className='h-[100%] w-[100%]'>
              
                <Services />
    
            </div>
  )
}
