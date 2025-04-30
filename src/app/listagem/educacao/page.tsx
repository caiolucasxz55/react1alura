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
            title="Educação Inclusiva" 
            colorTitle="text-blue-500"
            description="Informações sobre educação inclusiva para pessoas com deficiência em todos os níveis de ensino" 
            colorDescription="text-gray-700"
          />
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Direito à educação para todos"
            description="A educação inclusiva garante o direito de aprender em ambientes acessíveis, respeitando as diferenças e promovendo o desenvolvimento de todos os estudantes. Escolas devem estar preparadas para receber alunos com deficiência, com recursos pedagógicos adequados, acessibilidade física e formação de professores para o ensino inclusivo. A inclusão na escola é um passo fundamental para a inclusão na sociedade."
          />
          <InfoCard
            title="Recursos e apoio especializado"
            description="Para assegurar a aprendizagem de pessoas com deficiência, é necessário oferecer apoio especializado, como salas de recursos multifuncionais, profissionais de apoio, materiais acessíveis e tecnologias assistivas. Esses recursos contribuem para o desenvolvimento das habilidades e a participação ativa dos alunos em sala de aula, promovendo autonomia e autoestima."
          />
        </div>
      </div>

    </div>
  );
}
