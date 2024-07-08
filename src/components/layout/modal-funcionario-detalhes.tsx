import Image from "next/image";
import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import  type { Funcionario } from './../../app/_types/funcionario';

function FuncionarioDetalhesModal({
  funcionarioDetalhes,
  onClose
}: {
  funcionarioDetalhes: Funcionario
  onClose: () => void;
}) {
  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const detalhesToShow = showAll ? funcionarioDetalhes.detalhes : funcionarioDetalhes.detalhes.slice(0, 10);

  return (
    <div className="fixed inset-0 flex max-w-[100vw] p-4  items-center justify-center z-30 bg-white bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg border-2 border-primary p-6 w-full max-w-lg transform transition-all duration-300 opacity-100 overflow-y-auto max-h-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          <CgCloseO size={20} />
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
         <div className="text-left mb-4">
          <h4 className="text-lg font-bold mb-2">Detalhes:</h4>
          <ul className="text-gray-600 list-disc pl-6  max-h-44 md:max-h-80 overflow-y-auto">
            {detalhesToShow.map((detalhe, index) => (
              <li key={index}>{detalhe}</li>
            ))}
          </ul>
           
        </div>
      </div>
    </div>
  );
}

export default FuncionarioDetalhesModal;
