import { NavigationUrls } from "@/components/layout/navigationurls";
import { Button } from "@/components/ui/button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       
    
          <main className="flex-grow flex container flex-col items-center  animate-fadeIn ">
            <NavigationUrls/>
            {children}
            <Button className="m-4 self-end">Voltar</Button>
          </main>
   
     
  );
}
