import Image from "next/legacy/image";
import { useScroll } from "@greenlight-web/components/scrollContext";

const Footer = () => {
  const { scrollToDiv } = useScroll();

  const handleScroll = (section: string) => scrollToDiv(section);
  const sections = ["about-us", "services", "team", "players", "contact-us"];

  const formatSectionName = (section: string) =>
    section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="relative bg-[#0C111D] min-h-[456px] text-white pt-[50px]">
      <div className="w-[80%] m-auto flex flex-col gap-[40px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="basis-3/5 content-between justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-6 items-center justify-start">
                <Image
                  src="/images/logo.png"
                  alt="Image"
                  className="object-cover w-[60px] h-[60px]"
                  // layout="fill"
                  width={50}
                  height={50}
                />
                <h3 className="text-md md:text-xl font-bold">
                  Green Light Sports Consult
                </h3>
              </div>
              <div>
                <p className="leading-[35px] md:w-[80%]">
                  From meticulous sports management and strategic consultancy to
                  dynamic image branding and expert contract negotiation, we are
                  here to provide the guidance and resources you need to succeed
                  both on and off the field. Welcome to Green Light Sports
                  Consult—where you unleash your inner champion.
                </p>
              </div>
              <div>
                <p className="leading-[35px] text-lg">Useful Links</p>
                <ul className="grid grid-cols-2 2xl:grid-cols-6 items-center justify-start gap-4 py-4">
                  {sections.map((section) => (
                    <li
                      key={section}
                      className="font-bold cursor-pointer"
                      onClick={() => handleScroll(section)}
                    >
                      {formatSectionName(section)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row basis-2/5 md:justify-end">
            <ul className="leading-[35px]">
              <li className="text-lg leading-[35px]">Contact Us</li>
              <li>Call: 030 398 0009, +1 21 4641 2354</li>
              <li>Whatsapp: +1 61 4356 0823</li>
              <li>Facebook: green Light Sports Consult</li>
              <li>Email: greenlightsportsconsult@gmail.com</li>
              <li>Visit Us: Nii Ayi Kushie St, Tantra Hill.</li>
              <li>Location: Box AT 394 Achimota</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="relative m-auto mt-8 border-t-[1px] border-gray-500
             flex items-center justify-center 
             w-full md:w-[80%] lg:w-[80%]
             md:justify-start lg:justify-start"
      >
        <p className="text-gray-500 text-[12px] md:text-[14px] leading-[80px] md:leading-[80px]">
          © 2024 Green Light Sports Consult. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
