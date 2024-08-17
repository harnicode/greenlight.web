"use client";

import Image from "next/legacy/image";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("services", ref);
  }, [setRef]);

  return (
    <div ref={ref} id="services" className="bg-grayBackground py-[6rem] my-[6rem] md:pb-[10rem]">
      <div className="flex flex-col gap-[1rem] items-left justify-between w-[95%] md:w-[90%] m-auto">
        <h6 className="text-h6 font-black">Services</h6>
        <p className="text-[gray-900]  text-[1.6rem] md:text-[2.25rem] font-extrabold w-[90%]">
          Expertise with personalized care
        </p>
        <p className="flex flex-wrap text-[1.2rem] leading-[2rem]">
          We offer a comprehensive suite of services designed to support
          athletes and sports <br />professionals at every stage of their careers.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[40px]">
          <div className="flex flex-col gap-4">
            <div className="p-2 w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/football.png"
                alt="Image"
                className="rounded-md object-cover"
                // layout="fill"
                width={30}
                height={30}
              />
            </div>
            <h4 className="text-[1.2rem] font-extrabold">Sports Management</h4>
            <p className="leading-[30px]  mb-[10px] text-gray-600 w-[90%]">
              We provide comprehensive support in every aspect of an athlete’s
              career allowing you to focus on what you do best—performing at
              your peak.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-2 w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/knowledge-02.png"
                alt="Image"
                className="rounded-md object-cover"
                // layout="fill"
                width={30}
                height={30}
              />
            </div>
            <h4 className="text-[1.2rem] font-extrabold">Consultancy Services</h4>
            <p className="leading-[30px] mb-[10px] text-gray-600 w-[90%]">
              Our expert consultants are here to provide personalized advice and
              actionable strategies to help you navigate the complexities of the
              sports industry.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-2 w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/ranking.png"
                alt="Image"
                className="rounded-md object-cover"
                // layout="fill"
                width={30}
                height={30}
              />
            </div>
            <h4 className="text-[1.2rem] font-extrabold">Image Branding</h4>
            <p className="leading-[30px] mb-[10px] text-gray-600 w-[90%]">
              We work closely with you to develop a compelling brand identity
              and create a positive image that resonates with fans, sponsors,
              and partners.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-2 w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/humanPic.png"
                alt="Image"
                width={30}
                height={30}
                className="rounded-md object-cover"
              />
            </div>
            <h4 className="text-[1.2rem] font-extrabold">
              Talent Identification & Representation
            </h4>
            <p className="leading-[30px] mb-[10px] text-gray-600 w-[90%]">
              We are committed to helping talented individuals reach their full
              potential by offering them expert guidance, and representing their
              interests with integrity and professionalism.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-14 h-14 p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/book.png"
                alt="Image"
                width={30}
                height={30}
                className="rounded-md object-cover"
              />
            </div>
            <h4 className="text-[1.2rem] font-extrabold">Contract Writing & Negotiation</h4>
            <p className="leading-[30px] mb-[10px] text-gray-600 w-[90%]">
              We are committed to helping talented individuals reach their full
              potential by offering them expert guidance, and representing their
              interests with integrity and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
