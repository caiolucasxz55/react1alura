// src/pages/listagem.tsx
import React from "react";

const servicos = [
  "Serviços de Saúde e Reabilitação",
  "Benefícios e Direitos",
  "Emprego e Profissionalização",
  "Educação Inclusiva",
  "Acessibilidade Urbana e Mobilidade",
  "Comunidades e Apoio Psicológico",
  "Produtos e Tecnologia Assistiva",
  "Denúncias e Reclamações",
];

export default function Listagem() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Título com espaçamento bem distante do topo */}
      <h1 className="text-3xl font-bold text-center mt-12 mb-16">Lista de Serviços para PCD</h1>
      
      {/* Cards com espaçamento claro entre eles */}
      <div className="flex flex-wrap justify-center gap-10"> 
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-72 text-center hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-4">{servico}</h2>
            <a
              href="/"
              className="text-blue-500 hover:underline"
            >
              Ir para o serviço
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
