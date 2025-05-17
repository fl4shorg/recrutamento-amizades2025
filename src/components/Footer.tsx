
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-neext-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-bold text-white mb-4">
              NEEXT<span className="text-neext-secondary">ADM</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Junte-se à maior comunidade de amizade da web e tenha a oportunidade de crescer conosco.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <Button 
              variant="outline" 
              className="border-neext-secondary text-white hover:bg-neext-secondary"
              onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voltar ao topo
            </Button>
            <Button 
              className="bg-neext-secondary hover:bg-neext-primary text-white"
              onClick={() => document.getElementById('recrutamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Candidate-se Agora
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NEEXT. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neext-secondary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-neext-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-neext-secondary transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
