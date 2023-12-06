'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef(null);
  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      // Set initial scroll threshold based on the window height
      setScrollThreshold(window.innerHeight * 0.25); // Adjust this percentage as needed
    }

    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > scrollThreshold) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <nav ref={navbarRef} className={`${isFixed ? "navbar-fixed" : ""} z-10 h-16 flex w-full items-center justify-between fixed top-0 left-0`}>
      <span className="w-10 "></span>
      <Link href="/">
        <Image className="w-10" src="/layout/brabuss.webp" alt="brabus logo" width={40} height={40} />
      </Link>
      <div className="w-10">
        <Image className="" src="/layout/account.png" alt="account logo" width={25} height={25} />
      </div>
    </nav>
  );
};

export default Navbar;
