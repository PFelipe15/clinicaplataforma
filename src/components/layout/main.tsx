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
 import tratamento1Image from '../../app/assets/Tratamento Cardiovascular Preventivo.webp'
 import tratamento2Image from '../../app/assets/tcc-03.webp'
 import tratamento3Image from '../../app/assets/ReabilitacaoFisica.jpeg'
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
    <section className="bg-cover bg-center bg-no-repeat bg-banner2 flex flex-col items-center justify-center h-screen md:h-[100vh] w-full transition-all text-white">
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

        <div className="flex my-10  items-center flex-coll w-full justify-center     ">
          <Tratamentos />
        </div>

        <div className="max-w-[100vw] h-[400px] w-[720px]  relative flex-col    bg-banner2 bg-cover  flex items-center  justify-center  ">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
          <h1 className="relative m-4 font-bold p-2 rounded-md text-center text-secondary text-3xl ">
            Na nossa Clínica, sua vida é nossa principal preocupação. Estamos
            aqui para você, em todos os aspectos, sempre.
          </h1>
          <Link href="/clinica" className="animate-fadeIn opacity-0">
            <Button className="bg-primary font-semibold text-white">
              Ver mais
            </Button>
          </Link>{" "}
        </div>

        <div className="flex container flex-col my-10 items-center w-full justify-center">
          <h2 className="text-4xl font-bold text-center text-primary">
            Tratamentos Populares
          </h2>
          <p className="text-base font-bold mb-8 text-center text-primary">
            Contamos com especialistas em Urologia, Nefrologia, Radiologia,
            Fisioterapia, Ginecologia e Cirurgia Plástica
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
            <div className="bg-white shadow-lg rounded-lg hover:border-2 overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Terapia Cognitivo-Comportamental (TCC)
              </h3>
              <p className="text-gray-600 mb-4">
                Uma abordagem psicoterapêutica que ajuda os pacientes a
                entenderem e mudarem seus padrões de pensamento e comportamento.
                É eficaz no tratamento de ansiedade, depressão e outros
                distúrbios mentais.
              </p>
              <div className="relative h-56 w-full">
                <Image
                  src={tratamento1Image}
                  alt="Terapia Cognitivo-Comportamental"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg hover:border-2 overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Reabilitação Física
              </h3>
              <p className="text-gray-600 mb-4">
                Programas de fisioterapia que ajudam os pacientes a recuperarem
                a mobilidade e a função após lesões ou cirurgias. Inclui
                exercícios personalizados, terapia manual e modalidades de
                tratamento.
              </p>
              <div className="relative h-56 w-full">
                <Image
                  src={tratamento2Image}
                  alt="Reabilitação Física"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg hover:border-2 overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Tratamento Cardiovascular Preventivo
              </h3>
              <p className="text-gray-600 mb-4">
                Focado em prevenir doenças cardíacas através de avaliações
                regulares, orientação sobre estilo de vida saudável, e
                tratamentos específicos. Inclui controle da pressão arterial,
                colesterol e diabetes.
              </p>
              <div className="relative h-56 w-full">
                <Image
                  src={tratamento3Image}
                  alt="Tratamento Cardiovascular Preventivo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  