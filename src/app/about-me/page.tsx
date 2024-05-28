import Image from 'next/image';
import Dono1 from '../assets/Funcionarios/Propietario2[1].jpg';
import Dono2 from '../assets/Funcionarios/Propietario1[0].jpg';
 
import TodosOsDonos from '../assets/Medicos2.jpg';


export default function QuemSomos() {
    const owners = [
        {
            name: 'Dr. Benjamim Carvalho',
            title: 'Urologista',
            image: Dono2,
            description: 'Dr. Benjamim é um renomado urologista com mais de 20 anos de experiência. Ele acredita que a saúde do trato urinário é fundamental para o bem-estar geral e se dedica a fornecer o melhor cuidado aos seus pacientes.'
        },
        {
            name: 'Dr Luciano Couto',
            title: 'Urologista',
            image: Dono1,
            description: 'Dr. Luciano é um urologista dedicado, especializado em tratar e prevenir doenças do sistema urinário. Ele vê a urologia como uma chave para melhorar a qualidade de vida de seus pacientes.'
        },
        {
            name: 'Dr Vilson Bezerra',
            title: 'Urologista',
            image: Dono1,
            description: 'Dr. Vilson é um urologista apaixonado por promover a saúde do sistema urinário. Ele acredita que uma abordagem preventiva e educacional é essencial para uma vida longa e saudável.'
        },
    ];
    

    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
            <h1 className="text-3xl font-extrabold text-center mb-12 text-primary">Quem Somos</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                {owners.map((owner, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="relative h-56 w-full">
                            <Image src={owner.image} alt={owner.name} layout="fill" objectFit="contain" className="rounded-t-lg " />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{owner.name}</h2>
                            <h3 className="text-xl text-indigo-600 mb-4">{owner.title}</h3>
                            <p className="text-gray-600">{owner.description}</p>
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
                    <p className="text-gray-600 text-center">Unidos pela paixão de promover saúde e bem-estar, Dr. João, Dra. Maria e Dr. Carlos se dedicam a criar um ambiente onde a saúde é prioridade. Combinando suas expertises, eles acreditam que uma abordagem integrada e humanizada é essencial para melhorar a qualidade de vida das pessoas. Juntos, eles trabalham incansavelmente para oferecer cuidados de saúde que fazem a diferença na vida de seus pacientes.</p>
                </div>
            </div>
        </div>
    );
}
