'use client'
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import Image, { StaticImageData } from 'next/image';
import { X } from 'lucide-react';
import { images } from '../../app/_services/services';
import { motion } from 'framer-motion';

export default function Galeria() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<StaticImageData | null>(null);

  return (
    <div>
      <>
        <Carousel
          opts={{ align: "center", loop: true }}
          className="max-w-sm md:max-w-full"
        >
          <CarouselContent>
            {images.map((photo, index: number) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center sm:basis-full md:basis-1/3 lg:basis-1/3"
              >
                <motion.div
                  onClick={() => {
                    setIsFullScreen(true);
                    setFullScreenImage(photo);
                  }}
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
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
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-secondary hover:bg-black -left-[5px]" />
          <CarouselNext className="hover:bg-black -right-[5px]" />
        </Carousel>

        {isFullScreen && fullScreenImage && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center max-w-screen max-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        )}
      </>
    </div>
  );
}
