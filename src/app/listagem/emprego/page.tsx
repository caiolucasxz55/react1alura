"use client"; 
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";

export default function Emprego() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Emprego e Profissionalização" 
            colorTitle="text-red-600"
            description="Informações sobre emprego e profissionalização para inclusão de pessoas com deficiência no trabalho." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Inclusão no mercado de trabalho"
            description="A inclusão no mercado de trabalho é um direito das pessoas com deficiência e é fundamental para garantir mais autonomia e qualidade de vida. Empresas devem oferecer oportunidades iguais, com adaptações no ambiente de trabalho quando necessário. Existem também programas de incentivo à contratação e leis que asseguram a presença de profissionais PCD em diferentes áreas."
          />
          <InfoCard
            title="Profissionalização"
            description="A profissionalização é essencial para ampliar as chances de ingresso no mercado. Diversos cursos gratuitos e programas de capacitação são voltados especialmente para pessoas com deficiência, preparando para diferentes profissões e fortalecendo a independência financeira. Buscar qualificação é um passo importante para conquistar novas oportunidades e crescer na carreira."
          />
        </div>
      </div>

    </div>
  );
}
