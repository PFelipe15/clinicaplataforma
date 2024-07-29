'use client'
import Autoplay from "embla-carousel-autoplay";
import Logo from "../../app/assets/Logo.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function CarrouselBannerMain() {
  const plugin = React.useRef(
    Autoplay({ delay: 20000 })
  );

  const Card1 = () => (
    <section className="bg-cover bg-center bg-no-repeat bg-banner flex flex-col items-center justify-center h-screen md:h-[100vh] w-full transition-all text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-4 text-black font-extrabold rounded-lg"
      >
        <div className="flex flex-col gap-4 items-center md:items-baseline">
          <div className="flex items-center justify-center md:flex-row md:gap-4">
            <div className="bg-white flex items-center right-3 px-4 rounded-md">
              {/* <Image
                src={Logo}
                width={120}
                height={120}
                alt="Logo"
                className="rounded-md w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
              />

              <h1 className="font-bold hidden rounded-md md:block text-primary md:text-7xl">
                UROVIDA
              </h1> */}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <h1 className="text-2xl md:text-5xl mt-0 md:mt-80 text-white max-w-[95vw] md:max-w-[1200px] p-4 animate-typing bg-primary rounded-md transition-all">
              O cuidado que transforma vidas, encontrando conforto e cura em cada
              consulta.
            </h1>
            <Link href="/clinica">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="animate-fadeIn bg-primary font-semibold text-white py-2 px-4 rounded-md"
              >
                Ver mais
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );

  const Card2 = () => (
    <section className="bg-cover bg-center bg-no-repeat bg-banner2 flex flex-col items-center justify-center h-screen md:h-[100vh] w-full transition-all text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-4 text-black font-extrabold rounded-lg"
      >
        <div className="flex flex-col gap-4 items-center md:items-baseline">
          <div className="flex items-center justify-center md:flex-row md:gap-4">
            {/* <div className="bg-white flex items-center justify-center px-4 rounded-md mt-5">
              <Image
                src={Logo}
                width={120}
                height={120}
                alt="Logo"
                className="rounded-md w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
              />

              <h1 className="font-bold hidden rounded-md md:block text-primary md:text-7xl">
                UROVIDA
              </h1>
            </div> */}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <h1 className="text-2xl md:text-5xl text-white max-w-[95vw] md:max-w-[1200px] p-4 animate-typing bg-primary rounded-md transition-all">
              Somos uma clínica capacitada com diversas especialidades,
              oferecendo cuidado especializado e excelência em cada consulta.
            </h1>
            <Link href="/clinica">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="animate-fadeIn bg-primary font-semibold text-white py-2 px-4 rounded-md"
              >
                Ver mais
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );

  return (
    <div>
      <Carousel opts={{ loop: true }}>
        <CarouselContent className="w-[100vw]">
          {Array.from({ length: 2 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                {index === 0 && <Card1 />}
                {index === 1 && <Card2 />}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
