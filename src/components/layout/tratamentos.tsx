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
    <div className="flex items-center p-4 justify-center flex-col">
      <h1 className="text-xl lg:text-3xl text-center text-white font-semibold mb-8 animate-fadeIn">
         Conheça nossos principais tratamentos
      </h1>

      <Carousel  opts={{
        align: "center",
      }}
      className="max-w-sm md:max-w-md lg:max-w-screen-2xl">
  <CarouselContent  >
    {exames.map((exame: Exame, index: number) => (
      <CarouselItem
        key={index}
         
        className="flex items-center justify-center sm:basis-full md:basis-1/3 lg:basis-1/6 "
      >
        <Link href={exame.link} key={index}>
          <div
            key={index}
            className="bg-white py-4 flex flex-col items-center justify-between  rounded-lg shadow-lg gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-h-[550px] "
          >
             <h2 className="text-base text-center font-semibold mb-2">
              {exame.nome}
            </h2>
 
            <Image
              src={exame.imagem}
              alt={exame.nome}
              width={250}
              height={250}
              className="rounded-lg mb-4"
            />
           
            <p className="text-sm text-gray-600 max-w-sm text-justify p-4">{exame.descricao}</p>
             </div>
        </Link>
      </CarouselItem>
    ))}

 
    
  </CarouselContent>
  <CarouselPrevious className="bg-secondary hover:bg-black -left-[5px]" />
  <CarouselNext className="hover:bg-black -right-[5px]" />
</Carousel>

    </div>
  );
}
