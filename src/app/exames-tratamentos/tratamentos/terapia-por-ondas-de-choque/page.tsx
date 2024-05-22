import Image from 'next/image';

export default function TerapiaOndasChoque() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Terapia por Ondas de Choque</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Terapia por Ondas de Choque é um tratamento não invasivo que utiliza ondas acústicas para promover a regeneração de tecidos e aliviar dores crônicas.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento envolve a aplicação de ondas acústicas na área afetada usando um dispositivo específico, estimulando a circulação e a cicatrização dos tecidos.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Terapia por Ondas de Choque"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    As sessões são rápidas e realizadas em consultório, sem necessidade de anestesia ou tempo de recuperação prolongado.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Terapia por Ondas de Choque é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Tratamento de disfunção erétil</li>
                    <li>Alívio de dores crônicas musculoesqueléticas</li>
                    <li>Regeneração de tecidos lesionados</li>
                    <li>Tratamento de calcificações nos tendões</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A terapia é segura e eficaz, com poucos efeitos colaterais. Pode causar leve desconforto durante o tratamento e hematomas temporários. É importante discutir qualquer condição médica pré-existente com o médico.
                </p>
            </section>
        </div>
    );
}
