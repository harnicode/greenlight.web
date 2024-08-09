import LandingHero from "@greenlight-web/components/landinghero";
import AboutUs from "@greenlight-web/components/aboutUs";
import Services from "@greenlight-web/components/services";
import OurTeams from "@greenlight-web/components/ourTeams";
import OurPlayer from "@greenlight-web/components/ourPlayer";
import ContactUs from "@greenlight-web/components/contactUs";
import Footer from "@greenlight-web/components/footer";

import { ScrollProvider } from "@greenlight-web/components/scrollContext";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-0">
      <ScrollProvider>        
        <LandingHero />
        <AboutUs />
        <Services />
        <OurTeams />
        <OurPlayer />
        <ContactUs />
        <Footer />
      </ScrollProvider>
    </main>
  );
}