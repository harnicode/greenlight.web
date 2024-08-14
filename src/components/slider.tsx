import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@greenlight-web/components/ui/carousel";
import { ICardData } from "./types";

const Slider = ({
  onCardClick,
}: {
  onCardClick: (param: ICardData) => void;
}) => {
  const items: Array<ICardData> = [
    {
      src: "/images/ronaldo.png",
      alt: "Cristiano Ronaldo",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
      full_legal_name: "Cristiano Ronaldo",
      nationality: "Portugal",
      date_of_birth: "Dec 08, 1989",
      position: "Attacking Midfielder",
      height: "1.50m (4’0”)",
      foot: "Right",
      language: "Portuguese",
      professional_debut: "2019, 19 years old",
      current_club: "CD Aguila, El Salvador",
      contract_end_date: "Jan. 31, 2020",
      transfer_fee: "None, free transfer",
      international_competitions: "CONCACAF Champions Cup",
      awards: "2023 Goalkeeper of the Year",
      video: "ronaldo.mp4",
      poster: "ronaldo.jpeg",
    },
    {
      src: "/images/player2.png",
      alt: "Gavi",
      description: "Midfielder",
      location: "Barcelona, Spain",
      full_legal_name: "Gavi",
      nationality: "Spain",
      date_of_birth: "Dec 08, 1989",
      position: "Midfielder",
      height: "1.70m (6’0”)",
      foot: "Left",
      language: "Spanish",
      professional_debut: "2019, 19 years old",
      current_club: "Manchester Unitetd",
      contract_end_date: "June 31, 2022",
      transfer_fee: "None, free transfer",
      international_competitions: "player 1",
      awards: "2023 Goalkeeper of the Year",
      video: "gavi.mp4",
      poster: "gavi.jpeg",
    },
    {
      src: "/images/player3.png",
      alt: "Kyle Walker",
      description: "Goal Keeper",
      location: "Lisbon, Portugal",
      full_legal_name: "Kyle Walker",
      nationality: "Portugal",
      date_of_birth: "Dec 08, 1989",
      position: "Goal Keeper",
      height: "1.83m (6’0”)",
      foot: "Right",
      language: "Portuguese, English",
      professional_debut: "2019, 19 years old",
      current_club: "Chelsea FC",
      contract_end_date: "Dec 31, 2024",
      transfer_fee: "None, free transfer",
      international_competitions: "player 1",
      awards: "2023 Goalkeeper of the Year",
      video: "walker.mp4",
      poster: "walker.jpeg",
    },
    {
      src: "/images/ronaldo.png",
      alt: "Cristiano Ronaldo",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
      full_legal_name: "Cristiano Ronaldo",
      nationality: "Portugal",
      date_of_birth: "Dec 08, 1989",
      position: "Attacking Midfielder",
      height: "1.50m (4’0”)",
      foot: "Right",
      language: "Portuguese",
      professional_debut: "2019, 19 years old",
      current_club: "CD Aguila, El Salvador",
      contract_end_date: "Jan. 31, 2020",
      transfer_fee: "None, free transfer",
      international_competitions: "CONCACAF Champions Cup",
      awards: "2023 Goalkeeper of the Year",
      video: "ronaldo.mp4",
      poster: "ronaldo.jpeg",
    },
    {
      src: "/images/player2.png",
      alt: "Gavi",
      description: "Midfielder",
      location: "Barcelona, Spain",
      full_legal_name: "Gavi",
      nationality: "Spain",
      date_of_birth: "Dec 08, 1989",
      position: "Midfielder",
      height: "1.70m (6’0”)",
      foot: "Left",
      language: "Spanish",
      professional_debut: "2019, 19 years old",
      current_club: "Manchester Unitetd",
      contract_end_date: "June 31, 2022",
      transfer_fee: "None, free transfer",
      international_competitions: "player 1",
      awards: "2023 Goalkeeper of the Year",
      video: "gavi.mp4",
      poster: "gavi.jpeg",
    },
    {
      src: "/images/player3.png",
      alt: "Kyle Walker",
      description: "Goal Keeper",
      location: "Lisbon, Portugal",
      full_legal_name: "Kyle Walker",
      nationality: "Portugal",
      date_of_birth: "Dec 08, 1989",
      position: "Goal Keeper",
      height: "1.83m (6’0”)",
      foot: "Right",
      language: "Portuguese, English",
      professional_debut: "2019, 19 years old",
      current_club: "Chelsea FC",
      contract_end_date: "Dec 31, 2024",
      transfer_fee: "None, free transfer",
      international_competitions: "player 1",
      awards: "2023 Goalkeeper of the Year",
      video: "walker.mp4",
      poster: "walker.jpeg",
    },
    
  ];

  return (
    <Carousel className="w-[100%]">
      <CarouselContent className="-ml-3">
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Image
                src={item.src}
                alt={item.alt}
                className="object-cover min-h-[480px] w-[100%]"
                width={380}
                height={480}
              />
              <div className="border-t border-white/50 bg-white/20 backdrop-blur-lg w-full h-[240px] mt-[-240px] text-white text-left flex flex-col gap-3 p-6">
                <p className="font-bold text-xl">{item.alt}</p>
                <p className="font-bold">{item.description}</p>
                <p>{item.location}</p>
                <button
                  className="flex items-center"
                  onClick={() => onCardClick(item)}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="rotate-45 ml-2"
                  >
                    <path
                      fill="#fff"
                      d="M4 15l7-7 7 7-1.4 1.4L11 10.8V21h-2V10.8L5.4 16.4 4 15z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="relative bottom-0 top-10 left-0 h-10 w-10 " />
      <CarouselNext className="relative bottom-0 top-10 left-5 h-10 w-10 " />
    </Carousel>
  );
};

export default Slider;