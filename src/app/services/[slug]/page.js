import {servicesData} from "../../../data/servicesData";

import React from 'react'

export default function ServicePage({params}) {
    const service = servicesData.find(s => s.slug === params.slug);
    if (!service) {
    return <div className="max-w-[960px] mx-auto p-4">Service not found</div>;
  }
  return (
    <div>{service.title}</div>
  )
}
