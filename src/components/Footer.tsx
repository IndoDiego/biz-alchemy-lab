import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube,
  Shield,
  Lock,
  FileText
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Consultoría de IA", href: "#services" },
      { name: "Automatización", href: "#services" },
      { name: "Marketing Digital", href: "#services" },
      { name: "Análisis de Datos", href: "#services" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Casos de Éxito", href: "#cases" },
      { name: "Guías de IA", href: "/resources" },
      { name: "Webinars", href: "/webinars" }
    ],
    company: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Equipo", href: "/team" },
      { name: "Carreras", href: "/careers" },
      { name: "Contacto", href: "#contact" }
    ],
    legal: [
      { name: "Privacidad", href: "/privacy" },
      { name: "Términos", href: "/terms" },
      { name: "Seguridad", href: "/security" },
      { name: "Cumplimiento", href: "/compliance" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Mantente al día con las últimas tendencias de IA para PyMEs
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Recibe insights semanales, casos de estudio y guías exclusivas directamente en tu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="cta" size="lg" className="whitespace-nowrap">
                Suscribirse Gratis
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-3">
              Sin spam. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                BizAlchemy<span className="text-accent">Lab</span>
              </h2>
              <p className="text-primary-foreground/80 mt-3">
                Transformamos PyMEs a través de soluciones inteligentes de IA y automatización. 
                Tu éxito es nuestra misión.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">hola@bizalchemylab.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (918) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">Tulsa, Oklahoma, EE.UU.</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Security Badges */}
            <div className="mt-6 space-y-2">
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                <Shield className="h-3 w-3 mr-1" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                <Lock className="h-3 w-3 mr-1" />
                GDPR Ready
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 BizAlchemy Lab. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Cumplimiento Oklahoma 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Ciberseguridad Certificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;