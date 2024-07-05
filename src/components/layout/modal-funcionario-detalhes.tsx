import Image from "next/image";
import React from "react";
import { CgCloseO } from "react-icons/cg";

function FuncionarioDetalhesModal({
  funcionarioDetalhes,
  onClose
}: {
  funcionarioDetalhes: {
    name: string;
    title: string;
    crm: string;
    identificadorFunc: string;
    description: string;
    detalhes: string[];
    graduation: string;
    textoApresentacao: string;
    image: string;
  };
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white  bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg border-2 border-primary p-6 w-full max-w-lg transform transition-all duration-300 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          <CgCloseO size={20}/>
        </button>
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src={funcionarioDetalhes.image}
              alt={funcionarioDetalhes.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{funcionarioDetalhes.name}</h2>
            <p className="text-indigo-600">{funcionarioDetalhes.title}</p>
          </div>
        </div>
        <p className="mb-4 text-center">{funcionarioDetalhes.textoApresentacao}</p>
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold mb-2">Detalhes:</h4>
          <ul className="text-gray-600 list-disc pl-6">
            {funcionarioDetalhes.detalhes.map((detalhe, index) => (
              <li key={index}>{detalhe}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FuncionarioDetalhesModal;
