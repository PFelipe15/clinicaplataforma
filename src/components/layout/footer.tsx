import Image from 'next/image';
import Logo from '../../app/assets/logo_page-0001.jpg';
import { MapPin, Mail } from "lucide-react";
import { CgInstagram } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <Image src={Logo} alt="Logo" width={200} height={200} className=" shadow-lg" />
             </div>
            <nav className="flex flex-wrap justify-center lg:justify-start text-lg">
              <a href="/" className="mx-2 hover:scale-105 transition-all hover:text-gray-300">Home</a>
              <a href="/clinica" className="mx-2 hover:scale-105 transition-all hover:text-gray-300">A Clínica</a>
            </nav>
          </div>
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Localização da Clínica</h2>
            <div className="flex items-center mb-2">
              <MapPin size="20" className="text-white" />
              <p className="ml-2 text-lg">Avenida Senador Area Leao, 1480</p>
            </div>
            <div className="flex items-center mb-2">
              <MapPin size="20" className="text-white" />
              <p className="ml-2 text-lg">Bairro Jóquei, Teresina</p>
            </div>
            <div className="flex items-center mb-2">
              <MapPin size="20" className="text-white" />
              <p className="ml-2 text-lg">CEP: 64049110</p>
            </div>
            <div className="flex items-center mb-2">
              <MapPin size="20" className="text-white" />
              <p className="ml-2 text-lg">Piauí, Brasil</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl font-bold mb-4">Contatos</h2>
            <div className="flex items-center mb-2">
              <Mail size="20" className="text-white" />
              <a href="mailto:clinicaurovida@yahoo.com" className="ml-2 text-lg hover:text-gray-300 transition-all">clinicaurovida@yahoo.com</a>
            </div>
            <div className="flex items-center mb-2">
              <BsWhatsapp size="20" className="text-white" />
              <a href="https://wa.me/5586999337249" target="_blank" rel="noopener noreferrer" className="ml-2 text-lg hover:text-gray-300 transition-all">(86) 999337249</a>
            </div>
            <div className="flex items-center mb-2">
              <CgInstagram size="20" className="text-white" />
              <a href="https://www.instagram.com/Urovida" target="_blank" rel="noopener noreferrer" className="ml-2 text-lg hover:text-gray-300 transition-all">Urovida</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-400 pt-4">
        <p>&copy; {new Date().getFullYear()} Urovida. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
