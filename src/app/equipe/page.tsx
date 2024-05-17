import Image from 'next/image';
import medico1 from '../assets/principal.jpg';
import medico2 from '../assets/Medicos.jpg';
import medico3 from '../assets/Medicos2.jpg';
import medico4 from '../assets/Medicos2.jpg';
import medico5 from '../assets/Medicos2.jpg';

export default function Equipe() {
    const team = [
        {
            name: 'Dr. João Silva',
            title: 'Psiquiatra',
            crm: 'CRM 12345',
            graduation: 'Universidade de São Paulo',
            description: 'Especialista em saúde mental.',
            image: medico1,
        },
        {
            name: 'Dra. Maria Souza',
            title: 'Fisioterapeuta',
            crm: 'CRM 67890',
            graduation: 'Universidade Federal do Rio de Janeiro',
            description: 'Dedicação à reabilitação.',
            image: medico2,
        },
        {
            name: 'Dr. Carlos Pereira',
            title: 'Cardiologista',
            crm: 'CRM 11223',
            graduation: 'Universidade Estadual de Campinas',
            description: 'Paixão por saúde cardiovascular.',
            image: medico3,
        },
        {
            name: 'Dra. Ana Martins',
            title: 'Neurologista',
            crm: 'CRM 44556',
            graduation: 'Universidade Federal de Minas Gerais',
            description: 'Comprometida com a neurologia.',
            image: medico4,
        },
        {
            name: 'Dr. Pedro Santos',
            title: 'Dermatologista',
            crm: 'CRM 77889',
            graduation: 'Universidade de Brasília',
            description: 'Especialista em saúde da pele.',
            image: medico5,
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
              <p className="  mb-1 bg-primary text-white p-1 rounded-md ">
                {member.crm}
              </p>
              <p className="text-gray-600 mb-2">{member.graduation}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
