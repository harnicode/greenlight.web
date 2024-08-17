"use client";
import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";
import Slider from "@greenlight-web/components/slider";
import { ICardData } from "./types";

const OurPlayer = (props: { onCardClick: (param: ICardData) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("players", ref);
  }, [setRef]);

  return (
    <div
      ref={ref}
      id="players"
      className="bg-grayBackground w-full z-[19]"
    >
      <div className="flex flex-col w-[95%] gap-[1rem] md:w-[90%] m-auto py-[6rem] my-[6rem]">
        <h6 className="text-h6 font-black leading-[2.5rem]">Our Players</h6>
        <p className="text-[gray-900]  text-[1.6rem] md:text-[2.25rem] leading-[2.5rem] font-extrabold w-[90%]">
          Exceptional roster of athletes
        </p>
        <p className="flex flex-wrap text-[1.2rem] leading-[2.5rem]">
          Explore the profiles of our talented athletes and learn more about
          their achievements and career highlights.
        </p>
        <Slider {...props} />
      </div>
    </div>
  );
};

export default OurPlayer;
