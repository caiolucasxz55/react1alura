"use client"; 

import CabecalhoGeral from "@/components/Cabecalho/CabecalhoGeral";
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Comunidades() {

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
            title="Comunidades e Apoio Psicológico" 
            colorTitle="text-blue-500"
            description="Canal de informações sobre grupo de apoio e apoio psicológico para pessoas com deficiência." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="relative w-full h-[400px]">
        <Image
          src="/images/apoio.jpg"
          alt="Imagem de um grupo de pessoas com deficiência em um círculo de conversa e apoio"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Comunidades"
            description="Pessoas com deficiência podem encontrar apoio emocional em grupos de apoio e comunidades online, onde podem compartilhar experiências e se sentir acolhidas. Participar de encontros e eventos promovidos por esses grupos ajuda a fortalecer a autoestima e o bem-estar emocional, criando uma rede de suporte fundamental para enfrentar os desafios diários."
          />
          <InfoCard
            title="Apoio piscológico"
            description="O apoio psicológico também é essencial, e muitas pessoas com deficiência podem contar com profissionais especializados. Serviços públicos e privados oferecem atendimento psicológico com custos acessíveis. Além disso, aplicativos de apoio psicológico podem ser úteis para ajudar na saúde mental, garantindo que todos tenham o suporte necessário para viver com mais qualidade de vida."
          />
        </div>
      </div>

    </div>
    </>
  );
}
