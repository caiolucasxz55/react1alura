"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UsuarioProps } from "@/types/UsuarioProps";

export default function UsuarioPage() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState<UsuarioProps | null>(null);

  useEffect(() => {
    const lista: UsuarioProps[] = JSON.parse(localStorage.getItem("listaUsuarios") || "[]");
    const encontrado = lista.find(u => u.id === Number(id));
    if (encontrado) {
      setUsuario(encontrado);
    }
  }, [id]);

  if (!usuario) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
        <p className="text-center text-lg text-red-600">Usuário não encontrado.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Perfil Público do Usuário</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <p className="text-lg text-gray-700 mb-4"><strong>ID:</strong> {usuario.id}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Nome:</strong> {usuario.nome || "Não informado"}</p>
        <p className="text-lg text-gray-700 mb-6"><strong>Email:</strong> {usuario.email}</p>
        <button
          onClick={() => history.back()}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Voltar
        </button>
      </div>
    </main>
  );
}
