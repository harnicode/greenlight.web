"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@greenlight-web/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@greenlight-web/components/ui/carousel";
import { Button } from "@greenlight-web/components/ui/button";
import Image from "next/legacy/image";
import { useScroll } from "@greenlight-web/components/scrollContext";
import { SectionHeader } from "./types.d";
import { background_two, hero_image } from "@greenlight-web/assets/images";

const slidesData = [
  {
    image: "/images/heroImage.jpeg",
    heading1: "Elevate your Game",
    heading2: "with Expert Sports",
    heading3: "Management",
    text: "From strategic consultancy and image branding to talent identification and contract negotiation, our team ensures you achieve peak performance both on and off the field. Discover how we can transform your sports career today.",
  },
  {
    image: "/images/background2.jpeg",
    heading1: "Unleashing your",
    heading2: "inner champion",
    text: "From strategic consultancy and image branding to talent identification and contract negotiation, our team ensures you achieve peak performance both on and off the field. Discover how we can transform your sports career today.",
  },
];

const LandingHero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  );

  const { scrollToDiv } = useScroll();
  const handleScroll = (section: SectionHeader) => scrollToDiv(section);

  return (
    <div className="max-w-screen h-screen relative overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="max-w-screen h-screen">
          {slidesData.map((slide, index) => (
            <CarouselItem key={index} className="relative max-w-screen h-screen">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1} Image`}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="object-cover h-screen w-screen"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-white ">
                <div className="w-[95%] xl:w-[50%] md:w-[80%] ml-[1.5rem] xl:ml-[8rem] md:ml-[4rem] flex flex-col xl:gap-[2rem] md:gap-[1.3rem] gap-[1.3rem]">
                  <h1 className="xl:text-[4rem] md:text-[3rem] text-4xl xl:leading-[5rem] md:leading-[4rem] leading-[2.5rem] font-bold leading-tight">
                    {slide.heading1}
                    {slide.heading2 && (
                      <>
                        <br />
                        {slide.heading2}
                      </>
                    )}
                    {slide.heading3 && (
                      <>
                        <br />
                        {slide.heading3}
                      </>
                    )}
                  </h1>
                  <p className="w-[95%] xl:w-[60%] md:w-[80%] text-[1rem] xl:text-[1.3rem]  md:text-[1.5rem] xl:leading-[2.2rem]">{slide.text}</p>
                  <Button
                    className="bg-[#1B884F] hover:bg-[#1B884F]-600 text-white rounded-md h-12 text-lg md:w-[11.875rem] h-[3.75rem] w-[24.5rem]"
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
              
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute hidden top-0 md:top-[30rem] left-0 h-10 w-10 " />
        <CarouselNext className="absolute hidden md:top-[30rem] xl:left-[116.5rem] md:left-[48rem] left-[23rem] h-10 w-10 " />
      </Carousel>
    </div>
  );
};

export default LandingHero;
