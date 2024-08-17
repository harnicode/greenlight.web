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
      <div className="mx-auto w-[95%] md:w-[90%] flex flex-col gap-[1rem]">
        <h6 className="text-h6 font-black">Who we are</h6>
        <div className="">
          <p className="text-[gray-900]  md:text-[2.25rem] text-[1.6rem] font-extrabold">
            At Green Light Sports Consult, we are a dedicated team of sports
          </p>
          <p className="text-[gray-900]  md:text-[2.25rem] text-[1.6rem] font-extrabold">
            {" "}
            management experts committed to shaping the future of athletes and
          </p>
          <p className="text-[gray-900]  md:text-[2.25rem] text-[1.6rem] font-extrabold">sports professionals.</p>
        </div>
        <p className="leading-[30px] mb-[10px] text-gray-600 w-[90%]">
          Our team combines industry knowledge, strategic insight, and a passion
          for sports to deliver exceptional services in management, consultancy,
          and branding. With a client-focused approach, we pride ourselves on
          our ability to tailor our solutions to the unique needs and
          aspirations of each individual we represent. Our team of experienced
          professionals is committed to providing personalized support tailored
          to the unique needs of each client.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
