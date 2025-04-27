import Link from "next/link";
import { MenuProps } from "@/types/MenuProps";


export default function Menu({links}:MenuProps){
    return(
       <section className="ml-auto">
        <nav className="flex items-center" >
            <ul className="flex gap-6">
            {links.map((link,index)=>
            <li className="text-gray-700 font-medium py-2 px-4 rounded-sm transition-all duration-300 ease-in-out hover:text-blue-600 hover:bg-gray-100 cursor-pointer relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-blue-600" key={index}>
                <Link href={link.href}>{link.label}</Link>    
            </li>)}
               
            </ul>
        </nav>
       </section>
    );
}

