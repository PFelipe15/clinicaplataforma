import Image from 'next/image';
import VasectomiaImage from '../../../assets/vasectomia.jpeg';

export default function Vasectomia() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Vasectomia</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A vasectomia é a ligadura cirúrgica dos canais deferentes, impossibilitando a passagem dos espermatozóides. É uma forma permanente de contracepção, apesar de que se pode fazer a reversão da vasectomia nos homens que se arrependeram da mesma por algum motivo (essa reversão é uma cirurgia bem delicada, feita com auxílio de microscópio e sem garantia de sucesso; quanto mais tempo da vasectomia, pior o resultado).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    A vasectomia é um procedimento rápido, simples, que pode ser feito no próprio consultório com anestesia local ou no centro cirúrgico com sedação (para os pacientes que desejam dormir durante o procedimento). Essa escolha depende do desejo do paciente, mas também da anatomia escrotal (é imprescindível o exame físico no consultório para avaliar essa viabilidade).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Na vasectomia feita com anestesia local na própria Urovida, utilizamos uma caneta aplicadora de anestésico sob pressão que dispensa o uso de agulhas – mais conforto para o paciente, em especial aqueles que têm medo de agulhadas (injetor Madajet, importado dos EUA). Na técnica de vasectomia sem agulha, nada, exceto a solução anestésica, penetra na pele escrotal. O resultado é um procedimento rápido, seguro e praticamente sem dor.
                </p>
                <Image
                    src={VasectomiaImage}
                    alt="Vasectomia"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    Após o procedimento, o paciente deve evitar ejacular nos próximos 07 dias. Após esse período, ele deve ter relações sexuais com algum outro método contraceptivo até que seja feito o espermograma de controle após cerca de 02 meses ou 20 ejaculações. Os critérios de sucesso do procedimento são a azoospermia (ausência total de espermatozóides) ou a presença de no máximo 100.000 espermatozóides imóveis/ml (nenhum espermatozóide móvel é aceito).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A vasectomia é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Esterilização masculina permanente</li>
                    <li>Controle de natalidade</li>
                    <li>Planejamento familiar</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A vasectomia é um método de contracepção altamente eficaz, mas não é 100% (existe uma chance mínima de gravidez em aproximadamente 1 em cada 2000 homens operados por um processo natural de recanalização dos canais deferentes – muito raro).
                </p>
                <p className="text-gray-700 leading-relaxed">
                    A vasectomia é segura e eficaz, mas pode causar dor, inchaço, hematomas e, raramente, complicações como granulomas espermáticos. É importante seguir as orientações médicas para cuidados pós-operatórios e confirmar a esterilidade com exames subsequentes.
                </p>
            </section>
        </div>
    );
}
