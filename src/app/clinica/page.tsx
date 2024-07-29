'use client'
import React from 'react';
import Image1 from '../assets/clinica.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Galeria from '@/components/layout/galeria';

const Clinica = () => {
  return (
    <div className="container flex flex-col p-8">
      <motion.h1
        className="text-3xl text-primary font-semibold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Sobre a Clínica
      </motion.h1>

      <div className="grid grid-cols-1 animate-fadeIn sm:grid-cols-2 gap-6">
        <motion.div
          className="bg-primary text-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl border-b-2 p-2 font-bold mb-4">Missão</h2>
          <p className="text-white">
            Proporcionar atendimento de excelência em saúde, focado em
            diagnóstico preciso e tratamentos inovadores para patologias do
            trato genital e urinário, adotando enfoque personalizado e
            atencioso, direcionado ao bem-estar dos pacientes.
          </p>
        </motion.div>

        <motion.div
          className="bg-primary text-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl p-2 border-b-2 font-bold text-white mb-4">Visão</h2>
          <p className="text-white">
            Tornar-se o centro de referência em urologia na região, reconhecido
            por sua liderança em tratamentos de alta complexidade e pela
            constante inovação em práticas médicas, valorizando sempre a
            qualidade de vida dos pacientes.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="bg-primary text-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105 mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>

      <motion.div
        className="mt-8 flex gap-4 text-center flex-col lg:flex-row lg:text-left justify-between border-b-2 border-primary py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl text-primary font-semibold">Nosso estabelecimento</h1>
          <p className="text-xl max-w-prose">
            Nosso estabelecimento oferece um ambiente acolhedor, onde cada paciente é tratado com respeito e dignidade. Contamos com instalações modernas e uma equipe dedicada para garantir uma excelente experiência desde a recepção até o atendimento especializado. Nossos consultórios, equipados com tecnologia de ponta, asseguram diagnósticos precisos e tratamentos eficazes, priorizando sempre a segurança e o bem-estar dos pacientes.
          </p>
        </div>
        <Image
          src={Image1}
          className="animate-fadeIn"
          alt="Clínica"
          width={600}
          height={400}
        />
      </motion.div>

      <div className="mt-8">
        <h1 className="text-3xl text-primary font-semibold mb-8">Galeria</h1>
        <Galeria />
      </div>
    </div>
  );
};

export default Clinica;
