"use client";

import Image from "next/image";

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
      className="flex flex-col items-left justify-between my-[50px] w-[80%]"
    >
      <h6 className="text-h6">Who we are</h6>
      <p className="text-[#101828]  text-2xl flex flex-wrap">
        At Green Light Sports Consult, we are a dedicated team of sports
        management experts committed to shaping the future of athletes and
        sports professionals.
      </p>
      <p className=" flex flex-wrap ext-lg leading-[30px] mb-[10px]">
        Our team combines industry knowledge, strategic insight, and a passion
        for sports to deliver exceptional services in management, consultancy,
        and branding. With a client-focused approach, we pride ourselves on our
        ability to tailor our solutions to the unique needs and aspirations of
        each individual we represent. Our team of experienced professionals is
        committed to providing personalized support tailored to the unique needs
        of each client.
      </p>
      <Image
        src="/images/footballDiv.jpeg"
        alt="Image"
        className="w-[100%] h-[516px] object-cover"
        // layout="fill"
        width={450}
        height={450}
      />
    </div>
  );
};

export default AboutUs;
