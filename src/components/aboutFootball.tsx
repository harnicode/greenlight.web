"use client";

import Image from "next/legacy/image";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";

const AboutUsFootball: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("about-us", ref);
  }, [setRef]);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto xl:mt-[-5rem] md:mt-[-6rem] mt-[-7rem]">
      <Image
        src="/images/footballDiv.jpeg"
        alt="Image"
        className="w-full object-fit"
        width={1920}
        height={1200}
      />
    </div>
  );
};

export default AboutUsFootball;
