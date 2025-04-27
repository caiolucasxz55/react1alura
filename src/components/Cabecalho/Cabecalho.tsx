import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header className="header">
            <div className="header-div">
                <h1>Smart Guide</h1>
            </div>
            <Menu links={[{label:"Home",href:"/"},
                {label:"Sobre-nós",href:"/about"},
                {label:"Cadastro",href:"/cadastro"},
                {label:"Listagem",href:"/listagem"},
            ]}/>
        </header>
    );
}