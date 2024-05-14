import * as React from "react"
  import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { Button } from "../ui/button"

export function Main() {

  
    const Card1 = () => (
      <section className="bg-cover bg-center bg-no-repeat bg-banner flex flex-col items-center justify-center  md:h-[80vh] text-white">
        <div className="flex flex-col gap-4 text-black font-extrabold rounded-lg">
          <h1
            className={
              "text-bold  font-sans md:mb-4 md:text-4xl font-normal bg-white text-primary rounded-xl p-1"
            }
          >
            A melhor Clinica de Teresina, se preocupa com sua saude e bem estar
          </h1>
          <Link href="/">
            <Button className="bg-primary font-semibold text-white ">
              Ver mais
            </Button>
          </Link>
        </div>
      </section>
    );
  
    const Card2 = () => (
      <section className="bg-cover bg-center bg-no-repeat bg-banner2 flex flex-col items-center justify-center  md:h-[80vh] text-white">
        <div className="flex flex-col gap-4 text-black font-extrabold rounded-lg">
          <h1
            className={
              "text-bold  font-sans md:mb-4 md:text-4xl font-normal bg-white text-primary rounded-xl p-1"
            }
          >
           Sobre a gente e não sei o que
          </h1>
          <Link href="/">
            <Button className="bg-primary font-semibold text-white ">
              Ver mais
            </Button>
          </Link>
        </div>
      </section>
    )
  
    return (
      <Carousel>
        <CarouselContent className="w-[90vw] h-[90vh]">
          {Array.from({ length: 2 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                {index === 0 && <Card1 />}
                {index === 1 && <Card2 />}
              </div>
            </CarouselItem>
          ))}
         
        </CarouselContent>
        <CarouselPrevious />
          <CarouselNext />
      </Carousel>
    );
  }
  