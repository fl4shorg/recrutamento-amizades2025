
import { Card, CardContent } from "@/components/ui/card";

const benefitsData = [
  {
    icon: "👑",
    title: "Liderança",
    description: "Desenvolva habilidades de liderança gerenciando uma das maiores comunidades online do Brasil."
  },
  {
    icon: "🌐",
    title: "Networking",
    description: "Conecte-se com milhares de pessoas e expanda sua rede de contatos profissionais e pessoais."
  },
  {
    icon: "🚀",
    title: "Crescimento",
    description: "Oportunidades reais de crescimento dentro da estrutura administrativa da NEEXT."
  },
  {
    icon: "💼",
    title: "Experiência",
    description: "Adicione experiência valiosa em gestão de comunidades ao seu currículo profissional."
  },
  {
    icon: "👥",
    title: "Comunidade",
    description: "Faça parte de uma família online onde todos se apoiam e crescem juntos."
  },
  {
    icon: "🎯",
    title: "Propósito",
    description: "Contribua para criar um ambiente online positivo e impactar a vida de muitas pessoas."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-neext-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Por que se tornar um <span className="text-neext-secondary">ADM da NEEXT</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ser administrador na maior comunidade de amizade da web traz inúmeros benefícios pessoais e profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <Card key={index} className="bg-gradient-to-br from-neext-dark to-black border border-neext-primary border-opacity-30 shadow-xl hover:shadow-neext-secondary/20 hover:translate-y-[-5px] transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
