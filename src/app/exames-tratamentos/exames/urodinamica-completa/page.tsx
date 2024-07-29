import Image from 'next/image';
import React from 'react';

export default function UrodinamicaCompleta() {
    return (
        <div className="mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Urodinâmica Completa</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A avaliação urodinâmica completa ou estudo urodinâmico (EUD) é um exame realizado para avaliar o funcionamento do trato urinário inferior. Em geral, o EUD é realizado quando há falha no tratamento clínico ou quando se planeja alguma forma de tratamento cirúrgico. Esse exame é essencial para definir e predizer a resposta ao tratamento, podendo ser decisivo quanto à indicação ou não de um tratamento cirúrgico.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Quando está indicada?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Urodinâmica Completa é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Pacientes que perdem urina (aos esforços ou associada à urgência miccional)</li>
                    <li>Homens com Hiperplasia Prostática Benigna (HPB) com sintomas que não estão melhorando com medicamentos (para avaliar necessidade de cirurgia)</li>
                    <li>Pacientes que não esvaziam completamente a bexiga (resíduo pós-miccional elevado)</li>
                    <li>Pacientes com bexiga hiperativa ou dolorosa (cistite intersticial) que não estão melhorando com o tratamento</li>
                    <li>Paciente com problemas neurológicos e sintomas urinários (suspeita de bexiga neurogênica)</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feita?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    É feita com equipamentos computadorizados conectados a duas pequenas sondas colocadas na uretra do paciente e outra pequena sonda introduzida pelo ânus.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Urodinâmica Completa"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O exame dói?</h2>
                <p className="text-gray-600 leading-relaxed">
                    O exame geralmente não gera dor, apenas um pequeno desconforto pela passagem das sondas uretrais.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Precisa de jejum?</h2>
                <p className="text-gray-600 leading-relaxed">
                    Não.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Precisa de algum exame?</h2>
                <p className="text-gray-600 leading-relaxed">
                    É recomendado ter uma urocultura recente negativa (o exame não deve ser feito na presença de infecção urinária ativa).
                </p>
            </section>
        </div>
    );
}
