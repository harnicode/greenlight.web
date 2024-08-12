"use client";

import Image from "next/image";

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
      className="flex flex-col items-left justify-between my-[50px] w-[80%]"
    >
      <h6 className="text-h6">Our team</h6>
      <p className="text-[#101828]  text-2xl flex flex-wrap">Leadership team</p>
      <p className="leading-lg mb-[10px]">
        Meet the individuals who drive our mission forward and are committed to
        making a positive impact on your career.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="sm:w-1/2 leading-[25px] lg:w-[450px] md:w-[300px] p-4">
          <Image
            src="/images/person1.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={300}
          />
          <p className="leading-[25px] mt-[10px]">John Smith</p>
          <p className="text-post">Founder & CEO</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22.46 5.54c-.78.34-1.62.58-2.5.69.9-.54 1.6-1.4 1.93-2.42-.85.5-1.8.86-2.8 1.06-.8-.86-1.94-1.4-3.2-1.4-2.42 0-4.4 1.98-4.4 4.4 0 .34.04.67.1.98-3.66-.18-6.92-1.94-9.1-4.6-.38.66-.6 1.43-.6 2.26 0 1.54.78 2.9 1.98 3.7-.72-.02-1.4-.22-2-.54v.06c0 2.16 1.54 3.96 3.6 4.36-.38.1-.78.16-1.2.16-.3 0-.6-.02-.88-.08.6 1.9 2.3 3.3 4.3 3.34-1.6 1.25-3.6 2-5.8 2-0.38 0-.76-.02-1.14-.06 2.08 1.32 4.54 2.1 7.2 2.1 8.62 0 13.34-7.14 13.34-13.34 0-.2 0-.4-.02-.6.92-.66 1.72-1.48 2.36-2.42z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                stroke="currentColor"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="currentColor"
              ></path>
              <path d="M17.5 6.5h.01" stroke="currentColor"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#0077B5"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>
          <p className="leading-[25px] mt-[10px]">
            With over 20 years of experience in the sports industry, John Smith
            has built [Agency Name] from the ground up. His visionary leadership
            and strategic insight have positioned the agency as a leading force
            in athlete representation and sports management. John is passionate
            about empowering athletes and ensuring their success both on and off
            the field.
          </p>
        </div>

        <div className="sm:w-1/2 leading-[30px] lg:w-[450px] md:w-[300px] p-4">
          <Image
            src="/images/user2.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={300}
          />
          <p>Emily Johnson</p>
          <p className="text-post">Head of Sports Management</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22.46 5.54c-.78.34-1.62.58-2.5.69.9-.54 1.6-1.4 1.93-2.42-.85.5-1.8.86-2.8 1.06-.8-.86-1.94-1.4-3.2-1.4-2.42 0-4.4 1.98-4.4 4.4 0 .34.04.67.1.98-3.66-.18-6.92-1.94-9.1-4.6-.38.66-.6 1.43-.6 2.26 0 1.54.78 2.9 1.98 3.7-.72-.02-1.4-.22-2-.54v.06c0 2.16 1.54 3.96 3.6 4.36-.38.1-.78.16-1.2.16-.3 0-.6-.02-.88-.08.6 1.9 2.3 3.3 4.3 3.34-1.6 1.25-3.6 2-5.8 2-0.38 0-.76-.02-1.14-.06 2.08 1.32 4.54 2.1 7.2 2.1 8.62 0 13.34-7.14 13.34-13.34 0-.2 0-.4-.02-.6.92-.66 1.72-1.48 2.36-2.42z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                stroke="currentColor"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="currentColor"
              ></path>
              <path d="M17.5 6.5h.01" stroke="currentColor"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#0077B5"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>

          <p className="leading-[25px] mt-[10px]">
            Emily Johnson brings a decade of experience in sports management to
            our team. Her meticulous approach to career planning and day-to-day
            management ensures that our clients receive comprehensive and
            personalized support. Emily is dedicated to helping athletes achieve
            their peak performance and career goals.
          </p>
        </div>

        <div className="sm:w-1/2 leading-[30px] lg:w-[450px] md:w-[300px] md:mt-[20px] p-4">
          <Image
            src="/images/user3.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={300}
          />
          <p>Michael Brown</p>
          <p className="text-post">Senior Sports Consultant</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22.46 5.54c-.78.34-1.62.58-2.5.69.9-.54 1.6-1.4 1.93-2.42-.85.5-1.8.86-2.8 1.06-.8-.86-1.94-1.4-3.2-1.4-2.42 0-4.4 1.98-4.4 4.4 0 .34.04.67.1.98-3.66-.18-6.92-1.94-9.1-4.6-.38.66-.6 1.43-.6 2.26 0 1.54.78 2.9 1.98 3.7-.72-.02-1.4-.22-2-.54v.06c0 2.16 1.54 3.96 3.6 4.36-.38.1-.78.16-1.2.16-.3 0-.6-.02-.88-.08.6 1.9 2.3 3.3 4.3 3.34-1.6 1.25-3.6 2-5.8 2-0.38 0-.76-.02-1.14-.06 2.08 1.32 4.54 2.1 7.2 2.1 8.62 0 13.34-7.14 13.34-13.34 0-.2 0-.4-.02-.6.92-.66 1.72-1.48 2.36-2.42z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                stroke="currentColor"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="currentColor"
              ></path>
              <path d="M17.5 6.5h.01" stroke="currentColor"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#0077B5"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>
          <p className="leading-[25px] mt-[10px]">
            As our Senior Sports Consultant, Michael Brown offers invaluable
            expertise in strategic planning and performance enhancement. With a
            background in sports psychology and analytics, Michael provides
            athletes with the tools and insights needed to make informed
            decisions and excel in their careers.
          </p>
        </div>

        {/* //leveltwo */}

        <div className="sm:w-1/2 leading-[25px] lg:w-[450px] lg:mt-[40px] md:w-[300px] md:mt-[20px] p-4">
          <Image
            src="/images/user4.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={300}
          />
          <p>Sophia Davis</p>
          <p className="text-post">Director of Image Branding</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22.46 5.54c-.78.34-1.62.58-2.5.69.9-.54 1.6-1.4 1.93-2.42-.85.5-1.8.86-2.8 1.06-.8-.86-1.94-1.4-3.2-1.4-2.42 0-4.4 1.98-4.4 4.4 0 .34.04.67.1.98-3.66-.18-6.92-1.94-9.1-4.6-.38.66-.6 1.43-.6 2.26 0 1.54.78 2.9 1.98 3.7-.72-.02-1.4-.22-2-.54v.06c0 2.16 1.54 3.96 3.6 4.36-.38.1-.78.16-1.2.16-.3 0-.6-.02-.88-.08.6 1.9 2.3 3.3 4.3 3.34-1.6 1.25-3.6 2-5.8 2-0.38 0-.76-.02-1.14-.06 2.08 1.32 4.54 2.1 7.2 2.1 8.62 0 13.34-7.14 13.34-13.34 0-.2 0-.4-.02-.6.92-.66 1.72-1.48 2.36-2.42z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                stroke="currentColor"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="currentColor"
              ></path>
              <path d="M17.5 6.5h.01" stroke="currentColor"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#0077B5"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>

          <p className="leading-[25px] mt-[10px]">
            Sophia Davis is a seasoned branding expert with a talent for
            creating compelling personal brands. Her innovative strategies and
            keen understanding of market trends help athletes build strong,
            impactful identities. Sophia’s work ensures that our clients stand
            out in a competitive landscape and connect with fans and sponsors.
          </p>
        </div>

        <div className="sm:w-1/2 leading-[25px] lg:w-[450px] lg:mt-[40px] md:w-[300px] md:mt-[20px] p-4">
          <Image
            src="/images/user5.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={300}
          />
          <p>David Wilson</p>
          <p className="text-post">Talent Scout</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22.46 5.54c-.78.34-1.62.58-2.5.69.9-.54 1.6-1.4 1.93-2.42-.85.5-1.8.86-2.8 1.06-.8-.86-1.94-1.4-3.2-1.4-2.42 0-4.4 1.98-4.4 4.4 0 .34.04.67.1.98-3.66-.18-6.92-1.94-9.1-4.6-.38.66-.6 1.43-.6 2.26 0 1.54.78 2.9 1.98 3.7-.72-.02-1.4-.22-2-.54v.06c0 2.16 1.54 3.96 3.6 4.36-.38.1-.78.16-1.2.16-.3 0-.6-.02-.88-.08.6 1.9 2.3 3.3 4.3 3.34-1.6 1.25-3.6 2-5.8 2-0.38 0-.76-.02-1.14-.06 2.08 1.32 4.54 2.1 7.2 2.1 8.62 0 13.34-7.14 13.34-13.34 0-.2 0-.4-.02-.6.92-.66 1.72-1.48 2.36-2.42z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                stroke="currentColor"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="currentColor"
              ></path>
              <path d="M17.5 6.5h.01" stroke="currentColor"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#0077B5"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>
          <p className="leading-[25px] mt-[10px]">
            David Wilson’s extensive network and keen eye for emerging talent
            make him an invaluable asset to our team. As our Talent Scout, David
            is responsible for identifying promising athletes and guiding them
            through the early stages of their careers. His dedication to
            discovering and nurturing new talent is unmatched.
          </p>
        </div>

        <div className="sm:w-1/2 leading-[25px] lg:w-[450px] lg:mt-[40px] md:w-[300px] md:mt-[20px] p-4">
          <Image
            src="/images/user6.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={300}
          />
          <p>Olivia Martinez</p>
          <p className="text-post">Lead Contract Negotiator</p>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M20.68 2H3.32C2.6 2 2 2.6 2 3.32v17.36C2 21.4 2.6 22 3.32 22h9.43v-7.75h-2.54v-3.02h2.54V9.69c0-2.52 1.54-3.89 3.78-3.89 1.1 0 2.05.08 2.32.12v2.63h-1.6c-1.25 0-1.49.59-1.49 1.46v1.92h2.99l-.39 3.02h-2.6V22h5.1c.72 0 1.32-.6 1.32-1.32V3.32C22 2.6 21.4 2 20.68 2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22.46 5.54c-.78.34-1.62.58-2.5.69.9-.54 1.6-1.4 1.93-2.42-.85.5-1.8.86-2.8 1.06-.8-.86-1.94-1.4-3.2-1.4-2.42 0-4.4 1.98-4.4 4.4 0 .34.04.67.1.98-3.66-.18-6.92-1.94-9.1-4.6-.38.66-.6 1.43-.6 2.26 0 1.54.78 2.9 1.98 3.7-.72-.02-1.4-.22-2-.54v.06c0 2.16 1.54 3.96 3.6 4.36-.38.1-.78.16-1.2.16-.3 0-.6-.02-.88-.08.6 1.9 2.3 3.3 4.3 3.34-1.6 1.25-3.6 2-5.8 2-0.38 0-.76-.02-1.14-.06 2.08 1.32 4.54 2.1 7.2 2.1 8.62 0 13.34-7.14 13.34-13.34 0-.2 0-.4-.02-.6.92-.66 1.72-1.48 2.36-2.42z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                stroke="currentColor"
              ></rect>
              <path
                d="M16.5 12a4.5 4.5 0 1 1 -9 0 4.5 4.5 0 0 1 9 0z"
                stroke="currentColor"
              ></path>
              <path d="M17.5 6.5h.01" stroke="currentColor"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#0077B5"
                d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.5 19.2H4.8V9.6h2.7v9.6zM6.1 8.4h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.8 1.6-1.7 1.6zm12.1 10.8h-2.7v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v5.5h-2.7V9.6h2.6v1.2h.1c.4-.7 1.3-1.5 2.6-1.5 1.9 0 3.4 1.3 3.4 4.2v6.7z"
              />
            </svg>
          </div>

          <p className="leading-[25px] mt-[10px]">
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
