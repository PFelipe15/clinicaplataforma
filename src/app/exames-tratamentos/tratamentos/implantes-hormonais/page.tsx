import Image from 'next/image';

export default function ImplantesHormonais() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Implantes Hormonais</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    Os Implantes Hormonais são pequenos dispositivos inseridos sob a pele que liberam hormônios gradualmente para tratar deficiências hormonais ou outras condições médicas.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como são realizados?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é feito sob anestesia local, onde o implante é inserido no tecido subcutâneo, geralmente no braço ou nádegas.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Implantes Hormonais"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    Os implantes liberam hormônios de forma contínua e controlada, proporcionando uma terapia eficaz a longo prazo.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Os Implantes Hormonais são indicados para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Terapia de reposição hormonal</li>
                    <li>Controle de condições hormonais</li>
                    <li>Tratamento de endometriose</li>
                    <li>Contracepção de longa duração</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    O procedimento é seguro, mas pode causar efeitos colaterais como alterações hormonais, infecção ou deslocamento do implante. É importante realizar consultas regulares para monitoramento.
                </p>
            </section>
        </div>
    );
}
