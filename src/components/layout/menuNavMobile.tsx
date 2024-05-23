'use client'
import Link from 'next/link';
 import { Menubar, MenubarMenu, MenubarTrigger,   } from '@/components/ui/menubar';
import {     MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon className="h-6 w-6 text-secondary" />
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 top-0   bg-white w-screen h-screen shadow-md">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X className="h-6 w-6 text-secondary" />
          </button>
          <Menubar className="flex font-bold text-white flex-col gap-4 items-center ">
            <MenubarMenu>
              <Link href={"/"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenubarTrigger href={"/"}>Home</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link
                href={"/about-me"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenubarTrigger href={"/about-me"}>Quem Somos</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>
            <MenubarMenu>
              <Link href={"/equipe"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenubarTrigger href={"/equipe"}>Nossa Equipe</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>
            <MenubarMenu>
              <Link
                href={"/clinica"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenubarTrigger href={"/clinica"}>A Clinica</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>
            <MenubarMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenubarTrigger href="/exames-tratamentos/exames">
                    Exames
                  </MenubarTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex gap-4 flex-col">
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/exames/citoscopia-rigida"}
                  >
                    <DropdownMenuItem>Cistoscopia Rigida</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/exames/citoscopia-flexivel"}
                  >
                    <DropdownMenuItem>Cistoscopia Flexível</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={
                      "/exames-tratamentos/exames/teste-erecao-farmaco-induzida"
                    }
                  >
                    <DropdownMenuItem>
                      Teste de Ereção Fármaco-Induzida
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/exames/urodinamica"}
                  >
                    <DropdownMenuItem>Urodinâmica</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/exames/urodinamica-completa"}
                  >
                    <DropdownMenuItem>Urodinâmica Completa</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </MenubarMenu>
            <MenubarMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenubarTrigger href="/exames-tratamentos/tratamento">
                    Tratamentos
                  </MenubarTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex gap-4 flex-col">
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/biopsia-peniana"}
                  >
                    <DropdownMenuItem>Biópsia Peniana</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/crioterapia"}
                  >
                    <DropdownMenuItem>Crioterapia</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/dilatacao-uretral"}
                  >
                    <DropdownMenuItem>Dilatação Uretral</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={
                      "/exames-tratamentos/tratamentos/fisioterapia-pelvica"
                    }
                  >
                    <DropdownMenuItem>Fisioterapia Pélvica</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/implantes-hormonais"}
                  >
                    <DropdownMenuItem>Implantes Hormonais</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={
                      "/exames-tratamentos/tratamentos/terapia-por-ondas-de-choque"
                    }
                  >
                    <DropdownMenuItem>
                      Terapia por Ondas de Choque
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/postectomia"}
                  >
                    <DropdownMenuItem>Postectomia</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/vasectomia"}
                  >
                    <DropdownMenuItem>Vasectomia</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </MenubarMenu>
            <MenubarMenu>
              <Link href={"/blog"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenubarTrigger href="/blog">Blog</MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>
      )}
    </div>
  );
}
