'use client'
import React, { useState } from 'react';
import Image1 from '../assets/pexels-matthiaszomer-339620.jpg';
import Image2 from '../assets/Medicos2.jpg';
import Image, { StaticImageData } from 'next/image';
import {  Maximize2, X } from 'lucide-react';

const Clinica = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<StaticImageData | null>(null);

  return (
    <div className="container flex flex-col p-8">
      <h1 className="text-3xl text-primary font-semibold  mb-8">
        Sobre a Clínica
      </h1>

      <div className="grid grid-cols-1 animate-fadeIn sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primary text-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105">
          <h2 className="text-2xl border-b-2 p-2 font-bold mb-4">Missão</h2>
          <p className="text-white">
            Nossa missão é fornecer cuidados de saúde excepcionais e compassivos
            para todos os pacientes.
          </p>
        </div>

        <div className="bg-primary text-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105">
          <h2 className="text-2xl  p-2 border-b-2  font-bold text-white  mb-4">
            Visão
          </h2>
          <p className="text-white">
            Nosso objetivo é ser reconhecido como líderes em excelência clínica
            e inovação tecnológica na área de saúde.
          </p>
        </div>

        <div className="bg-primary text-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105">
          <h2 className="text-2xl p-2 border-b-2  font-bold text-white mb-4">
            Valores
          </h2>
          <ul className="list-disc text-white pl-6">
            <li>Integridade</li>
            <li>Compaixão</li>
            <li>Respeito</li>
            <li>Excelência</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex gap-4 text-center flex-col lg:flex-row lg:text-left justify-between items-center border-b-2 border-primary py-4 ">
        <div className="flex flex-col  ">
          <h1 className="text-3xl text-primary font-semibold  mb-8">
            Nosso estabelecimento
          </h1>
          <p className=" text-xl">
            Veniam incididunt eiusmod incididunt cupidatat et incididunt eiusmod
            eiusmod magna velit. Lorem ex in deserunt pariatur magna amet aute
            veniam cillum incididunt. Non voluptate elit culpa amet sint esse
            incididunt magna nulla aliqua excepteur esse est. Tempor minim culpa
            elit quis nisi qui sunt consectetur. Et sint ipsum nisi aute tempor
            aliquip consequat.
          </p>
        </div>
        <Image
          src={Image1}
          className="animate-fadeIn"
          alt="Clínica"
          width={700}
          height={800}
        />
      </div>

      <div className=" mt-8  ">
        <h1 className="text-3xl text-primary font-semibold  mb-8">Galeria</h1>
        <div className="mt-8 grid grid-cols-1 animate-fadeIn sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" transition-all rounded-lg relative hover:border-primary border-2 hover:scale-95">
            <Image
              src={Image1}
              className="animate-fadeIn"
              alt="Clínica"
              width={700}
              height={800}
            />
            <Maximize2
              size={25}
              onClick={() => setIsFullScreen(true)}
              className="absolute transition-all  hover:scale-150 text-primary t  m-4 right-0 top-0"
            />
          </div>

          <div className=" transition-all rounded-lg relative hover:border-primary border-2 hover:scale-95">
            <Image
              src={Image1}
              className="animate-fadeIn"
              alt="Clínica"
              width={700}
              height={800}
            />
            <Maximize2
              size={25}
              onClick={() => {
                setIsFullScreen(true);
                setFullScreenImage(Image1); // Defina a URL da imagem clicada
              }}
              className="absolute transition-all  hover:scale-150 text-primary t  m-4 right-0 top-0"
            />
          </div>
          <div className=" transition-all rounded-lg relative hover:border-primary border-2 hover:scale-95">
            <Image
              src={Image2}
              className="animate-fadeIn"
              alt="Clínica"
              width={800}
              height={700}
            />
            <Maximize2
              size={25}
              onClick={() => {
                setIsFullScreen(true);
                setFullScreenImage(Image2); // Defina a URL da imagem clicada
              }}
              className="absolute transition-all  hover:scale-150 text-primary t  m-4 right-0 top-0"
            />
          </div>
        </div>
      </div>

      {isFullScreen && fullScreenImage && (
        <div className="fixed inset-0    bg-opacity-50 z-50 flex justify-center items-center max-w-[100vw]">
          <div className="  flex flex-col items-center   bg-white p-4 rounded-lg shadow-lg">
            <div className='flex   '>
              <Image
                src={fullScreenImage}
                alt="Clínica"
                width={700}
                height={720}
                className="rounded-lg "
              ></Image>
              <X
                size={25}
                className="absolute  text-white bg-primary rounded-md m-4  cursor-pointer"
                onClick={() => {
                  setIsFullScreen(false);
                  setFullScreenImage(null); // Limpe o estado da imagem em tela cheia
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clinica;
