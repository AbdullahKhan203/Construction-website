'use client'

import { useState } from 'react'

export default function whistleBlowing() {
  const [showIdentity, setShowIdentity] = useState(true)
  const [needFeedback, setNeedFeedback] = useState(false)
  const [engagedCount, setEngagedCount] = useState(1)

  return (
    <div className="max-w-[960px] w-full mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Please provide information as follows: (* Required fields)</h2>

      {/* Who is submitting */}
      <div className="mb-4">
        <label className="block font-medium mb-2">*Person submitting this complain</label>
        <div className="flex flex-wrap gap-4">
          {['Employee', 'Customer', 'Vendor', 'Other'].map((label) => (
            <label key={label} className="flex items-center gap-2">
              <input type="radio" name="submitterType" value={label} className="accent-blue-600" />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Identity Option */}
      <div className="mb-6">
        <p className="text-sm mb-2">
          We can better understand and handle the concerns if we have a means to contact with you...
        </p>
        <label className="block font-medium mb-2">*Do you want to show your Identity for this report?</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="showIdentity"
              checked={showIdentity}
              onChange={() => setShowIdentity(true)}
              className="accent-blue-600"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="showIdentity"
              checked={!showIdentity}
              onChange={() => setShowIdentity(false)}
              className="accent-blue-600"
            />
            No
          </label>
        </div>
      </div>

      {/* Identity Form */}
      {showIdentity && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Name" className="border p-2 w-full" />
          <input type="text" placeholder="Phone Number" className="border p-2 w-full" />
          <input type="email" placeholder="Email Address" className="border p-2 w-full" />
        </div>
      )}

      {/* Number of Persons Engaged */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          *Please identify the person(s) engaged in this behavior:
        </label>
        <input
          type="number"
          min="1"
          placeholder="Enter number of persons"
          value={engagedCount}
          onChange={(e) => setEngagedCount(Number(e.target.value))}
          className="border p-2 w-full max-w-xs"
        />
      </div>

      {/* Engaged Persons Form Fields */}
      {Array.from({ length: engagedCount }, (_, i) => (
        <div key={i} className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder={`${i + 1} # First Name`} className="border p-2 w-full" />
          <input type="text" placeholder="Last Name" className="border p-2 w-full" />
          <input type="text" placeholder="Title Name" className="border p-2 w-full" />
        </div>
      ))}

      {/* Awareness */}
      <div className="mb-4">
        <label className="block font-medium mb-2">How did you become aware of this?</label>
        <textarea className="w-full border p-2" rows={2}></textarea>
      </div>

      {/* Upload */}
      <div className="mb-4">
        <label className="block font-medium mb-2">
          If you have a document or file that supports your report, here can be uploaded:
        </label>
        <input type="file" className="border p-2" />
      </div>

      {/* Violation Details */}
      <div className="mb-6">
        <label className="block font-medium mb-2">*Please provide all details regarding the violation:</label>
        <textarea className="w-full border p-2" rows={6}></textarea>
      </div>

      {/* Feedback Request */}
      <div className="mb-4">
        <label className="block font-medium mb-2">
          Do you need feedback from our side regarding your complain
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="needFeedback"
              checked={needFeedback}
              onChange={() => setNeedFeedback(true)}
              className="accent-blue-600"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="needFeedback"
              checked={!needFeedback}
              onChange={() => setNeedFeedback(false)}
              className="accent-blue-600"
            />
            No
          </label>
        </div>
      </div>

      {/* Email if Feedback is needed */}
      {needFeedback && (
        <div className="mb-6">
          <input
            type="email"
            placeholder="Enter your email for feedback"
            className="border p-2 w-full max-w-md"
          />
        </div>
      )}

      {/* Note */}
      <p className="text-sm mb-4">
        If yes, in case the finding does not Contrary to the confidentiality of this organization...
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
      >
        SEND REQUEST
      </button>
    </div>
  )
}
