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
import { ArrowDown, ArrowDown01, ArrowDownRight } from "lucide-react";
import { Button } from "../ui/button";
  
  export function Header() {
    return (
      <div className=" flex  justify-between items-center  py-5  ">
        <h1>LOGOMARCA</h1>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Quem Somos</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Nossa Equipe</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>A Clínica</MenubarTrigger>
            {/* Submenu para 'A Clínica', se necessário */}
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="flex gap-2">
              Exames e Tratamentos <ArrowDown size={20} />{" "}
            </MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Exames</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Exame de Sangue</MenubarItem>
                  <MenubarItem>Ultrassonografia</MenubarItem>
                  <MenubarItem>Ressonância Magnética</MenubarItem>
                  {/* Adicione mais exames aqui */}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Tratamentos</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Fisioterapia</MenubarItem>
                  <MenubarItem>Acupuntura</MenubarItem>
                  <MenubarItem>Psicoterapia</MenubarItem>
                  {/* Adicione mais tratamentos aqui */}
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Blog</MenubarTrigger>
          </MenubarMenu>
        </Menubar>

        <Button>Agende sua consulta</Button>
      </div>
    );
  }
  