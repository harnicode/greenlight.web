"use client";
import { useEffect, useState } from "react";
import { Button } from "@greenlight-web/components/ui/button";
import Image from "next/legacy/image";
import { useScroll } from "@greenlight-web/components/scrollContext";
import { SectionHeader } from "./types.d";
import { background_two, hero_image } from "@greenlight-web/assets/images";

const slidesData = [
  {
    image: hero_image,
    heading: "Elevate your\nGame with Experts \n Sports Management",
    text: "From strategic consultancy and image branding to talent identification and contract negotiation, our team ensures you achieve peak performance both on and off the field. Discover how we can transform your sports career today.",
  },
  {
    image: background_two,
    heading: "Unleashing your\ninner champion",
    text: "From strategic consultancy and image branding to talent identification and contract negotiation, our team ensures you achieve peak performance both on and off the field. Discover how we can transform your sports career today.",
  },
];

const LandingHero = () => {
  const { scrollToDiv } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (section: SectionHeader) => scrollToDiv(section);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {slidesData.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <div className="relative w-full h-full">
                {" "}
                {/* Set the desired width and height here */}
                <Image
                  src={slide.image}
                  alt="Hero Image"
                  layout="fill" // Use layout="fill" instead of fill prop
                  className={`object-cover transition-opacity duration-1000 ${
                    isActive
                      ? index === 1
                        ? "animate-fadeInLeft"
                        : "animate-fadeInRight"
                      : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-white">
                <div className="m-auto w-4/5">
                  <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left leading-[40px] mt-12 mb-6 ${
                      isActive ? "animate-fadeInLeft opacity-100" : "opacity-0"
                    }`}
                  >
                    {slide.heading}
                  </h1>
                  <p
                    className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-lg leading-[30px] mb-6 ${
                      isActive ? "animate-fadeInLeft opacity-100" : "opacity-0"
                    }`}
                  >
                    {slide.text}
                  </p>
                  <Button
                    className={`cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md md:w-[190px] w-[90%] ${
                      isActive ? "animate-fadeInLeft opacity-100" : "opacity-0"
                    }`}
                    onClick={() => handleScroll("contact-us")}
                  >
                    Get Started
                    <svg
                      className="w-6 h-6 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LandingHero;
