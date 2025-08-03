"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [display, SetDisplay] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={` fixed w-full flex items-center  justify-between px-[10px] md:px-[100px] py-[10px] md:py-[50px] z-100 ${
        scroll ? "bg-teal-950/90 " : "bg-transparent"
      }`}
    >
      {display ? (
        <img
          src="/images/think logo.png"
          alt="logo"
          className="md:h-[50px] h-[100px] w-[100px] md:w-[100px] z-10"
        />
      ) : (
        <img
          src="/images/think.png"
          alt="logo"
          className="md:h-[50px] h-[70px] w-[50px] md:w-[100px] mt-[10px] z-10"
        />
      )}
      <div className=" hidden md:flex gap-x-[30px] items-center justify-between px-10 text-white">
        <Link href="/" className="cursor-pointer">
          Home
        </Link>
        <Link href="/about" className="cursor-pointer">
          About
        </Link>
        <Link href="/service" className="cursor-pointer">
          Services
        </Link>
        <Link href="/work" className="cursor-pointer">
          Portfolio
        </Link>
        <Link href="/contact" className="cursor-pointer">
          Contact
        </Link>
      </div>
      <button
        className=" absolute top-[20px] right-[10px] md:hidden block bg-gray-200/50 p-[5px] z-10"
        onClick={() => SetDisplay(!display)}
      >
        {display ? (
          <img src="/logos/x.png" className=" w-[20px] h-[20px] " />
        ) : (
          <img src="/logos/menu.png" className=" w-[20px] h-[20px] " />
        )}
      </button>
      {display && (
        <div className=" absolute pt-[120px] pb-[10px] top-0 left-0 flex md:hidden flex-col gap-y-6px text-white bg-teal-950/90 w-full">
          <Link
            href="/"
            className="cursor-pointer font-bold w-full border-b-2 border-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="cursor-pointer font-bold w-full border-b-2 border-white"
          >
            About
          </Link>
          <Link
            href="/service"
            className="cursor-pointer font-bold w-full border-b-2 border-white"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="cursor-pointer font-bold w-full border-b-2 border-white"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer font-bold w-full border-b-2 border-white"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
