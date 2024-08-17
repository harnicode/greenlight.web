"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { useScroll } from "@greenlight-web/components/scrollContext";
import { ICardData } from "./types";

const sections = ["about-us", "services", "team", "players", "contact-us"];

const Header = ({
  playerDetail,
  onClose,
}: {
  playerDetail: ICardData | null;
  onClose: () => void;
}) => {
  const { scrollToDiv } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleScroll = (section: string) => scrollToDiv(section);
  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const doubleClick = (name: string) => {
    handleScroll(name);
    handleMenuToggle();
  };

  const handleDrawerClose = () => {
    setVisible(false);
    onClose();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      isPlaying ? videoElement.pause() : videoElement.play();
      setIsPlaying((prev) => !prev);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedMetadata = () => setDuration(videoElement.duration);
    const handleTimeUpdate = () => setCurrentTime(videoElement.currentTime);

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoRef]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  useEffect(() => {
    setVisible(!!playerDetail);
  }, [playerDetail]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.getBoundingClientRect();
    const newTime = ((e.clientX - target.left) / target.width) * duration;

    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const progressPercentage = (currentTime / duration) * 100;

  const formatSectionName = (section: string) =>
    section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div>
      <header className="fixed inset-0 w-screen z-20 h-20 bg-black bg-opacity-50 text-white py-4">
        <div className="h-full flex items-center justify-between mx-auto w-[95%] md:w-[90%]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="rounded-md object-cover w-[2.81rem] h-[2.5rem] my-4"
            width={45}
            height={40}
          />
          <nav className="hidden md:flex items-center space-x-4">
            {sections.map((section) => (
              <a
                key={section}
                onClick={() => handleScroll(section)}
                className="hover:text-gray-300 cursor-pointer"
              >
                {formatSectionName(section)}
              </a>
            ))}
          </nav>
          <span onClick={handleMenuToggle} className="md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
      </header>

      <div
        className={`fixed z-[200] inset-0 w-full h-full bg-white p-6 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full hidden"
        }`}
      >
        <div className="flex justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="rounded-md object-cover w-15 h-15"
              width={60}
              height={60}
            />
          </a>
          <button onClick={handleMenuToggle} className="text-[1.75rem]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-6 text-bold text-[1rem]">
          {sections.map((section) => (
            <a
              key={section}
              onClick={() => doubleClick(section)}
              className="hover:text-gray-300 cursor-pointer"
            >
              {formatSectionName(section)}
            </a>
          ))}
        </ul>
      </div>

      <div
        className={`fixed inset-0 z-30 transition-opacity w-screen h-screen text-[1rem] flex flex-col duration-300 bg-[gray]/40 backdrop-blur-lg p-3 p-6 lg:px-[15rem] overflow-y-scroll ${
          visible ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="w-full m-auto bg-white flex-1/2 flex flex-col gap-4 rounded-md p-3 md:p-6 ">
          <div className="flex max-sm:gap-4">
            <div
              className="relative flex-1 w-full max-w-2xl mx-auto h-80 rounded-lg overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg shadow-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={`/videos/${playerDetail?.video}`}
                poster={`/images/${playerDetail?.poster}`}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-2">
                <div className="flex flex-col h-screen items-center justify-center">
                  <button
                    onClick={togglePlayPause}
                    className={`cursor-pointer p-4 rounded-full bg-white bg-opacity-70 transition-transform transform scale-110 ${
                      isPlaying && !isHovered ? "hidden" : "block"
                    }`}
                  >
                    {isPlaying && isHovered ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 19H9V5H6zM15 5v14h3V5h-3z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 3l14 9-14 9V3z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div
                    className="relative h-2 bg-white-100 bg-opacity-10 backdrop-blur-xl shadow-sm cursor-pointer rounded-md"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-gray-100 bg-opacity-30 backdrop-blur-sm rounded-md"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs mr-2 bg-black bg-opacity-50 p-2 rounded-lg">
                      {Math.floor(currentTime / 60)}:
                      {String(Math.floor(currentTime % 60)).padStart(2, "0")}
                    </span>
                    <span className="text-xs bg-black bg-opacity-50 p-2 rounded-lg">
                      {Math.floor(duration / 60)}:
                      {String(Math.floor(duration % 60)).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[red] w-[2rem] rounded text-[white] text-center flex justify-center items-center h-[2rem] max-sm:opacity-180  max-sm:absolute max-sm:right-9">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer"
                onClick={handleDrawerClose}
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:gap-[60px] py-4">
            {["Personal Data", "Career Data"].map((title, index) => (
              <div key={index} className="flex-1 rounded-md">
                <p className="text-xl font-bold bg-[gray]/10 rounded-md leading-[50px] ps-4">
                  {title}
                </p>
                <div className="flex md:flex-row gap-4 p-4 ps-0">
                  <div className="flex-1 ps-4">
                    {title === "Personal Data" ? (
                      <>
                        {[
                          "Full Legal Name",
                          "Nationality",
                          "Date of Birth",
                          "Position",
                          "Height",
                          "Foot",
                          "Language(s)",
                        ].map((label) => (
                          <p key={label} className="text-md leading-[30px]">
                            {label}
                          </p>
                        ))}
                      </>
                    ) : (
                      <>
                        {[
                          "Professional Debut",
                          "Current Club",
                          "Contract End Date",
                          "Transfer Fee",
                          "International Competitions",
                          "Awards",
                        ].map((label) => (
                          <p key={label} className="text-md leading-[30px]">
                            {label}
                          </p>
                        ))}
                      </>
                    )}
                  </div>

                  <div className="flex-1 ps-4">
                    {title === "Personal Data" ? (
                      <>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.full_legal_name}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.nationality}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.date_of_birth}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.position}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.height}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.foot}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.language}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.professional_debut}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.current_club}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.contract_end_date}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.transfer_fee}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.international_competitions}
                        </p>
                        <p className="text-md text-right leading-[30px]">
                          {playerDetail?.awards}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
