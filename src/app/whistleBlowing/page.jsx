// 'use client'

// import { useState } from 'react'

// export default function whistleBlowing() {
//   const [showIdentity, setShowIdentity] = useState(true)
//   const [needFeedback, setNeedFeedback] = useState(false)
//   const [engagedCount, setEngagedCount] = useState(1)

//   return (
//     <div className="max-w-[960px] w-full mx-auto px-4 py-6">
//       <h2 className="text-2xl font-semibold mb-4">Please provide information as follows: (* Required fields)</h2>

//       {/* Who is submitting */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">*Person submitting this complain</label>
//         <div className="flex flex-wrap gap-4">
//           {['Employee', 'Customer', 'Vendor', 'Other'].map((label) => (
//             <label key={label} className="flex items-center gap-2">
//               <input type="radio" name="submitterType" value={label} className="accent-blue-600" />
//               {label}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Identity Option */}
//       <div className="mb-6">
//         <p className="text-sm mb-2">
//           We can better understand and handle the concerns if we have a means to contact with you...
//         </p>
//         <label className="block font-medium mb-2">*Do you want to show your Identity for this report?</label>
//         <div className="flex gap-4">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="showIdentity"
//               checked={showIdentity}
//               onChange={() => setShowIdentity(true)}
//               className="accent-blue-600"
//             />
//             Yes
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="showIdentity"
//               checked={!showIdentity}
//               onChange={() => setShowIdentity(false)}
//               className="accent-blue-600"
//             />
//             No
//           </label>
//         </div>
//       </div>

//       {/* Identity Form */}
//       {showIdentity && (
//         <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input type="text" placeholder="Name" className="border p-2 w-full" />
//           <input type="text" placeholder="Phone Number" className="border p-2 w-full" />
//           <input type="email" placeholder="Email Address" className="border p-2 w-full" />
//         </div>
//       )}

//       {/* Number of Persons Engaged */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">
//           *Please identify the person(s) engaged in this behavior:
//         </label>
//         <input
//           type="number"
//           min="1"
//           placeholder="Enter number of persons"
//           value={engagedCount}
//           onChange={(e) => setEngagedCount(Number(e.target.value))}
//           className="border p-2 w-full max-w-xs"
//         />
//       </div>

//       {/* Engaged Persons Form Fields */}
//       {Array.from({ length: engagedCount }, (_, i) => (
//         <div key={i} className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input type="text" placeholder={`${i + 1} # First Name`} className="border p-2 w-full" />
//           <input type="text" placeholder="Last Name" className="border p-2 w-full" />
//           <input type="text" placeholder="Title Name" className="border p-2 w-full" />
//         </div>
//       ))}

//       {/* Awareness */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">How did you become aware of this?</label>
//         <textarea className="w-full border p-2" rows={2}></textarea>
//       </div>

//       {/* Upload */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           If you have a document or file that supports your report, here can be uploaded:
//         </label>
//         <input type="file" className="border p-2" />
//       </div>

//       {/* Violation Details */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">*Please provide all details regarding the violation:</label>
//         <textarea className="w-full border p-2" rows={6}></textarea>
//       </div>

//       {/* Feedback Request */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           Do you need feedback from our side regarding your complain
//         </label>
//         <div className="flex gap-4">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="needFeedback"
//               checked={needFeedback}
//               onChange={() => setNeedFeedback(true)}
//               className="accent-blue-600"
//             />
//             Yes
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="needFeedback"
//               checked={!needFeedback}
//               onChange={() => setNeedFeedback(false)}
//               className="accent-blue-600"
//             />
//             No
//           </label>
//         </div>
//       </div>

//       {/* Email if Feedback is needed */}
//       {needFeedback && (
//         <div className="mb-6">
//           <input
//             type="email"
//             placeholder="Enter your email for feedback"
//             className="border p-2 w-full max-w-md"
//           />
//         </div>
//       )}

//       {/* Note */}
//       <p className="text-sm mb-4">
//         If yes, in case the finding does not Contrary to the confidentiality of this organization...
//       </p>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
//       >
//         SEND REQUEST
//       </button>
//     </div>
//   )
// }




// 'use client';
// import { useState } from 'react';

// export default function WhistleBlowing() {
//   const [showIdentity, setShowIdentity] = useState(true);
//   const [needFeedback, setNeedFeedback] = useState(false);
//   const [engagedCount, setEngagedCount] = useState(1);
//   const [formData, setFormData] = useState({
//     submitterType: '',
//     name: '',
//     phone: '',
//     email: '',
//     engaged: [{ firstName: '', lastName: '', title: '' }],
//     awareness: '',
//     violationDetails: '',
//     feedbackEmail: '',
//     evidenceFile: null, // ✅ Added
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e, index, field) => {
//     const { name, value, files } = e.target;

//     if (field && index !== undefined) {
//       const updated = [...formData.engaged];
//       updated[index][field] = value;
//       setFormData({ ...formData, engaged: updated });
//     } else if (name === 'evidenceFile') {
//       // ✅ Handle file separately
//       setFormData({ ...formData, evidenceFile: files[0] || null });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.submitterType)
//       newErrors.submitterType = 'Please select who is submitting this complaint.';

//     if (showIdentity) {
//       if (!formData.name.trim()) newErrors.name = 'Name is required.';
//       if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
//       if (!formData.email.trim()) newErrors.email = 'Email is required.';
//     }

//     if (!formData.violationDetails.trim())
//       newErrors.violationDetails = 'Please provide details about the violation.';

//     formData.engaged.forEach((person, i) => {
//       if (!person.firstName.trim()) newErrors[`engaged-${i}-firstName`] = 'First name is required.';
//       if (!person.lastName.trim()) newErrors[`engaged-${i}-lastName`] = 'Last name is required.';
//       if (!person.title.trim()) newErrors[`engaged-${i}-title`] = 'Title is required.';
//     });

//     if (needFeedback && !formData.feedbackEmail.trim()) {
//       newErrors.feedbackEmail = 'Feedback email is required.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("✅ Submitted Data:", {
//         ...formData,
//         evidenceFile: formData.evidenceFile ? formData.evidenceFile.name : "No file attached",
//       });

//       alert('Form submitted successfully ✅');

//       // Reset form
//       setFormData({
//         submitterType: '',
//         name: '',
//         phone: '',
//         email: '',
//         engaged: [{ firstName: '', lastName: '', title: '' }],
//         awareness: '',
//         violationDetails: '',
//         feedbackEmail: '',
//         evidenceFile: null,
//       });
//       setShowIdentity(true);
//       setNeedFeedback(false);
//       setEngagedCount(1);
//       setErrors({});
//       e.target.reset(); // ✅ Also clear file input visually
//     } else {
//       alert('Please fill all required fields.');
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-[960px] w-full mx-auto px-4 py-6 bg-white rounded-lg shadow"
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-red-500">
//         Please provide information as follows: (* Required fields)
//       </h2>

//       {/* Who is submitting */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           * Person submitting this complaint
//         </label>
//         <div className="flex flex-wrap gap-4">
//           {['Employee', 'Customer', 'Vendor', 'Other'].map((label) => (
//             <label key={label} className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="submitterType"
//                 value={label}
//                 checked={formData.submitterType === label}
//                 onChange={handleChange}
//                 className="accent-red-500"
//               />
//               {label}
//             </label>
//           ))}
//         </div>
//         {errors.submitterType && (
//           <p className="text-red-500 text-sm mt-1">{errors.submitterType}</p>
//         )}
//       </div>

//       {/* Identity Option */}
//       <div className="mb-6">
//         <p className="text-sm mb-2 text-gray-600">
//           We can better understand and handle concerns if we can contact you.
//         </p>
//         <label className="block font-medium mb-2">
//           * Do you want to show your identity for this report?
//         </label>
//         <div className="flex gap-4">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="showIdentity"
//               checked={showIdentity}
//               onChange={() => setShowIdentity(true)}
//               className="accent-red-500"
//             />
//             Yes
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="showIdentity"
//               checked={!showIdentity}
//               onChange={() => setShowIdentity(false)}
//               className="accent-red-500"
//             />
//             No
//           </label>
//         </div>
//       </div>

//       {/* Identity Fields */}
//       {showIdentity && (
//         <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border p-2 w-full"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>
//           <div>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border p-2 w-full"
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="border p-2 w-full"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>
//         </div>
//       )}

//       {/* Engaged Persons */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">
//           * Please identify the person(s) engaged in this behavior:
//         </label>
//         <input
//           type="number"
//           min="1"
//           placeholder="Enter number of persons"
//           value={engagedCount}
//           onChange={(e) => {
//             const val = Number(e.target.value);
//             setEngagedCount(val);
//             setFormData({
//               ...formData,
//               engaged: Array.from({ length: val }, () => ({
//                 firstName: '',
//                 lastName: '',
//                 title: '',
//               })),
//             });
//           }}
//           className="border p-2 w-full max-w-xs"
//         />
//       </div>

//       {Array.from({ length: engagedCount }, (_, i) => (
//         <div key={i} className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <input
//               type="text"
//               placeholder={`${i + 1} # First Name`}
//               value={formData.engaged[i]?.firstName || ''}
//               onChange={(e) => handleChange(e, i, 'firstName')}
//               className="border p-2 w-full"
//             />
//             {errors[`engaged-${i}-firstName`] && (
//               <p className="text-red-500 text-sm">{errors[`engaged-${i}-firstName`]}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={formData.engaged[i]?.lastName || ''}
//               onChange={(e) => handleChange(e, i, 'lastName')}
//               className="border p-2 w-full"
//             />
//             {errors[`engaged-${i}-lastName`] && (
//               <p className="text-red-500 text-sm">{errors[`engaged-${i}-lastName`]}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Title Name"
//               value={formData.engaged[i]?.title || ''}
//               onChange={(e) => handleChange(e, i, 'title')}
//               className="border p-2 w-full"
//             />
//             {errors[`engaged-${i}-title`] && (
//               <p className="text-red-500 text-sm">{errors[`engaged-${i}-title`]}</p>
//             )}
//           </div>
//         </div>
//       ))}

//       {/* Awareness */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           How did you become aware of this? (Optional)
//         </label>
//         <textarea
//           name="awareness"
//           value={formData.awareness}
//           onChange={handleChange}
//           className="w-full border p-2"
//           rows={2}
//         ></textarea>
//       </div>

//       {/* Violation Details */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">
//           * Please provide all details regarding the violation:
//         </label>
//         <textarea
//           name="violationDetails"
//           value={formData.violationDetails}
//           onChange={handleChange}
//           className="w-full border p-2"
//           rows={6}
//         ></textarea>
//         {errors.violationDetails && (
//           <p className="text-red-500 text-sm">{errors.violationDetails}</p>
//         )}
//       </div>

//       {/* ✅ Optional File Upload */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">
//           Upload supporting evidence (Optional)
//         </label>
//         <input
//           type="file"
//           name="evidenceFile"
//           onChange={handleChange}
//           className="border p-2 w-full max-w-md"
//           accept=".jpg,.jpeg,.png,.pdf"
//         />
//       </div>

//       {/* Feedback */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           Do you need feedback regarding your complaint?
//         </label>
//         <div className="flex gap-4">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="needFeedback"
//               checked={needFeedback}
//               onChange={() => setNeedFeedback(true)}
//               className="accent-red-500"
//             />
//             Yes
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="needFeedback"
//               checked={!needFeedback}
//               onChange={() => setNeedFeedback(false)}
//               className="accent-red-500"
//             />
//             No
//           </label>
//         </div>
//       </div>

//       {needFeedback && (
//         <div className="mb-6">
//           <input
//             type="email"
//             name="feedbackEmail"
//             placeholder="Enter your email for feedback"
//             value={formData.feedbackEmail}
//             onChange={handleChange}
//             className="border p-2 w-full max-w-md"
//           />
//           {errors.feedbackEmail && (
//             <p className="text-red-500 text-sm">{errors.feedbackEmail}</p>
//           )}
//         </div>
//       )}

//       <button
//         type="submit"
//         className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//       >
//         SEND REQUEST
//       </button>
//     </form>
//   );
// }















// 'use client';
// import { useState } from 'react';

// export default function WhistleBlowing() {
//   const [showIdentity, setShowIdentity] = useState(true);
//   const [needFeedback, setNeedFeedback] = useState(false);
//   const [engagedCount, setEngagedCount] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     submitterType: '',
//     name: '',
//     phone: '',
//     email: '',
//     engaged: [{ firstName: '', lastName: '', title: '' }],
//     awareness: '',
//     violationDetails: '',
//     feedbackEmail: '',
//     evidenceFile: null,
//   });
//   const [errors, setErrors] = useState({});

//   // ✅ Handle all input changes
//   const handleChange = (e, index, field) => {
//     const { name, value, files } = e.target;

//     if (field && index !== undefined) {
//       const updated = [...formData.engaged];
//       updated[index][field] = value;
//       setFormData({ ...formData, engaged: updated });
//     } else if (name === 'evidenceFile') {
//       setFormData({ ...formData, evidenceFile: files[0] || null });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // ✅ Form validation
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.submitterType)
//       newErrors.submitterType = 'Please select who is submitting this complaint.';

//     if (showIdentity) {
//       if (!formData.name.trim()) newErrors.name = 'Name is required.';
//       if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
//       if (!formData.email.trim()) newErrors.email = 'Email is required.';
//     }

//     if (!formData.violationDetails.trim())
//       newErrors.violationDetails = 'Please provide details about the violation.';

//     formData.engaged.forEach((person, i) => {
//       if (!person.firstName.trim()) newErrors[`engaged-${i}-firstName`] = 'First name is required.';
//       if (!person.lastName.trim()) newErrors[`engaged-${i}-lastName`] = 'Last name is required.';
//       if (!person.title.trim()) newErrors[`engaged-${i}-title`] = 'Title is required.';
//     });

//     if (needFeedback && !formData.feedbackEmail.trim()) {
//       newErrors.feedbackEmail = 'Feedback email is required.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       alert('Please fill all required fields.');
//       return;
//     }

//     setLoading(true);

//     try {
//       let evidenceUrl = '';

//       // ✅ If file provided, upload to Cloudinary
//       if (formData.evidenceFile) {
//         const data = new FormData();
//         data.append('file', formData.evidenceFile);
//         data.append('upload_preset', 'whistleBlowingEvidence'); // ⚠️ Replace with your Cloudinary upload preset
//         data.append('folder', 'whistleBlowing_uploads'); // optional

//         const res = await fetch(`https://api.cloudinary.com/v1_1/downrhrcn/upload`, { // ⚠️ Replace with your Cloudinary cloud name
//           method: 'POST',
//           body: data,
//         });

//         const cloudData = await res.json();
//         evidenceUrl = cloudData.secure_url;
//       }

//       // ✅ Prepare all form data (with Cloudinary link if available)
//       const payload = {
//         ...formData,
//         evidenceFile: evidenceUrl || 'No evidence provided',
//       };

//       // ✅ Send form data to Formspree
// await fetch('https://formspree.io/f/xanpvyed', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(payload),
// });


//       alert('Form submitted successfully ✅');

//       // Reset form
//       setFormData({
//         submitterType: '',
//         name: '',
//         phone: '',
//         email: '',
//         engaged: [{ firstName: '', lastName: '', title: '' }],
//         awareness: '',
//         violationDetails: '',
//         feedbackEmail: '',
//         evidenceFile: null,
//       });
//       setShowIdentity(true);
//       setNeedFeedback(false);
//       setEngagedCount(1);
//       setErrors({});
//       e.target.reset();
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong while submitting the form.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-[960px] w-full mx-auto px-4 py-6 bg-white rounded-lg shadow"
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-red-500">
//         Please provide information as follows: (* Required fields)
//       </h2>

//       {/* Who is submitting */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           * Person submitting this complaint
//         </label>
//         <div className="flex flex-wrap gap-4">
//           {['Employee', 'Customer', 'Vendor', 'Other'].map((label) => (
//             <label key={label} className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="submitterType"
//                 value={label}
//                 checked={formData.submitterType === label}
//                 onChange={handleChange}
//                 className="accent-red-500"
//               />
//               {label}
//             </label>
//           ))}
//         </div>
//         {errors.submitterType && (
//           <p className="text-red-500 text-sm mt-1">{errors.submitterType}</p>
//         )}
//       </div>

//       {/* Identity Option */}
//       <div className="mb-6">
//         <p className="text-sm mb-2 text-gray-600">
//           We can better understand and handle concerns if we can contact you.
//         </p>
//         <label className="block font-medium mb-2">
//           * Do you want to show your identity for this report?
//         </label>
//         <div className="flex gap-4">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="showIdentity"
//               checked={showIdentity}
//               onChange={() => setShowIdentity(true)}
//               className="accent-red-500"
//             />
//             Yes
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="showIdentity"
//               checked={!showIdentity}
//               onChange={() => setShowIdentity(false)}
//               className="accent-red-500"
//             />
//             No
//           </label>
//         </div>
//       </div>

//       {/* Identity Fields */}
//       {showIdentity && (
//         <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border p-2 w-full"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>
//           <div>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border p-2 w-full"
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="border p-2 w-full"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>
//         </div>
//       )}

//       {/* Engaged Persons */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">
//           * Please identify the person(s) engaged in this behavior:
//         </label>
//         <input
//           type="number"
//           min="1"
//           placeholder="Enter number of persons"
//           value={engagedCount}
//           onChange={(e) => {
//             const val = Number(e.target.value);
//             setEngagedCount(val);
//             setFormData({
//               ...formData,
//               engaged: Array.from({ length: val }, () => ({
//                 firstName: '',
//                 lastName: '',
//                 title: '',
//               })),
//             });
//           }}
//           className="border p-2 w-full max-w-xs"
//         />
//       </div>

//       {Array.from({ length: engagedCount }, (_, i) => (
//         <div key={i} className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <input
//               type="text"
//               placeholder={`${i + 1} # First Name`}
//               value={formData.engaged[i]?.firstName || ''}
//               onChange={(e) => handleChange(e, i, 'firstName')}
//               className="border p-2 w-full"
//             />
//             {errors[`engaged-${i}-firstName`] && (
//               <p className="text-red-500 text-sm">{errors[`engaged-${i}-firstName`]}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={formData.engaged[i]?.lastName || ''}
//               onChange={(e) => handleChange(e, i, 'lastName')}
//               className="border p-2 w-full"
//             />
//             {errors[`engaged-${i}-lastName`] && (
//               <p className="text-red-500 text-sm">{errors[`engaged-${i}-lastName`]}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Title Name"
//               value={formData.engaged[i]?.title || ''}
//               onChange={(e) => handleChange(e, i, 'title')}
//               className="border p-2 w-full"
//             />
//             {errors[`engaged-${i}-title`] && (
//               <p className="text-red-500 text-sm">{errors[`engaged-${i}-title`]}</p>
//             )}
//           </div>
//         </div>
//       ))}

//       {/* Awareness */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           How did you become aware of this? (Optional)
//         </label>
//         <textarea
//           name="awareness"
//           value={formData.awareness}
//           onChange={handleChange}
//           className="w-full border p-2"
//           rows={2}
//         ></textarea>
//       </div>

//       {/* Violation Details */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">
//           * Please provide all details regarding the violation:
//         </label>
//         <textarea
//           name="violationDetails"
//           value={formData.violationDetails}
//           onChange={handleChange}
//           className="w-full border p-2"
//           rows={6}
//         ></textarea>
//         {errors.violationDetails && (
//           <p className="text-red-500 text-sm">{errors.violationDetails}</p>
//         )}
//       </div>

//       {/* ✅ Optional File Upload */}
//       <div className="mb-6">
//         <label className="block font-medium mb-2">
//           Upload supporting evidence (Optional)
//         </label>
//         <input
//           type="file"
//           name="evidenceFile"
//           onChange={handleChange}
//           className="border p-2 w-full max-w-md"
//           accept=".jpg,.jpeg,.png,.pdf"
//         />
//       </div>

//       {/* Feedback */}
//       <div className="mb-4">
//         <label className="block font-medium mb-2">
//           Do you need feedback regarding your complaint?
//         </label>
//         <div className="flex gap-4">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="needFeedback"
//               checked={needFeedback}
//               onChange={() => setNeedFeedback(true)}
//               className="accent-red-500"
//             />
//             Yes
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="needFeedback"
//               checked={!needFeedback}
//               onChange={() => setNeedFeedback(false)}
//               className="accent-red-500"
//             />
//             No
//           </label>
//         </div>
//       </div>

//       {needFeedback && (
//         <div className="mb-6">
//           <input
//             type="email"
//             name="feedbackEmail"
//             placeholder="Enter your email for feedback"
//             value={formData.feedbackEmail}
//             onChange={handleChange}
//             className="border p-2 w-full max-w-md"
//           />
//           {errors.feedbackEmail && (
//             <p className="text-red-500 text-sm">{errors.feedbackEmail}</p>
//           )}
//         </div>
//       )}

//       <button
//         type="submit"
//         disabled={loading}
//         className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//       >
//         {loading ? 'Submitting...' : 'SEND REQUEST'}
//       </button>
//     </form>
//   );
// }










'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function WhistleBlowing() {
  const [showIdentity, setShowIdentity] = useState(true);
  const [needFeedback, setNeedFeedback] = useState(false);
  const [engagedCount, setEngagedCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    submitterType: '',
    name: '',
    phone: '',
    email: '',
    engaged: [{ firstName: '', lastName: '', title: '' }],
    awareness: '',
    violationDetails: '',
    feedbackEmail: '',
    evidenceFile: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e, index, field) => {
    const { name, value, files } = e.target;

    if (field && index !== undefined) {
      const updated = [...formData.engaged];
      updated[index][field] = value;
      setFormData({ ...formData, engaged: updated });
    } else if (name === 'evidenceFile') {
      setFormData({ ...formData, evidenceFile: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.submitterType)
      newErrors.submitterType = 'Please select who is submitting this complaint.';

    if (showIdentity) {
      if (!formData.name.trim()) newErrors.name = 'Name is required.';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
      if (!formData.email.trim()) newErrors.email = 'Email is required.';
    }

    if (!formData.violationDetails.trim())
      newErrors.violationDetails = 'Please provide details about the violation.';

    formData.engaged.forEach((person, i) => {
      if (!person.firstName.trim()) newErrors[`engaged-${i}-firstName`] = 'First name is required.';
      if (!person.lastName.trim()) newErrors[`engaged-${i}-lastName`] = 'Last name is required.';
      if (!person.title.trim()) newErrors[`engaged-${i}-title`] = 'Title is required.';
    });

    if (needFeedback && !formData.feedbackEmail.trim()) {
      newErrors.feedbackEmail = 'Feedback email is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fill all required fields.');
      return;
    }

    setLoading(true);

    try {
      let evidenceUrl = '';

      if (formData.evidenceFile) {
        const data = new FormData();
        data.append('file', formData.evidenceFile);
        data.append('upload_preset', 'whistleBlowingEvidence');
        data.append('folder', 'whistleBlowing_uploads');

        const res = await fetch(`https://api.cloudinary.com/v1_1/downrhrcn/upload`, {
          method: 'POST',
          body: data,
        });

        const cloudData = await res.json();
        evidenceUrl = cloudData.secure_url;
      }

      const payload = {
        ...formData,
        evidenceFile: evidenceUrl || 'No evidence provided',
      };

      await fetch('https://formspree.io/f/xanpvyed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      toast.success('Form submitted successfully ✅');

      setFormData({
        submitterType: '',
        name: '',
        phone: '',
        email: '',
        engaged: [{ firstName: '', lastName: '', title: '' }],
        awareness: '',
        violationDetails: '',
        feedbackEmail: '',
        evidenceFile: null,
      });
      setShowIdentity(true);
      setNeedFeedback(false);
      setEngagedCount(1);
      setErrors({});
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[960px] w-full mx-auto px-4 py-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold mb-4 text-red-500">
        Please provide information as follows: (* Required fields)
      </h2>

      {/* Who is submitting */}
      <div className="mb-4">
        <label className="block font-medium mb-2">
          * Person submitting this complaint
        </label>
        <div className="flex flex-wrap gap-4">
          {['Employee', 'Customer', 'Vendor', 'Other'].map((label) => (
            <label key={label} className="flex items-center gap-2">
              <input
                type="radio"
                name="submitterType"
                value={label}
                checked={formData.submitterType === label}
                onChange={handleChange}
                className="accent-red-500"
              />
              {label}
            </label>
          ))}
        </div>
        {errors.submitterType && (
          <p className="text-red-500 text-sm mt-1">{errors.submitterType}</p>
        )}
      </div>

      {/* Identity Option */}
      <div className="mb-6">
        <p className="text-sm mb-2 text-gray-600">
          We can better understand and handle concerns if we can contact you.
        </p>
        <label className="block font-medium mb-2">
          * Do you want to show your identity for this report?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="showIdentity"
              checked={showIdentity}
              onChange={() => setShowIdentity(true)}
              className="accent-red-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="showIdentity"
              checked={!showIdentity}
              onChange={() => setShowIdentity(false)}
              className="accent-red-500"
            />
            No
          </label>
        </div>
      </div>

      {/* Identity Fields */}
      {showIdentity && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
      )}

      {/* Engaged Persons */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          * Please identify the person(s) engaged in this behavior:
        </label>
        <input
          type="number"
          min="1"
          placeholder="Enter number of persons"
          value={engagedCount}
          onChange={(e) => {
            const val = Number(e.target.value);
            setEngagedCount(val);
            setFormData({
              ...formData,
              engaged: Array.from({ length: val }, () => ({
                firstName: '',
                lastName: '',
                title: '',
              })),
            });
          }}
          className="border p-2 w-full max-w-xs"
        />
      </div>

      {Array.from({ length: engagedCount }, (_, i) => (
        <div key={i} className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder={`${i + 1} # First Name`}
              value={formData.engaged[i]?.firstName || ''}
              onChange={(e) => handleChange(e, i, 'firstName')}
              className="border p-2 w-full"
            />
            {errors[`engaged-${i}-firstName`] && (
              <p className="text-red-500 text-sm">{errors[`engaged-${i}-firstName`]}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={formData.engaged[i]?.lastName || ''}
              onChange={(e) => handleChange(e, i, 'lastName')}
              className="border p-2 w-full"
            />
            {errors[`engaged-${i}-lastName`] && (
              <p className="text-red-500 text-sm">{errors[`engaged-${i}-lastName`]}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Title Name"
              value={formData.engaged[i]?.title || ''}
              onChange={(e) => handleChange(e, i, 'title')}
              className="border p-2 w-full"
            />
            {errors[`engaged-${i}-title`] && (
              <p className="text-red-500 text-sm">{errors[`engaged-${i}-title`]}</p>
            )}
          </div>
        </div>
      ))}

      {/* Awareness */}
      <div className="mb-4">
        <label className="block font-medium mb-2">
          How did you become aware of this? (Optional)
        </label>
        <textarea
          name="awareness"
          value={formData.awareness}
          onChange={handleChange}
          className="w-full border p-2"
          rows={2}
        ></textarea>
      </div>

      {/* Violation Details */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          * Please provide all details regarding the violation:
        </label>
        <textarea
          name="violationDetails"
          value={formData.violationDetails}
          onChange={handleChange}
          className="w-full border p-2"
          rows={6}
        ></textarea>
        {errors.violationDetails && (
          <p className="text-red-500 text-sm">{errors.violationDetails}</p>
        )}
      </div>

      {/* Optional File Upload */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Upload supporting evidence (Optional)
        </label>
        <input
          type="file"
          name="evidenceFile"
          onChange={handleChange}
          className="border p-2 w-full max-w-md"
          accept=".jpg,.jpeg,.png,.pdf"
        />
      </div>

      {/* Feedback */}
      <div className="mb-4">
        <label className="block font-medium mb-2">
          Do you need feedback regarding your complaint?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="needFeedback"
              checked={needFeedback}
              onChange={() => setNeedFeedback(true)}
              className="accent-red-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="needFeedback"
              checked={!needFeedback}
              onChange={() => setNeedFeedback(false)}
              className="accent-red-500"
            />
            No
          </label>
        </div>
      </div>

      {needFeedback && (
        <div className="mb-6">
          <input
            type="email"
            name="feedbackEmail"
            placeholder="Enter your email for feedback"
            value={formData.feedbackEmail}
            onChange={handleChange}
            className="border p-2 w-full max-w-md"
          />
          {errors.feedbackEmail && (
            <p className="text-red-500 text-sm">{errors.feedbackEmail}</p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        {loading ? 'Submitting...' : 'SEND REQUEST'}
      </button>
    </form>
  );
}
