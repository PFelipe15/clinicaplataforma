import Image from 'next/image';

export default function ImplantesHormonais() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Implante Hormonal</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    O implante subcutâneo de pellets de testosterona (popularmente conhecido como “chip”) é um tipo de via de reposição de testosterona nos homens hipogonádicos que precisam repor a testosterona para níveis fisiológicos.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como são realizados?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    A colocação dos pellets de testosterona é feita no próprio consultório com anestesia local, um procedimento que dura cerca de 15 minutos. Eles são implantados por uma pequena incisão na região superior do glúteo com o auxílio de uma cânula.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Implante Hormonal"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    É uma via de reposição bastante estável (os pellets liberam testosterona diariamente na circulação sanguínea sem os picos e quedas que acontecem com as injeções).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Vantagens</h2>
                <p className="text-gray-700 leading-relaxed">
                    Tem como outras vantagens:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>A comodidade e praticidade (paciente não precisa se preocupar com as datas certas de aplicação e receitas especiais no caso das injeções ou de lembrar de passar o gel diariamente)</li>
                    <li>Não tem o inconveniente da dor das injeções intra-musculares (um incômodo real e frequente em quem vai tomar muitas injeções durante a vida)</li>
                    <li>É a via de reposição hormonal de maior duração de todas (efeito por 4-6 meses, em média 5 meses - a injeção de longa duração, o undecilato de testosterona, dura no máximo 3 meses)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Desvantagens</h2>
                <p className="text-gray-700 leading-relaxed">
                    Tem como desvantagens um maior custo de investimento e o risco de infecção e extrusão dos pellets (ambos &lt; 5%).
                </p>
            </section>
        </div>
    );
}
