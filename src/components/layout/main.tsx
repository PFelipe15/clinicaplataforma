import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { procedimentosPopulares } from "@/app/_services/services";
import Image from "next/image";
import Tratamentos from "./tratamentos";
import BlogMain from "./blogMain";
import CarrouselBannerMain from "./carrousel-main";
import telecomunicacao from '../../app/assets/telecomunicacoes.jpg';
import ButtonConsulta from "./buttonConsulta";
import Comments from "./comments";

export function Main() {
  return (
    <div className="flex flex-col justify-center items-center">
      <CarrouselBannerMain />

      <div className="flex  bg-secondary my-10 p-10 items-center     justify-center">
        <Tratamentos />
      </div>

<div className="flex  flex-col md:flex-row items-center justify-between  container ">

      <div className="max-w-[100vw] h-[400px] w-[720px] relative flex-col bg-banner2 bg-cover flex items-center justify-center">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm">
        </div>
        <h1 className="relative m-4 font-bold p-2 rounded-md text-center text-secondary text-3xl">
          Para nós da <span className="text-black">UROVIDA</span>, a sua vida é
          nossa principal preocupação. Estamos com você em todos os aspectos,
          sempre.
        </h1>
        <Link href="/clinica" className="animate-fadeIn opacity-0">
          <Button className="bg-primary font-semibold text-white">
            Ver mais
          </Button>
        </Link>
       </div>
       <div>
      <Comments/>
       </div>
</div>

      {/* Seção de Teleconsultas */}
      <div className="flex max-w-sm sm:p-4 lg:max-w-screen-2xl flex-col items-center justify-center w-full min-h-[560px] py-10 my-10 bg-telecomunicacoes bg-cover bg-center text-black rounded-md transform transition-transform duration-500">
  <div className="mb-8 text-center bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tele-consultas 🛜</h2>
    <p className="text-lg  sm:text-xl font-semibold mt-2">
      A UROVIDA também oferece serviços de teleconsultas para maior comodidade e melhor comunicação.
    </p>
  </div>
  <p className="text-base sm:text-lg px-4 mb-4 bg-primary text-white p-4 rounded-lg shadow-md text-center">
    Agende suas consultas online com nossos especialistas de forma rápida e segura, sem sair de casa. Oferecemos atendimento remoto em Urologia, Nefrologia, Medicina da Dor, Acupuntura, e Fisioterapia Pélvica.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 items-center">
    <ButtonConsulta />
    <Link href={'/equipe'}>
      <Button className="text-sm md:text-base">Nossos Médicos</Button>
    </Link>
  </div>
</div>

      <div className="flex container bg-secondary text-white flex-col py-10 my-10 rounded-md items-center w-full justify-center">
        <div className="mb-4">
          <h2 className="text-4xl font-bold text-center">
            Tratamentos Populares
          </h2>
          <p className="text-xl font-bold text-center">
            Contamos com especialistas em Urologia, Nefrologia, Medicina da Dor,
            Acupuntura, Fisioterapia Pélvica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
                    alt={tratamento.title}
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
