import Image from "next/image";
import ImageExample from "../../app/assets/347421952_1446950042802881_739511864334827390_n.jpg";
import Link from "next/link";

export default function Tratamentos() {
  const tratamentos = [
    {
      nome: "Fisioterapia",
      descricao: "Tratamentos para reabilitação e melhoria da mobilidade.",
      imagem: ImageExample,
    },
    {
      nome: "Acupuntura",
      descricao: "Método tradicional chinês para tratamento de dores e estresse.",
      imagem: ImageExample, // Substitua pelo caminho correto da imagem
    },
    {
      nome: "Psicoterapia",
      descricao: "Apoio psicológico para uma vida mentalmente saudável.",
      imagem: ImageExample, // Substitua pelo caminho correto da imagem
    },
  ];

  return (
    <div className="container flex items-center w-full justify-center h-[90vh] flex-col">
      <h1 className="text-3xl text-center text-primary font-semibold mb-8">
        <span className="animate-typing">Nossas especialidades</span>
        <br />
        conheça nossos principais tratamentos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tratamentos.map((tratamento,index) => (
          <Link href={"/"} key={index}>
            <div
              key={tratamento.nome}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={tratamento.imagem}
                alt={tratamento.nome}
                width={400}
                height={400}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{tratamento.nome}</h2>
              <p className="text-gray-600">{tratamento.descricao}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
