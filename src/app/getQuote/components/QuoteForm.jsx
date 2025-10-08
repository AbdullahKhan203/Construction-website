// "use client";
// import React, { useState } from 'react'

// export default function QuoteForm() {
//      const [selectedService, setSelectedService] = useState('')
//       const [showDetails, setShowDetails] = useState(false)
    
//       const handleServiceSelect = (e) => {
//         setSelectedService(e.target.value)
//         setShowDetails(true)
//       }
    
//   return (
//       <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* Select a Service */}
//         <div className="md:col-span-2">
//           <label className="block font-medium mb-2">Select a Service*</label>
//           <select
//             value={selectedService}
//             onChange={handleServiceSelect}
//             required
//             className="border border-gray-300 p-2 w-full "
//           >
//             <option value="">-- Select Service --</option>
//             <option>Electrical Work</option>
//             <option>Mechanical Work</option>
//             <option>Civil Work</option>
//             <option>Telecommunication Work</option>
//             <option>Transmission Line</option>
//             <option>Grid Station</option>
//             <option>Manpower (Manpower & EPTT)</option>
//           </select>
//         </div>

//         {/* Show form only after selecting a service */}
//         {showDetails && (
//           <>
//             {/* Contact Info */}
//             <input type="text" placeholder="Full Name*" required className="border border-gray-300 p-2 w-full" />
//             <input type="text" placeholder="Phone Number*" required className="border border-gray-300 p-2 w-full" />
//             <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 w-full" />
//             <input type="text" placeholder="Project Location (City / Area)*" required className="border border-gray-300 p-2 w-full" />

//             {/* Budget */}
//             <input type="number" placeholder="Estimated Budget (PKR)*" required className="border border-gray-300 p-2 w-full" />

//             {/* Project Description */}
//             <div className="md:col-span-2">
//               <label className="block font-medium mb-2">Project Description*</label>
//               <textarea
//                 placeholder={`Describe your requirements for ${selectedService}`}
//                 rows={4}
//                 required
//                 className="border border-gray-300 p-2 w-full"
//               ></textarea>
//             </div>

//             {/* Upload Optional File */}
//             <div className="md:col-span-2">
//               <label className="block font-medium mb-2">Upload File (Design / Plan / Drawing - Optional)</label>
//               <input type="file" className="w-full border border-gray-300 p-2" />
//             </div>

//             {/* Submit Button */}
//             <div className="md:col-span-2">
//               <button
//                 type="submit"
//                 className="bg-main border-main border-2 text-white hover:text-main px-6 py-2 rounded hover:bg-white  transition"
//               >
//                 Submit Request
//               </button>
//             </div>
//           </>
//         )}
//       </form>
//   )
// }









// "use client";
// import React, { useState } from 'react'

// export default function QuoteForm() {
//   const [selectedService, setSelectedService] = useState('')
//   const [showDetails, setShowDetails] = useState(false)
//   const [data,setData]=useState({
   

//   })

//   const handleServiceSelect = (e) => {
//     setSelectedService(e.target.value)
//     setShowDetails(true)
//   }

//   return (
//     <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

//       {/* Select a Service */}
//       <div className="md:col-span-2">
//         <label className="block font-medium mb-2">Select a Service*</label>

//         {/* container ensures dropdown appears properly */}
//         <div className="relative overflow-visible">
//           <select
//             value={selectedService}
//             onChange={handleServiceSelect}
//             required
//             className="border border-gray-300 p-2 w-full rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-main"
//           >
//             <option value="" disabled>-- Select Service --</option>
//             <option>Electrical Work</option>
//             <option>Mechanical Work</option>
//             <option>Civil Work</option>
//             <option>Telecommunication Work</option>
//             <option>Transmission Line</option>
//             <option>Grid Station</option>
//             <option>Manpower (Manpower & EPTT)</option>
//             <option>other</option>
//           </select>
//         </div>
//       </div>

//       {/* Show form only after selecting a service */}
//       {showDetails && (
//         <>
//           <input type="text" placeholder="Full Name*" required className="border border-gray-300 p-2 w-full" />
//           <input type="text" placeholder="Phone Number*" required className="border border-gray-300 p-2 w-full" />
//           <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 w-full" />
//           <input type="text" placeholder="Project Location (City / Area)*" required className="border border-gray-300 p-2 w-full" />

//           <input type="number" placeholder="Estimated Budget (PKR)*" required className="border border-gray-300 p-2 w-full" />

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">Project Description*</label>
//             <textarea
//               placeholder={`Describe your requirements for ${selectedService}`}
//               rows={4}
//               required
//               className="border border-gray-300 p-2 w-full"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">Upload File (Design / Plan / Drawing - Optional)</label>
//             <input type="file" className="w-full border border-gray-300 p-2" />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="bg-red-500 border-main border-2 text-white hover:text-main px-6 py-2 rounded hover:bg-transparent transition"
//             >
//               Submit Request
//             </button>
//           </div>
//         </>
//       )}
//     </form>
//   )
// }








// "use client";
// import React, { useState } from 'react'

// export default function QuoteForm() {
//   const [selectedService, setSelectedService] = useState('');
//   const [showDetails, setShowDetails] = useState(false);
//   const [data, setData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     location: '',
//     budget: '',
//     description: '',
//     file: null,
//   });

//   const handleServiceSelect = (e) => {
//     setSelectedService(e.target.value);
//     setShowDetails(true);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value, // handle file separately
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // basic validation
//     if (
//       !selectedService ||
//       !data.fullName.trim() ||
//       !data.phone.trim() ||
//       !data.location.trim() ||
//       !data.budget ||
//       !data.description.trim()
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Combine service with other data
//     const finalData = {
//       service: selectedService,
//       ...data,
//     };

//     console.log("Form Data Submitted:", finalData);

//     // Optionally clear form after submission
//     setData({ fullName: '', phone: '', email: '', location: '', budget: '', description: '', file: null });
//     setSelectedService('');
//     setShowDetails(false);
//   };

//   return (
//     <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

//       {/* Select a Service */}
//       <div className="md:col-span-2">
//         <label className="block font-medium mb-2">Select a Service*</label>
//         <div className="relative overflow-visible">
//           <select
//             value={selectedService}
//             onChange={handleServiceSelect}
//             required
//             className="border border-gray-300 p-2 w-full rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-main"
//           >
//             <option value="" disabled>-- Select Service --</option>
//             <option>Electrical Work</option>
//             <option>Mechanical Work</option>
//             <option>Civil Work</option>
//             <option>Telecommunication Work</option>
//             <option>Transmission Line</option>
//             <option>Grid Station</option>
//             <option>Manpower (Manpower & EPTT)</option>
//             <option>other</option>
//           </select>
//         </div>
//       </div>

//       {/* Show form only after selecting a service */}
//       {showDetails && (
//         <>
//           <input name="fullName" value={data.fullName} onChange={handleChange} type="text" placeholder="Full Name*" required className="border border-gray-300 p-2 w-full" />
//           <input name="phone" value={data.phone} onChange={handleChange} type="number" placeholder="Phone Number*" required className="border border-gray-300 p-2 w-full" />
//           <input name="email" value={data.email} onChange={handleChange} type="email" placeholder="Email Address" className="border border-gray-300 p-2 w-full" />
//           <input name="location" value={data.location} onChange={handleChange} type="text" placeholder="Project Location (City / Area)*" required className="border border-gray-300 p-2 w-full" />
//           <input name="budget" value={data.budget} onChange={handleChange} type="number" placeholder="Estimated Budget (PKR)*" required className="border border-gray-300 p-2 w-full" />

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">Project Description*</label>
//             <textarea
//               name="description"
//               value={data.description}
//               onChange={handleChange}
//               placeholder={`Describe your requirements for ${selectedService}`}
//               rows={4}
//               required
//               className="border border-gray-300 p-2 w-full"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">Upload File (Design / Plan / Drawing - Optional)</label>
//             <input name="file" onChange={handleChange} type="file" className="w-full border border-gray-300 p-2" />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="bg-red-500 border-main border-2 text-white hover:text-main px-6 py-2 rounded hover:bg-transparent transition"
//             >
//               Submit Request
//             </button>
//           </div>
//         </>
//       )}
//     </form>
//   );
// }









// "use client";
// import React, { useState } from "react";

// export default function QuoteForm() {
//   const [selectedService, setSelectedService] = useState("");
//   const [showDetails, setShowDetails] = useState(false);
//   const [data, setData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     location: "",
//     budget: "",
//     description: "",
//     file: null,
//   });

//   const handleServiceSelect = (e) => {
//     setSelectedService(e.target.value);
//     setShowDetails(true);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (files && files[0]) {
//       const file = files[0];
//       const maxSize = 5 * 1024 * 1024; // 2 MB

//       if (file.size > maxSize) {
//         alert("⚠️ File too large! Please upload a file smaller than 2 MB.");
//         e.target.value = ""; // clear the input
//         return;
//       }

//       setData((prev) => ({ ...prev, [name]: file }));
//     } else {
//       setData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // basic validation
//     if (
//       !selectedService ||
//       !data.fullName.trim() ||
//       !data.phone.trim() ||
//       !data.location.trim() ||
//       !data.budget ||
//       !data.description.trim()
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     let uploadedFileUrl = "";

//     // ✅ upload file only if present
//     if (data.file) {
//       try {
//         const formData = new FormData();
//         formData.append("file", data.file);
//         formData.append("upload_preset", "clientFormUploads"); // replace with your Cloudinary preset

//         const res = await fetch(
//           "https://api.cloudinary.com/v1_1/downrhrcn/upload",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         const uploaded = await res.json();
//         uploadedFileUrl = uploaded.secure_url;
//       } catch (err) {
//         console.error("File upload failed:", err);
//         alert("❌ File upload failed. Try again.");
//         return;
//       }
//     }

//     const finalData = {
//       service: selectedService,
//       ...data,
//       fileUrl: uploadedFileUrl || null,
//     };

//     delete finalData.file;

//     console.log("✅ Form Data Submitted:", finalData);

//     // Optionally clear form after submission
//     setData({
//       fullName: "",
//       phone: "",
//       email: "",
//       location: "",
//       budget: "",
//       description: "",
//       file: null,
//     });
//     setSelectedService("");
//     setShowDetails(false);
//   };

//   return (
//     <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
//       {/* Select a Service */}
//       <div className="md:col-span-2">
//         <label className="block font-medium mb-2">Select a Service*</label>
//         <select
//           value={selectedService}
//           onChange={handleServiceSelect}
//           required
//           className="border border-gray-300 p-2 w-full rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-main"
//         >
//           <option value="" disabled>
//             -- Select Service --
//           </option>
//           <option>Electrical Work</option>
//           <option>Mechanical Work</option>
//           <option>Civil Work</option>
//           <option>Telecommunication Work</option>
//           <option>Transmission Line</option>
//           <option>Grid Station</option>
//           <option>Manpower (Manpower & EPTT)</option>
//           <option>other</option>
//         </select>
//       </div>

//       {/* Show form only after selecting a service */}
//       {showDetails && (
//         <>
//           <input
//             name="fullName"
//             value={data.fullName}
//             onChange={handleChange}
//             type="text"
//             placeholder="Full Name*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="phone"
//             value={data.phone}
//             onChange={handleChange}
//             type="number"
//             placeholder="Phone Number*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Email Address"
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="location"
//             value={data.location}
//             onChange={handleChange}
//             type="text"
//             placeholder="Project Location (City / Area)*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="budget"
//             value={data.budget}
//             onChange={handleChange}
//             type="number"
//             placeholder="Estimated Budget (PKR)*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">Project Description*</label>
//             <textarea
//               name="description"
//               value={data.description}
//               onChange={handleChange}
//               placeholder={`Describe your requirements for ${selectedService}`}
//               rows={4}
//               required
//               className="border border-gray-300 p-2 w-full"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">
//               Upload File (Design / Plan / Drawing - Optional)
//             </label>
//             <input
//               name="file"
//               onChange={handleChange}
//               type="file"
//               className="w-full border border-gray-300 p-2"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="bg-red-500 border-main border-2 text-white hover:text-main px-6 py-2 rounded hover:bg-transparent transition"
//             >
//               Submit Request
//             </button>
//           </div>
//         </>
//       )}
//     </form>
//   );
// }






// "use client";
// import React, { useState } from "react";
// import toast from 'react-hot-toast'

// export default function QuoteForm() {
//   const [selectedService, setSelectedService] = useState("");
//   const [showDetails, setShowDetails] = useState(false);
//   const [loading, setLoading] = useState(false); // 🟢 new state for loader
//   const [data, setData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     location: "",
//     budget: "",
//     description: "",
//     file: null,
//   });

//   const handleServiceSelect = (e) => {
//     setSelectedService(e.target.value);
//     setShowDetails(true);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (files && files[0]) {
//       const file = files[0];
//       const maxSize = 5 * 1024 * 1024; // 5 MB

//       if (file.size > maxSize) {
//         alert("⚠️ File too large! Please upload a file smaller than 5 MB.");
//         e.target.value = ""; // clear the input
//         return;
//       }

//       setData((prev) => ({ ...prev, [name]: file }));
//     } else {
//       setData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // 🟢 start loader

//     try {
//       // basic validation
//       if (
//         !selectedService ||
//         !data.fullName.trim() ||
//         !data.phone.trim() ||
//         !data.location.trim() ||
//         !data.budget ||
//         !data.description.trim()
//       ) {
//         alert("Please fill in all required fields.");
//         setLoading(false);
//         return;
//       }

//       let uploadedFileUrl = "";

//       // ✅ upload file only if present
//       if (data.file) {
//         try {
//           const formData = new FormData();
//           formData.append("file", data.file);
//           formData.append("upload_preset", "clientFormUploads"); // your Cloudinary preset

//           const res = await fetch(
//             "https://api.cloudinary.com/v1_1/downrhrcn/upload",
//             {
//               method: "POST",
//               body: formData,
//             }
//           );

//           const uploaded = await res.json();
//           uploadedFileUrl = uploaded.secure_url;
//         } catch (err) {
//           console.error("File upload failed:", err);
//           alert("❌ File upload failed. Try again.");
//           setLoading(false);
//           return;
//         }
//       }

//       const finalData = {
//         service: selectedService,
//         ...data,
//         fileUrl: uploadedFileUrl || null,
//       };

//       delete finalData.file; // 🟢 remove actual file object

//       console.log("✅ Form Data Submitted:", finalData);

//       // Optionally clear form after submission
//       setData({
//         fullName: "",
//         phone: "",
//         email: "",
//         location: "",
//         budget: "",
//         description: "",
//         file: null,
//       });
//       setSelectedService("");
//       setShowDetails(false);
//     } finally {
//       setLoading(false); // 🟢 stop loader after process finishes
//     }
//   };

//   return (
//     <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
//       {/* Select a Service */}
//       <div className="md:col-span-2">
//         <label className="block font-medium mb-2">Select a Service*</label>
//         <select
//           value={selectedService}
//           onChange={handleServiceSelect}
//           required
//           className="border border-gray-300 p-2 w-full rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-main"
//         >
//           <option value="" disabled>
//             -- Select Service --
//           </option>
//           <option>Electrical Work</option>
//           <option>Mechanical Work</option>
//           <option>Civil Work</option>
//           <option>Telecommunication Work</option>
//           <option>Transmission Line</option>
//           <option>Grid Station</option>
//           <option>Manpower (Manpower & EPTT)</option>
//           <option>other</option>
//         </select>
//       </div>

//       {/* Show form only after selecting a service */}
//       {showDetails && (
//         <>
//           <input
//             name="fullName"
//             value={data.fullName}
//             onChange={handleChange}
//             type="text"
//             placeholder="Full Name*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="phone"
//             value={data.phone}
//             onChange={handleChange}
//             type="number"
//             placeholder="Phone Number*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Email Address"
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="location"
//             value={data.location}
//             onChange={handleChange}
//             type="text"
//             placeholder="Project Location (City / Area)*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="budget"
//             value={data.budget}
//             onChange={handleChange}
//             type="number"
//             placeholder="Estimated Budget (PKR)*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">Project Description*</label>
//             <textarea
//               name="description"
//               value={data.description}
//               onChange={handleChange}
//               placeholder={`Describe your requirements for ${selectedService}`}
//               rows={4}
//               required
//               className="border border-gray-300 p-2 w-full"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">
//               Upload File (Design / Plan / Drawing - Optional)
//             </label>
//             <input
//               name="file"
//               onChange={handleChange}
//               type="file"
//               className="w-full border border-gray-300 p-2"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               disabled={loading} // 🟢 disable during loading
//               className={`px-6 py-2 rounded border-2 transition w-full md:w-auto ${
//                 loading
//                   ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
//                   : "bg-red-500 border-main text-white hover:text-main hover:bg-transparent"
//               }`}
//             >
//               {loading ? "Loading..." : "Submit Request"} {/* 🟢 change text */}
//             </button>
//           </div>
//         </>
//       )}
//     </form>
//   );
// }






// "use client";
// import React, { useState } from "react";
// import toast from 'react-hot-toast';

// export default function QuoteForm() {
//   const [selectedService, setSelectedService] = useState("");
//   const [showDetails, setShowDetails] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     location: "",
//     budget: "",
//     description: "",
//     file: null,
//   });

//   const handleServiceSelect = (e) => {
//     setSelectedService(e.target.value);
//     setShowDetails(true);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (files && files[0]) {
//       const file = files[0];
//       const maxSize = 5 * 1024 * 1024; // 5 MB

//       if (file.size > maxSize) {
//         alert("⚠️ File too large! Please upload a file smaller than 5 MB.");
//         e.target.value = ""; // clear the input
//         return;
//       }

//       setData((prev) => ({ ...prev, [name]: file }));
//     } else {
//       setData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // basic validation
//       if (
//         !selectedService ||
//         !data.fullName.trim() ||
//         !data.phone.trim() ||
//         !data.location.trim() ||
//         !data.budget ||
//         !data.description.trim()
//       ) {
//         toast.error("Please fill in all required fields!");
//         setLoading(false);
//         return;
//       }

//       let uploadedFileUrl = "";

//       // ✅ upload file if exists
//       if (data.file) {
//         try {
//           const formData = new FormData();
//           formData.append("file", data.file);
//           formData.append("upload_preset", "clientFormUploads");

//           const res = await fetch(
//             "https://api.cloudinary.com/v1_1/downrhrcn/upload",
//             {
//               method: "POST",
//               body: formData,
//             }
//           );

//           const uploaded = await res.json();
//           uploadedFileUrl = uploaded.secure_url;
//         } catch (err) {
//           console.error("File upload failed:", err);
//           toast.error("File upload failed. Try again!");
//           setLoading(false);
//           return;
//         }
//       }

//       const finalData = {
//         service: selectedService,
//         ...data,
//         fileUrl: uploadedFileUrl || null,
//       };

//       delete finalData.file; // remove actual file object

//       // ✅ Send to Formspree
//       const response = await fetch("https://formspree.io/f/xeorland", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(finalData),
//       });

//       if (response.ok) {
//         toast.success("Sent successfully!");
//         setData({
//           fullName: "",
//           phone: "",
//           email: "",
//           location: "",
//           budget: "",
//           description: "",
//           file: null,
//         });
//         setSelectedService("");
//         setShowDetails(false);
//       } else {
//         toast.error("Failed to send!");
//       }
//     } catch (error) {
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
//       {/* Select a Service */}
//       <div className="md:col-span-2">
//         <label className="block font-medium mb-2">Select a Service*</label>
//         <select
//           value={selectedService}
//           onChange={handleServiceSelect}
//           required
//           className="border border-gray-300 p-2 w-full rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-main"
//         >
//           <option value="" disabled>
//             -- Select Service --
//           </option>
//           <option>Electrical Work</option>
//           <option>Mechanical Work</option>
//           <option>Civil Work</option>
//           <option>Telecommunication Work</option>
//           <option>Transmission Line</option>
//           <option>Grid Station</option>
//           <option>Manpower (Manpower & EPTT)</option>
//           <option>other</option>
//         </select>
//       </div>

//       {/* Show form only after selecting a service */}
//       {showDetails && (
//         <>
//           <input
//             name="fullName"
//             value={data.fullName}
//             onChange={handleChange}
//             type="text"
//             placeholder="Full Name*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="phone"
//             value={data.phone}
//             onChange={handleChange}
//             type="number"
//             placeholder="Phone Number*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Email Address"
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="location"
//             value={data.location}
//             onChange={handleChange}
//             type="text"
//             placeholder="Project Location (City / Area)*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//           <input
//             name="budget"
//             value={data.budget}
//             onChange={handleChange}
//             type="number"
//             placeholder="Estimated Budget (PKR)*"
//             required
//             className="border border-gray-300 p-2 w-full"
//           />

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">Project Description*</label>
//             <textarea
//               name="description"
//               value={data.description}
//               onChange={handleChange}
//               placeholder={`Describe your requirements for ${selectedService}`}
//               rows={4}
//               required
//               className="border border-gray-300 p-2 w-full"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block font-medium mb-2">
//               Upload File (Design / Plan / Drawing - Optional)
//             </label>
//             <input
//               name="file"
//               onChange={handleChange}
//               type="file"
//               className="w-full border border-gray-300 p-2"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`px-6 py-2 rounded border-2 transition w-full md:w-auto ${
//                 loading
//                   ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
//                   : "bg-red-500 border-main text-white hover:text-main hover:bg-transparent"
//               }`}
//             >
//               {loading ? "Loading..." : "Submit Request"}
//             </button>
//           </div>
//         </>
//       )}
//     </form>
//   );
// }













"use client";
import React, { useState } from "react";
import toast from 'react-hot-toast';

export default function QuoteForm() {
  const [selectedService, setSelectedService] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    budget: "",
    description: "",
    file: null,
  });

  const handleServiceSelect = (e) => {
    setSelectedService(e.target.value);
    setShowDetails(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];
      const maxSize = 5 * 1024 * 1024; // 5 MB

      if (file.size > maxSize) {
        alert("⚠️ File too large! Please upload a file smaller than 5 MB.");
        e.target.value = ""; // clear the input
        return;
      }

      setData((prev) => ({ ...prev, [name]: file }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // basic validation
      if (
        !selectedService ||
        !data.fullName.trim() ||
        !data.phone.trim() ||
        !data.location.trim() ||
        !data.budget ||
        !data.description.trim()
      ) {
        toast.error("Please fill in all required fields!");
        setLoading(false);
        return;
      }

      let uploadedFileUrl = "";

      // ✅ upload file if exists
      if (data.file) {
        try {
          const formData = new FormData();
          formData.append("file", data.file);
          formData.append("upload_preset", "clientFormUploads");

          const res = await fetch(
            "https://api.cloudinary.com/v1_1/downrhrcn/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const uploaded = await res.json();
          uploadedFileUrl = uploaded.secure_url;
        } catch (err) {
          console.error("File upload failed:", err);
          toast.error("File upload failed. Try again!");
          setLoading(false);
          return;
        }
      }

      const finalData = {
        subject: "Request a Quote", // 🟢 Added subject field for Formspree
        service: selectedService,
        ...data,
        fileUrl: uploadedFileUrl || null,
      };

      delete finalData.file; // remove actual file object

      // ✅ Send to Formspree
      const response = await fetch("https://formspree.io/f/xeorland", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        toast.success("Sent successfully!");
        setData({
          fullName: "",
          phone: "",
          email: "",
          location: "",
          budget: "",
          description: "",
          file: null,
        });
        setSelectedService("");
        setShowDetails(false);
      } else {
        toast.error("Failed to send!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
      {/* 🟢 Hidden subject field for Formspree */}
      <input type="hidden" name="subject" value="Request a Quote" />

      {/* Select a Service */}
      <div className="md:col-span-2">
        <label className="block font-medium mb-2">Select a Service*</label>
        <select
          value={selectedService}
          onChange={handleServiceSelect}
          required
          className="border border-gray-300 p-2 w-full rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-main"
        >
          <option value="" disabled>
            -- Select Service --
          </option>
          <option>Electrical Work</option>
          <option>Mechanical Work</option>
          <option>Civil Work</option>
          <option>Telecommunication Work</option>
          <option>Transmission Line</option>
          <option>Grid Station</option>
          <option>Manpower (Manpower & EPTT)</option>
          <option>other</option>
        </select>
      </div>

      {/* Show form only after selecting a service */}
      {showDetails && (
        <>
          <input
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name*"
            required
            className="border border-gray-300 p-2 w-full"
          />
          <input
            name="phone"
            value={data.phone}
            onChange={handleChange}
            type="number"
            placeholder="Phone Number*"
            required
            className="border border-gray-300 p-2 w-full"
          />
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-2 w-full"
          />
          <input
            name="location"
            value={data.location}
            onChange={handleChange}
            type="text"
            placeholder="Project Location (City / Area)*"
            required
            className="border border-gray-300 p-2 w-full"
          />
          <input
            name="budget"
            value={data.budget}
            onChange={handleChange}
            type="number"
            placeholder="Estimated Budget (PKR)*"
            required
            className="border border-gray-300 p-2 w-full"
          />

          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Project Description*</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder={`Describe your requirements for ${selectedService}`}
              rows={4}
              required
              className="border border-gray-300 p-2 w-full"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-2">
              Upload File (Design / Plan / Drawing - Optional)
            </label>
            <input
              name="file"
              onChange={handleChange}
              type="file"
              className="w-full border border-gray-300 p-2"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded border-2 transition w-full md:w-auto ${
                loading
                  ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
                  : "bg-red-500 border-main text-white hover:text-main hover:bg-transparent"
              }`}
            >
              {loading ? "Loading..." : "Submit Request"}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
