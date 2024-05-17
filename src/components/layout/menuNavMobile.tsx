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
                <MenubarTrigger>Home</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link
                href={"/about-me"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenubarTrigger>Quem Somos</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>
            <MenubarMenu>
              <Link href={"/equipe"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenubarTrigger>Nossa Equipe</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>
            <MenubarMenu>
              <Link
                href={"/clinica"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenubarTrigger>A Clinica</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>
            <MenubarMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenubarTrigger>Exames e Tratamentos</MenubarTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex gap-4 flex-col">
                  <DropdownMenuItem>Exame de Sangue</DropdownMenuItem>
                  <DropdownMenuItem>Ultrassonografia</DropdownMenuItem>
                  <DropdownMenuItem>Ressonância Magnética</DropdownMenuItem>
                  <DropdownMenuItem>Fisioterapia</DropdownMenuItem>
                  <DropdownMenuItem>Acupuntura</DropdownMenuItem>
                  <DropdownMenuItem>Psicoterapia</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Blog</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      )}
    </div>
  );
}
