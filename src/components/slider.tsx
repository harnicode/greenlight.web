import Image from "next/image";
import { Button } from "@greenlight-web/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@greenlight-web/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@greenlight-web/components/ui/alert-dialog";

export function Slider() {
  const items = [
    {
      src: "/images/ronaldo.png",
      alt: "Cristiano Ronaldo",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/player3.png",
      alt: "Player 3",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/player2.png",
      alt: "Player 2",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/ronaldo.png",
      alt: "Cristiano Ronaldo",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/player3.png",
      alt: "Player 3",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/player2.png",
      alt: "Player 2",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/ronaldo.png",
      alt: "Cristiano Ronaldo",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/player3.png",
      alt: "Player 3",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
    {
      src: "/images/player2.png",
      alt: "Player 2",
      description: "Attacking Midfielder",
      location: "Lisbon, Portugal",
    },
  ];

  return (
    <Carousel className="w-[100%]">
      <CarouselContent className="-ml-3">
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="relative">
              <Image
                src={item.src}
                alt={item.alt}
                className="object-cover min-h-[480px] w-[100%]"
                width={380}
                height={480}
              />
              <div className="relative inset-0 bg-[rgba(0,0,0,0.5)] w-[100%] h-[240px] mt-[-240px] text-white text-left flex flex-col gap-3 p-6">
                <p>{item.alt}</p>
                <p>{item.description}</p>
                <p>{item.location}</p>
                <Button className="text-left bg-[transparent] hover:bg-[transparent]">
                  <AlertDialog>
                    <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#757575"
                      d="M4 15l7-7 7 7-1.4 1.4L11 10.8V21h-2V10.8L5.4 16.4 4 15z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute bottom-0 top-100 left-0 h-10 w-10 " />
      <CarouselNext className="absolute bottom-0 left-16 top-100 h-10 w-10 " />
    </Carousel>
  );
}
