"use client";  // Adicione esta diretiva se usar hooks ou eventos

import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";

export default function Acessibilidade() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Acessibilidade Urbana e Mobilidade" 
            colorTitle="text-red-600"
            description="Canal de informações sobre a acessibilidade urbana e mobilidade para pessoas com deficiência." 
            colorDescription="text-gray-700"
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
  );
}