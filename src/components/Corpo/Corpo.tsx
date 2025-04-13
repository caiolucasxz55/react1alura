import Link from "next/link";
import Form from "../Forms/Form";
import { CorpoProps } from "@/types/CorpoProps";


export default function Corpo(props:CorpoProps){
    return(

    <section className="container-body">
        <div>
            <p>{props.mensagem}</p>
        </div>
        <div>
            <Form/>
        </div>
        <div>
            <p>{props.callToAction}</p>
            <Link href={props.linkUrl}>{props.linkTexto}</Link>
        </div>

    </section>

    );
}