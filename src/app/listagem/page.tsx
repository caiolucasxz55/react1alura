"use client";

import CabecalhoList from "@/components/Cabecalho/CabecalhoList";
import Listagem from "@/components/Listagem/ListagemServicos";
import type { LinkServico } from "@/types/LinkServico"; 

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
  return (
    <>
      <CabecalhoList />
      <Listagem links={servicos} />
    </>
  );
}
