
import Corpo from "@/components/Corpo/Corpo";
import React from "react";

export default function Home() {
  return (
    <main>

      <Corpo
        mensagem="Sempre dispostos a te ajudar" 
        callToAction="Não tem uma conta? clique abaixo e cadastre-se"
        linkUrl="/cadastro "
        linkTexto="Cadastre-se"
      />  

    </main>
  );
}
