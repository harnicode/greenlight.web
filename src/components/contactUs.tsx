"use client";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@greenlight-web/components/scrollContext";

const ContactUs: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setRef } = useScroll();

  useEffect(() => {
    setRef("contact-us", ref);
  }, [setRef]);

  return (
    <div ref={ref} id="contact-us" className="w-[80%] py-12">
      <div className="flex flex-col gap-[25px] md:flex-row gap-12">
        <div className="w-[100%] md:w-[50%] flex flex-col">
          <h6 className="text-h6 ">Get in Touch</h6>
          <p className="text-[#101828] text-[1.3rem] md:text-2xl flex flex-wrap">For Players</p>

          <p className="">
            If you’re a player seeking representation, you’ve come to the right
            place. Please note that we are selective in our process and evaluate
            several aspects before moving forward. To be considered, your CV
            must include the following:
          </p>
          <ul className="list-disc leading-[2rem] pl-8">
            <li>Recent Video Footage: No older than 6 months. </li>
            <li>
              Professional Reference: At least one, with contact information.
            </li>
            <li>Season Statistics: From the most recent season you played. </li>
            <li>
              Team History: Names of teams, including country, league name, and
            </li>
            level (e.g., 1st Division).
            <li>
              National Team Experience: Specific years, number of caps, and{" "}
            </li>
            names of any competitions.
            <li>Primary and Secondary Positions. </li>
            <li>Dominant Foot.</li>
            <li>Country(ies) of Citizenship. </li>
          </ul>
          <p className="leading-[2rem]">
            If your CV meets these requirements, please email it to us at:
            <b>greenlightsportsconsult@gmail.com.</b> Thank you for providing
            this information and reaching out to us. We will review your
            submission and get back to you if there is mutual interest.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] flex flex-col">
          <h6 className="text-h6">Partner with Us</h6>
          <p className="text-[#101828] text-[1.3rem] md:text-2xl flex flex-wrap">
            For Coach/Scout/GM/Agent
          </p>
          <p className="leading-[2rem]">
            If you are a coach, scout, GM, agent, or private business, and would
            like to:
          </p>
          <ul className="list-disc leading-[2rem] pl-8">
            <li>Learn more about any of our players.</li>
            <li>Recommend a player for representation.</li>
            <li>
              Discuss marketing or commercial opportunities for our players.
            </li>
            <li>Explore opportunities to join our scouting team. </li>
          </ul>
          <p className="leading-[2rem]">
            Please reach out to us via email at:
            <b>greenlightsportsconsult@gmail.com. </b>
          </p>
          <p className="leading-[2rem]">
            We look forward to connecting with you and exploring potential
            opportunities for collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
