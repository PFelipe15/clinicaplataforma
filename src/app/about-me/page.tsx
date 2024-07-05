import Image from 'next/image';
import Dono1 from '../assets/Funcionarios/Propietario2[1].jpg';
import Dono2 from '../assets/Funcionarios/Propietario1[0].jpg';
import Dono3 from '../assets/Funcionarios/drVilson3.jpg';
import TodosOsDonos from '../assets/Medicos2.jpg';
import { FaInstagram } from 'react-icons/fa';

export default function QuemSomos() {
    const owners = [
        {
            name: 'Dr. Benjamim Carvalho',
            title: 'Urologista',
            image: Dono2,
            description: 'Dr. Benjamim é um renomado urologista com mais de 20 anos de experiência. Ele acredita que a saúde do trato urinário é fundamental para o bem-estar geral e se dedica a fornecer o melhor cuidado aos seus pacientes.',
            details: [
                'CRM- PI 4388/ CRM-SP 118617',
                'RQE 1444',
                'Graduação em Medicina pela Universidade Federal do Piauí (2005).',
                'Residência médica em Cirurgia Geral pelo Hospital do Servidor Público Estadual de São Paulo (IAMPSE);',
                'Residência médica em Urologia pelo Hospital Santa Marcelina (SP);',
                'Membro Titular da Sociedade Brasileira de Urologia (TiSBU).',
                'Pós-graduação em cirurgia robótica em urologia pelo Hospital Albert Einstein.'
            ],
            instagram: 'https://www.instagram.com/dr.benjamim.urologista?igsh=MTN1ZDgzYjNwb2wwNQ=='
        },
        {
            name: 'Dr. Luciano Couto',
            title: 'Urologista',
            image: Dono1,
            description: 'Dr. Luciano é um urologista dedicado, especializado em tratar e prevenir doenças do sistema urinário. Ele vê a urologia como uma chave para melhorar a qualidade de vida de seus pacientes.',
            details: [
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
            instagram: 'https://www.instagram.com/drlucianocouto?igsh=MXhhMTF1ZTg0djVlcw=='
        },
        {
            name: 'Dr. Vilson Bezerra',
            title: 'Urologista',
            image: Dono3,
            description: 'Dr. Vilson é um urologista apaixonado por promover a saúde do sistema urinário. Ele acredita que uma abordagem preventiva e educacional é essencial para uma vida longa e saudável.',
            details: [
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
            instagram: 'https://www.instagram.com/dr.vilsonbezerra?igsh=dm1iZHZnZnp6Mncy'
        }
    ];

    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
            <h1 className="text-3xl font-extrabold text-center mb-12 text-primary">Quem Somos</h1>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                {owners.map((owner, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="relative h-56 w-full">
                            <Image src={owner.image} alt={owner.name} layout="fill" objectFit="contain" className="rounded-t-lg" />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{owner.name}</h2>
                            <h3 className="text-xl text-indigo-600 mb-4">{owner.title}</h3>
                            <p className="text-gray-600 mb-4">{owner.description}</p>
                            <a href={owner.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-500 hover:underline">
                                <FaInstagram />
                                <span>Instagram</span>
                            </a>
                            {owner.details.length > 0 && (
                                <ul className="list-disc list-inside mb-4 space-y-1">
                                    {owner.details.map((detail, index) => (
                                        <li key={index} className="text-gray-600">{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-4 text-center text-primary">Nossa Missão Coletiva</h2>
                <div className="relative h-[60vh] w-full rounded-md">
                    <Image src={TodosOsDonos} alt="Todos os Donos" layout="fill" objectFit="contain" className="rounded-t-lg" />
                </div>
                <div className="p-8">
                    <p className="text-gray-600 text-center">Unidos pela paixão de promover saúde e bem-estar, Dr. Vilson, Dr. Benjamim, Dr. Luciano se dedicam a criar um ambiente onde a saúde é prioridade. Combinando suas expertises, eles acreditam que uma abordagem integrada e humanizada é essencial para melhorar a qualidade de vida das pessoas. Juntos, eles trabalham incansavelmente para oferecer cuidados de saúde que fazem a diferença na vida de seus pacientes.</p>
                </div>
            </div>
        </div>
    );
}
