'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaBuilding, FaAward, FaUsers } from 'react-icons/fa';

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    {
      icon: <FaBuilding className="text-amber-500 text-5xl mb-3" />,
      number: 18,
      label: (
        <>
          <span className="text-gray-500">Projects </span>
          <span className="font-semibold text-gray-900">Completed</span>
        </>
      ),
    },
    {
      icon: <FaAward className="text-amber-500 text-5xl mb-3" />,
      number: 8,
      label: (
        <>
          <span className="text-gray-500">Years of </span>
          <span className="font-semibold text-gray-900">Excellence</span>
        </>
      ),
    },
    {
      icon: <FaUsers className="text-amber-500 text-5xl mb-3" />,
      number: 50,
      label: (
        <>
          <span className="text-gray-500">Skilled </span>
          <span className="font-semibold text-gray-900">Workforce</span>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div
        ref={ref}
        className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center px-4"
      >
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            {item.icon}
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {inView && <CountUp start={1} end={item.number} duration={2.5} />}+
            </h2>
            <p className="text-[15px]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
