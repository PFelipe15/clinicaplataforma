import Image from 'next/image';
import Logo from '../../app/assets/Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary font-bold text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-2">
        <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
           <div className="mr-4">
            <Image src={Logo} alt="Logo" width={100} height={100} />
          </div>
           <h1 className="text-2xl font-bold">Urovida</h1>
        </div>
         <nav className="flex flex-wrap items-center justify-center lg:justify-end">
          <a  href="/" className="mx-2 hover:scale-105 transition-all text-lg hover:text-gray-400">Home</a>
           <a href="/clinica" className="mx-2  hover:scale-105 transition-all text-lg hover:text-gray-400">A clinica</a>
         </nav>
      </div>
       <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Urovida. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
