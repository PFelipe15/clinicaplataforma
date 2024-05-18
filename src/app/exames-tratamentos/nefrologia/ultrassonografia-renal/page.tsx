import Image from 'next/image';

export default function UltrassonografiaRenal() {
    return (
        <div className="  mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Ultrassonografia Renal</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A ultrassonografia renal é um exame de imagem que utiliza ondas sonoras de alta frequência para criar imagens dos rins e estruturas adjacentes. É um procedimento seguro, não invasivo e amplamente utilizado para avaliar a saúde renal e diagnosticar várias condições.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Durante o exame, o paciente deita-se em uma maca e um gel à base de água é aplicado na pele sobre a área dos rins. Um transdutor, dispositivo que emite e capta ondas sonoras, é movido sobre a pele para capturar as imagens dos rins. Essas imagens são transmitidas em tempo real para um monitor, permitindo que o técnico ou médico visualize e capture as estruturas renais.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Realização da Ultrassonografia Renal"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    O exame dura cerca de 20 a 30 minutos e é indolor. Não há necessidade de sedação, e o paciente pode retomar suas atividades normais imediatamente após o procedimento.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A ultrassonografia renal é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Diagnóstico de cálculos renais</li>
                    <li>Avaliação de infecções urinárias recorrentes</li>
                    <li>Monitoramento de cistos e tumores renais</li>
                    <li>Investigação de dor abdominal ou lombar</li>
                    <li>Avaliação de anormalidades congênitas dos rins</li>
                    <li>Detecção de obstruções no trato urinário</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    A preparação para a ultrassonografia renal pode variar. Em alguns casos, pode ser recomendado beber água e evitar urinar antes do exame para assegurar que a bexiga esteja cheia, o que pode ajudar na visualização das estruturas renais. É importante seguir as instruções específicas fornecidas pelo médico ou técnico.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A ultrassonografia renal é um exame seguro, sem riscos conhecidos associados à exposição às ondas sonoras. É uma técnica amplamente utilizada devido à sua segurança e eficácia.
                </p>
            </section>
        </div>
    );
}
