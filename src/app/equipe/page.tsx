'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import FuncionarioDetalhesModal from '@/components/layout/modal-funcionario-detalhes';
import Example from '../assets/LogoQualidadeAlta.jpg'
import DrVilson from '../assets/Funcionarios/DrVilsonPerfil.jpg'
import DrGlinia from '../assets/Funcionarios/Glinia-19.jpg'
import DrLuciano from '../assets/Funcionarios/DrLuciano.jpg'
import DrCandiberto from '../assets/Funcionarios/DrCandilbertoPerfil.jpg'
import Lara from '../assets/Funcionarios/LaraGerente.jpg'
import DrBenjamim from '../assets/Funcionarios/DrBenjaminPerfil.jpg'
import LorenaMoura from '../assets/Funcionarios/LorenaMoura.jpg'
import DrLorena from '../assets/Funcionarios/DrLorena.jpg'
import DrGenivaldo from '../assets/Funcionarios/DrGenivaldo.jpg'
import { Funcionario } from '../_types/funcionario';
export default function Equipe() {
  const [selectedFuncionario, setSelectedFuncionario] = useState<Funcionario | null>(null);

  const team = [
    {
      name: 'Dr. Benjamim Carvalho',
      title: 'Urologista',
      crm: '4388',
      graduation: 'Universidade de São Paulo',
      description: 'Renomado urologista com mais de 20 anos de experiência. Ele acredita que a saúde do trato urinário é fundamental para o bem-estar geral.',
      image: DrBenjamim,
      identificadorFunc: 'CRM',
      detalhes: [
        'CRM- PI 4388/ CRM-SP 118617',
        'RQE 1444',
        'Graduação em Medicina pela Universidade Federal do Piauí (2005).',
        'Residência médica em Cirurgia Geral pelo Hospital do Servidor Público Estadual de São Paulo (IAMPSE);',
        'Residência médica em Urologia pelo Hospital Santa Marcelina (SP);',
        'Membro Titular da Sociedade Brasileira de Urologia (TiSBU).',
        'Pós-graduação em cirurgia robótica em urologia pelo Hospital Albert Einstein.'
      ],
      textoApresentacao: 'Sou Dr. Benjamim Carvalho, especialista em Urologia, dedicado a fornecer o melhor cuidado possível para meus pacientes.'
    },
    {
      name: 'Dr. Luciano Couto',
      title: 'Urologista',
      crm: '2614',
      graduation: 'Universidade Federal do Rio de Janeiro',
      description: 'Dedicado urologista especializado em tratar e prevenir doenças do sistema urinário.',
      image: DrLuciano,
      identificadorFunc: 'CRM',
      detalhes: [
        'Luciano José Couto de Sousa Filho, 48 anos. Natural de Teresina Piauí.',
        'Médico formado pela Universidade Federal do Piauí em 2000, com residência em Cirurgia Geral pela UNESP- Botucatu e residência em Urologia pelo Hospital do Servidor Municipal de São Paulo.',
        'Especialização em Transplante renal no Hospital do Rim da UNIFESP- EPM.',
        'Foi membro do grupo de uro-oncologia da UNIFESP por 4 anos, até 2010.',
        'Foi professor de medicina nas faculdades UNIFESP, UNINOVE em São Paulo e UESPI.',
        'Tem treinamento avançado em tratamento de cálculos renais e doenças da próstata com cirurgias minimamente invasivas.',
        'Treinamento em cirurgia robótica pelo Hospital Albert Einstein.',
        'Urologista dos hospitais São Marcos, São Paulo. Preceptor da residência de urologia do Hospital Getúlio Vargas- UESPI.',
        'Sócio fundador da clínica Urovida em 2013.',
        'Presidente da cooperativa dos médicos urologistas do estado do Piauí.'
      ],
      textoApresentacao: 'Olá, sou o Dr. Luciano Couto. Minha paixão é ajudar meus pacientes a alcançarem uma saúde urinária excelente.'
    },
    {
      name: 'Dr. Vilson Bezerra',
      title: 'Urologista',
      crm: '6281',
      graduation: 'Universidade Estadual de Campinas',
      description: 'Apaixonado por promover a saúde do sistema urinário com uma abordagem preventiva.',
      image: DrVilson,
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
      title: 'Urologista',
      crm: '5761',
      graduation: 'Universidade Estadual do Piauí, UESPI, Teresina, Brasil',
      description: 'Médico graduado pela UNINOVAFAPI; Cirurgião Geral e Urologista pela UESPI.',
      image: DrCandiberto,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: UNINOVAFAPI',
        'Especialização: Cirurgia Geral e Urologia pela Universidade Estadual do Piauí, UESPI',
        'Especialização em Médico Auditor pela Sociedade Brasileira de Auditoria Médica, SBAM, Brasil',
        'Título fornecido por meio de realização de prova título aplicado pela ABRAMPAS - AMB',
        'Especialização - Residência Médica em Urologia pela Universidade Estadual do Piauí, UESPI',
        'Especialização - Residência Médica em Cirurgia Geral pela Universidade Estadual do Piauí, UESPI'
      ],
      textoApresentacao: 'Eu sou o Dr. Candilberto Lopes Filho. Meu objetivo é ajudar meus pacientes a recuperarem sua saúde.'
    },
    {
      name: 'Dr. Ginivaldo Victor',
      title: 'Nefrologista',
      crm: '2613',
      graduation: 'Universidade Federal do Piauí',
      description: 'Doutor em Nefrologia pela UNESP; Especialista em Nefrologia pela SBN.',
      image: DrGenivaldo,
      identificadorFunc: 'CRM',
      detalhes: [
        'Doutor em Nefrologia pela UNESP (2006)',
        'Título de Especialista em Nefrologia pela Sociedade Brasileira de Nefrologia (SBN) (2005)',
        'Residência em Nefrologia pela UNESP',
        'Graduação em Medicina pela Universidade Federal do Piauí',
        'Chefe do Setor da Gestão da Pesquisa e Inovação Tecnológica em Saúde do HU-UFPI',
        'Supervisor do Programa de Residência de Clínica Médica do Hospital Getúlio Vargas/UESPI',
        'Professor Adjunto da Universidade Estadual do Piauí (UESPI)',
        'Docente na Faculdade Diferencial Integral (UniFacid)',
        'Presidente da SBN-PI (Regional Piauí da Sociedade Brasileira de Nefrologia) 2023-2024',
        'Conselheiro CRM-PI (2023-2028)'
      ],
      textoApresentacao: 'Olá! Sou o Dr. Ginivaldo Victor, nefrologista comprometido com a excelência no cuidado renal e com a formação de novos profissionais na área.'
    },
    {
      name: 'Dra. Lorena Soares',
      title: 'Nefrologista',
      crm: '5619',
      graduation: 'Universidade Estadual Paulista',
      description: 'Comprometida com a saúde da mulher e cuidados ginecológicos.',
      image: DrLorena,
      identificadorFunc: 'CRM',
      detalhes: [
        'Clinica Médica pela faculdade de medicina de Jundiaí/SP',
        'Nefrologista pela USP Ribeirão Preto/SP'
      ],
      textoApresentacao: 'Sou a Dra. Lorena Soares, especialista em saúde da mulher. Estou aqui para apoiar você em todas as suas necessidades ginecológicas.'
    },
    {
      name: 'Dra. Glinia Nogueira',
      title: 'Médicina da Dor/Anestesista',
      crm: '4495',
      graduation: 'Universidade Federal de Pernambuco',
      description: 'Especialista em saúde da pele, tratando e prevenindo doenças dermatológicas.',
      image: DrGlinia,
      identificadorFunc: 'CRM',
      detalhes: [
        'Graduação: Universidade Federal de Pernambuco',
        'Especialização: Dermatologia Clínica',
        '2011-2015: Anestesiologia pela Santa Casa de Ribeirão Preto / SP',
        '2015-2016: Especialização em Clínica da Dor pela HC-USP Ribeirão Preto / SP',
        '2020-2022: Especialização em Acupuntura pelo CMBA',
        '2022: Certificação em Medicina Hiperbárica',
        '2023: Certificação em Terapia por Ondas de Choque',
        '2024: Pós-graduanda em Medicina Regenerativa'
      ],
      textoApresentacao: 'Olá! Eu sou a Dra. Glinia Nogueira, dermatologista dedicada a cuidar da saúde e beleza da sua pele.'
    },
    {
      name: 'Dra. Lorena Moura',
      title: 'Fisioterapeuta Pélvica, Sexóloga',
      crm: '152969-F',
      graduation: 'Formada pela UNINOVAFAPI - Teresina em 2008',
      description: 'Enfermeira dedicada, focada em fornecer cuidados de saúde excepcionais aos pacientes.',
      image: LorenaMoura,
      identificadorFunc: 'CREFITO',
      detalhes: [
        'Especialista em Uroginecologia e Sexualidade pelo CBES - PA em 2011',
        'Fisioterapeuta Pélvica e Sexóloga',
        'Expertisse Em Reabilitação de Câncer de próstata',
        'Atua nas disfunções Sexuais feminina e masculina',
        'Atua na reabilitação pélvica em proctologia',
      ],
      textoApresentacao: 'Oi, sou a Lorena Moura, enfermeira apaixonada por proporcionar conforto e cuidado aos meus pacientes.'
    },
   
  ];

  const handleOpenModal = (funcionario:Funcionario) => {
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
              <div className="relative  mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
    
          
                  className="rounded-lg h-[550px] object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-black p-2 rounded-md">
                {member.name}
              </h2>
              <h3 className="text-xl text-indigo-600 mb-2">{member.title}</h3>
             
             {member.identificadorFunc && (

              <p className="mb-1 bg-primary text-white p-1 rounded-md">
                {`${member.identificadorFunc} (PI) ${member.crm}`}
                
              </p>
             )}
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
