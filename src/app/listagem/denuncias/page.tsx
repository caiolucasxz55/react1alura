// src/app/listagem/denuncias/page.tsx

import InfoCard from "@/components/InfoCard/InfoCard";

export default function DenunciasPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">

      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">
          Denúncias e Reclamações
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Canal de atendimento para receber denúncias e reclamações de pessoas com deficiência (PCD).
        </p>
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
  );
}
