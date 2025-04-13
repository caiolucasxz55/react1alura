"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Botao from "../Botao/Botao";
// import { UsuarioProps } from "@/types/UsuarioProps";

const schema = z.object({
    email: z.string().email("Email invalido"),
    senha: z.string().min(4,"Senha muito curta, senha deve conter mais que 4 caracteres"),

});

type FormData = z.infer<typeof schema>


export default function Form(){
    const {login} = useAuth();
    const router = useRouter();


    const{
        register,
        handleSubmit,
        formState:{errors},


    } = useForm<FormData>({
        resolver:zodResolver(schema),
    });



    const onSubmit = (data: FormData) => {
        const sucesso = login(data.email, data.senha);
        if (sucesso) {
          alert("Login realizado com sucesso!");
          router.push("/"); 
          
        }else{
            alert("Credenciais inválidas");
        }
      };
  

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Login</legend>
                    <label htmlFor="email-form">Email:</label>
                    <input type="email"{...register("email")} name="email" id="email-form" placeholder="Digite seu Email" required />{errors.email && <p className="erro">{errors.email.message}</p>}

                    <label htmlFor="senha-form">Senha:</label>
                    <input type="password"{...register("senha")} name="senha" id="senha-form" placeholder="Digite sua senha" required />{errors.email && <p className="erro">{errors.email.message}</p>}

                    <Botao texto="Entrar"/>
            </fieldset>
        </form>
    );
}


// tarefas.map(item => <p> {item.tarefa} </p>)