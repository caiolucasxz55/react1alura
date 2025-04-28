// src/app/listagem/denuncias/page.tsx

import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";

export default function Produtos() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Produtos e Tecnologia Assistiva" 
            colorTitle="text-red-600"
            description="Canal sobre tecnologia assistiva e produtos que promovem acessibilidade para pessoas com deficiência." 
            colorDescription="text-gray-700"
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
  );
}
