import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/header";
import { Raleway } from 'next/font/google'
import Map from "@/components/layout/map/map";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Urovida",
  description: "O cuidado que transforma vidas, encontrando conforto e cura em cada consulta.",
 
 
};
const poetsen = Raleway ({weight:[ '400', '700', '200', '500', '600'],subsets:['latin']})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={cn(
          "min-h-screen flex flex-col     ",
          poetsen.className
        )}
      >
        <Header />
          <main className="flex-grow  animate-fadeIn ">
            {children}
          </main>

          <Map/>
<Footer/>

      </body>
    </html>
  );
}
