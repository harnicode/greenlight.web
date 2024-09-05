"use client";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";

const AboutUs: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("about-us", ref);
  }, [setRef]);

  return (
    <div
      ref={ref}
      id="about-us"
      className="bg-grayBackground flex flex-wrap items-left justify-between pt-[7rem] pb-[10rem]"
    >
      <div className="mx-auto w-[95%] md:w-[90%] flex flex-col gap-[.3rem]">
        <h6 className="text-h6 font-black">About Us</h6>
        <p className="text-[gray-900]  md:text-[2.25rem] text-[1.6rem] font-extrabold">
          Our Mission, Vision and Values
        </p>
        <div className="flex flex-col gap-[.5rem]">
          <div className="flex flex-col gap-[.5rem]">
          <p className="text-[gray-900] text-customdark font-inter text-[1.25rem] font-semibold leading-base">Our Mission:</p>
            <p className="leading-[30px] mb-[10px] text-gray-600 w-[90%]">
            We empower athletes to reach their full potential by providing comprehensive services that elevate their careers and brand, while fostering a culture of integrity, professionalism, and mutual success.
            </p>
          </div>
          <div className="flex flex-col gap-[.5rem]">
          <p className="text-[gray-900] text-customdark font-inter text-[1.25rem] font-semibold leading-base">Our Vision:</p>
            <p className="leading-[30px] mb-[10px] text-gray-600 w-[90%]">
            To be the leading sports consulting firm that transforms the lives of athletes through innovative strategies, unwavering integrity, and a relentless pursuit of excellence.
            </p>
          </div>
          
          <div className="flex flex-col gap-[.5rem]">
            <p className="text-[gray-900] text-customdark font-inter text-[1.25rem] font-semibold leading-base">Our Core Values:</p>
            <div className="leading-[30px] mb-[10px] text-gray-600 w-[90%] flex flex-col gap-[.5rem]">
              <p><span className="text-[gray-800] text-customlessdark font-inter text-base font-[500] leading-base">Integrity</span>: We uphold the highest ethical standards in all our dealings, ensuring transparency and trust with our clients.</p>
              <p><span className="text-[gray-800] text-customlessdark font-inter text-base font-[500] leading-base">Professionalism</span>: Our team of experts delivers exceptional service with dedication, expertise, and a commitment to excellence.</p>
              <p><span className="text-[gray-800] text-customlessdark font-inter text-base font-[500] leading-base">Teamwork</span>: We believe in the power of collaboration and work closely with our clients, partners, and colleagues to achieve shared goals</p>
              <p><span className="text-[gray-800] text-customlessdark font-inter text-base font-[500] leading-base">Innovation</span>: We continuously seek new and effective ways to support our clients, adapting to the ever-changing landscape of the sports industry.</p>
              <p><span className="text-[gray-800] text-customlessdark font-inter text-base font-[500] leading-base">Empowerment</span>: We empower our clients to make informed decisions, providing them with the tools and guidance necessary to thrive in their careers.</p>
              <p><span className="text-[gray-800] text-customlessdark font-inter text-base font-[500] leading-base">By adhering to our mission, vision and core values, we strive to be the leading sports consultancy in Africa, empowering athletes to achieve their dreams and leave a lasting impact on the world of sports.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
