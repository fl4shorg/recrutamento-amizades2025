
import { Button } from "@/components/ui/button";
import SpinningLogo from "./Cube3D";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen pt-20 bg-gradient-to-b from-neext-dark to-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-neext-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neext-secondary blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Torne-se um <span className="text-neext-secondary">ADM</span> da maior comunidade online
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in">
              Junte-se à NEEXT, a maior família da web, e tenha a oportunidade de liderar e fazer parte de algo extraordinário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neext-primary to-neext-secondary hover:opacity-90 text-white px-8 py-6 text-lg font-medium"
                onClick={() => document.getElementById('recrutamento')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Candidate-se Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-neext-secondary text-neext-secondary hover:bg-neext-secondary hover:text-white px-8 py-6 text-lg font-medium"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 animate-float">
            <SpinningLogo height="400px" width="100%" className="animate-pulse-slow" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#sobre" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
