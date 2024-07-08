'use client'
import React, { useEffect, useState } from 'react';
import Image1 from '../assets/clinica.jpg';
 import Image, { StaticImageData } from 'next/image';
import { Maximize2, X } from 'lucide-react';
import { fetchGooglePlacePhotosDetails } from '../api/reviews';
import Galeria from '@/components/layout/galeria';

interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface PlaceDetails {
  name: string;
  photos: Photo[];
}

const Clinica = () => {

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<StaticImageData | null>(null);
  const [clinicPhotos, setClinicPhotos] = useState<{ src: string; width: number; height: number; }[]>([]);

  useEffect(() => {
    const getPhotosDetails = async () => {
      try {
        const imagesData:PlaceDetails = await fetchGooglePlacePhotosDetails();
         const photoUrls = imagesData.photos.map((photo) => {
           return {
            src: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photo.width}&photoreference=${photo.photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLEAPIS_PUBLISHABLE_KEY}`,
            width: photo.width,
            height: photo.height,
          };
        });
        setClinicPhotos(photoUrls);
      } catch (error) {
        console.error('Erro ao buscar fotos da clínica:', error);
      }
    };

    getPhotosDetails();
  }, []);

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

      <div className="mt-8 flex gap-4 text-center flex-col lg:flex-row lg:text-left justify-between  border-b-2 border-primary py-4">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl text-primary font-semibold">Nosso estabelecimento</h1>
          <p className="text-xl max-w-prose">
          Nosso estabelecimento oferece um ambiente acolhedor, onde cada paciente é tratado com respeito e dignidade. Contamos com instalações modernas e uma equipe dedicada para garantir uma excelente experiência desde a recepção até o atendimento especializado. Nossos consultórios, equipados com tecnologia de ponta, asseguram diagnósticos precisos e tratamentos eficazes, priorizando sempre a segurança e o bem-estar dos pacientes
          </p>
        </div>
        <Image
          src={Image1}
          className="animate-fadeIn"
          alt="Clínica"
          width={600}
          height={400}
        />
      </div>

      <div className="mt-8">
        <h1 className="text-3xl text-primary font-semibold mb-8">Galeria</h1>
          <Galeria/>
       
      </div>
      
      
    </div>
  );
};

export default Clinica;
