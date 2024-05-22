import Image from 'next/image';
import React from 'react';

export default function Crioterapia() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Crioterapia</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Crioterapia é um procedimento que utiliza baixas temperaturas para destruir tecidos anormais, como verrugas ou células cancerígenas.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizado?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento envolve a aplicação de nitrogênio líquido diretamente na área afetada, congelando e destruindo o tecido anormal.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Crioterapia"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    Após o tratamento, o tecido congelado cai, sendo substituído por uma pele saudável.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Crioterapia é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Tratamento de verrugas</li>
                    <li>Remoção de células pré-cancerígenas</li>
                    <li>Tratamento de certas lesões cutâneas</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Crioterapia é um procedimento seguro, mas pode causar dor, bolhas ou cicatrizes temporárias. É importante seguir as orientações pós-procedimento para garantir a cicatrização adequada.
                </p>
            </section>
        </div>
    );
}
