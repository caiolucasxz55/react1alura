import { FooterProps } from "@/types/FooterProps";

export default function Footer({contatos,parcerias}:FooterProps){
    return(
        <footer className="mt-auto bg-gray-800 text-gray-200 py-12 flex flex-col md:flex-row md:justify-between px-8">
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <p className="font-semibold text-white text-lg mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-400">
            Contatos:
          </p>
          {contatos.map((c, i: number) => (
            <p key={i}>{c}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-white text-lg mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-400">
            Parcerias:
          </p>
          {parcerias.map((p, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </footer>
      
    );
}
