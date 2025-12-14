// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { posts } from "../data/blogData";

// export default function BlogDetail({ params }) {
//   const post = posts.find((p) => p.id.toString() === params.id);
//   console.log("posts in slug",posts);
  
//   if (!post) return notFound();

//   return (
//     <div className="max-w-[960px] mx-auto px-4 py-12">
//       {/* Banner Image */}
//       <div className="w-full h-[400px] overflow-hidden rounded-lg shadow">
//         <Image
//           src={post.image}
//           alt={post.title}
//           width={1200}
//           height={400}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="mt-8">
//         <span className="text-sm text-blue-600 font-medium">
//           {post.category}
//         </span>
//         <h1 className="text-3xl font-bold text-gray-800 mt-2">{post.title}</h1>
//         <p className="text-sm text-gray-500 mt-1">{post.date}</p>

//         <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
//           <p>{post.content}</p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             eros at dolor posuere laoreet. Curabitur nec lectus ut sapien
//             tincidunt malesuada.
//           </p>
//           <p>
//             You can add multiple sections, headings, images, or even videos here
//             for rich blog content.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { posts } from "../data/blogData";

// export default function BlogDetail({ params }) {
//   const post = posts.find((p) => p.id.toString() === params.id);
//   // console.log("posts in slug", posts);

//   if (!post) return notFound();

//   return (
//     <div className="max-w-[960px] mx-auto px-4 py-12">
//       {/* Banner Image */}
//       <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow">
//         <Image
//           src={post.image}
//           alt={post.title}
//           fill
//           // className="object-contain" // ✅ fits 100% without cropping
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="mt-8">
//         <span className="text-sm text-blue-600 font-medium">
//           {post.category}
//         </span>
//         <h1 className="text-3xl font-bold text-gray-800 mt-2">{post.title}</h1>
//         <p className="text-sm text-gray-500 mt-1">{post.date}</p>

//         <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
//           <p>{post.content}</p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             eros at dolor posuere laoreet. Curabitur nec lectus ut sapien
//             tincidunt malesuada.
//           </p>
//           <p>
//             You can add multiple sections, headings, images, or even videos here
//             for rich blog content.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "../data/blogData";

export default async function BlogDetail({ params }) {
  // ✅ FIX: resolve params first (ONLY CHANGE)
  const resolvedParams = await params;

  const post = posts.find(
    (p) => p.id.toString() === resolvedParams.id
  );
  // console.log("posts in slug", posts);

  if (!post) return notFound();

  return (
    <div className="max-w-[960px] mx-auto px-4 py-12">
      {/* Banner Image */}
      <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow">
        <Image
          src={post.image}
          alt={post.title}
          fill
          // className="object-contain" // ✅ fits 100% without cropping
        />
      </div>

      {/* Blog Content */}
      <div className="mt-8">
        <span className="text-sm text-blue-600 font-medium">
          {post.category}
        </span>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mt-1">{post.date}</p>

        <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
          <p>{post.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            eros at dolor posuere laoreet. Curabitur nec lectus ut sapien
            tincidunt malesuada.
          </p>
          <p>
            You can add multiple sections, headings, images, or even videos here
            for rich blog content.
          </p>
        </div>
      </div>
    </div>
  );
}
