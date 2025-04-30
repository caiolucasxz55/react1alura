"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LinkServico } from "@/types/LinkServico"; 

export default function Listagem({ links }: LinkServico) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = document.cookie.includes("token=usuario-logado");
      if (!token) {
        alert("Você precisa estar logado para acessar esta página!");
        router.push("/");
      } else {
        setIsAuthenticated(true);
      }
    };

    const timer = setTimeout(() => {
      checkAuthentication();
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0";
    alert("Você foi deslogado com sucesso!");
    router.push("/");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-center mt-12 mb-16">
        Lista de Serviços para PCD
      </h1>

        <div className="flex flex-wrap justify-center gap-10">
        {links.map((servico, index) => {
        console.log("Link renderizado:", servico.href); // Aqui pode fazer o log

        return (
            <div
                key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-72 text-center hover:shadow-xl transition"
            >
            <h2 className="text-xl font-semibold mb-4">{servico.nome}</h2>
            <Link href={servico.href} className="text-blue-500 hover:underline">
            Ir para o serviço
            </Link>
            </div>
        );
        })}

        </div>

      <button
        onClick={handleLogout}
        className="text-red-500 text-2xl font-bold mt-12 px-8 py-4 hover:bg-blue-100 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
      >
        Logout
      </button>
    </main>
  );
}