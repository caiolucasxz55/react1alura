"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Menu from "../Menu/Menu";

export default function CabecalhoList() {
  const { usuario } = useAuth();
  const router = useRouter();

  const irParaPerfilPublico = () => {
    if (usuario) {
      router.push(`/user/${usuario.id}`);
    }
  };

  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-white shadow-md px-6 md:px-12 py-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-blue-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-2/5 after:h-[3px] after:bg-gradient-to-r after:from-blue-600 after:to-blue-400 after:rounded-full">
          Portal PCD
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Menu
          links={[
            
            { label: "Sobre-nós", href: "/about" },
            { label: "Atualizar Dados", href: "/atualizar-cadastro" },
          ]}
        />

        {usuario && (
          <button
            onClick={irParaPerfilPublico}
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Meu Perfil Público (DEMO)
          </button>
        )}
      </div>
    </header>
  );
}
