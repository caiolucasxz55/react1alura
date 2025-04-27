import { TextoPaginaProps } from "@/types/TextoPaginaProps";

export default function TextoPagina({ title, description, colorTitle, colorDescription }: TextoPaginaProps) {
  return (
    <div className="container-texto-pagina">
      <div className="title-texto-pagina">
        <h1 className={`text-4xl md:text-5xl font-extrabold ${colorTitle} mb-2`}>
          {title}
        </h1>
      </div>
      <div className="paragraph-texto-pagina">
        <p className={`text-3x1 md:text-2xl ${colorDescription}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
