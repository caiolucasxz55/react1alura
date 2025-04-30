"use client"; 
import CabecalhoGeral from "@/components/Cabecalho/CabecalhoGeral";
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";

export default function DenunciasPage() {
  return (
    <>
    <CabecalhoGeral/>
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Serviços de Saúde e Reabilitação" 
            colorTitle="text-blue-500"
            description="Informações sobre serviços de saúde e reabilitação voltados para o bem-estar e a inclusão de pessoas com deficiência." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Atendimento em saúde especializado"
            description="O acesso a serviços de saúde especializados é essencial para garantir o cuidado adequado às pessoas com deficiência. Clínicas, hospitais e centros de referência devem oferecer atendimentos adaptados, com equipes capacitadas e estrutura acessível. O atendimento humanizado e o respeito às necessidades individuais contribuem para a promoção da saúde e da qualidade de vida."
          />
          <InfoCard
            title="Programas de reabilitação"
            description="Os programas de reabilitação são fundamentais para promover a autonomia e a recuperação funcional das pessoas com deficiência. Esses programas envolvem terapias físicas, ocupacionais, psicológicas e outros cuidados que ajudam na reintegração social e no desenvolvimento de habilidades. A reabilitação contínua fortalece a independência e possibilita uma vida mais ativa e participativa."
          />
        </div>
      </div>

    </div>
    </>
  );
}
