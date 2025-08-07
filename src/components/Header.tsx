import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">
              BizAlchemy<span className="text-accent">Lab</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-accent transition-smooth">
              Servicios
            </a>
            <a href="#benefits" className="text-foreground hover:text-accent transition-smooth">
              Beneficios
            </a>
            <a href="#cases" className="text-foreground hover:text-accent transition-smooth">
              Casos de Éxito
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-smooth">
              Nosotros
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-smooth">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="cta" size="lg">
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;