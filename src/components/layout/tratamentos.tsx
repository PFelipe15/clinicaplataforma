import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import { exames } from "@/app/_services/services";

export default function Tratamentos() {
  interface Exame {
    nome: string;
    descricao: string;
    imagem:   StaticImageData; // Corrigido para o tipo StaticImageData
    link: string;
  }

  return (
    <div className="container flex  items-center  w-[100vw] justify-center  flex-col">
      <h1 className=" text-3xl text-center text-white font-semibold mb-8 animate-fadeIn">
         Conheça nossos principais tratamentos
      </h1>

      <Carousel className="flex ">
        <CarouselContent className=" ">
          {exames.map((exame: Exame, index: number) => (
            <CarouselItem
              key={index}
              className=" flex   items-center justify-center sm:basis-full md:basis-1/2 lg:basis-1/3 h"
            >
              <Link href={exame.link} key={index}>
                <div
                  key={index}
                  className="bg-white rounded-lg  max-w-sm  shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                >
                  <Image
                    src={exame.imagem}
                    alt={exame.nome}
                    width={400}
                    height={400}
                    className="rounded-lg mb-4"
                  />
                  <h2 className="text-xl  font-semibold mb-2">
                    {exame.nome}
                  </h2>
                  <p className="text-gray-600 max-w-sm">{exame.descricao}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious className="  bg-secondary  hover:bg-black -left-[50px]" />
          <CarouselNext className="hover:bg-black -right-[50px] " />
      </Carousel>
    </div>
  );
}
