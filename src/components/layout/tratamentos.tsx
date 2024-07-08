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
    <div className="flex items-center p-4  justify-center  flex-col">
      <h1 className=" text-xl lg:text-3xl text-center text-white font-semibold mb-8 animate-fadeIn">
         Conheça nossos principais tratamentos
      </h1>

      <Carousel  opts={{
        align: "center",
      }}
      className="max-w-sm md:max-w-full ">
  <CarouselContent >
    {exames.map((exame: Exame, index: number) => (
      <CarouselItem
        key={index}
        onClick={() => {
          setIsFullScreen(true);
          setFullScreenImage(photo);
        }}
        className="flex items-center justify-center sm:basis-full md:basis-1/3 lg:basis-1/6 pl-4"
      >
        <Link href={exame.link} key={index}>
          <div
            key={index}
            className="bg-white flex flex-col items-center justify-center  rounded-lg shadow-lg gap-2  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-h-[350px]"
          >
 
            <Image
              src={exame.imagem}
              alt={exame.nome}
              width={100}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className=" text-base font-semibold mb-2">
              {exame.nome}
            </h2>
            <p className="text-sm text-gray-600 max-w-[350px] text-justify p-4">{exame.descricao}</p>
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
