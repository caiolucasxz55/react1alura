"use client"; 

import CabecalhoGeral from "@/components/Cabecalho/CabecalhoGeral";
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";


export default function Acessibilidade() {

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
            title="Acessibilidade Urbana e Mobilidade" 
            colorTitle="text-blue-500"
            description="Canal de informações sobre a acessibilidade urbana e mobilidade para pessoas com deficiência." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="relative w-full h-[400px]">
        <Image
          src="/images/elevador2.jpg"
          alt="Imagem de um elevador de acesso para cadeirantes"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Ferramentas Úteis"
            description="Existem várias ferramentas e aplicativos que podem facilitar a mobilidade de pessoas com deficiência. Alguns aplicativos ajudam a planejar rotas acessíveis, mostrando as opções de transporte público adaptado e os melhores caminhos com calçadas niveladas e piso tátil. Além disso, aplicativos de mapas e navegação já têm recursos de acessibilidade, como informações sonoras e indicadores visuais de pontos acessíveis. Essas ferramentas tornam o dia a dia mais fácil e garantem que todos possam se deslocar pela cidade de forma mais autônoma e segura."
          />
          <InfoCard
            title="Estruturas Urbanas Acessíveis"
            description="A presença de infraestruturas acessíveis nas cidades é fundamental para a mobilidade de pessoas com deficiência. Rampas bem construídas, calçadas niveladas, pisos táteis, semáforos sonoros e sinalizações adaptadas garantem que todos possam circular de forma segura e independente. Investir em uma cidade mais acessível beneficia não apenas pessoas com deficiência, mas toda a população."
          />
        </div>
      </div>

    </div>
    </>
  );
}