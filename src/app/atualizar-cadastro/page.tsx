"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormAtualizarCadastro from "@/components//FormAtualizarCadastro/AtualizarCadastro";

export default function AtualizarCadastroPage() {
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

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <FormAtualizarCadastro
        titulo="Atualize seus dados"
        botaoTexto="Salvar alterações"
      />
    </main>
  );
}
