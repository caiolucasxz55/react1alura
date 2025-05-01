"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function BotaoPerfilUsuario() {
  const { usuario } = useAuth();
  const router = useRouter();

  if (!usuario) return null;

  const irParaPerfilPublico = () => {
    router.push(`/usuario/${usuario.id}`);
  };

  return (
    <button
      onClick={irParaPerfilPublico}
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-6 hover:bg-blue-700 transition"
    >
      Ver Meu Perfil Público
    </button>
  );
}
