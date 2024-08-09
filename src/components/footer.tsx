import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0C111D] min-h-[456px] text-white pt-[50px]">
      <div className="w-[80%] m-auto flex flex-col gap-[40px]">
        <div className="2xl:flex flex-row xl:flex flex-row lg:flex flex-row md:flex flex-row max-sm:flex flex-col gap-[40px]">
          <div className="grid grid-cols-2 content-between justify-between place-items-start gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-6">
                <Image
                  src="/images/logo.png"
                  alt="Image"
                  className="object-cover w-[60px] h-[60px]"
                  // layout="fill"
                  width={50}
                  height={50}
                />

                <h3 className="leading-[60px] text-xl">
                  Green Light Sports Consult
                </h3>
              </div>
              <div>
                <p className="leading-[35px] max-sm:width-[50%]">
                  From meticulous sports management and strategic consultancy to
                  dynamic image branding and expert contract negotiation, we are
                  here to provide the guidance and resources you need to succeed
                  both on and off the field. Welcome to Green Light Sports
                  Consult—where you unleash your inner champion.
                </p>
              </div>
              <div>
                <p className="leading-[10px] text-lg mt-8">Useful Links</p>
                <ul className="2xl:grid grid-cols-6 md:grid grid-cols-2 max-sm:grid grid-cols-2 gap-1 leading-[80px]">
                  <li className="font-bold">Home</li>
                  <li className="font-bold">About Us</li>
                  <li className="font-bold">Services</li>
                  <li className="font-bold">Our Team</li>
                  <li className="font-bold">Our Players</li>
                  <li className="font-bold">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h5 className="leading-[40px]">Contact Us</h5>
            <ul className="leading-[30px]">
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
      <div className="leading-[60px] max-sm:leading-[80px] border-t-[1px] border-gray-500 relative inset-0 h-24 width-[80%] m-auto mt-8 max-sm:width-[100%]">
          <p className="text-gray-500 max-sm:text-[14px] max-sm:text-center">
            © 2024 Green Light Sports Consult. All rights reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;
