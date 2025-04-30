"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { FormularioProps } from "@/types/FormularioProps";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  senha: z.string()
    .min(4, "Senha muito curta, deve conter mais que 4 caracteres")
    .optional()
    .or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

export default function FormAtualizarCadastro({ titulo, botaoTexto }: FormularioProps) {
  const { atualizarUsuario, usuario } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: usuario?.nome || "",
      email: usuario?.email || "",
      senha: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // Se a senha estiver vazia, não a atualizamos
    const dadosAtualizados = {
      ...data,
      senha: data.senha ? data.senha : undefined,
    };

    const sucesso = atualizarUsuario(dadosAtualizados);
    
    if (sucesso) {
      alert("Dados atualizados com sucesso!");
      router.push("/");
    } else {
      alert("Erro ao atualizar dados. Verifique se o email não está em uso por outro usuário.");
    }
  };

  return (
    <form
      className="bg-white rounded-lg shadow-md p-6 md:p-4 w-full max-w-[500px] mx-auto transition-all duration-300 ease-in-out hover:shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="border-none flex flex-col">
        <legend className="text-xl font-bold text-gray-900 mb-8 text-center pb-4 border-b-2 border-gray-200 w-full">
          {titulo}
        </legend>

        <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="nome">
          Nome:
        </label>
        <input
          className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400"
          type="text"
          id="nome"
          {...register("nome")}
        />
        {errors.nome && (
          <p className="text-red-500 text-sm mb-4">{errors.nome.message}</p>
        )}

        <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email:
        </label>
        <input
          className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400"
          type="email"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
        )}

        <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="senha">
          Nova Senha (deixe em branco para manter a atual):
        </label>
        <input
          className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400"
          type="password"
          id="senha"
          {...register("senha")}
        />
        {errors.senha && (
          <p className="text-red-500 text-sm mb-4">{errors.senha.message}</p>
        )}

        <div className="mt-4">
          <button
            className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-md cursor-pointer text-base transition-all duration-300 ease-in-out hover:bg-blue-700 hover:transform hover:-translate-y-0.5 hover:shadow-md active:transform active:translate-y-0"
            type="submit"
          >
            {botaoTexto}
          </button>
        </div>
      </fieldset>
    </form>
  );
}