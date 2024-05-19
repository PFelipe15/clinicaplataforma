import Image from "next/image";
import ImageExample from "../../app/assets/347421952_1446950042802881_739511864334827390_n.jpg";
import Link from "next/link";
 import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
 import { especialidades } from "@/app/services";

export default function Tratamentos() {
  

  return (
    <div className="container flex  items-center  w-[100vw] justify-center  flex-col">
      <h1 className=" text-3xl text-center text-white font-semibold mb-8 animate-fadeIn">
        <span className="animate-typing">Nossas especialidades</span>
        <br />
        conheça nossos principais tratamentos
      </h1>

      <Carousel className="flex ">
        <CarouselContent className=" ">
          {especialidades.map((tratamento, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3 h"
            >
              <Link href={"/"} key={index}>
                <div
                  key={tratamento.nome}
                  className="bg-white rounded-lg  shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                >
                  <Image
                    src={tratamento.imagem}
                    alt={tratamento.nome}
                    width={400}
                    height={400}
                    className="rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    {tratamento.nome}
                  </h2>
                  <p className="text-gray-600">{tratamento.descricao}</p>
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
