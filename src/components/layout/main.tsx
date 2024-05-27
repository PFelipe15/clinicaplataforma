import * as React from "react"
import Link from "next/link"
import { Button } from "../ui/button"
 
import {   procedimentosPopulares } from "@/app/_services/services"
import Image from "next/image"
import  Tratamentos  from "./tratamentos"
import BlogMain from "./blogMain"
import CarrouselBannerMain from "./carrousel-main"
 
export function Main() { 
     return (
      <div className="flex flex-col justify-center items-center   ">
       <CarrouselBannerMain/>

        <div className="flex  bg-secondary my-10 p-4 items-center flex-coll w-full justify-center     ">
          <Tratamentos />
        </div>

        <div className="max-w-[100vw] h-[400px] w-[720px]  relative flex-col    bg-banner2 bg-cover  flex items-center  justify-center  ">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
          <h1 className="relative m-4 font-bold p-2 rounded-md text-center text-secondary text-3xl ">
            Para nós da <span className="text-black">UROVIDA</span>, a sua vida
            é nossa principal preocupação. Estamos com você em todos os
            aspectos, sempre.
          </h1>
          <Link href="/clinica" className="animate-fadeIn opacity-0">
            <Button className="bg-primary font-semibold text-white">
              Ver mais
            </Button>
          </Link>{" "}
        </div>

        <div className="flex container bg-secondary text-white flex-col py-10 my-10 rounded-md items-center w-full justify-center">
          <div className="mb-4">
            <h2 className="text-4xl font-bold text-center ">
              Tratamentos Populares
            </h2>
            <p className=" text-xl font-bold  text-center   ">
              Contamos com especialistas em Urologia, Nefrologia, Medicina da
              Dor, Acupuntura, Fisioterapia Pélvica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full  ">
            {procedimentosPopulares.map((tratamento, index) => (
              <Link href={tratamento.link} key={index}>
                <div
                  key={index}
                  className="bg-white min-h-[500px] shadow-lg rounded-lg hover:border-2 overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {tratamento.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tratamento.descricao}</p>
                  <div className="relative h-56 w-full">
                    <Image
                      src={tratamento.imagem}
                      alt="Tratamento Cardiovascular Preventivo"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
       
          <BlogMain />
       </div>
    );
  }
  