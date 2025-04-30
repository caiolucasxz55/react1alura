"use client";

import Link from "next/link";
import Form from "../Forms/Form";
import { CorpoProps } from "@/types/CorpoProps";
import { useAuth } from "@/context/AuthContext";

export default function Corpo(props: CorpoProps) {
  const { usuario } = useAuth();

  return (
    <section className="max-w-[1100px] mx-auto mt-12 mb-12 px-4 md:px-6 flex flex-col gap-6 items-center">
      <div className="w-full">
        <p className="text-4xl md:text-3xl text-blue-500 mb-4 font-extrabold text-center">{props.mensagem}</p>
      </div>
      <div className="w-full flex flex-col items-center mt-6">
        <Form />
      </div>
      <div className="w-full flex flex-col items-center mt-6">
        <p className="text-lg text-gray-700 mb-4 text-center">{props.callToAction}</p>
        <Link
          className="inline-block bg-blue-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 ease-in-out shadow-sm hover:bg-blue-600 hover:shadow-md hover:transform hover:-translate-y-0.5"
          href={props.linkUrl}
        >
          {props.linkTexto}
        </Link>

        {usuario && (
          <Link
            className="inline-block bg-blue-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 ease-in-out shadow-sm hover:bg-blue-600 hover:shadow-md hover:transform hover:-translate-y-0.5 mt-4"
            href="/atualizar-cadastro"
          >
            Atualizar Cadastro
          </Link>
        )}
      </div>
    </section>
  );
}
