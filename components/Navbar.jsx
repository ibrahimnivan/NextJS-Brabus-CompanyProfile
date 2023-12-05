'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  console.log(isFixed);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = 450;
      console.log(window.scrollY);

      if (window.scrollY > scroll) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener pada unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <nav className={`${isFixed ? "navbar-fixed" : " "} z-10 h-16 flex w-full items-center justify-between fixed top-0 left-0`}>
      <span className="w-10 "></span>
      <Link href="/">
        <Image className="w-10" src="/layout/brabuss.webp" alt="brabus logo" width={40} height={40}/>
      </Link>
      <div className="w-10">
        <Image className="" src="/layout/account.png" alt="account logo" width={25} height={25} />
      </div>
    </nav>
  );
};

export default Navbar;
