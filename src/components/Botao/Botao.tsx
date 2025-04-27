import { BotaoProps } from "@/types/BotaoProps";

export default function Botao({texto,onClick}:BotaoProps){
    return(
        <div>
            <button className="w-full py-3 px-5 bg-blue-600 text-white font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:transform hover:-translate-y-0.5 hover:shadow-md active:transform active:translate-y-0" onClick={onClick}>{texto}</button>
        </div>
    );
        
    
}