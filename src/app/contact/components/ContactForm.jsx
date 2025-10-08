// "use client"
// import React, { useState } from 'react'
// import Input from './Input'
// import Button from '@/components/Buton'
// import toast from 'react-hot-toast'
// export default function ContactForm() {
//      const [data,setData]=useState({
//   name: "",
//   email: "",
//   subject: "",
//   message: ""
// })

//      const handleChange = (e) => {
//   const { name, value } = e.target
//   setData(prev => ({ ...prev, [name]: value }))
// }



//    const handleMessage= async (e)=>{
//     //  e.preventDefault();
//     //  console.log(data);
     
//     //  toast.success("sent successfull");

// //      setData({
// //   name: "",
// //   email: "",
// //   subject: "",
// //   message: ""

//  e.preventDefault();

//   const response = await fetch("https://formspree.io/f/xdkdbqqp", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });

//   if (response.ok) {
//     toast.success("Sent successfully!");
//     setData({ name: "", email: "", subject: "", message: "" });
//   } else {
//     toast.error("Failed to send!");
//   }
// // })
//     }

//   return (
//      <form className='w-full'
//   //     action="https://formspree.io/f/xdkdbqbb"
//   // method="POST"
//   >
//                   <textarea
//      className="w-full h-[190px] border-1 outline-none p-2"
//      id=""
//      placeholder="Type your message here..."
//      name="message"
//      value={data.message|| ""}
//       onChange={handleChange}
//    />
   
//                     <div className='flex flex-col md:flex-row justify-between'>
//                       <Input  onChange={handleChange || ""}  stylee="my-1 border-1 w-[100%] md:w-[47%] h-[48px] p-2  outline-none" type="text" placeholder="Enter your name" width='50%' name="name" value={data.name} />
//                       <Input onChange={handleChange || ""} stylee="my-1 border-1 w-[100%]  md:w-[47%] h-[48px] p-2 outline-none" type="email"  placeholder="Enter your email"  width='50%'  name="email" value={data.email} />
//                        </div> 
//                        <div>
//                        <Input onChange={handleChange || ""}  stylee="my-1 border-1 w-[100%] h-[48px] p-2 outline-none" type="text" placeholder="Enter subject"  name="subject" value={data.subject}  />    
//                        </div> 
                       
//                        <Button type="submit" onClick={handleMessage} stylee="bg-red-500 w-[100px] h-[50px] flex items-center justify-center border-2 text-white hover:text-main border-main  hover:bg-white mt-6" value="Send" />    
//                   </form>
//   )
// }











"use client"
import React, { useState } from 'react'
import Input from './Input'
import Button from '@/components/Buton'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "Contact", // ✅ default unchangeable subject
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    // ✅ prevent changing subject
    if (name === "subject") return;
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleMessage = async (e) => {
    e.preventDefault();

    // ✅ validation (except subject)
    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill all required fields!");
      return;
    }

    const response = await fetch("https://formspree.io/f/xdkdbqqp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      toast.success("Sent successfully!");
      setData({ name: "", email: "", subject: "Contact", message: "" }); // ✅ reset subject to default again
    } else {
      toast.error("Failed to send!");
    }
  }

  return (
    <form className='w-full'>
      <textarea
        className="w-full h-[190px] border-1 outline-none p-2"
        placeholder="Type your message here..."
        name="message"
        value={data.message || ""}
        onChange={handleChange}
      />

      <div className='flex flex-col md:flex-row justify-between'>
        <Input
          onChange={handleChange || ""}
          stylee="my-1 border-1 w-[100%] md:w-[47%] h-[48px] p-2 outline-none"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={data.name}
        />
        <Input
          onChange={handleChange || ""}
          stylee="my-1 border-1 w-[100%] md:w-[47%] h-[48px] p-2 outline-none"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={data.email}
        />
      </div>

      <div>
        <Input
          onChange={handleChange || ""}
          stylee="my-1 border-1 w-[100%] h-[48px] p-2 outline-none bg-gray-100 cursor-not-allowed"
          type="text"
          placeholder="Enter subject"
          name="subject"
          value={data.subject}
          readOnly // ✅ makes subject unchangeable
        />
      </div>

      <Button
        type="submit"
        onClick={handleMessage}
        stylee="bg-red-500 w-[100px] h-[50px] flex items-center justify-center border-2 text-white hover:text-main border-main hover:bg-white mt-6"
        value="Send"
      />
    </form>
  )
}
