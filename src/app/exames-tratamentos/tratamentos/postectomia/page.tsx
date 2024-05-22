import Image from 'next/image';

export default function Postectomia() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Postectomia</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Postectomia, também conhecida como circuncisão, é um procedimento cirúrgico que remove o prepúcio, a pele que cobre a cabeça do pênis.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é realizado sob anestesia local ou geral. A pele do prepúcio é removida cirurgicamente, e as bordas da pele são suturadas.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Postectomia"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    A recuperação leva algumas semanas, durante as quais o paciente deve seguir cuidados específicos para evitar infecções e promover a cicatrização.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Postectomia é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Fimoses (quando o prepúcio não retrai)</li>
                    <li>Infecções recorrentes do prepúcio (balanopostites)</li>
                    <li>Prevenção de certas doenças sexualmente transmissíveis</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Embora geralmente segura, a Postectomia pode causar dor, sangramento, infecção e cicatrização inadequada. É importante seguir as orientações médicas para cuidados pós-operatórios.
                </p>
            </section>
        </div>
    );
}
