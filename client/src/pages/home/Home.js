import React, { useRef, useEffect, useState } from 'react';
import NavbarTop from '../../components/navbar/Navbar';
import Hero from '../../components/header/Hero';

const Home = () => {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, []);

  return (
    <>
      <div ref={navbarRef}>
        <NavbarTop />
      </div>
      <div
        className="flex justify-center w-full  bg-gradient-to-tr from-transparent to-blue-50"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div className="container flex justify-center items-center">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
