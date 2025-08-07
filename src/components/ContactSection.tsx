import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calculator,
  Download,
  Calendar,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const ContactSection = () => {
  const pricingTiers = [
    {
      name: "Básico",
      price: "$30-50",
      period: "/mes",
      description: "Para PyMEs iniciando en IA",
      features: [
        "Chatbot básico",
        "Automatización simple",
        "Soporte email",
        "Reportes mensuales"
      ],
      cta: "Comenzar Básico",
      variant: "outline" as const
    },
    {
      name: "Profesional",
      price: "$75-150",
      period: "/mes",
      description: "Para PyMEs en crecimiento",
      features: [
        "Chatbot avanzado",
        "Automatización completa",
        "Análisis predictivo",
        "Soporte prioritario",
        "Integración CRM"
      ],
      cta: "Comenzar Pro",
      variant: "premium" as const,
      popular: true
    },
    {
      name: "Empresarial",
      price: "Personalizado",
      period: "",
      description: "Para PyMEs establecidas",
      features: [
        "Solución personalizada",
        "IA avanzada",
        "Integración completa",
        "Soporte 24/7",
        "Consultoría dedicada"
      ],
      cta: "Contactar Ventas",
      variant: "cta" as const
    }
  ];

  const ctaOptions = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Consulta Gratuita de IA",
      description: "Agenda una sesión de 30 minutos para evaluar tu potencial de IA",
      cta: "Agendar Ahora",
      variant: "hero" as const
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Guía de IA para PyMEs",
      description: "Descarga nuestra guía completa sobre implementación de IA",
      cta: "Descargar Gratis",
      variant: "outline-premium" as const
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Calculadora de ROI",
      description: "Calcula tu ahorro potencial con nuestras soluciones",
      cta: "Calcular Ahorro",
      variant: "cta" as const
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Modelos de Precios
            </Badge>
            <h2 className="text-section text-foreground mb-6">
              Soluciones Escalables para tu Presupuesto
            </h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Modelos flexibles diseñados específicamente para PyMEs. Comienza con lo básico y escala según creces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative group hover:shadow-lg transition-smooth ${tier.popular ? 'ring-2 ring-accent shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Más Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-foreground">
                    {tier.price}
                    <span className="text-sm font-normal text-muted-foreground">{tier.period}</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant={tier.variant} className="w-full" size="lg">
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              <strong>Garantía de ROI:</strong> Si no observas mejoras medibles en 90 días, te devolvemos tu inversión.
            </p>
            <p className="text-sm text-muted-foreground">
              Todos los planes incluyen configuración inicial, capacitación y soporte técnico especializado.
            </p>
          </div>
        </div>

        {/* CTA Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Comienza tu Transformación Digital Hoy
            </h3>
            <p className="text-muted-foreground">
              Elige la opción que mejor se adapte a tu situación actual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctaOptions.map((option, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="text-accent mb-4 mx-auto group-hover:scale-110 transition-smooth">
                    {option.icon}
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant={option.variant} className="w-full group">
                    {option.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <MessageSquare className="h-6 w-6 mr-2" />
                Solicita tu Consulta Personalizada
              </CardTitle>
              <CardDescription>
                Completa el formulario y un especialista se pondrá en contacto contigo en 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nombre de tu empresa" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div>
                <Label htmlFor="sector">Sector de tu Empresa</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail/Comercio</SelectItem>
                    <SelectItem value="services">Servicios</SelectItem>
                    <SelectItem value="manufacturing">Manufactura</SelectItem>
                    <SelectItem value="healthcare">Salud</SelectItem>
                    <SelectItem value="education">Educación</SelectItem>
                    <SelectItem value="technology">Tecnología</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="interest">¿Qué te interesa más?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu principal interés" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chatbot">Chatbots y Atención al Cliente</SelectItem>
                    <SelectItem value="automation">Automatización de Procesos</SelectItem>
                    <SelectItem value="marketing">Marketing Digital con IA</SelectItem>
                    <SelectItem value="analytics">Análisis de Datos</SelectItem>
                    <SelectItem value="all">Todo lo anterior</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Cuéntanos sobre tu empresa y desafíos</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe brevemente tu empresa, principales desafíos y qué esperas lograr con IA..."
                  rows={4}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Enviar Solicitud
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+1 (918) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hola@bizalchemylab.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">Tulsa, Oklahoma, Estados Unidos</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-muted-foreground">Lun - Vie: 8:00 AM - 6:00 PM CST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-subtle">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">¿Por qué elegir BizAlchemy Lab?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    Especialistas certificados en IA para PyMEs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    Más de 100 implementaciones exitosas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    ROI garantizado en 90 días
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    Soporte técnico especializado 24/7
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    Soluciones escalables y personalizadas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;