
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const RecruitmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    numero: "",
    idade: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create URLSearchParams for form data
      const params = new URLSearchParams();
      for (const key in formData) {
        params.append(key, formData[key as keyof typeof formData]);
      }

      // Send data to the API
      await fetch(
        "https://script.google.com/macros/s/AKfycbyHuGCK8HG2-Fsk7jlcCkdApI5eJLck4Kmym3RpKBlOwNfHZThErK_rBz1xBB2gYh9fsQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: params,
        }
      );

      // Reset form and show success message
      setFormData({ nome: "", numero: "", idade: "" });
      toast({
        title: "Inscrição recebida!",
        description: "Entraremos em contato em breve sobre sua candidatura.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro no envio",
        description: "Ocorreu um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="recrutamento" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neext-dark bg-opacity-80 rounded-2xl p-8 shadow-2xl border border-neext-primary border-opacity-30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Candidate-se para <span className="text-neext-secondary">ADM da NEEXT</span>
            </h2>
            <p className="text-gray-300">
              Preencha o formulário abaixo e dê o primeiro passo para fazer parte da nossa equipe administrativa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-white">Nome completo</Label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                required
                className="bg-black bg-opacity-50 border-neext-primary text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numero" className="text-white">Número de WhatsApp</Label>
              <Input
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                placeholder="Ex: +55 11 99999-9999"
                required
                className="bg-black bg-opacity-50 border-neext-primary text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="idade" className="text-white">Idade</Label>
              <Input
                id="idade"
                name="idade"
                type="number"
                value={formData.idade}
                onChange={handleChange}
                placeholder="Digite sua idade"
                min="16"
                required
                className="bg-black bg-opacity-50 border-neext-primary text-white"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neext-primary to-neext-secondary hover:opacity-90 text-white py-6"
            >
              {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
            </Button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Ao se candidatar, você concorda em receber comunicações da equipe NEEXT sobre o processo de recrutamento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentForm;
