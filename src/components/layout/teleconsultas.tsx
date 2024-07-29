'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ButtonConsulta from "./buttonConsulta";
import { Button } from "../ui/button";
import { BsWifi } from "react-icons/bs";

 
 

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Teleconsultas() {
  const Number = "5586999337249"

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      transition={{ duration: 1.6 }}
      className="flex max-w-sm sm:p-4 lg:max-w-screen-2xl flex-col items-center justify-center w-full min-h-[560px] py-10 my-10 bg-telecomunicacoes bg-cover bg-center text-black rounded-md transform transition-transform duration-500"
    >
      <div
      onClick={()=>{
        window.open(`https://api.whatsapp.com/send?phone=${Number}&text=Ol%C3%A1,%20quero%20uma%20consulta`);

      }}
        className="mb-8 text-center bg-white p-6 rounded-lg  hover:bg-primary  shadow-md  duration-300 ease-in-out transform hover:scale-105 transition-all hover:text-white cursor-pointer"
      >
        <h2 className="flex items-center  justify-center gap-4 text-2xl sm:text-3xl md:text-4xl font-bold">Agendar Teleconsulta <BsWifi size={25} className="text-white rounded-md bg-primary" /> </h2>
        <p className="text-lg sm:text-xl font-semibold mt-2">
          A UROVIDA também oferece serviços de teleconsultas para maior comodidade e melhor comunicação.
        </p>
      </div>
      {/* <motion.p
        variants={fadeInChildVariants}
        className="text-base sm:text-lg px-4 mb-4 bg-primary text-white p-4 rounded-lg shadow-md text-center "
      >
        Agende suas consultas online com nossos especialistas de forma rápida e segura, sem sair de casa. Oferecemos atendimento remoto em Urologia, Nefrologia, Medicina da Dor, Acupuntura, e Fisioterapia Pélvica.
      </motion.p> */}
      <motion.div
        variants={fadeInChildVariants}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <ButtonConsulta />
        <Link href={'/equipe'}>
          <Button className="text-sm md:text-base">Nossos Médicos</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
