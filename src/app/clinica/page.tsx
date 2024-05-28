'use client'
import React, { useState } from 'react';
import Image1 from '../assets/Funcionarios/Propietario2[1].jpg';
import Image2 from '../assets/Medicos2.jpg';
import Image, { StaticImageData } from 'next/image';
import { Maximize2, X } from 'lucide-react';

const Clinica = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<StaticImageData | null>(null);

  const imagens: StaticImageData[] = [Image1, Image1, Image2];

  return (
    <div className="container flex flex-col p-8">
      <h1 className="text-3xl text-primary font-semibold mb-8">Sobre a Clínica</h1>

      <div className="grid grid-cols-1 animate-fadeIn sm:grid-cols-2 gap-6">
        <div className="bg-primary text-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105">
          <h2 className="text-2xl border-b-2 p-2 font-bold mb-4">Missão</h2>
          <p className="text-white">
            Proporcionar atendimento de excelência em saúde, focado em
            diagnóstico preciso e tratamentos inovadores para patologias do
            trato genital e urinário, adotando enfoque personalizado e
            atencioso, direcionado ao bem-estar dos pacientes.
          </p>
        </div>

        <div className="bg-primary text-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105">
          <h2 className="text-2xl p-2 border-b-2 font-bold text-white mb-4">Visão</h2>
          <p className="text-white">
            Tornar-se o centro de referência em urologia na região, reconhecido
            por sua liderança em tratamentos de alta complexidade e pela
            constante inovação em práticas médicas, valorizando sempre a
            qualidade de vida dos pacientes.
          </p>
        </div>
      </div>

      <div className="bg-primary  text-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105 mt-6">
        <h2 className="text-2xl p-2 border-b-2 font-bold text-white mb-4">Valores</h2>
        <ul className="list-disc text-white pl-6 space-y-4">
          <li>
            <strong>Ética e Integridade:</strong> Mantemos um compromisso inabalável com a ética
            e a integridade, guiando todas as nossas interações e decisões com a
            máxima transparência e respeito pelos princípios morais da medicina.
          </li>
          <li>
            <strong>Humanização:</strong> Priorizamos a humanização no atendimento, dedicando-nos
            a entender profundamente e a responder às necessidades de cada
            paciente, promovendo uma experiência de saúde acolhedora e empática.
          </li>
          <li>
            <strong>Desenvolvimento Contínuo:</strong> Investimos no desenvolvimento da nossa
            equipe, através de educação e capacitação constante, para assegurar
            a excelência clínica e a adaptação às novidades do campo urológico.
          </li>
        </ul>
      </div>

      <div className="mt-8 flex gap-4 text-center flex-col lg:flex-row lg:text-left justify-between items-center border-b-2 border-primary py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl text-primary font-semibold mb-8">Nosso estabelecimento</h1>
          <p className="text-xl max-w-prose">
            Nosso estabelecimento é projetado para oferecer um ambiente acolhedor e confortável, onde cada paciente é tratado com respeito e dignidade. Com instalações modernas e uma equipe dedicada de profissionais de saúde, estamos comprometidos em proporcionar a melhor experiência possível desde a recepção até o atendimento especializado. Nossos consultórios são equipados com tecnologia de ponta para garantir diagnósticos precisos e tratamentos eficazes, sempre priorizando a segurança e o bem-estar dos nossos pacientes. Trabalhamos incansavelmente para criar um espaço onde a saúde e a recuperação são o foco principal, promovendo um cuidado integral e humanizado.
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

      <div className="mt-8">
        <h1 className="text-3xl text-primary font-semibold mb-8">Galeria</h1>
        <div className="mt-8 grid grid-cols-1 animate-fadeIn sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagens.map((image, index) => (
            <div key={index} className="transition-all rounded-lg relative hover:border-primary border-2 hover:scale-95">
              <Image
                src={image}
                className="animate-fadeIn"
                alt="Clínica"
                width={700}
                height={800}
              />
              <Maximize2
                size={25}
                onClick={() => {
                  setIsFullScreen(true);
                  setFullScreenImage(image);
                }}
                className="absolute transition-all hover:scale-150 text-primary m-4 right-0 top-0"
              />
            </div>
          ))}
        </div>
      </div>

      {isFullScreen && fullScreenImage && (
        <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center max-w-[100vw]">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
            <div className="flex">
              <Image
                src={fullScreenImage}
                alt="Clínica"
                width={700}
                height={720}
                className="rounded-lg"
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
    </div>
  );
};

export default Clinica;
