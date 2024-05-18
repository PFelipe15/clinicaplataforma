import Image from 'next/image';

export default function UltrassonografiaAbdominalEPelvica() {
    return (
        <div className="  mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Ultrassonografia Abdominal e Pélvica</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-600 leading-relaxed">
                    A ultrassonografia abdominal e pélvica é um exame de imagem que utiliza ondas sonoras de alta frequência para criar imagens dos órgãos internos do abdômen e da pelve. É um método seguro, não invasivo e amplamente utilizado para diagnóstico e monitoramento de diversas condições médicas.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é feito?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    O exame é realizado com o paciente deitado em uma maca. Um gel à base de água é aplicado na pele do abdômen e pelve para facilitar a transmissão das ondas sonoras. Um transdutor, que é um dispositivo semelhante a um microfone, é movido sobre a área examinada. As ondas sonoras são refletidas pelos órgãos internos e convertidas em imagens pelo aparelho de ultrassom.
                </p>
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Realização da Ultrassonografia Abdominal"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    O exame geralmente dura entre 20 a 30 minutos. Não há necessidade de sedação, e o paciente pode retornar às suas atividades normais imediatamente após o procedimento.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A ultrassonografia abdominal e pélvica é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Avaliação de dor abdominal ou pélvica</li>
                    <li>Diagnóstico de doenças hepáticas, renais e pancreáticas</li>
                    <li>Identificação de cálculos biliares ou renais</li>
                    <li>Avaliação de órgãos reprodutivos em mulheres</li>
                    <li>Monitoramento de gravidez</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Preparação</h2>
                <p className="text-gray-600 leading-relaxed">
                    A preparação para o exame pode variar dependendo da área a ser examinada. Em alguns casos, pode ser necessário jejum de 6 a 8 horas antes do exame, especialmente para ultrassonografia abdominal. Para ultrassonografia pélvica, pode ser recomendado beber água para encher a bexiga, o que ajuda a obter imagens mais claras.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-600 leading-relaxed">
                    A ultrassonografia é um exame seguro e sem riscos conhecidos associados à exposição às ondas sonoras. É uma técnica amplamente utilizada devido à sua segurança e eficácia.
                </p>
            </section>
        </div>
    );
}
