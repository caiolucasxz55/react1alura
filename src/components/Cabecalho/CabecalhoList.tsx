import Menu from "../Menu/Menu";

export default function CabecalhoList(){
    return(
        <header className="sticky top-0 z-10 flex justify-between items-center bg-white shadow-md px-6 md:px-12 py-4">
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-blue-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-2/5 after:h-[3px] after:bg-gradient-to-r after:from-blue-600 after:to-blue-400 after:rounded-full">Portal PCD</h1>
            </div>
            <Menu links={[{label:"Home",href:"/"},
                {label:"modificar dados",href:"/atualizar-cadastro"},
               
                
            ]}/>
        </header>
    );
}
