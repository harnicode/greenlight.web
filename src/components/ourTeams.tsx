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
      <div className="flex flex-wrap items-top">
        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/anthony.jpeg"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={550}
          />
          <p className="leading-[25px] mt-[10px] text-[#000] font-bold text-[1.2rem]">
            Anthony Osei
          </p>
          <p className="text-gray-500">Consultant</p>
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
              enableBackground="new 0 0 72 72"
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
            Anthony Osei Is a seasoned marketing professional with a Master&apos;s
            degree in Marketing and over 10 years of diverse experience in
            sales, marketing, and proposal writing. He has a proven track record
            in developing strategic marketing initiatives that drive business
            growth and enhance brand visibility.
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/bright.jpeg"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={550}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">
            Bright Abodakpi
          </p>
          <p className="text-gray-500">Scout</p>
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
              enableBackground="new 0 0 72 72"
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
            A seasoned soccer enthusiasts with great insight in talent
            identification and scouting, is committed in unearthing and
            developing talent. Bright Abodakpi, Scout
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/felix.jpeg"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={550}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">
            Fisco Frimpong
          </p>
          <p className="text-gray-500">Director</p>
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
              enableBackground="new 0 0 72 72"
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
            As a life long athlete and a fanatic of soccer, I am committed to
            working closely with stakeholders and team members to ensure their
            views are represented at all levels. There are many ways you can
            connect with GreenLight SC and I will encourage you to get in touch
            with us to play your part and make your voice heard.Fisco Frimpong,
            Director
          </p>
        </div>

        {/* //leveltwo */}

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/joseph.jpeg"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={550}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">
            Joseph Ayoka
          </p>
          <p className="text-gray-500">social media specialist</p>
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
              enableBackground="new 0 0 72 72"
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
            Joseph Ayoka is a social media specialist at Greenlight Sports
            Consult, specializing in crafting strategic content that drives
            engagement and boosts brand visibility. With expertise in digital
            trends and analytics, Ayoka enhances the company’s online presence
            and fosters strong connections with sports enthusiasts.
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/prince.jpeg"
            alt="Prince"
            className="rounded-md object-cover"
            width={450} // fixed width
            height={550} // fixed height
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">
            Prince Sampong Owusu
          </p>
          <p className="text-gray-500">
            Director of Green Light Sports Consult.
          </p>
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
              enableBackground="new 0 0 72 72"
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
            He is Results-oriented professional with experience in managing and
            direction.Possesses excellent time management skills,top
            customer-relations abilities.With years of experience in
            banking(Corporate & Investment Banking) and as an Entreprenuer he is
            passionate about leveraging leadership skills to inspire teams and
            drive business success. He holds master’s degree in Business
            Administration,a First Degree from University of Ghana,Legon and a
            Product of St Peter’s Secondary School,Nkwatia-Kwahu.
          </p>
        </div>

        <div className="leading-[25px] basis-full sm:basis-1/2 lg:basis-1/3 xl:pe-[4rem] md:pe-[4rem] flex flex-col gap-[0.2rem] mt-[3rem] sm:pe-[30px]">
          <Image
            src="/images/user6.png"
            alt="Image"
            className="rounded-md object-cover"
            // layout="fill"
            width={450}
            height={550}
          />
          <p className="mt-[1rem] text-[#000] font-bold text-[1.2rem]">
            Olivia Martinez
          </p>
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
              enableBackground="new 0 0 72 72"
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
