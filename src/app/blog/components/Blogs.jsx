// "use client";
// import { posts } from "../data/blogData";
// import Image from "next/image";
// import FirstImage from "../../../../public/assets/images/Frame1.png";
// import secondImage from "../../../../public/assets/images/Frame2.png";
// import thirdImage from "../../../../public/assets/images/Frame3.png";
// import Link from "next/link";

// // export const posts = [
// //   {
// //     id: 1,
// //     title: "Top 5 Sustainable Construction Materials in 2025",
// //     category: "Trends",
// //     date: "Feb 12, 2025",
// //     excerpt:
// //       "Discover eco-friendly construction materials that are shaping the future of sustainable building...",
// //     image: FirstImage,
// //     width: "full", // ✅ admin option
// //   },
// //   {
// //     id: 2,
// //     title: "How to Choose the Right Contractor for Your Project",
// //     category: "Tips",
// //     date: "Jan 28, 2025",
// //     excerpt:
// //       "Choosing the right contractor can make or break your project. Here’s a guide to help you decide...",
// //     content:
// //       "👉 Full blog content goes here. You can write long text, include images, etc.",
// //     image: secondImage,
// //     width: "half", // ✅ admin option
// //   },
// //   {
// //     id: 3,
// //     title: "Essential Safety Practices at Construction Sites",
// //     category: "Safety",
// //     date: "Jan 10, 2025",
// //     excerpt:
// //       "Safety is the foundation of every successful project. Learn the top practices for construction safety...",
// //     content:
// //       "👉 Full blog content goes here. You can write long text, include images, etc.",
// //     image: thirdImage,
// //     width: "half", // ✅ admin option
// //   },
// //   {
// //     id: 4,
// //     title: "Cost-Saving Tips for Commercial Construction Projects",
// //     category: "Finance",
// //     date: "Dec 20, 2024",
// //     excerpt:
// //       "Managing costs in commercial projects can be challenging. These tips will help you save money...",
// //     content:
// //       "👉 Full blog content goes here. You can write long text, include images, etc.",
// //     image: secondImage,
// //     width: "half", // ✅ admin option
// //   },
// //   {
// //     id: 5,
// //     title: "Cost-Saving Tips for Commercial Construction Projects",
// //     category: "Finance",
// //     date: "Dec 20, 2024",
// //     excerpt:
// //       "Managing costs in commercial projects can be challenging. These tips will help you save money...",
// //     content:
// //       "👉 Full blog content goes here. You can write long text, include images, etc.",
// //     image: secondImage,
// //     width: "half", // ✅ admin option
// //   },
// //   {
// //     id: 6,
// //     title: "Cost-Saving Tips for Commercial Construction Projects",
// //     category: "Finance",
// //     date: "Dec 20, 2024",
// //     excerpt:
// //       "Managing costs in commercial projects can be challenging. These tips will help you save money...",
// //     content:
// //       "👉 Full blog content goes here. You can write long text, include images, etc.",
// //     image: FirstImage,
// //     width: "full", // ✅ admin option
// //   },
// // ];

// export default function Blogs() {
//   // 🔹 Helper: group posts based on width rules
//   const arrangedPosts = [];
//   let buffer = [];

//   posts.slice(1).forEach((post, idx, arr) => {
//     if (post.width === "full") {
//       // flush buffer before pushing a full post
//       if (buffer.length > 0) {
//         arrangedPosts.push([...buffer]);
//         buffer = [];
//       }
//       arrangedPosts.push([post]); // full width row
//     } else {
//       buffer.push(post);
//       if (buffer.length === 2) {
//         arrangedPosts.push([...buffer]);
//         buffer = [];
//       }
//       // if it's last post and buffer still has 1 item → make it full
//       if (idx === arr.length - 1 && buffer.length === 1) {
//         arrangedPosts.push([...buffer]);
//         buffer = [];
//       }
//     }
//   });

//   return (
//     <div className="max-w-[960px] mx-auto px-4 py-12">
//       {/* Hero Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800">Insights & Updates</h2>
//         <p className="text-gray-500 mt-2">
//           Stay updated with the latest trends, tips, and company news in
//           construction & engineering.
//         </p>
//       </div>

//       {/* 🔹 Search bar on small screens (above content) */}
//       <div className="mb-6 md:hidden bg-white shadow rounded-lg p-4">
//         <h4 className="font-semibold text-gray-700 mb-2">Search</h4>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left: Featured + Grid */}
//         <div className="md:col-span-2 space-y-8 ">
//           {/* Featured Post */}
//           <div className="bg-white shadow rounded-lg overflow-hidden border-amber-600 border-2">
//             <Image
//               src={posts[0].image}
//               alt={posts[0].title}
//               width={800}
//               height={800} // 🔹 square image
//               className="w-full h-[400px] object-cover" // ✅ adjusted
//             />
//             <div className="p-6">
//               <span className="text-sm text-blue-600 font-medium">
//                 {posts[0].category}
//               </span>
//               <h2 className="text-xl font-semibold text-gray-800 mt-2">
//                 {posts[0].title}
//               </h2>
//               <p className="text-gray-500 mt-2">{posts[0].excerpt}</p>
//               <p className="text-sm text-gray-400 mt-3">{posts[0].date}</p>
//               {/* <a
//                 href="#"
//                 className="inline-block mt-4 text-blue-600 font-medium hover:underline"
//               >
//                 Read More →
//               </a> */}
//               <Link
//                 href={`/blog/${posts[0].id}`}
//                 className="inline-block mt-4 text-blue-600 font-medium hover:underline"
//               >
//                 Read More →
//               </Link>
//             </div>
//           </div>

//           {/* Blog Grid (Dynamic Layout) */}
//           <div className="space-y-6">
//             {arrangedPosts.map((group, i) => (
//               <div
//                 key={i}
//                 className={`grid gap-6 ${
//                   group.length === 2 ? "sm:grid-cols-2" : "grid-cols-1"
//                 }`}
//               >
//                 {group.map((post) => (
//                   <div
//                     key={post.id}
//                     className="bg-white shadow rounded-lg overflow-hidden  border-amber-600 border-2"
//                   >
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       width={400}
//                       height={400} // 🔹 square image
//                       className="w-full h-[300px] object-cover" // ✅ adjusted
//                     />
//                     <div className="p-4">
//                       <span className="text-sm text-blue-600 font-medium">
//                         {post.category}
//                       </span>
//                       <h3 className="text-lg font-semibold text-gray-800 mt-1">
//                         {post.title}
//                       </h3>
//                       <p className="text-gray-500 text-sm mt-1">
//                         {post.excerpt}
//                       </p>
//                       <p className="text-xs text-gray-400 mt-2">{post.date}</p>
//                       {/* <a
//                         href="#"
//                         className="inline-block mt-3 text-blue-600 font-medium hover:underline text-sm"
//                       >
//                         Read More →
//                       </a> */}
//                       <Link
//                         href={`/blog/${post.id}`}
//                         className="inline-block mt-4 text-blue-600 font-medium hover:underline"
//                       >
//                         Read More →
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Sidebar */}
//         <aside className="space-y-8">
//           {/* 🔹 Search bar hidden on mobile, visible on desktop */}
//           <div className="bg-white shadow rounded-lg p-4 hidden md:block">
//             <h4 className="font-semibold text-gray-700 mb-2">Search</h4>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Categories */}
//           <div className="bg-white shadow rounded-lg p-4">
//             <h4 className="font-semibold text-gray-700 mb-3">Categories</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Tips
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Safety
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Trends
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Projects
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Popular Posts */}
//           <div className="bg-white shadow rounded-lg p-4">
//             <h4 className="font-semibold text-gray-700 mb-3">Popular Posts</h4>
//             <ul className="space-y-3 text-gray-600 text-sm">
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Top 5 Sustainable Construction Materials
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   How to Choose the Right Contractor
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Essential Safety Practices at Sites
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }




// "use client";
// import { posts } from "../data/blogData";
// import Image from "next/image";
// import Link from "next/link";

// export default function Blogs() {
//   // 🔹 Helper: group posts based on width rules
//   const arrangedPosts = [];
//   let buffer = [];

//   posts.slice(1).forEach((post, idx, arr) => {
//     if (post.width === "full") {
//       if (buffer.length > 0) {
//         arrangedPosts.push([...buffer]);
//         buffer = [];
//       }
//       arrangedPosts.push([post]);
//     } else {
//       buffer.push(post);
//       if (buffer.length === 2) {
//         arrangedPosts.push([...buffer]);
//         buffer = [];
//       }
//       if (idx === arr.length - 1 && buffer.length === 1) {
//         arrangedPosts.push([...buffer]);
//         buffer = [];
//       }
//     }
//   });

//   return (
//     <div className="max-w-[960px] mx-auto px-4 py-12">
//       {/* Hero Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800">Insights & Updates</h2>
//         <p className="text-gray-500 mt-2">
//           Stay updated with the latest trends, tips, and company news in
//           construction & engineering.
//         </p>
//       </div>

//       {/* 🔹 Search bar on small screens */}
//       <div className="mb-6 md:hidden bg-white shadow rounded-lg p-4">
//         <h4 className="font-semibold text-gray-700 mb-2">Search</h4>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left: Featured + Grid */}
//         <div className="md:col-span-2 space-y-8">
//           {/* Featured Post */}
//           <div className="bg-white shadow rounded-lg overflow-hidden border-amber-600 border-2">
//             {/* 🔹 Fixed-height image wrapper */}
//             <div className="w-[100%] h-[400px] relative">
//               <Image
//                 src={posts[0].image}
//                 alt={posts[0].title}
//                 fill
//                 // className="object-contain" // keeps full image visible
//               />
//             </div>
//             <div className="p-6">
//               <span className="text-sm text-blue-600 font-medium">
//                 {posts[0].category}
//               </span>
//               <h2 className="text-xl font-semibold text-gray-800 mt-2">
//                 {posts[0].title}
//               </h2>
//               <p className="text-gray-500 mt-2">{posts[0].excerpt}</p>
//               <p className="text-sm text-gray-400 mt-3">{posts[0].date}</p>
//               <Link
//                 href={`/blog/${posts[0].id}`}
//                 className="inline-block mt-4 text-blue-600 font-medium hover:underline"
//               >
//                 Read More →
//               </Link>
//             </div>
//           </div>

//           {/* Blog Grid */}
//           <div className="space-y-6">
//             {arrangedPosts.map((group, i) => (
//               <div
//                 key={i}
//                 className={`grid gap-6 ${
//                   group.length === 2 ? "sm:grid-cols-2" : "grid-cols-1"
//                 }`}
//               >
//                 {group.map((post) => (
//                   <div
//                     key={post.id}
//                     className="bg-white shadow rounded-lg overflow-hidden border-amber-600 border-2"
//                   >
//                     {/* 🔹 Fixed-height wrapper for cards */}
//                     <div className="w-[100%] h-[300px] relative">
//                       <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         // className="object-contain"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <span className="text-sm text-blue-600 font-medium">
//                         {post.category}
//                       </span>
//                       <h3 className="text-lg font-semibold text-gray-800 mt-1">
//                         {post.title}
//                       </h3>
//                       <p className="text-gray-500 text-sm mt-1">
//                         {post.excerpt}
//                       </p>
//                       <p className="text-xs text-gray-400 mt-2">{post.date}</p>
//                       <Link
//                         href={`/blog/${post.id}`}
//                         className="inline-block mt-4 text-blue-600 font-medium hover:underline"
//                       >
//                         Read More →
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Sidebar */}
//         <aside className="space-y-8">
//           {/* Search */}
//           <div className="bg-white shadow rounded-lg p-4 hidden md:block">
//             <h4 className="font-semibold text-gray-700 mb-2">Search</h4>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Categories */}
//           <div className="bg-white shadow rounded-lg p-4">
//             <h4 className="font-semibold text-gray-700 mb-3">Categories</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Tips
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Safety
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Trends
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Projects
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Popular Posts */}
//           <div className="bg-white shadow rounded-lg p-4">
//             <h4 className="font-semibold text-gray-700 mb-3">Popular Posts</h4>
//             <ul className="space-y-3 text-gray-600 text-sm">
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Top 5 Sustainable Construction Materials
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   How to Choose the Right Contractor
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Essential Safety Practices at Sites
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }




// for 100% fit image in his parent 
"use client";
import { posts } from "../data/blogData";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  // 🔹 Helper: group posts based on width rules
  const arrangedPosts = [];
  let buffer = [];

  posts.slice(1).forEach((post, idx, arr) => {
    if (post.width === "full") {
      if (buffer.length > 0) {
        arrangedPosts.push([...buffer]);
        buffer = [];
      }
      arrangedPosts.push([post]);
    } else {
      buffer.push(post);
      if (buffer.length === 2) {
        arrangedPosts.push([...buffer]);
        buffer = [];
      }
      if (idx === arr.length - 1 && buffer.length === 1) {
        arrangedPosts.push([...buffer]);
        buffer = [];
      }
    }
  });

  return (
    <div className="max-w-[960px] mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Insights & Updates</h2>
        <p className="text-gray-500 mt-2">
          Stay updated with the latest trends, tips, and company news in
          construction & engineering.
        </p>
      </div>

      {/* 🔹 Search bar on small screens */}
      <div className="mb-6 md:hidden bg-white shadow rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Search</h4>
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Featured + Grid */}
        <div className="md:col-span-2 space-y-8">
          {/* Featured Post */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* 🔹 Fixed-height image wrapper */}
            <div className="w-full h-[400px] relative">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                // className="object-contain" // ✅ keeps image fully visible
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">
                {posts[0].category}
              </span>
              <h2 className="text-xl font-semibold text-gray-800 mt-2">
                {posts[0].title}
              </h2>
              <p className="text-gray-500 mt-2">{posts[0].excerpt}</p>
              <p className="text-sm text-gray-400 mt-3">{posts[0].date}</p>
              <Link
                href={`/blog/${posts[0].id}`}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="space-y-6">
            {arrangedPosts.map((group, i) => (
              <div
                key={i}
                className={`grid gap-6 ${
                  group.length === 2 ? "sm:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {group.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white shadow rounded-lg overflow-hidden"
                  >
                    {/* 🔹 Fixed-height wrapper for cards */}
                    <div className="w-full h-[300px] relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        // className="object-contain" // ✅ no crop, fits 100%
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-blue-600 font-medium">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800 mt-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {post.excerpt}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">{post.date}</p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8">
          {/* Search */}
          <div className="bg-white shadow rounded-lg p-4 hidden md:block">
            <h4 className="font-semibold text-gray-700 mb-2">Search</h4>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories */}
          <div className="bg-white shadow rounded-lg p-4">
            <h4 className="font-semibold text-gray-700 mb-3">Categories</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Trends
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="bg-white shadow rounded-lg p-4">
            <h4 className="font-semibold text-gray-700 mb-3">Popular Posts</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Top 5 Sustainable Construction Materials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  How to Choose the Right Contractor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Essential Safety Practices at Sites
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
