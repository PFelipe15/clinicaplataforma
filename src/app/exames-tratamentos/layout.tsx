import { NavigationUrls } from "@/components/layout/navigationurls";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow flex container flex-col items-center  animate-fadeIn ">
      <NavigationUrls />
      {children}
    
    </main>
  );
}
