"use client";


import Listagem from "@/components/Listagem/ListagemServicos";
import CabecalhoList from "@/components/CabecalhoList/CabecalhoList";
import type { LinkServico } from "@/types/LinkServico"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const servicos: LinkServico["links"] = [
  { nome: "Serviços de Saúde e Reabilitação", href: "/listagem/servicospcd" },
  { nome: "Benefícios e Direitos", href: "/listagem/beneficios" },
  { nome: "Emprego e Profissionalização", href: "/listagem/emprego" },
  { nome: "Educação Inclusiva", href: "/listagem/educacao" },
  { nome: "Acessibilidade Urbana e Mobilidade", href: "/listagem/acessibilidade" },
  { nome: "Comunidades e Apoio Psicológico", href: "/listagem/comunidade" },
  { nome: "Produtos e Tecnologia Assistiva", href: "/listagem/produtos" },
  { nome: "Denúncias e Reclamações", href: "/listagem/denuncias" },
];

export default function PaginaListagem() {

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
      <CabecalhoList />
      <Listagem links={servicos} />
    </>
  );
}

