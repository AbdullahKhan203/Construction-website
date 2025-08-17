"use client";
import React, { useState } from 'react'

export default function QuoteForm() {
     const [selectedService, setSelectedService] = useState('')
      const [showDetails, setShowDetails] = useState(false)
    
      const handleServiceSelect = (e) => {
        setSelectedService(e.target.value)
        setShowDetails(true)
      }
    
  return (
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Select a Service */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">Select a Service*</label>
          <select
            value={selectedService}
            onChange={handleServiceSelect}
            required
            className="border border-gray-300 p-2 w-full "
          >
            <option value="">-- Select Service --</option>
            <option>Electrical Work</option>
            <option>Mechanical Work</option>
            <option>Civil Work</option>
            <option>Telecommunication Work</option>
            <option>Transmission Line</option>
            <option>Grid Station</option>
            <option>Manpower (Manpower & EPTT)</option>
          </select>
        </div>

        {/* Show form only after selecting a service */}
        {showDetails && (
          <>
            {/* Contact Info */}
            <input type="text" placeholder="Full Name*" required className="border border-gray-300 p-2 w-full" />
            <input type="text" placeholder="Phone Number*" required className="border border-gray-300 p-2 w-full" />
            <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 w-full" />
            <input type="text" placeholder="Project Location (City / Area)*" required className="border border-gray-300 p-2 w-full" />

            {/* Budget */}
            <input type="number" placeholder="Estimated Budget (PKR)*" required className="border border-gray-300 p-2 w-full" />

            {/* Project Description */}
            <div className="md:col-span-2">
              <label className="block font-medium mb-2">Project Description*</label>
              <textarea
                placeholder={`Describe your requirements for ${selectedService}`}
                rows={4}
                required
                className="border border-gray-300 p-2 w-full"
              ></textarea>
            </div>

            {/* Upload Optional File */}
            <div className="md:col-span-2">
              <label className="block font-medium mb-2">Upload File (Design / Plan / Drawing - Optional)</label>
              <input type="file" className="w-full border border-gray-300 p-2" />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-main border-main border-2 text-white hover:text-main px-6 py-2 rounded hover:bg-white  transition"
              >
                Submit Request
              </button>
            </div>
          </>
        )}
      </form>
  )
}
