"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      // Verifica se o cookie existe e armazena o resultado como booleano
      const token = document.cookie.includes("token=usuario-logado");
      
      if (!token) {
        alert("Você precisa estar logado para acessar esta página!");
        router.push("/"); // Redireciona para a página principal
      } else {
        setIsAuthenticated(true);
      }
    };

    // Adiciona um pequeno atraso para garantir que o DOM esteja completamente carregado
    const timer = setTimeout(() => {
      checkAuthentication();
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0"; // Remove o cookie de autenticação
    alert("Você foi deslogado com sucesso!");
    router.push("/"); // Redireciona para a página principal
  };

  // Enquanto verifica a autenticação, pode mostrar um loader ou nada
  if (!isAuthenticated) {
    return null;
  }

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
            <Link href="/" className="text-blue-500 hover:underline">
              Ir para o serviço
            </Link>
          </div>
        ))}
      </div>

      {/* Botão de logout com texto maior, sem bordas e em negrito */}
      <button
        onClick={handleLogout}
        className="text-red-500 text-2xl font-bold mt-12 px-8 py-4 hover:bg-blue-100 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
      >
        Logout
      </button>
    </main>
  );
}