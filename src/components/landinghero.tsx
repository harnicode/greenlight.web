"use client";
import Header from "@greenlight-web/components/Header";
import { useEffect, useState } from "react";
import { Button } from "@greenlight-web/components/ui/button";
import Image from "next/image";

const LandingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/images/heroImage.jpeg",
      heading: "Elevate your\nGame with Experts Sports\nManagement",
      text: "From strategic consultancy and image branding to talent identification and contract negotiation, our team ensures you achieve peak performance both on and off the field. Discover how we can transform your sports career today.",
    },
    {
      image: "/images/background2.jpeg",
      heading: "Unleashing your\ninner champion",
      text: "From strategic consultancy and image branding to talent identification and contract negotiation, our team ensures you achieve peak performance both on and off the field. Discover how we can transform your sports career today.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={slide.image}
              alt="Hero Image"
              className={`object-cover w-full h-full ${
                index === currentSlide ? "animate-fadeIn" : "opacity-0"
              }`}
              layout="fill"
            />
            <Header />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-white">
              <div className="m-auto w-4/5">
                <h1 className={`text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold text-left leading-[40px] mt-12 mb-6 ${index === currentSlide ? "animate-fadeIn" : "opacity-0"}`}>
                  {slide.heading}
                </h1>
                <p className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-lg leading-[30px] mb-6 ${index === currentSlide ? "animate-fadeIn" : "opacity-0"}`}>
                  {slide.text}
                </p>
                <Button className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md 2xl:w-[190px] w-[90%] ${index === currentSlide ? "animate-fadeIn" : "opacity-0"}`}>
                  Get Started
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingHero;
