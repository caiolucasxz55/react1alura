"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Botao from "../Botao/Botao";


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
          router.push("/listagem"); 
          
        }else{
            alert("Credenciais inválidas");
        }
      };
  

    return(
        <form className="bg-white rounded-lg shadow-md p-6 md:p-4 w-full max-w-[500px] mx-auto transition-all duration-300 ease-in-out hover:shadow-lg" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="border-none flex flex-col">
                <legend className="text-xl font-bold text-gray-900 mb-8 text-center pb-4 border-b-2 border-gray-200 w-full">Login</legend>
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="email-form">Email:</label>
                    <input className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400" type="email"{...register("email")} name="email" id="email-form" placeholder="Digite seu Email" required />{errors.email && <p className="erro">{errors.email.message}</p>}

                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="senha-form">Senha:</label>
                    <input className="p-4 border border-gray-300 rounded-md text-base mb-6 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 placeholder:text-gray-400" type="password"{...register("senha")} name="senha" id="senha-form" placeholder="Digite sua senha" required />{errors.email && <p className="erro">{errors.email.message}</p>}

                    <Botao texto="Entrar"/>
            </fieldset>
        </form>
    );
}


// tarefas.map(item => <p> {item.tarefa} </p>)