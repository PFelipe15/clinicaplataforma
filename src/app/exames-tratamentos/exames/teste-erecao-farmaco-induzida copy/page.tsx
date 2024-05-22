import Image from 'next/image';
import React from 'react';

export default function TesteDeErecaoFarmacoInduzida() {
    return (
        <div className="mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Teste de Ereção Fármaco-Induzida</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    O Teste de Ereção Fármaco-Induzida é um procedimento em que uma medicação é injetada no pênis para avaliar a função erétil.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    O exame envolve a injeção de um medicamento vasoativo diretamente no corpo cavernoso do pênis, induzindo uma ereção.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Teste de Ereção Fármaco-Induzida"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    A resposta à medicação é observada para avaliar a função erétil e diagnosticar possíveis disfunções.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    O Teste de Ereção Fármaco-Induzida é indicado para:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Diagnóstico de disfunção erétil</li>
                    <li>Avaliação da eficácia de tratamentos para disfunção erétil</li>
                    <li>Investigação de causas psicogênicas ou orgânicas de disfunção erétil</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    O paciente deve seguir as orientações médicas. Em geral, não há preparações específicas, mas é importante informar ao médico sobre medicamentos em uso e condições de saúde.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    O teste é geralmente seguro, mas pode causar efeitos colaterais como dor no local da injeção, ereção prolongada (priapismo) ou hematomas.
                </p>
            </section>
        </div>
    );
}
