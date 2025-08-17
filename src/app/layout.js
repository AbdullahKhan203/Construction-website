// import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Inter } from "next/font/google";
// import TopNav from "@/components/TopNav";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import HeroCoursel from "@/components/HeroCoursel";
// import LayoutWrapper from "@/components/LayoutWrapper";
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

// export const metadata = {
//   title: {
//     default: "Your Company Name",
//     template: "%s | Your Company Name",
//   },
//   description:
//     "We deliver excellence in Electrical, Civil, Mechanical and Telecommunication services.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${inter.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
//       >
//         <TopNav />
//         <Navbar />
//         <HeroCoursel />

//         <main className="flex-grow"><LayoutWrapper>{children}</LayoutWrapper></main>

//         <Footer />
//          {/* Add portal targets at the end of body */}
//         <div id="modal-root" className="z-[1000] fixed top-0 left-0 w-full h-full pointer-events-none" />
//         <div id="auth-modal-root" className="z-[2000] fixed top-0 left-0 w-full h-full pointer-events-none" />
//       </body>
//     </html>
//   );
// }








// import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Inter } from "next/font/google";
// import TopNav from "@/components/TopNav";
// import LayoutWrapper from "@/components/LayoutWrapper";
// import { Toaster } from "react-hot-toast";
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

// export const metadata = {
//   title: {
//     default: "Your Company Name",
//     template: "%s | Your Company Name",
//   },
//   description:
//     "We deliver excellence in Electrical, Civil, Mechanical and Telecommunication services.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${inter.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
//       >
//         <TopNav />

//         <main className="flex-grow">
//           <LayoutWrapper>{children}</LayoutWrapper>
//         </main>
//         <Toaster position="top-right" reverseOrder={false} />
        
//         {/* Add portal targets at the end of body */}
//         <div id="modal-root" className="z-[1000] fixed top-0 left-0 w-full h-full pointer-events-none" />
//         <div id="auth-modal-root" className="z-[2000] fixed top-0 left-0 w-full h-full pointer-events-none" />
//       </body>
//     </html>
//   );
// }









import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import TopNav from "@/components/TopNav";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: {
    default: "Siddique & Bashir Sons Co – Construction & Engineering Experts",
    template: "%s | Siddique & Bashir Sons Co",
  },
  description:
    "Siddique & Bashir Sons Co delivers excellence in Electrical, Civil, Mechanical, and Telecommunication services with decades of experience and trust.",
  keywords: [
    "Siddique & Bashir Sons Co",
    "Siddique and Bashir",
    "Construction Company",
    "Engineering Services",
    "Civil Engineering",
    "Electrical Works",
    "Mechanical Services",
    "Telecommunication Solutions",
    "Pakistan Construction Company"
  ],
  authors: [{ name: "Siddique & Bashir Sons Co" }],
  creator: "Siddique & Bashir Sons Co",
  icons:{
    icon:"/assets/images/company-logo.png"
  },
  publisher: "Siddique & Bashir Sons Co",
  robots: "index, follow",
  openGraph: {
    title: "Siddique & Bashir Sons Co – Construction & Engineering Experts",
    description:
      "Leading construction and engineering company offering Electrical, Civil, Mechanical, and Telecommunication services.",
    url: "https://construction-website-beta.vercel.app",
    siteName: "Siddique & Bashir Sons Co",
    images: [
      {
        url: "https://construction-website-beta.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Siddique & Bashir Sons Co – Construction & Engineering Experts",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <TopNav />

        <main className="flex-grow">
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>
        <Toaster position="top-right" reverseOrder={false} />
        
        {/* Add portal targets at the end of body */}
        <div id="modal-root" className="z-[1000] fixed top-0 left-0 w-full h-full pointer-events-none" />
        <div id="auth-modal-root" className="z-[2000] fixed top-0 left-0 w-full h-full pointer-events-none" />
      </body>
    </html>
  );
}
