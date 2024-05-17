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
          <MenubarTrigger>Nossa Equipe</MenubarTrigger>
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
              <MenubarSubTrigger>Exames</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Exame de Sangue</MenubarItem>
                <MenubarItem>Ultrassonografia</MenubarItem>
                <MenubarItem>Ressonância Magnética</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Tratamentos</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Fisioterapia</MenubarItem>
                <MenubarItem>Acupuntura</MenubarItem>
                <MenubarItem>Psicoterapia</MenubarItem>
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