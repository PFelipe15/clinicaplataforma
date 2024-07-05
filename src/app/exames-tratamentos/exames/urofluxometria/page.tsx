import Image from 'next/image';
import React from 'react';

export default function Urofluxometria() {
    return (
        <div className="mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Urofluxometria</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urofluxometria é um exame não invasivo que mede o fluxo urinário, avaliando a velocidade e o volume de urina eliminados durante a micção. É usado para diagnosticar problemas no trato urinário inferior, como obstruções e disfunções da bexiga.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Durante a urofluxometria, o paciente urina em um dispositivo especial que registra o fluxo e o volume de urina. Este dispositivo está conectado a um computador que gera gráficos e dados para análise. O exame é simples e rápido, geralmente levando apenas alguns minutos.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Realização do exame de Urofluxometria"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    O paciente é orientado a urinar de forma natural no dispositivo de medição. É importante que a bexiga esteja cheia o suficiente para obter resultados precisos. Não é necessário nenhum preparo especial, mas seguir as instruções do médico é fundamental.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urofluxometria é indicada para pacientes com:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Dificuldades na micção</li>
                    <li>Suspeita de obstrução urinária</li>
                    <li>Incontinência urinária</li>
                    <li>Infecções urinárias recorrentes</li>
                    <li>Disfunção da bexiga neurogênica</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    A preparação para a urofluxometria geralmente inclui beber líquidos para garantir que a bexiga esteja cheia no momento do exame. É importante seguir as orientações do médico quanto ao consumo de líquidos antes do exame.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urofluxometria é um exame seguro e não invasivo, sem riscos significativos associados. É um procedimento rápido e simples, que pode fornecer informações valiosas para o diagnóstico de problemas urinários.
                </p>
            </section>
        </div>
    );
}
