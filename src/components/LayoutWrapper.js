'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroCoursel from './HeroCoursel'; // make sure this is used here now

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const shouldHideHero = pathname.startsWith('/services/');

  return (
    <>
      <Navbar />
      {!shouldHideHero && <HeroCoursel />}
      {children}
      <Footer />
    </>
  );
}
