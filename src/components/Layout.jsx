import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import Aos from 'aos';

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.refresh();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CustomCursor />
      <Footer />
    </>
  );
}
