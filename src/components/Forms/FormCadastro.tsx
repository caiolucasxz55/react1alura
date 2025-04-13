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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>{titulo}</legend>
  
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email"{...register("email")} id="email" name="email" required />{errors.email &&<p className="erro">{errors.email.message}</p>}
  
          <label htmlFor="senha">Senha:</label>
          <input type="password"{...register("senha")} id="senha" name="senha" required />{errors.email && <p>{errors.email.message}</p>}
  
          <div className="btn">
            <button type="submit">{botaoTexto}</button>
          </div>
        </fieldset>
      </form>
    );
}