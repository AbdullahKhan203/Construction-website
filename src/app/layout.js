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








import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import TopNav from "@/components/TopNav";
import LayoutWrapper from "@/components/LayoutWrapper";

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
    default: "Your Company Name",
    template: "%s | Your Company Name",
  },
  description:
    "We deliver excellence in Electrical, Civil, Mechanical and Telecommunication services.",
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

        {/* Add portal targets at the end of body */}
        <div id="modal-root" className="z-[1000] fixed top-0 left-0 w-full h-full pointer-events-none" />
        <div id="auth-modal-root" className="z-[2000] fixed top-0 left-0 w-full h-full pointer-events-none" />
      </body>
    </html>
  );
}
