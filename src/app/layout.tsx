import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Raleway } from 'next/font/google';
import Map from "@/components/layout/map/map";
import Footer from "@/components/layout/footer";
import BackButton from "@/components/layout/backButton";
import Head from 'next/head';

export const metadata: Metadata = {
  title:{
    default: "Urovida - Clínica Urológica de Confiança",
   template:"%s | Urovida - Clínica Urológica de Confiança"
  },
  description: "Encontre conforto e cura na Urovida. Oferecemos consultas em Urologia, Nefrologia, Medicina da Dor, Acupuntura e Fisioterapia Pélvica. Marque sua teleconsulta hoje mesmo!",
  keywords: "clínica urológica, urologia, teleconsultas, nefrologia, medicina da dor, acupuntura, fisioterapia pélvica, saúde masculina",
  
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.clinicaurovida.com.br',
    title: 'Urovida - Clínica Urológica de Confiança',
    description: 'Encontre conforto e cura na Urovida. Oferecemos consultas em Urologia, Nefrologia, Medicina da Dor, Acupuntura e Fisioterapia Pélvica. Marque sua teleconsulta hoje mesmo!',
    
    siteName: 'Urovida',
  },
    robots:{ index: true, follow: true },
  alternates:{ canonical: "https://www.clinicaurovida.com.br" }

};

const poetsen = Raleway({ weight: ['400', '700', '200', '500', '600'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Urovida",
    "image": "https://www.clinicaurovida.com.br/logo.jpg",
    "@id": "https://www.clinicaurovida.com.br",
    "url": "https://www.clinicaurovida.com.br",
    "telephone": "+55869993372499",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Senador Area Leao, 1480",
      "addressLocality": "Bairro Jóquei, Teresina",
      "postalCode": "64049110",
      "addressCountry": "BR"
    },
    "geo": {         
      "@type": "GeoCoordinates",
      "latitude": -5.07864792306527,
      "longitude": -42.785043528834
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [              
      "https://www.instagram.com/urovida/"
    ]
  };

  return (
    <html lang="pt-BR">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese"/>
        <meta name="geo.region" content="BR-SP"/>
        <meta name="geo.placename" content="São Paulo"/>
        <meta name="geo.position" content="-23.55052;-46.633308"/>
        <meta name="ICBM" content="-23.55052, -46.633308"/>
        <meta name="author" content="Urovida Clínica"/>
        <meta name="copyright" content="© 2024 Urovida Clínica. Todos os direitos reservados."/>
        <link rel="canonical" href="https://www.clinicaurovida.com.br" />    
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@urovida"/>
        <meta name="twitter:creator" content="@urovida"/>
        <meta name="twitter:title" content="Urovida - Clínica Urológica de Confiança"/>
        <meta name="twitter:description" content="Encontre conforto e cura na Urovida. Oferecemos consultas em Urologia, Nefrologia, Medicina da Dor, Acupuntura e Fisioterapia Pélvica. Marque sua teleconsulta hoje mesmo!"/>
      </Head>
      <body
        className={cn("min-h-screen min-w-[300px]   flex flex-col", poetsen.className)}
      >
        <Header />
        <main className="flex flex-col container items-center animate-fadeIn">
          {children}
          <BackButton />
        </main>
        <Map />
        <Footer />
      </body>
    </html>
  );
}
