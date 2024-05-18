import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
export default function MenuNav() {
    return (
      <Menubar>
        <MenubarMenu>
          <Link href={"/"}>
            <MenubarTrigger>Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"/about-me"}>
            <MenubarTrigger>Quem Somos</MenubarTrigger>
          </Link>{" "}
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"/equipe"}>
            <MenubarTrigger>Nossa Equipe</MenubarTrigger>
          </Link>{" "}
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"/clinica"}>
            <MenubarTrigger>A Clínica</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex gap-2">
            Exames e Tratamentos <ArrowDown size={20} />{" "}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Urologia</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href={"/exames-tratamentos/urologia/Ultrassonografia-Abdominal-e-Pelvica"}>
                  <MenubarItem>
                    Ultrassonografia Abdominal e Pélvica
                  </MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/urologia/Urodinamica"}>
                  <MenubarItem>Urodinâmica</MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/urologia/Urofluxometria"}>
                  <MenubarItem>Urofluxometria</MenubarItem>
                </Link>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Nefrologia</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href={"/exames-tratamentos/nefrologia/exame-de-urina"}>
                  <MenubarItem>
                  Exame de Urina (EAS)                  </MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/nefrologia/ultrassonografia-renal"}>
                  <MenubarItem>Ultrassonografia Renal</MenubarItem>
                </Link>
               
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Blog</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
}