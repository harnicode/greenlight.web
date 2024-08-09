"use client";

import { Slider } from "@greenlight-web/components/slider";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";

const OurPlayer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("players", ref);
  }, [setRef]);

  return (
    <div
      ref={ref}
      id="players"
      className="bg-grayBackground w-full min-h-[600px]"
    >
      <div className="w-[80%] mx-auto my-12">
        <h6 className="text-h6">Our Players</h6>
        <p className=" flex flex-wrap ext-lg leading-extra-loose mb-[10px]">
          Exceptional roster of athletes
        </p>
        <p className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
          Explore the profiles of our talented athletes and learn more about
          their achievements and career highlights.
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default OurPlayer;
