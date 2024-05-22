import Image from 'next/image';
import React from 'react';

export default function Urodinamica() {
    return (
        <div className="  mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Urodinâmica</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urodinâmica é um conjunto de exames que avaliam o funcionamento do trato urinário inferior, incluindo a bexiga e a uretra. Esses exames ajudam a diagnosticar problemas relacionados ao armazenamento e esvaziamento da urina, como incontinência urinária, obstrução urinária e outras disfunções.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Durante o exame urodinâmico, sensores e cateteres são inseridos na bexiga e no reto para medir a pressão e o fluxo urinário. O exame pode incluir várias etapas, como cistometria, perfilometria uretral e urofluxometria. A cistometria mede a capacidade da bexiga e a pressão interna durante o enchimento. A urofluxometria avalia a taxa de fluxo urinário durante a micção.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Realização do exame de Urodinâmica"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    O exame pode causar algum desconforto, mas geralmente não é doloroso. Dura cerca de 30 a 60 minutos e não requer sedação. Após o exame, o paciente pode retomar suas atividades normais.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urodinâmica é indicada para pacientes com:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Incontinência urinária</li>
                    <li>Suspeita de obstrução urinária</li>
                    <li>Disfunção da bexiga neurogênica</li>
                    <li>Infecções urinárias recorrentes</li>
                    <li>Dificuldades na micção</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    A preparação para o exame de urodinâmica pode incluir a interrupção temporária de alguns medicamentos, jejum ou a necessidade de chegar ao exame com a bexiga parcialmente cheia. O médico fornecerá instruções específicas antes do exame.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urodinâmica é geralmente segura, mas pode haver um pequeno risco de infecção urinária após o exame. É importante beber bastante água e seguir as orientações médicas após o procedimento para minimizar os riscos.
                </p>
            </section>
        </div>
    );
}
