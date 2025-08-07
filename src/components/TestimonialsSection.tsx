import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Directora General",
      company: "Comercial Luna",
      sector: "Retail",
      avatar: "MG",
      rating: 5,
      testimonial: "En 3 meses implementamos un chatbot que maneja el 75% de nuestras consultas. Hemos reducido costos operativos en $3,200 anuales y mejorado la satisfacción del cliente.",
      results: ["75% consultas automatizadas", "$3,200 ahorro anual", "Mejora en satisfacción"]
    },
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "TechSoluciones",
      sector: "Servicios IT",
      avatar: "CM",
      rating: 5,
      testimonial: "La automatización de nuestros flujos de trabajo nos permitió crecer 40% sin contratar personal adicional. El ROI fue visible desde el primer mes.",
      results: ["40% crecimiento", "0 contrataciones adicionales", "ROI inmediato"]
    },
    {
      name: "Ana Rodríguez",
      role: "Directora de Marketing",
      company: "Innovación Verde",
      sector: "Sostenibilidad",
      avatar: "AR",
      rating: 5,
      testimonial: "El contenido generado por IA transformó nuestra presencia digital. Aumentamos engagement 180% y generamos 60% más leads calificados.",
      results: ["180% más engagement", "60% más leads", "Presencia digital mejorada"]
    },
    {
      name: "Roberto Silva",
      role: "Gerente Operativo",
      company: "Logística Pro",
      sector: "Logística",
      avatar: "RS",
      rating: 5,
      testimonial: "La predicción de demanda con IA redujo nuestro inventario excesivo en 35% y mejoró la planificación. Ahorramos $8,000 en el primer año.",
      results: ["35% reducción inventario", "$8,000 ahorro anual", "Mejor planificación"]
    }
  ];

  const caseStudies = [
    {
      company: "Restaurante Familiar",
      sector: "Gastronomía",
      challenge: "Gestión manual de reservas y pedidos",
      solution: "Chatbot + automatización de procesos",
      results: ["80% reservas automatizadas", "50% menos tiempo gestión", "$2,400 ahorro anual"]
    },
    {
      company: "Consultora Jurídica",
      sector: "Servicios Legales",
      challenge: "Generación lenta de documentos",
      solution: "IA para redacción automática",
      results: ["70% tiempo ahorrado", "Mayor precisión", "3x más clientes atendidos"]
    },
    {
      company: "E-commerce Local",
      sector: "Comercio Electrónico",
      challenge: "Atención al cliente 24/7",
      solution: "Asistente virtual inteligente",
      results: ["24/7 disponibilidad", "90% consultas resueltas", "40% aumento ventas"]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-success border-success">
            Casos Reales
          </Badge>
          <h2 className="text-section text-foreground mb-6">
            Testimonios y Casos de Éxito
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo otras PyMEs han transformado sus negocios con nuestras soluciones de IA y automatización.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-smooth">
              <div className="absolute top-4 right-4 text-accent opacity-20 group-hover:opacity-40 transition-smooth">
                <Quote className="h-12 w-12" />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                    <Badge variant="secondary" className="mt-1">
                      {testimonial.sector}
                    </Badge>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base mb-4 text-foreground">
                  "{testimonial.testimonial}"
                </CardDescription>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-sm text-primary">Resultados Obtenidos:</h5>
                  {testimonial.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-success">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      {result}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Estudios de Caso Detallados
            </h3>
            <p className="text-muted-foreground">
              Análisis profundo de transformaciones empresariales exitosas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-primary">{study.company}</h4>
                    <Badge variant="outline">{study.sector}</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm text-muted-foreground mb-1">Desafío:</h5>
                      <p className="text-sm text-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-sm text-muted-foreground mb-1">Solución:</h5>
                      <p className="text-sm text-accent font-medium">{study.solution}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <h5 className="font-medium text-sm text-primary mb-2">Resultados Medibles:</h5>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-success">
                        <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;