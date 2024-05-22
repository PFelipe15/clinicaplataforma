import Image from 'next/image';
import React from 'react';
export default function DilatacaoUretral() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Dilatação Uretral</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Dilatação Uretral é um procedimento médico que envolve a inserção de instrumentos na uretra para alargá-la e tratar estreitamentos (estenoses).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizado?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é realizado sob anestesia local ou sedação. Instrumentos graduais são inseridos na uretra para dilatá-la suavemente.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Dilatação Uretral"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    A dilatação alivia os sintomas de obstrução urinária e melhora o fluxo urinário.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Dilatação Uretral é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Tratamento de estenoses uretrais</li>
                    <li>Alívio de sintomas de obstrução urinária</li>
                    <li>Melhoria do fluxo urinário</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Embora seguro, o procedimento pode causar desconforto, sangramento ou infecção. É importante seguir as orientações médicas para cuidados pós-procedimento.
                </p>
            </section>
        </div>
    );
}
