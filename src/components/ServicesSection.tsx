import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  PenTool, 
  Workflow, 
  BarChart3, 
  ShoppingCart,
  Search,
  Video,
  Radio,
  Target,
  GraduationCap,
  Shield
} from "lucide-react";
import automationIcon from "@/assets/automation-icon.jpg";
import marketingIcon from "@/assets/marketing-icon.jpg";

const ServicesSection = () => {
  const aiServices = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Servicio al Cliente con IA",
      description: "Chatbots inteligentes que manejan hasta 80% de consultas, reducen costos en 50% y mejoran tiempos de respuesta.",
      benefits: ["24/7 disponibilidad", "Reducción de costos", "Mayor satisfacción"]
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Creación de Contenido con IA",
      description: "Herramientas de IA para generar ideas, redactar blogs, crear contenido para redes sociales y optimizar campañas.",
      benefits: ["Contenido personalizado", "Optimización automática", "Ahorro de tiempo"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Automatización de Flujos",
      description: "Agentes de IA para automatizar tareas rutinarias: programación, inventario, contabilidad básica.",
      benefits: ["Liberación de tiempo", "Reducción de errores", "Eficiencia operativa"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Análisis de Datos y Decisiones",
      description: "Herramientas de IA para analizar datos, identificar patrones, predecir problemas y optimizar rendimiento.",
      benefits: ["Decisiones basadas en datos", "Predicción de tendencias", "Ventaja competitiva"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Automatización de Ventas",
      description: "Soluciones avanzadas para optimizar procesos de ventas y proporcionar insights predictivos.",
      benefits: ["Mayor conversión", "Análisis predictivo", "Automatización completa"]
    }
  ];

  const marketingServices = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO y Contenido Optimizado por IA",
      description: "Investigación de palabras clave, generación de ideas, redacción de blogs y optimización para búsqueda por voz.",
      benefits: ["Mejor posicionamiento", "Contenido optimizado", "Tráfico orgánico"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Producción de Video Corto",
      description: "Videos de alto impacto para TikTok, Instagram Reels y YouTube Shorts con reutilización multiplataforma.",
      benefits: ["Alto impacto", "Baja producción", "Máximo alcance"]
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "Estrategia de Live Streaming",
      description: "Transmisiones en vivo para crear conexiones auténticas y reutilizar contenido para futuras campañas.",
      benefits: ["Conexiones profundas", "Contenido reutilizable", "Engagement directo"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Marketing SaaS B2B",
      description: "Estrategias específicas para ciclos largos de venta con marketing de contenido, webinars y demos.",
      benefits: ["Ciclos optimizados", "Lead nurturing", "Conversión mejorada"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Promoción de Cursos Online",
      description: "Identificación de avatares, propuestas de valor, investigación de keywords y estrategias de preventa.",
      benefits: ["Audiencia definida", "Preventas exitosas", "Posicionamiento"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Marketing de Ciberseguridad",
      description: "Generación de confianza a través de casos de estudio, testimonios y liderazgo de pensamiento.",
      benefits: ["Generación de confianza", "Autoridad técnica", "Credibilidad"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-6">
            Servicios Especializados para el Crecimiento de tu PyME
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            La IA y la automatización son esenciales para la supervivencia y el crecimiento de las PyMEs, 
            transformando fundamentalmente las operaciones comerciales.
          </p>
        </div>

        {/* AI and Automation Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <img src={automationIcon} alt="IA y Automatización" className="w-16 h-16 mr-4 rounded-lg" />
              <h3 className="text-2xl font-bold text-primary">Consultoría e Implementación de IA y Automatización</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales de IA que transforman tu negocio y te permiten competir con grandes corporaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="text-accent mb-4 group-hover:scale-110 transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="premium" size="lg">
              Consulta de IA Gratuita
            </Button>
          </div>
        </div>

        {/* Digital Marketing Services */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <img src={marketingIcon} alt="Marketing Digital" className="w-16 h-16 mr-4 rounded-lg" />
              <h3 className="text-2xl font-bold text-primary">Marketing Digital y Creación de Contenido Especializado</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estrategias especializadas de marketing digital para cautivar audiencias y maximizar tu presencia online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {marketingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="text-accent mb-4 group-hover:scale-110 transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg">
              Auditoría de Marketing Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;