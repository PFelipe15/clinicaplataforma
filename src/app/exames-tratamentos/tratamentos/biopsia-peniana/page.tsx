import Image from 'next/image';
import React from 'react';

export default function BiopsiaPeniana() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Biópsia Peniana</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Biópsia Peniana é um procedimento médico que envolve a remoção de uma pequena amostra de tecido do pênis para exame microscópico.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizado?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é realizado sob anestesia local. Uma pequena incisão é feita no pênis e uma amostra de tecido é removida para análise.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Biópsia Peniana"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    A amostra é enviada para um laboratório para detectar a presença de câncer ou outras anormalidades.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Biópsia Peniana é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Detecção de câncer peniano</li>
                    <li>Investigação de lesões ou úlceras persistentes</li>
                    <li>Avaliação de anormalidades detectadas em outros exames</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Embora seja um procedimento seguro, pode causar desconforto, sangramento ou infecção no local da biópsia. Cuidados pós-procedimento são importantes para evitar complicações.
                </p>
            </section>
        </div>
    );
}
