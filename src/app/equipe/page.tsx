'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import FuncionarioDetalhesModal from '@/components/layout/modal-funcionario-detalhes';
import Example from '../assets/Medicos.jpg'
export default function Equipe() {
  const [selectedFuncionario, setSelectedFuncionario] = useState(null);

  const team = [
    {
      name: 'Dr. Benjamim Carvalho',
      title: 'Urologista',
      crm: 'CRM 54321',
      graduation: 'Universidade de São Paulo',
      description: 'Renomado urologista com mais de 20 anos de experiência. Ele acredita que a saúde do trato urinário é fundamental para o bem-estar geral.',
      image: Example,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: Universidade de São Paulo',
        'Especialização: Urologia'
      ],
      textoApresentacao: 'Sou Dr. Benjamim Carvalho, especialista em Urologia, dedicado a fornecer o melhor cuidado possível para meus pacientes.'
    },
    {
      name: 'Dr. Luciano Couto',
      title: 'Urologista',
      crm: 'CRM 67891',
      graduation: 'Universidade Federal do Rio de Janeiro',
      description: 'Dedicado urologista especializado em tratar e prevenir doenças do sistema urinário.',
      image: Example,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: Universidade Federal do Rio de Janeiro',
        'Especialização: Urologia'
      ],
      textoApresentacao: 'Olá, sou o Dr. Luciano Couto. Minha paixão é ajudar meus pacientes a alcançarem uma saúde urinária excelente.'
    },
    {
      name: 'Dr. Vilson Bezerra',
      title: 'Urologista',
      crm: 'CRM 11224',
      graduation: 'Universidade Estadual de Campinas',
      description: 'Apaixonado por promover a saúde do sistema urinário com uma abordagem preventiva.',
      image: Example,
      identificadorFunc: 'CRM',
      detalhes: [
        'Urologista pelo HC-UFMG',
        'Certificação Internacional Urofill™, EUA.',
        'Cirurgião Robótico pelo Hospital Israelita Albert Einstein, SP.',
        'Fellowship em Medicina Sexual no Tampa General Hospital, EUA.',
        'Preceptorship no Glickman Institute Cleveland Clinic, EUA.',
        'Especialização em Cirurgia Urológica Minimamente Invasiva e Robótica no Hospital Sírio Libanês, SP.',
        'Observership em Urooncologia no Memorial Sloan Kettering Cancer Center, EUA.',
        'Membro Titular da Sociedade Brasileira de Urologia.',
        'Membro da European Association of Urology.',
        'Membro da American Urological Association.'
      ],
      textoApresentacao: 'Meu nome é Dr. Vilson Bezerra. Estou comprometido em prevenir problemas urinários antes que eles ocorram.'
    },
    {
      name: 'Dr. Candilberto Lopes Filho',
      title: 'Ortopedista',
      crm: 'CRM 22334',
      graduation: 'Universidade Federal de Minas Gerais',
      description: 'Especialista em ortopedia, focado em reabilitação e cuidados com o sistema musculoesquelético.',
      image: Example,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: Universidade Federal de Minas Gerais',
        'Especialização: Ortopedia'
      ],
      textoApresentacao: 'Eu sou o Dr. Candilberto Lopes Filho. Meu objetivo é ajudar meus pacientes a recuperarem sua saúde musculoesquelética.'
    },
    {
      name: 'Dr. Ginivaldo Victor',
      title: 'Pediatra',
      crm: 'CRM 55667',
      graduation: 'Universidade de Brasília',
      description: 'Pediatra dedicado à saúde e bem-estar das crianças.',
      image: Example,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: Universidade de Brasília',
        'Especialização: Pediatria'
      ],
      textoApresentacao: 'Olá! Sou o Dr. Ginivaldo Victor, pediatra com um compromisso absoluto com a saúde infantil.'
    },
    {
      name: 'Dra. Lorena Soares',
      title: 'Ginecologista',
      crm: 'CRM 33445',
      graduation: 'Universidade Estadual Paulista',
      description: 'Comprometida com a saúde da mulher e cuidados ginecológicos.',
      image: Example,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: Universidade Estadual Paulista',
        'Especialização: Ginecologia'
      ],
      textoApresentacao: 'Sou a Dra. Lorena Soares, especialista em saúde da mulher. Estou aqui para apoiar você em todas as suas necessidades ginecológicas.'
    },
    {
      name: 'Dra. Glinia Nogueira',
      title: 'Dermatologista',
      crm: 'CRM 66778',
      graduation: 'Universidade Federal de Pernambuco',
      description: 'Especialista em saúde da pele, tratando e prevenindo doenças dermatológicas.',
      image: Example,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: Universidade Federal de Pernambuco',
        'Especialização: Dermatologia Clínica'
      ],
      textoApresentacao: 'Olá! Eu sou a Dra. Glinia Nogueira, dermatologista dedicada a cuidar da saúde e beleza da sua pele.'
    },
    {
      name: 'Lorena Moura',
      title: 'Enfermeira',
      crm: '',
      graduation: 'Universidade de São Paulo',
      description: 'Enfermeira dedicada, focada em fornecer cuidados de saúde excepcionais aos pacientes.',
      image: Example,
      identificadorFunc: 'COREN',
      detalhes: [
        'Graduação: Universidade de São Paulo',
        'Área de Atuação: Enfermagem Clínica'
      ],
      textoApresentacao: 'Oi, sou a Lorena Moura, enfermeira apaixonada por proporcionar conforto e cuidado aos meus pacientes.'
    },
    {
      name: 'Lara Feitosa',
      title: 'Enfermeira',
      crm: '',
      graduation: 'Universidade Federal do Rio de Janeiro',
      description: 'Enfermeira empenhada em promover a saúde através da alimentação equilibrada.',
      image: Example,
      identificadorFunc: 'COREN',
      detalhes: [
        'Graduação: Universidade Federal do Rio de Janeiro',
        'Área de Atuação: Enfermagem Nutricional'
      ],
      textoApresentacao: 'Eu sou a Lara Feitosa, enfermeira comprometida com a saúde por meio de uma alimentação balanceada.'
    },
    {
      name: 'Viviane Lima',
      title: 'Enfermeira',
      crm: '',
      graduation: 'Universidade Estadual de Campinas',
      description: 'Enfermeira com foco em saúde mental e bem-estar emocional dos pacientes.',
      image: Example,
      identificadorFunc: 'COREN',
      detalhes: [
        'Graduação: Universidade Estadual de Campinas',
        'Área de Atuação: Enfermagem Psiquiátrica'
      ],
      textoApresentacao: 'Olá, sou a Viviane Lima, enfermeira dedicada a promover o equilíbrio emocional e mental dos meus pacientes.'
    },
    {
      name: 'Ingred',
      title: 'Enfermeira',
      crm: '',
      graduation: 'Universidade de Brasília',
      description: 'Enfermeira dedicada à reabilitação e melhoria da qualidade de vida dos pacientes.',
      image: Example,
      identificadorFunc: 'COREN',
      detalhes: [
        'Graduação: Universidade de Brasília',
        'Área de Atuação: Enfermagem de Reabilitação'
      ],
      textoApresentacao: 'Sou a Ingred, enfermeira focada em ajudar meus pacientes a recuperarem sua qualidade de vida e independência.'
    },
  ];

  const handleOpenModal = (funcionario) => {
    setSelectedFuncionario(funcionario);
  };

  const handleCloseModal = () => {
    setSelectedFuncionario(null);
  };

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center md:text-left text-primary font-bold mb-8">
        Nossa Equipe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white hover:border-primary hover:border-2 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6 text-center"
          >
            <button onClick={() => handleOpenModal(member)} className="focus:outline-none">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-black p-2 rounded-md">
                {member.name}
              </h2>
              <h3 className="text-xl text-indigo-600 mb-2">{member.title}</h3>
              <p className="mb-1 bg-primary text-white p-1 rounded-md">
                {member.identificadorFunc === 'CRM' ? member.crm : `COREN ${member.crm}`}
              </p>
            </button>
          </div>
        ))}
      </div>

      {selectedFuncionario && (
        <FuncionarioDetalhesModal
          funcionarioDetalhes={selectedFuncionario}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
