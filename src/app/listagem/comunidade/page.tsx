"use client"; 

import CabecalhoGeral from "@/components/Cabecalho/CabecalhoGeral";
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";

export default function Comunidades() {
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
