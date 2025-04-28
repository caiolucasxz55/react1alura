// src/app/listagem/denuncias/page.tsx

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
            title="Direitos"
            description="Pessoas com deficiência têm uma série de direitos garantidos por lei quando o assunto é mobilidade. Isso inclui a gratuidade no transporte público, prioridade no embarque e a possibilidade de levar um acompanhante sem custos adicionais. Além disso, o transporte público deve ser adaptado, com veículos acessíveis e pontos de embarque/desembarque que atendam às necessidades de quem tem mobilidade reduzida. Também é importante lembrar que calçadas e faixas de pedestres devem ser adaptadas, permitindo que as pessoas com deficiência possam circular com segurança pela cidade."
          />
        </div>
      </div>

    </div>
  );
}
