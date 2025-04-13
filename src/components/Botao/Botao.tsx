import { BotaoProps } from "@/types/BotaoProps";

export default function Botao({texto,onClick}:BotaoProps){
    return(
        <div className="btn">
            <button onClick={onClick}>{texto}</button>
        </div>
    );
        
    
}