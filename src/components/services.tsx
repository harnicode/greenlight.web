"use client";

import Image from "next/image";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("services", ref);
  }, [setRef]);

  return (
    <div ref={ref} id="services" className="bg-grayBackground">
      <div className="flex flex-col items-left justify-between mt-[50px] w-[80%] m-auto mb-[50px]">
        <h6 className="text-h6 ">Services</h6>
        <p className="text-[#101828]  text-2xl flex flex-wrap">
          Expertise with personalized care
        </p>
        <p className=" flex flex-wrap leading-lg mb-[10px]">
          We offer a comprehensive suite of services designed to support
          athletes and sports professionals at every stage of their careers.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[40px]">
          <div className="flex flex-col gap-4">
            <div className="flex w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/football.png"
                alt="Image"
                className="rounded-md object-cover"
                // layout="fill"
                width={30}
                height={30}
              />
            </div>
            <h4 className="font-bold">Sports Management</h4>
            <p>
              We provide comprehensive support in every aspect of an athlete’s
              career allowing you to focus on what you do best—performing at
              your peak.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/knowledge-02.png"
                alt="Image"
                className="rounded-md object-cover"
                // layout="fill"
                width={30}
                height={30}
              />
            </div>
            <h4 className="font-bold">Consultancy Services</h4>
            <p>
              Our expert consultants are here to provide personalized advice and
              actionable strategies to help you navigate the complexities of the
              sports industry.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/ranking.png"
                alt="Image"
                className="rounded-md object-cover"
                // layout="fill"
                width={30}
                height={30}
              />
            </div>
            <h4 className="font-bold">Image Branding</h4>
            <p>
              We work closely with you to develop a compelling brand identity
              and create a positive image that resonates with fans, sponsors,
              and partners.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/humanPic.png"
                alt="Image"
                className="rounded-md object-cover"
                // layout="fill"
                width={30}
                height={450}
              />
            </div>
            <h4 className="font-bold">
              Talent Identification & Representation
            </h4>
            <p>
              We are committed to helping talented individuals reach their full
              potential by offering them expert guidance, and representing their
              interests with integrity and professionalism.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-14 h-14  p-3 justify-center items-center rounded-full border-8 border-success_50 bg-success_75">
              <Image
                src="/images/book.png"
                alt="Image"
                width={30}
                height={30}
                className="rounded-md object-cover"
              />
            </div>
            <h4 className="font-bold">Contract Writing & Negotiation</h4>
            <p>
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
