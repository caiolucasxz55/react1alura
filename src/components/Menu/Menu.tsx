import Link from "next/link";
import { MenuProps } from "@/types/MenuProps";


export default function Menu({links}:MenuProps){
    return(
       <section className="container-menu">
        <nav className="menu" >
            <ul className="lista-links">
            {links.map((link,index)=>
            <li key={index}>
                <Link href={link.href}>{link.label}</Link>    
            </li>)}
               
            </ul>
        </nav>
       </section>
    );
}

