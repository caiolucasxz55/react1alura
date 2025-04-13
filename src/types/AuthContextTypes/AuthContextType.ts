import { UsuarioProps } from "../UsuarioProps"
export type AuthContextType = {
    usuario: UsuarioProps | null;
    login: (email:string, senha:string) => boolean;
    register:(novoUsuario:UsuarioProps) =>boolean;
    logout: ()=> void;
}