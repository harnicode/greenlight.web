"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useScroll } from "@greenlight-web/components/scrollContext";

const Header: React.FC = () => {
  const { scrollToDiv } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (section: string) => {
    scrollToDiv(section);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="absolute inset-0 w-full z-[100] h-20 bg-black bg-opacity-50 text-white py-4">
        <div className="h-full flex items-center justify-between mx-auto w-4/5">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="rounded-md object-cover w-15 h-15"
              width={60}
              height={60}
            />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="space-x-4">
              <a onClick={() => handleScroll("about-us")} className="hover:text-gray-300 cursor-pointer">About Us</a>
              <a onClick={() => handleScroll("services")} className="hover:text-gray-300 cursor-pointer">Services</a>
              <a onClick={() => handleScroll("team")} className="hover:text-gray-300 cursor-pointer">Our Team</a>
              <a onClick={() => handleScroll("players")} className="hover:text-gray-300 cursor-pointer">Our Players</a>
              <a onClick={() => handleScroll("contact-us")} className="hover:text-gray-300 cursor-pointer">Contact Us</a>
            </nav>
            <span onClick={handleMenuToggle} className="max-sm:block cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 w-full h-full z-51 bg-white p-6 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="rounded-md object-cover w-15 h-15"
              width={60}
              height={60}
            />
          </a>
          <button onClick={handleMenuToggle} className="text-xl">X</button>
        </div>
        <ul className="flex flex-col gap-6 mt-6">
          <li><a href="/" className="hover:text-gray-600">Home</a></li>
          <li><button className="text-left">About Us</button></li>
          <li><button className="text-left">Services</button></li>
          <li><a href="/Contact" className="hover:text-gray-600">Contact</a></li>
          <li><a href="/ProjectGallery" className="hover:text-gray-600">Our Players</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
