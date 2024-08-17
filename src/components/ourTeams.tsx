"use client";

import Image from "next/legacy/image";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";

const OurTeams: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("team", ref);
  }, [setRef]);

  return (
    <div
      ref={ref}
      id="team"
      className="flex flex-col items-left justify-between w-[95%] md:w-[90%] m-auto"
    >
      <div className="flex flex-col gap-[1rem]">
        <h6 className="text-h6 font-black">Our team</h6>
        <p className="text-[gray-900]  text-[1.6rem] md:text-[2.25rem] font-extrabold w-[90%]">
          Leadership team
        </p>
        <p className="flex flex-wrap text-[1.2rem] leading-[2.5rem] md:leading-[2rem]">
          Meet the individuals who drive our mission forward and are committed
          to making a positive impact on your career.
        </p>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/person1.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={450}
          />
          <p className="leading-[25px] mt-[10px] text-[#000] font-bold text-[1.2rem]">John Smith</p>
          <p className="text-gray-500">Founder & CEO</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 72 72"
              viewBox="0 0 72 72"
              width="24"
              height="24"
              id="twitter-x"
            >
              <path
                d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                fill="#1B884F"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B884F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
                stroke="#1B884F"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="#1B884F"
              ></path>
              <path d="M17.5 6.5h.01" stroke="#1B884F"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>
          <p className="leading-[25px] mt-[10px] text-gray-600">
            With over 20 years of experience in the sports industry, John Smith
            has built [Agency Name] from the ground up. His visionary leadership
            and strategic insight have positioned the agency as a leading force
            in athlete representation and sports management. John is passionate
            about empowering athletes and ensuring their success both on and off
            the field.
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/user2.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={450}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">Emily Johnson</p>
          <p className="text-gray-500">Head of Sports Management</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 72 72"
              viewBox="0 0 72 72"
              width="24"
              height="24"
              id="twitter-x"
            >
              <path
                d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                fill="#1B884F"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B884F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
                stroke="#1B884F"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="#1B884F"
              ></path>
              <path d="M17.5 6.5h.01" stroke="#1B884F"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>

          <p className="leading-[25px] mt-[10px] text-gray-600">
            Emily Johnson brings a decade of experience in sports management to
            our team. Her meticulous approach to career planning and day-to-day
            management ensures that our clients receive comprehensive and
            personalized support. Emily is dedicated to helping athletes achieve
            their peak performance and career goals.
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/user3.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={450}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">Michael Brown</p>
          <p className="text-gray-500">Senior Sports Consultant</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 72 72"
              viewBox="0 0 72 72"
              width="24"
              height="24"
              id="twitter-x"
            >
              <path
                d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                fill="#1B884F"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B884F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
                stroke="#1B884F"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="#1B884F"
              ></path>
              <path d="M17.5 6.5h.01" stroke="#1B884F"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>
          <p className="leading-[25px] mt-[10px] text-gray-600">
            As our Senior Sports Consultant, Michael Brown offers invaluable
            expertise in strategic planning and performance enhancement. With a
            background in sports psychology and analytics, Michael provides
            athletes with the tools and insights needed to make informed
            decisions and excel in their careers.
          </p>
        </div>

        {/* //leveltwo */}

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/user4.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={450}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">Sophia Davis</p>
          <p className="text-gray-500">Director of Image Branding</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 72 72"
              viewBox="0 0 72 72"
              width="24"
              height="24"
              id="twitter-x"
            >
              <path
                d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                fill="#1B884F"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B884F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
                stroke="#1B884F"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="#1B884F"
              ></path>
              <path d="M17.5 6.5h.01" stroke="#1B884F"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>

          <p className="leading-[25px] mt-[10px] text-gray-600">
            Sophia Davis is a seasoned branding expert with a talent for
            creating compelling personal brands. Her innovative strategies and
            keen understanding of market trends help athletes build strong,
            impactful identities. Sophia’s work ensures that our clients stand
            out in a competitive landscape and connect with fans and sponsors.
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/user5.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={450}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">David Wilson</p>
          <p className="text-gray-500">Talent Scout</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 72 72"
              viewBox="0 0 72 72"
              width="24"
              height="24"
              id="twitter-x"
            >
              <path
                d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                fill="#1B884F"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B884F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
                stroke="#1B884F"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="#1B884F"
              ></path>
              <path d="M17.5 6.5h.01" stroke="#1B884F"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>
          <p className="leading-[25px] mt-[10px] text-gray-600">
            David Wilson’s extensive network and keen eye for emerging talent
            make him an invaluable asset to our team. As our Talent Scout, David
            is responsible for identifying promising athletes and guiding them
            through the early stages of their careers. His dedication to
            discovering and nurturing new talent is unmatched.
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/user6.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={450}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">Olivia Martinez</p>
          <p className="text-gray-500 ">Lead Contract Negotiator</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 72 72"
              viewBox="0 0 72 72"
              width="24"
              height="24"
              id="twitter-x"
            >
              <path
                d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                fill="#1B884F"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B884F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
                stroke="#1B884F"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="#1B884F"
              ></path>
              <path d="M17.5 6.5h.01" stroke="#1B884F"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#1B884F"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>

          <p className="leading-[25px] mt-[10px] text-gray-600">
            Olivia Martinez is our expert in contract writing and negotiation.
            With a background in sports law and a keen understanding of contract
            intricacies, Olivia ensures that all agreements are fair,
            transparent, and advantageous for our clients. Her negotiation
            skills are crucial in securing the best terms and protecting our
            clients’ interests.
          </p>
        </div>
        {/* //level two end  */}
      </div>
    </div>
  );
};

export default OurTeams;
