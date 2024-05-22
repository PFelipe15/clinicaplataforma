import Image from 'next/image';

export default function FisioterapiaPelvica() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Fisioterapia Pélvica</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Fisioterapia Pélvica é um tratamento que visa fortalecer e reabilitar os músculos do assoalho pélvico, melhorando a função e aliviando sintomas de disfunções pélvicas.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O tratamento inclui exercícios específicos, técnicas manuais, biofeedback e eletroestimulação, adaptados às necessidades individuais de cada paciente.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Fisioterapia Pélvica"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    As sessões são conduzidas por um fisioterapeuta especializado e podem variar em frequência e duração, dependendo da condição tratada.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Fisioterapia Pélvica é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Incontinência urinária</li>
                    <li>Prolapso de órgãos pélvicos</li>
                    <li>Disfunção sexual</li>
                    <li>Dores pélvicas crônicas</li>
                    <li>Reabilitação pós-cirúrgica</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Fisioterapia Pélvica é segura e eficaz, com poucos riscos. É essencial seguir as orientações do fisioterapeuta para obter os melhores resultados.
                </p>
            </section>
        </div>
    );
}
