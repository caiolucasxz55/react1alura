import Link from "next/link";
import Form from "../Forms/Form";
import { CorpoProps } from "@/types/CorpoProps";


export default function Corpo(props:CorpoProps){
    return(

    <section className="max-w-[1100px] mx-auto mt-12 mb-12 px-4 md:px-6 flex flex-col gap-6 items-center">
        <div className="w-full">
            <p className="text-lg text-gray-700 mb-4 text-center">{props.mensagem}</p>
        </div>
        <div className="w-full flex flex-col items-center mt-6">
            <Form/>
        </div>
        <div className="w-full flex flex-col items-center mt-6">
            <p className="text-lg text-gray-700 mb-4 text-center">{props.callToAction}</p>
            <Link className="inline-block bg-red-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 ease-in-out shadow-sm hover:bg-red-600 hover:shadow-md hover:transform hover:-translate-y-0.5" href={props.linkUrl}>{props.linkTexto}</Link>
        </div>

    </section>

    );
}