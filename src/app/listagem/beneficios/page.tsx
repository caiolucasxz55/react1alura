"use client"; 
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";

export default function DenunciasPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Benefícios e Direitos" 
            colorTitle="text-blue-500"
            description="Informações sobre os principais benefícios e direitos garantidos às pessoas com deficiência." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Direitos garantidos por lei"
            description="As pessoas com deficiência possuem uma série de direitos assegurados pela legislação brasileira, como acesso à educação, saúde, transporte e trabalho. A Lei Brasileira de Inclusão (LBI) é um marco importante que garante igualdade de oportunidades e a eliminação de barreiras. É essencial conhecer esses direitos para garantir sua efetivação e promover a cidadania plena."
          />
          <InfoCard
            title="Benefícios sociais e assistenciais"
            description="Diversos benefícios sociais são oferecidos às pessoas com deficiência, como o Benefício de Prestação Continuada (BPC), isenções fiscais, passe livre no transporte público e prioridade em serviços essenciais. Esses benefícios contribuem para a inclusão social e econômica, auxiliando no enfrentamento de desafios cotidianos e na promoção de uma vida mais digna e independente."
          />
        </div>
      </div>

    </div>
  );
}
