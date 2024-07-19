'use client'
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import Image, { StaticImageData } from 'next/image';
import { X } from 'lucide-react';
import {images} from '../../app/_services/services'
import Autoplay from 'embla-carousel-autoplay'



export default function Galeria() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<StaticImageData | null>(null);
  const [clinicPhotos, setClinicPhotos] = useState<{ src: string; width: number; height: number; }[]>([]);

 

  return (
    <div>
    
        <>
          <Carousel  
       
            
            opts={{ align: "center", loop:true }}
            className="max-w-sm md:max-w-full"
          >
            <CarouselContent>
              {images.map((photo, index: number) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center sm:basis-full md:basis-1/3 lg:basis-1/3"
                >
                  <div onClick={() => {
                    setIsFullScreen(true);
                    setFullScreenImage(photo);
                  }} key={index}>
                    <div
                      key={index}
                      className="bg-white flex flex-col items-center justify-center rounded-lg shadow-lg gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                    >
                      <Image
                        src={photo}
                        alt={"Galeria"}
                        width={720}
                        height={500}
                        className="rounded-lg object-cover mb-4 max-h-[400px]"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-secondary hover:bg-black -left-[5px]" />
            <CarouselNext className="hover:bg-black -right-[5px]" />
          </Carousel>
          
          {isFullScreen && fullScreenImage && (
            <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center max-w-screen max-h-screen">
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg max-w-lg">
                <div className="flex">
                  <Image
                    src={fullScreenImage.src}
                    alt="Clínica"
                    width={fullScreenImage.width}
                    height={fullScreenImage.height}
                    className="rounded-lg object-contain max-h-[500px]"
                  />
                  <X
                    size={25}
                    className="absolute text-white bg-primary rounded-md m-4 cursor-pointer"
                    onClick={() => {
                      setIsFullScreen(false);
                      setFullScreenImage(null);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </>
     
    </div>
  );
}
