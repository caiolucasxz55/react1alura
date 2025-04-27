"use client";

import { useContext,createContext,useEffect,useState } from "react";
import { UsuarioProps } from "@/types/UsuarioProps";
import { AuthContextType } from "@/types/AuthContextTypes/AuthContextType";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({children}: {children:React.ReactNode}) => {
    const [usuario,setUsuario] = useState<UsuarioProps | null>(null);


    useEffect(()=>{
        const userLocal = localStorage.getItem("usuario");
        if (userLocal) setUsuario(JSON.parse(userLocal));
    },[]);

    const login = (email:string,senha:string)=>{
        const lista: UsuarioProps[] = JSON.parse(localStorage.getItem("listaUsuarios") || "[]");
        const user = lista.find(u=> u.email===email && u.senha ===senha);

        if (user){
            setUsuario(user);
            localStorage.setItem("Usuario logado", JSON.stringify(user));
            return true;

        }
        document.cookie = "token=usuario-logado; path=/; max-age=36000";
        return false;

    };

    const register = (novoUsuario:UsuarioProps)=>{
        const lista:UsuarioProps[] = JSON.parse(localStorage.getItem("listaUsuarios") || "[]");
        const existe = lista.some(u=>u.email === novoUsuario.email);
        if (existe) return false;

        const atualizado = [...lista,novoUsuario];
        localStorage.setItem("listaUsuarios", JSON.stringify(atualizado));
        return true;
    };

    const logout = ()=>{
        setUsuario(null);
        localStorage.removeItem("usuario");
        document.cookie = "token=; path=/; max-age=0";
    };

    return(
        <AuthContext.Provider value={{usuario,login,logout,register}}>
            {children}
        </AuthContext.Provider>
    );
    
};

export const useAuth = ()=> useContext(AuthContext);

