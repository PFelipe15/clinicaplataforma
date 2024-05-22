import Image from 'next/image';

export default function Vasectomia() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Vasectomia</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Vasectomia é um procedimento cirúrgico de esterilização masculina que corta e sela os canais deferentes, impedindo o transporte de espermatozoides.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é feito sob anestesia local. Pequenas incisões são feitas no escroto para acessar os canais deferentes, que são cortados e selados.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Vasectomia"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    A recuperação é rápida, com o paciente podendo retornar às suas atividades normais em poucos dias, seguindo cuidados específicos.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Vasectomia é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Esterilização masculina permanente</li>
                    <li>Controle de natalidade</li>
                    <li>Planejamento familiar</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Vasectomia é segura e eficaz, mas pode causar dor, inchaço, hematomas e, raramente, complicações como granulomas espermáticos. É importante seguir as orientações médicas para cuidados pós-operatórios e confirmar a esterilidade com exames subsequentes.
                </p>
            </section>
        </div>
    );
}
