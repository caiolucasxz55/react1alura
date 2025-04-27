"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { FormularioProps } from "@/types/FormularioProps";


const schema = z.object({
    email: z.string().email("Email invalido"),
    senha: z.string().min(4,"Senha muito curta, senha deve conter mais que 4 caracteres"),  
})

type FormData = z.infer<typeof schema>

export default function FormCadastro({titulo,botaoTexto}:FormularioProps){
  const {register:cadastrar}= useAuth();
  const router = useRouter();


  const{register,
    handleSubmit,
    formState:{errors}
  } = useForm<FormData>({
    resolver:zodResolver(schema),
  });

  const onSubmit = (data:FormData)=>{
    const novoUsuario = {
      id: Date.now(),
      ...data,
    };
    const sucesso = cadastrar(novoUsuario);
    if (sucesso){
      alert("usuario cadastrado com sucesso. ");
      router.push("/");
    } else{
      alert("Já existe um usuario com esse email.")
    }
  }



    return(
        <form className="bg-white rounded-lg shadow-md p-6 md:p-4 w-full max-w-[500px] mx-auto transition-all duration-300 ease-in-out hover:shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="border-none flex flex-col">
          <legend className="text-xl font-bold text-gray-900 mb-8 text-center pb-4 border-b-2 border-gray-200 w-full">{titulo}</legend>
  
          <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="nome">Nome:</label>
          <input className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400" type="text" id="nome" name="nome" required />
  
          <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email:</label>
          <input className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400" type="email"{...register("email")} id="email" name="email" required />{errors.email &&<p className="erro">{errors.email.message}</p>}
  
          <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="senha">Senha:</label>
          <input className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400" type="password"{...register("senha")} id="senha" name="senha" required />{errors.email && <p>{errors.email.message}</p>}
  
          <div className="mt-4">
            <button className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-md cursor-pointer text-base transition-all duration-300 ease-in-out hover:bg-blue-700 hover:transform hover:-translate-y-0.5 hover:shadow-md active:transform active:translate-y-0" type="submit">{botaoTexto}</button>
          </div>
        </fieldset>
      </form>
    );
}