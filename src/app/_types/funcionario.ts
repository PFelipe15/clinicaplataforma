import { StaticImageData } from "next/image";

export interface Funcionario{
    name: string;
    title: string;
    crm: string;
    identificadorFunc: string;
    description: string;
    detalhes: string[];
    graduation: string;
    textoApresentacao: string;
    image: StaticImageData;
}