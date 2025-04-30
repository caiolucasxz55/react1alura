"use client";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Corpo from "@/components/Corpo/Corpo";

export default function PaginaLogin() {
  return (
    <>
      <Cabecalho />
      <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <Corpo
          mensagem="Sempre dispostos a te ajudar"
          callToAction="Não tem uma conta? clique abaixo e cadastre-se"
          linkUrl="/cad-user"
          linkTexto="Cadastre-se"
        />
      </main>
    </>
  );
}
