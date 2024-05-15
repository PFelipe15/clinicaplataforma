'use client'
 import { Menubar, MenubarMenu, MenubarTrigger,   } from '@/components/ui/menubar';
import {   ArrowDown, MenuIcon, X } from 'lucide-react';
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
        <div className="absolute top-0 right-0 bg-white w-full h-screen shadow-md">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X className="h-6 w-6 text-secondary" />
          </button>
          <Menubar className="flex font-bold text-white flex-col gap-4 items-center ">
            <MenubarMenu  >
              <MenubarTrigger className=''>Home</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Quem Somos</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Nossa Equipe</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>A Clínica</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild >
                  <MenubarTrigger className="flex gap-2  ">
                    Exames e Tratamentos
                  </MenubarTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start'>
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
