// src/pages/listagem.tsx
import React from "react";

type ServicoPCD = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string; // Agora é imagem real
};

const servicosPCD: ServicoPCD[] = [
  {
    id: 1,
    titulo: "Cadeira de Rodas",
    descricao: "Serviço de fornecimento e manutenção de cadeiras de rodas para mobilidade acessível.",
    imagem: "https://images.unsplash.com/photo-1603398938378-02d65c3b8b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    titulo: "Elevador de Acessibilidade",
    descricao: "Instalação e suporte de elevadores para acessibilidade em prédios residenciais e comerciais.",
    imagem: "https://images.unsplash.com/photo-1581092919534-6c1780d94b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    titulo: "Audiodescrição",
    descricao: "Serviço de audiodescrição para eventos culturais, museus e apresentações teatrais.",
    imagem: "https://images.unsplash.com/photo-1615560435664-6ce6dbbd7e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    titulo: "Intérprete de Libras",
    descricao: "Profissionais especializados para tradução simultânea em Língua Brasileira de Sinais.",
    imagem: "https://images.unsplash.com/photo-1601933470928-c14ad0292b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    titulo: "Tecnologia Assistiva",
    descricao: "Apoio na implementação de softwares e dispositivos assistivos para pessoas com deficiência.",
    imagem: "https://images.unsplash.com/photo-1581090700227-1c065c58844f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
];

export default function Listagem() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Serviços de Acessibilidade para PCD</h1>

        <div className="flex flex-col gap-12">
          {servicosPCD.map((servico) => (
            <div
              key={servico.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transition hover:shadow-2xl"
            >
              <img
                src={servico.imagem}
                alt={servico.titulo}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-4">{servico.titulo}</h2>
                <p className="text-gray-600 text-lg">{servico.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
