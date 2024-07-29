'use client'
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { exames } from "@/app/_services/services";
import Autoplay from "embla-carousel-autoplay"

export default function Tratamentos() {

  interface Exame {
    nome: string;
    descricao: string;
    imagem: StaticImageData;
    link: string;
  }

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

 
  return (
    <div className="flex items-center justify-center flex-col p-4">
      <h1 className="text-xl lg:text-3xl text-center text-white font-semibold mb-8 animate-fadeIn">
        Conheça nossos principais tratamentos
      </h1>

      <Carousel
          opts={{ loop: true }}
          plugins={
            [Autoplay({ delay: 2000, stopOnInteraction: true })]}


        className=" max-w-screen-xl container max-w-sm md:max-w-screen-2xl min-h-[400px]"
      >
        <CarouselContent>
          {exames.map((exame: Exame, index: number) => (
            <CarouselItem
              key={index}
              className="flex items-center my-4 justify-center sm:basis-full md:basis-1/5"
            >
              <Link href={exame.link} key={index}>
                <div className="relative bg-white py-4 flex flex-col items-center justify-between rounded-lg shadow-lg gap-2 p-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl h-[330px]">
                  <h2 className="text-base font-bold text-center max-w-[220px] mb-2">
                    {exame.nome}
                  </h2>

                  <Image
                    src={exame.imagem}
                    alt={exame.nome}
                    width={250}
                    height={250}
                    className="rounded-lg mb-4"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 rounded-lg text-white opacity-0"
                  >
                    <p className="text-center">{exame.descricao}</p>
                  </motion.div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="bg-secondary hover:bg-black -left-[5px]" />
        <CarouselNext className="hover:bg-black -right-[5px]" /> */}
      </Carousel>
    </div>
  );
}
