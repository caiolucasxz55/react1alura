"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const irParaLogin = () => {
    router.push("/login-user");
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bem-vindo ao Portal PCD</h1>
      <p className="text-gray-700 mb-8 text-lg">Sempre dispostos a te ajudar</p>
      <button
        onClick={irParaLogin}
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-blue-700"
      >
        Entrar
      </button>
    </main>
  );
}
