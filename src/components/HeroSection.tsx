import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-ai-consulting.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Consultoría IA para PyMEs" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-light/70"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
          <Sparkles className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-32 left-10 animate-float" style={{ animationDelay: "1s" }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
          <TrendingUp className="h-8 w-8 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-8">
            <Users className="h-4 w-4 mr-2" />
            Especialistas en IA para PyMEs
          </div>

          {/* Main headline */}
          <h1 className="text-hero text-white mb-6 animate-fade-in">
            Transforma tu PyME con{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              IA y Automatización
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-large text-white/90 mb-8 max-w-3xl mx-auto">
            Aumenta tu productividad hasta un 60%, reduce costos operativos hasta un 80% 
            y compite con grandes corporaciones mediante soluciones de IA personalizadas para tu negocio.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">60%</div>
              <div className="text-sm text-white/80">Aumento de Productividad</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">80%</div>
              <div className="text-sm text-white/80">Reducción de Costos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">$5,000+</div>
              <div className="text-sm text-white/80">Ahorro Anual Promedio</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Solicita una Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="outline-premium" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
              Descarga Guía de IA
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-white/70 text-sm">
            <p>Más de 100 PyMEs transformadas • Resultados garantizados • Soporte especializado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;