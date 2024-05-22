import Image from 'next/image';
import React from 'react';

export default function UrodinamicaCompleta() {
    return (
        <div className="mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Urodinâmica Completa</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Urodinâmica Completa é um conjunto de exames que avalia o funcionamento da bexiga e da uretra, medindo as pressões e os fluxos urinários.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    O exame envolve a inserção de pequenos cateteres na bexiga e no reto para medir a pressão, além de sensores para avaliar a atividade muscular.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Urodinâmica Completa"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    Durante o exame, a bexiga é preenchida com água estéril, e o paciente é solicitado a urinar, permitindo a avaliação das pressões e fluxos urinários.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Urodinâmica Completa é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Diagnóstico de incontinência urinária</li>
                    <li>Avaliação de dificuldades miccionais</li>
                    <li>Investigação de bexiga neurogênica</li>
                    <li>Estudo de disfunções miccionais após cirurgias pélvicas</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    O paciente deve seguir as orientações médicas, podendo ser necessário jejum e suspensão de alguns medicamentos. A bexiga deve estar moderadamente cheia no momento do exame.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Urodinâmica Completa é um procedimento seguro, mas pode causar desconforto temporário durante a inserção dos cateteres e ao urinar após o exame.
                </p>
            </section>
        </div>
    );
}
