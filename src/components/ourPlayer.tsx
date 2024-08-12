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
      className="bg-grayBackground w-full min-h-[600px] z-[19]"
    >
      <div className="w-[80%] mx-auto my-12 flex flex-col">
        <h6 className="text-h6 ">Our Players</h6>
        <p className="text-[#101828]  text-2xl flex flex-wrap">
          Exceptional roster of athletes
        </p>
        <p className=" flex flex-wrap leading-lg mb-[10px]">
          Explore the profiles of our talented athletes and learn more about
          their achievements and career highlights.
        </p>
        <Slider {...props} />
      </div>
    </div>
  );
};

export default OurPlayer;
