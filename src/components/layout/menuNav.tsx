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
            <MenubarTrigger href={"/"}>Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"/about-me"}>
            <MenubarTrigger href={"/about-me"}>Quem Somos</MenubarTrigger>
          </Link>{" "}
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"/equipe"}>
            <MenubarTrigger href={"/equipe"}>Nossa Equipe</MenubarTrigger>
          </Link>{" "}
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"/clinica"}>
            <MenubarTrigger href={"/clinica"}>A Clínica</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger href="/exames-tratamentos" className="flex gap-2">
            Exames e Tratamentos <ArrowDown size={20} />{" "}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Exames</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href={"/exames-tratamentos/exames/citoscopia-rigida"}>
                  <MenubarItem>Cistoscopia Rigida</MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/exames/citoscopia-flexivel"}>
                  <MenubarItem>Cistoscopia Flexível</MenubarItem>
                </Link>
                <Link
                  href={
                    "/exames-tratamentos/exames/teste-erecao-farmaco-induzida"
                  }
                >
                  <MenubarItem>Teste de Ereção Fármaco-Induzida</MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/exames/urodinamica"}>
                  <MenubarItem>Urodinâmica</MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/exames/urodinamica-completa"}>
                  <MenubarItem>Urodinâmica Completa</MenubarItem>
                </Link>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Tratamentos</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href={"/exames-tratamentos/tratamentos/biopsia-peniana"}>
                  <MenubarItem>Biópsia Peniana</MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/tratamentos/crioterapia"}>
                  <MenubarItem>Crioterapia</MenubarItem>
                </Link>
                <Link
                  href={"/exames-tratamentos/tratamentos/dilatacao-uretral"}
                >
                  <MenubarItem>Dilatação Uretral</MenubarItem>
                </Link>
                <Link
                  href={"/exames-tratamentos/tratamentos/fisioterapia-pelvica"}
                >
                  <MenubarItem>Fisioterapia Pélvica</MenubarItem>
                </Link>
                <Link
                  href={"/exames-tratamentos/tratamentos/implantes-hormonais"}
                >
                  <MenubarItem>Implantes Hormonais</MenubarItem>
                </Link>
                <Link
                  href={
                    "/exames-tratamentos/tratamentos/terapia-por-ondas-de-choque"
                  }
                >
                  <MenubarItem>Terapia por Ondas de Choque</MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/tratamentos/postectomia"}>
                  <MenubarItem>Postectomia</MenubarItem>
                </Link>
                <Link href={"/exames-tratamentos/tratamentos/vasectomia"}>
                  <MenubarItem>Vasectomia</MenubarItem>
                </Link>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
        <Link href="/blog">
          <MenubarTrigger href="/blog">Blog</MenubarTrigger>

        </Link>

        </MenubarMenu>
      </Menubar>
    );
}