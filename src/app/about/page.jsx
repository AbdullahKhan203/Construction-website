import React from 'react'
import Founder from './components/Founder'
import CEO from './components/CEO';
import OtherMember from './components/OtherMember';
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
    <Founder />
    <Achievements />
    <CEO />
    <OtherMember />
    </>
  )
}
