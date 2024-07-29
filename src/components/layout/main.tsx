import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { procedimentosPopulares } from "@/app/_services/services";
import Image from "next/image";
import Tratamentos from "./tratamentos";
import BlogMain from "./blogMain";
import CarrouselBannerMain from "./carrousel-main";
 import Teleconsultas from "./teleconsultas";
import { Motion } from "./motion-custom";
import UrovidaWidget from "./urovida-widget";

export function Main() {
  const fadeInContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  

  return (
    <div className="flex  flex-col justify-center items-center">
      <CarrouselBannerMain />

      <div className="flex  bg-secondary my-12 w-full items-center justify-center">
        <Tratamentos />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 container ">
        <div className="max-w-[100vw] h-[400px] w-[1220px] relative flex-col bg-banner2 bg-cover flex items-center justify-center">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
          <h1 className="relative m-4 font-bold p-2 rounded-md text-center text-secondary text-3xl">
            Para nós da <span className="text-black">UROVIDA</span>, a sua vida
            é nossa principal preocupação. Estamos com você em todos os
            aspectos, sempre.
          </h1>
          <Link href="/clinica" className="animate-fadeIn opacity-0">
            <Button className="bg-primary font-semibold text-white">
              Ver mais
            </Button>
          </Link>
        </div>
        <div className="flex flex-col text-white rounded-md gap-4 font-bold items-center bg-primary p-10 justify-center">
    <h1 className="text-2xl text-center"> Nossas avaliações </h1>
       <UrovidaWidget />
         
        </div>
      </div>
      <Teleconsultas />

      <Motion
        initial="hidden"
        animate="visible"
        variants={fadeInContainer}
        className="flex   bg-secondary text-white flex-col py-10 my-10 rounded-md items-center w-screen justify-center"
      >
        <Motion variants={fadeInItem} className="mb-4 text-center">
          <h2 className="text-4xl font-bold">
            Outros Tratamentos especializados
          </h2>
          <p className="text-xl font-bold">
            Contamos com especialistas em Urologia, Nefrologia, Medicina da Dor,
            Acupuntura, Fisioterapia Pélvica.
          </p>
        </Motion>
        <Motion
          variants={fadeInContainer}
          className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {procedimentosPopulares.map((tratamento, index) => (
            <Link href={tratamento.link} key={index}>
              <Motion
                key={index}
                variants={fadeInItem}
                whileHover={{ scale: 1.05 }}
                className="bg-white min-h-[500px] shadow-lg rounded-lg hover:border-2 overflow-hidden  p-6"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {tratamento.title}
                </h3>
                <p className="text-gray-600 mb-4">{tratamento.descricao}</p>
                <div className="relative h-56  ">
                  <Image
                    src={tratamento.imagem}
                    alt={tratamento.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </Motion>
            </Link>
          ))}
        </Motion>
      </Motion>

      <BlogMain />
    </div>
  );
}
