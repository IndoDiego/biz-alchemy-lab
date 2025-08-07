import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Users, 
  Clock, 
  Shield,
  Zap,
  BarChart
} from "lucide-react";

const BenefitsSection = () => {
  const keyBenefits = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Aumento de Productividad y Eficiencia",
      description: "60% de las PyMEs reporta ahorro de tiempo significativo",
      stats: "40+ minutos ahorrados por semana",
      color: "text-success"
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Ahorro de Costos Demostrable",
      description: "58% de PyMEs ahorra más de $1,000 anualmente",
      stats: "28% ahorra más de $5,000",
      color: "text-accent"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Ventaja Competitiva",
      description: "La IA como ecualizador para competir con grandes corporaciones",
      stats: "Nivel de competencia empresarial",
      color: "text-primary"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Liberación de Capital Humano",
      description: "Empleados se enfocan en tareas estratégicas y creativas",
      stats: "Mayor valor agregado",
      color: "text-warning"
    }
  ];

  const roiIndicators = [
    {
      icon: <Clock className="h-8 w-8" />,
      metric: "80%",
      description: "Reducción en tiempo de respuesta al cliente",
      period: "Primera semana"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      metric: "50%",
      description: "Reducción en costos de soporte",
      period: "Primer mes"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      metric: "60%",
      description: "Aumento en productividad operativa",
      period: "Primeros 90 días"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      metric: "$5,000+",
      description: "Ahorro anual promedio",
      period: "Primer año"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            ROI Comprobado
          </Badge>
          <h2 className="text-section text-foreground mb-6">
            Beneficios Clave y ROI para PyMEs
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Resultados medibles y transformación real para tu negocio. Datos basados en más de 100 implementaciones exitosas.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyBenefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className={`${benefit.color} mb-4 mx-auto group-hover:scale-110 transition-smooth`}>
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-3">
                  <div className="font-semibold text-primary">{benefit.stats}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Timeline */}
        <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Timeline de Resultados Garantizados
            </h3>
            <p className="text-muted-foreground">
              Observa cómo tu inversión se transforma en resultados medibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-smooth">
                  <div className="text-accent mb-4 mx-auto">
                    {indicator.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {indicator.metric}
                  </div>
                  <div className="text-sm text-foreground mb-2 font-medium">
                    {indicator.description}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {indicator.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">
            Casos de Éxito Comprobados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-success-light rounded-lg p-6">
              <div className="text-4xl font-bold text-success mb-2">100+</div>
              <div className="text-success font-medium">PyMEs Transformadas</div>
            </div>
            <div className="bg-accent-light rounded-lg p-6">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-accent font-medium">Satisfacción del Cliente</div>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-primary font-medium">Soporte Especializado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;