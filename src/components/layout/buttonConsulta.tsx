'use client'

import { Button } from "../ui/button";

export default function ButtonConsulta( ) {
try {
    const Number = "5586999337249"
    
        const handlePhoneMouseOver = () => {
            window.open(`https://api.whatsapp.com/send?phone=${Number}&text=Ol%C3%A1,%20quero%20uma%20consulta`);
          };
        return (
            <Button onClick={handlePhoneMouseOver} className=" text-sm md:text-base">Agendar consulta</Button>
    
        );
} catch (error) {
}
}