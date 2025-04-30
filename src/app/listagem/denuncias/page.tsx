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
            title="Denúncias e Reclamações" 
            colorTitle="text-blue-500"
            description="Canal de atendimento para receber denúncias e reclamações de pessoas com deficiência (PCD)." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Denúncias"
            description="Registre casos de discriminação, maus-tratos, falta de acessibilidade ou outras violações de direitos."
          />
          <InfoCard
            title="Reclamações"
            description="Envie reclamações sobre serviços públicos ou privados que não estejam cumprindo as normas de inclusão."
          />
        </div>
      </div>

    </div>
    </>
  );
}
