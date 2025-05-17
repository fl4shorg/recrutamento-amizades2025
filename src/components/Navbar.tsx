
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-neext-dark bg-opacity-90 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          NEEXT<span className="text-neext-secondary">ADM</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-white hover:text-neext-secondary transition-colors">Início</a>
          <a href="#sobre" className="text-white hover:text-neext-secondary transition-colors">Sobre NEEXT</a>
          <a href="#beneficios" className="text-white hover:text-neext-secondary transition-colors">Benefícios</a>
          <a href="#recrutamento" className="text-white hover:text-neext-secondary transition-colors">Recrutamento</a>
        </div>
        
        <div>
          <Button className="bg-neext-secondary hover:bg-neext-primary text-white">
            Junte-se a nós
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
