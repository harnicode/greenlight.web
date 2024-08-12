"use client";

import React, { useState } from 'react';
import Header from '@greenlight-web/components/Header';
import LandingHero from '@greenlight-web/components/landinghero';
import AboutUs from '@greenlight-web/components/aboutUs';
import Services from '@greenlight-web/components/services';
import OurTeams from '@greenlight-web/components/ourTeams';
import OurPlayer from '@greenlight-web/components/ourPlayer';
import ContactUs from '@greenlight-web/components/contactUs';
import Footer from '@greenlight-web/components/footer';
import { ScrollProvider } from '@greenlight-web/components/scrollContext';
import { VisibilityProvider } from '@greenlight-web/components/visibilityContext';
import { ICardData } from '@greenlight-web/components/types';

const Home: React.FC = () => {
  const [activeCard, setActiveCard] = useState<ICardData | null>(null)
  return (
    <main className="flex flex-col items-center justify-between p-0">
      <ScrollProvider>
        <VisibilityProvider>
          <Header playerDetail={activeCard} onClose={() => setActiveCard(null)} />
          <LandingHero />
          <AboutUs />
          <Services />
          <OurTeams />
          <OurPlayer onCardClick={(cardData) => setActiveCard(cardData)} />
          <ContactUs />
          <Footer />
        </VisibilityProvider>
      </ScrollProvider>
    </main>
  );
};

export default Home;
