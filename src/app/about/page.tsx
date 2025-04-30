import Cabecalho from "@/components/Cabecalho/Cabecalho";

const AboutPage = () => {
  return (
    <>
    <Cabecalho/>
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl text-blue-500 font-bold text-center mb-4">Sobre Nós</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-10">
        <p className="text-gray-700 leading-relaxed text-center mx-auto">
          Bem-vindo ao Portal PCD, um espaço dedicado a oferecer informações e serviços essenciais 
          para pessoas com deficiência. Nosso objetivo é promover a inclusão, a autonomia e o acesso a 
          direitos fundamentais, reunindo conteúdos sobre saúde, educação, mobilidade, oportunidades 
          de emprego e muito mais. Aqui, você encontra apoio, orientação e ferramentas para construir 
          um futuro mais acessível e igualitário. Explore nossas seções e descubra como podemos ajudar 
          você a viver com mais qualidade e dignidade!
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutPage;