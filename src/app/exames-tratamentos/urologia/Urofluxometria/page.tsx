import Image from 'next/image';

export default function Urofluxometria() {
    return (
        <div className="  mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Urofluxometria</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urofluxometria é um exame diagnóstico que mede a quantidade de urina liberada durante a micção, a velocidade com que é liberada e o tempo que a micção leva. Esse exame é utilizado para avaliar a função do trato urinário inferior, incluindo a bexiga e a uretra.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Durante o exame de urofluxometria, o paciente urina em um dispositivo especial chamado urofluxômetro. Esse dispositivo mede e registra o fluxo urinário. O paciente deve urinar de maneira habitual e confortável. O exame é simples, rápido e não invasivo.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Realização do exame de Urofluxometria"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    O exame geralmente dura apenas o tempo da micção, que é de alguns minutos. Não há necessidade de preparação específica, e o paciente pode retomar suas atividades normais imediatamente após o exame.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urofluxometria é indicada para pacientes com:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Dificuldade para urinar</li>
                    <li>Fluxo urinário fraco</li>
                    <li>Micção frequente</li>
                    <li>Micção urgente</li>
                    <li>Incontinência urinária</li>
                    <li>Suspeita de obstrução no trato urinário</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    Para o exame de urofluxometria, pode ser recomendado que o paciente esteja com a bexiga cheia. O paciente deve evitar urinar por algumas horas antes do exame ou seguir as orientações específicas fornecidas pelo médico.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A urofluxometria é um exame seguro e sem riscos conhecidos. É um procedimento não invasivo e indolor, utilizado amplamente para avaliar e diagnosticar problemas urinários.
                </p>
            </section>
        </div>
    );
}
