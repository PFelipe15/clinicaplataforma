import Image from 'next/image';
import React from 'react';
export default function CistoscopiaRigida() {
    return (
        <div className="mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Cistoscopia Rígida</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Cistoscopia Rígida é um exame endoscópico que permite a visualização do interior da bexiga e da uretra através de um cistoscópio rígido.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    O exame é realizado inserindo um cistoscópio rígido pela uretra até a bexiga. É utilizado anestésico local ou sedação para conforto do paciente.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Cistoscopia Rígida"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    O cistoscópio rígido permite uma visualização detalhada da mucosa da bexiga e da uretra, identificando possíveis anormalidades.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Cistoscopia Rígida é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Diagnóstico de infecções urinárias recorrentes</li>
                    <li>Investigação de sangue na urina (hematúria)</li>
                    <li>Detecção de tumores na bexiga</li>
                    <li>Avaliação de problemas na uretra</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    O paciente deve seguir as orientações médicas, podendo ser necessário jejum e suspensão de alguns medicamentos. A bexiga deve estar vazia no momento do exame.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Cistoscopia Rígida é um procedimento seguro, porém pode causar desconforto urinário temporário. Complicações são raras, mas podem incluir infecção ou sangramento.
                </p>
            </section>
        </div>
    );
}
