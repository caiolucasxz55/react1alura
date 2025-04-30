import Cabecalho from "@/components/Cabecalho/CabecalhoGeral";
import FormCadastro from "@/components/Forms/FormCadastro";


export default function PaginaCadastro() {
  return (
    <>
    <Cabecalho/>
    <main>
      <FormCadastro titulo="Cadastro de usuário" botaoTexto="Cadastrar" />
    </main>
    </>
  );
}
