import Image from 'next/image';

export default function ExameDeUrina() {
    return (
        <div className="  mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Exame de Urina (EAS)</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    O Exame de Urina, também conhecido como EAS (Exame de Análise de Sedimento), é um teste laboratorial simples e de rotina que analisa a composição da urina. Ele ajuda a diagnosticar e monitorar uma variedade de condições médicas, como infecções urinárias, doenças renais, diabetes e outras desordens metabólicas.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Para realizar o exame de urina, o paciente deve coletar uma amostra de urina em um recipiente limpo, de preferência na primeira micção do dia. A amostra é então enviada ao laboratório, onde é analisada em três partes principais: exame físico, exame químico e exame microscópico.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Exame de Urina (EAS)"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    O exame físico analisa a cor, o aspecto e a densidade da urina. O exame químico verifica a presença de substâncias como glicose, proteínas, cetonas, entre outras. O exame microscópico identifica células, cristais, bactérias e outros componentes presentes no sedimento urinário.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    O exame de urina é indicado para:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Diagnóstico de infecções urinárias</li>
                    <li>Monitoramento de doenças renais</li>
                    <li>Detecção de diabetes e outras desordens metabólicas</li>
                    <li>Avaliação de dores abdominais ou pélvicas</li>
                    <li>Controle de condições crônicas como hipertensão</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    A preparação para o exame de urina é simples. O paciente deve coletar uma amostra de urina, de preferência a primeira do dia, em um recipiente limpo fornecido pelo laboratório. É importante seguir as instruções de coleta para evitar contaminações que possam afetar o resultado do exame.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    O exame de urina é um procedimento seguro e não invasivo. Não há riscos associados à coleta de urina, e é um método amplamente utilizado para avaliação da saúde geral e diagnóstico de várias condições médicas.
                </p>
            </section>
        </div>
    );
}
