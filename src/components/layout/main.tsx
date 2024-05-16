'use client'
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
import Autoplay from "embla-carousel-autoplay"
import Logo from "../../app/assets/Logo.jpg"
import Image from "next/image"
import  Tratamentos  from "./tratamentos"
 
export function Main() {
  const plugin = React.useRef(
    Autoplay({ delay: 20000  })
  )
  
  const Card1 = () => (
    <section className="bg-cover bg-center bg-no-repeat bg-banner flex flex-col items-center justify-center h-screen md:h-[100vh] w-full transition-all text-white">
      <div className="flex flex-col gap-4 text-black font-extrabold rounded-lg">
        <div className="flex flex-col gap-4 items-center md:items-baseline">
          <div className="flex items-center justify-center md:flex-row md:gap-4">
            <Image
              src={Logo}
              width={120}
              height={120}
              alt="Logo"
              className="rounded-md w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
            />
  
            <h1 className="font-bold hidden bg-white p-2 rounded-md md:block text-primary md:text-7xl md:self-end">
              UROVIDA
            </h1>
          </div>
          <h1 className="text-4xl md:text-5xl text-white max-w-[95vw] md:max-w-[1200px] p-4 animate-typing bg-primary rounded-md transition-all">
            O cuidado que transforma vidas, encontrando conforto e cura em cada
            consulta.
          </h1>
          <Link href="/clinica" className="animate-fadeIn opacity-0">
            <Button className="bg-primary font-semibold text-white">
              Ver mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );

  const Card2 = () => (
      <section className="bg-cover bg-center bg-no-repeat bg-banner2 flex flex-col items-center justify-center w-[100vw]  md:h-[100vh] text-white">
        <div className="flex flex-col gap-4 text-black font-extrabold rounded-lg">


          <h1 className="text-5xl text-white  md:max-w-[1200px] bg-primary p-4 rounded-br-lg animate-fadeIn  transition-all">
            O cuidado que transforma vidas, encontrando conforto e cura em cada
            consulta.
          </h1>

          <Link href="/">
            <Button className="bg-primary font-semibold text-white ">
              Ver mais
            </Button>
          </Link>
        </div>
      </section>
    );
  
    return (
      <div className="flex flex-col justify-center items-center  ">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[plugin.current]}
        >
          <CarouselContent className=" w-[100vw] ">
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

        <div className="flex items-center flex-coll w-full justify-center  h-[90vh] ">
            
          <Tratamentos />
        </div>

{/* Diretor 1 */}
        <div className="h-[100vh] flex  justify-center bg-cover w-[100vw] bg-banner3">

       

        </div>
      </div>
    );
  }
  