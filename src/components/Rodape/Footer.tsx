import { FooterProps } from "@/types/FooterProps";

export default function Footer({contatos,parcerias}:FooterProps){
    return(
        <footer className="footer">
            <div className="footer-contatos">
                <p>Contatos:</p>
                {contatos.map((c,i:number)=><p key={i}>{c}</p>)}
            </div>
            <div className="footer-parcerias">
                <p>Parcerias:</p>
                {parcerias.map((p,i:number)=> <p key={i}>{p}</p>)}
              
            </div>
        </footer>
    );
}
