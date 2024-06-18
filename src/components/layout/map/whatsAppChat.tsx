// components/WhatsAppChat.jsx
import React from 'react';
import { MessageCircle, X } from "lucide-react";
import Image from 'next/image';
import LogoImage from '../../../app/assets/LogoQualidadeAlta.jpg'

const WhatsAppChat = ({ onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg p-4 rounded-lg w-80 animate-slideUp">
      <div className="flex justify-between items-center bg-green-500 text-white p-2 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Image src={LogoImage} alt="WhatsApp" width={35} height={35} />
          <div>
            <h3 className="text-sm font-bold">WhatsApp - Clinica Urovida</h3>
            <p className="text-xs">Online agora</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          <X size={20} />
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded-b-lg">
        <div className="mb-4">
          <div className="bg-white p-2 rounded-md shadow-sm mb-2">
            <p>Olá, tudo bem?</p>
          </div>
          <div className="bg-green-100 p-2 rounded-md shadow-sm">
            <p>Quer falar conosco via WhatsApp?</p>
          </div>
        </div>
        <button
          onClick={() => window.open('https://api.whatsapp.com/send?phone=55869993372498&text=Ol%C3%A1,%20quero%20uma%20consulta')}
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full w-full hover:bg-green-600 transition-colors duration-300"
        >
          Sim, falar agora!
        </button>
        <p className="text-xs text-center mt-2">Clicando acima você aceita nossas <a href="#" className="text-blue-500 underline">Política de Privacidade</a></p>
      </div>
    </div>
  );
};

export default WhatsAppChat;
