"use client"; 
import CabecalhoGeral from "@/components/Cabecalho/CabecalhoGeral";
import InfoCard from "@/components/InfoCard/InfoCard";
import TextoPagina from "@/components/TextoPagina/TextoPagina";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DenunciasPage() {

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
    <>
    <CabecalhoGeral/>
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Benefícios e Direitos" 
            colorTitle="text-blue-500"
            description="Informações sobre os principais benefícios e direitos garantidos às pessoas com deficiência." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Direitos garantidos por lei"
            description="As pessoas com deficiência possuem uma série de direitos assegurados pela legislação brasileira, como acesso à educação, saúde, transporte e trabalho. A Lei Brasileira de Inclusão (LBI) é um marco importante que garante igualdade de oportunidades e a eliminação de barreiras. É essencial conhecer esses direitos para garantir sua efetivação e promover a cidadania plena."
          />
          <InfoCard
            title="Benefícios sociais e assistenciais"
            description="Diversos benefícios sociais são oferecidos às pessoas com deficiência, como o Benefício de Prestação Continuada (BPC), isenções fiscais, passe livre no transporte público e prioridade em serviços essenciais. Esses benefícios contribuem para a inclusão social e econômica, auxiliando no enfrentamento de desafios cotidianos e na promoção de uma vida mais digna e independente."
          />
        </div>
      </div>

    </div>
    </>
  );
}
