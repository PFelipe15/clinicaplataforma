import Image from 'next/image';
import medico1 from '../assets/principal.jpg';
import medico2 from '../assets/Medicos.jpg';
import medico3 from '../assets/Medicos2.jpg';
import medico4 from '../assets/Medicos2.jpg';
import medico5 from '../assets/Medicos2.jpg';

export default function Equipe() {
  const team = [
    {
        name: 'Dr. Benjamim Carvalho',
        title: 'Urologista',
        crm: 'CRM 54321',
        graduation: 'Universidade de São Paulo',
        description: 'Renomado urologista com mais de 20 anos de experiência. Ele acredita que a saúde do trato urinário é fundamental para o bem-estar geral.',
        image: medico1,
    },
    {
        name: 'Dr. Luciano Couto',
        title: 'Urologista',
        crm: 'CRM 67891',
        graduation: 'Universidade Federal do Rio de Janeiro',
        description: 'Dedicado urologista especializado em tratar e prevenir doenças do sistema urinário.',
        image: medico1,
    },
    {
        name: 'Dr. Vilson Bezerra',
        title: 'Urologista',
        crm: 'CRM 11224',
        graduation: 'Universidade Estadual de Campinas',
        description: 'Apaixonado por promover a saúde do sistema urinário com uma abordagem preventiva.',
        image: medico1,
    },
    {
        name: 'Dr. Candilberto Lopes Filho',
        title: 'Ortopedista',
        crm: 'CRM 22334',
        graduation: 'Universidade Federal de Minas Gerais',
        description: 'Especialista em ortopedia, focado em reabilitação e cuidados com o sistema musculoesquelético.',
        image: medico1,
    },
    {
        name: 'Dr. Ginivaldo Victor',
        title: 'Pediatra',
        crm: 'CRM 55667',
        graduation: 'Universidade de Brasília',
        description: 'Pediatra dedicado à saúde e bem-estar das crianças.',
        image: medico1,
    },
    {
        name: 'Dra. Lorena Soares',
        title: 'Ginecologista',
        crm: 'CRM 33445',
        graduation: 'Universidade Estadual Paulista',
        description: 'Comprometida com a saúde da mulher e cuidados ginecológicos.',
        image: medico1,
    },
    {
        name: 'Dra. Glinia Nogueira',
        title: 'Dermatologista',
        crm: 'CRM 66778',
        graduation: 'Universidade Federal de Pernambuco',
        description: 'Especialista em saúde da pele, tratando e prevenindo doenças dermatológicas.',
        image: medico1,
    },
    {
        name: 'Lorena Moura',
        title: 'Enfermeira',
        crm: '',
        graduation: 'Universidade de São Paulo',
        description: 'Enfermeira dedicada, focada em fornecer cuidados de saúde excepcionais aos pacientes.',
        image: medico1,
    },
    {
        name: 'Lara Feitosa',
        title: 'Enfermeira',
        crm: '',
        graduation: 'Universidade Federal do Rio de Janeiro',
        description: 'Enfermeira empenhada em promover a saúde através da alimentação equilibrada.',
        image: medico1,
    },
    {
        name: 'Viviane Lima',
        title: 'Enfermeira',
        crm: '',
        graduation: 'Universidade Estadual de Campinas',
        description: 'Enfermeira com foco em saúde mental e bem-estar emocional dos pacientes.',
        image: medico1,
    },
    {
        name: 'Ingred',
        title: 'Enfermeira',
        crm: '',
        graduation: 'Universidade de Brasília',
        description: 'Enfermeira dedicada à reabilitação e melhoria da qualidade de vida dos pacientes.',
        image: medico1,
    },
];


    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center  md:text-left text-primary font-bold  mb-8">
          Nossa Equipe
        </h1>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white hover:border-primary hover:border-2  shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-black p-2 rounded-md   ">
                {member.name}
              </h2>
              <h3 className="text-xl text-indigo-600 mb-2">{member.title}</h3>
              {member.crm != "" ? (
                <p className="  mb-1 bg-primary text-white p-1 rounded-md ">
                  {member.crm}
                </p>
              ): ("")}

              <p className="text-gray-600 mb-2">{member.graduation}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
