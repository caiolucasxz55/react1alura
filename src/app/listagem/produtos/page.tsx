"use client"; 
import CabecalhoGeral from "@/components/Cabecalho/CabecalhoGeral";
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";


export default function Produtos() {

  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  useEffect(() => {
    const checkAuthentication = () => {
      const token = document.cookie.includes("token=usuario-logado");
 
      if (!token) {
        alert("Você precisa estar logado para acessar esta página!");
        router.push("/");
      } else {
        setIsAuthenticated(true);
      }
    };
 
    const timer = setTimeout(() => {
      checkAuthentication();
    }, 100);
 
    return () => clearTimeout(timer);
  }, [router]);
 
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <>
    <CabecalhoGeral/>
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Produtos e Tecnologia Assistiva" 
            colorTitle="text-blue-500"
            description="Canal sobre tecnologia assistiva e produtos que promovem acessibilidade para pessoas com deficiência." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="relative w-full h-[400px]">
        <Image
          src="/images/teclado.jpg"
          alt="Imagem de um teclado adaptado para pessoas com deficiência visual"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Tecnologia Assistiva"
            description="A tecnologia assistiva oferece uma gama de produtos que tornam o dia a dia mais acessível e confortável para pessoas com deficiência. Existem ferramentas como leitores de tela, teclados adaptados e dispositivos de amplificação sonora que ajudam a superar as barreiras físicas e sensoriais. Essas tecnologias são projetadas para proporcionar maior autonomia e qualidade de vida no trabalho, estudos e nas atividades diárias."
          />
          <InfoCard
            title="Produtos"
            description="Além dos produtos físicos, há também aplicativos e softwares desenvolvidos para facilitar a comunicação, a navegação e o aprendizado. Apps de acessibilidade, como tradutores de libras e tecnologias de voz, permitem que as pessoas com deficiência tenham uma experiência digital mais inclusiva. Essas inovações são essenciais para garantir que todos tenham igualdade de acesso e oportunidades, independentemente das suas limitações."
          />
        </div>
      </div>

    </div>
    </>
  );
}
