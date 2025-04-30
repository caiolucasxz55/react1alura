"use client"; 
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
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
          <TextoPagina 
            title="Denúncias e Reclamações" 
            colorTitle="text-blue-500"
            description="Canal de atendimento para receber denúncias e reclamações de pessoas com deficiência (PCD)." 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Denúncias"
            description="Registre casos de discriminação, maus-tratos, falta de acessibilidade ou outras violações de direitos."
          />
          <InfoCard
            title="Reclamações"
            description="Envie reclamações sobre serviços públicos ou privados que não estejam cumprindo as normas de inclusão."
          />
        </div>
      </div>

    </div>
  );
}
