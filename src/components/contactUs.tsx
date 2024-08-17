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
    <div
      ref={ref}
      id="contact-us"
      className="flex flex-col items-left justify-between w-[95%] md:w-[90%] m-auto my-[6rem]"
    >
      <div className="flex flex-col gap-[25px] md:flex-row gap-12">
        <div className="w-[100%] md:w-[50%] flex flex-col gap-[1rem]">
          <h6 className="text-h6 font-black">Get in Touch</h6>
          <p className="text-[gray-900] md:text-[2.25rem] text-[1.5rem] leading-[2.5rem] md:leading-[2rem] font-extrabold w-[90%] mb-[2rem]">
            For Players
          </p>
          <div className="flex flex-col leading-[2rem] gap-[1.3rem]">
            <p className="text-gray-600">
              If you’re a player seeking representation, you’ve come to the
              right place. <br />
              Please note that we are selective in our process and evaluate
              several <br />
              aspects before moving forward. To be considered, your CV must
              include <br />
              the following:
            </p>
            <ul className="list-disc leading-[2rem] pl-8 text-gray-600">
              <li>Recent Video Footage: No older than 6 months. </li>
              <li>
                Professional Reference: At least one, with contact information.
              </li>
              <li>
                Season Statistics: From the most recent season you played.{" "}
              </li>
              <li>
                Team History: Names of teams, including country, league name,
                and
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
            <p className="leading-[2rem] text-gray-600">
              If your CV meets these requirements, please email it to us at:
              <br />{" "}
              <b className="font-black">greenlightsportsconsult@gmail.com.</b>
            </p>
            <p className="text-gray-600">
              {" "}
              Thank you for providing this information and reaching out to us.
              We will <br /> review your submission and get back to you if there
              is mutual interest.
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex flex-col gap-[1rem]">
  <h6 className="text-h6 font-bold">Partner with Us</h6>
  <p className="text-[gray-900] text-[1.5rem] md:text-[2.25rem] leading-[2.5rem] lg:leading-[2rem] md:leading-[3rem] md:tracking-[0.1rem] font-extrabold mb-[2rem] whitespace-normal break-words">
    <span>For Coach/Scout/GM/Agent</span>
  </p>

  <div className="flex flex-col gap-[1.3rem]">
    <p className="leading-[2rem] text-gray-600">
      If you are a coach, scout, GM, agent, or private business, and would like <br />
      to:
    </p>
    <ul className="list-disc leading-[2rem] pl-8 text-gray-600">
      <li>Learn more about any of our players.</li>
      <li>Recommend a player for representation.</li>
      <li>
        Discuss marketing or commercial opportunities for our players.
      </li>
      <li>Explore opportunities to join our scouting team. </li>
    </ul>
    <p className="leading-[2rem] text-gray-600">
      Please reach out to us via email at:
      <br />
      <b className="font-black">greenlightsportsconsult@gmail.com. </b>
    </p>
    <p className="leading-[2rem] text-gray-600">
      We look forward to connecting with you and exploring potential
      <br />
      opportunities for collaboration.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default ContactUs;
