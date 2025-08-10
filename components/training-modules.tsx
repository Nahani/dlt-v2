'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, TrendingUp, BarChart3, Shield, Clock, Target, Brain, DollarSign } from 'lucide-react'

const modules = [
  {
    id: 1,
    title: "Fondamentaux du Day Trading",
    duration: "2 heures",
    lessons: 8,
    icon: TrendingUp,
    description: "Maîtrisez les concepts essentiels et la terminologie du day trading",
    features: [
      "Structure et mécanismes du marché",
      "Types d'ordres et exécution",
      "Bases de la gestion des risques",
      "Fondamentaux de la psychologie du trading"
    ],
    level: "Débutant",
    color: "from-accent to-accent/80"
  },
  {
    id: 2,
    title: "Maîtrise de l'Analyse Technique",
    duration: "3 heures",
    lessons: 12,
    icon: BarChart3,
    description: "Apprenez à lire les graphiques et identifier les opportunités rentables",
    features: [
      "Modèles de chandeliers japonais",
      "Niveaux de support et résistance",
      "Indicateurs techniques",
      "Reconnaissance des figures chartistes"
    ],
    level: "Intermédiaire",
    color: "from-primary to-primary/80"
  },
  {
    id: 3,
    title: "Gestion des Risques & Dimensionnement",
    duration: "2,5 heures",
    lessons: 10,
    icon: Shield,
    description: "Protégez votre capital avec des stratégies avancées de gestion des risques",
    features: [
      "Calculs de dimensionnement des positions",
      "Stratégies de stop-loss",
      "Ratios risque-rendement",
      "Gestion de portefeuille"
    ],
    level: "Avancé",
    color: "from-destructive to-destructive/80"
  },
  {
    id: 4,
    title: "Stratégies de Scalping",
    duration: "2 heures",
    lessons: 9,
    icon: Clock,
    description: "Maîtrisez les techniques de profit rapide pour un trading à haute fréquence",
    features: [
      "Stratégies sur graphiques 1 minute",
      "Lecture du carnet d'ordres niveau 2",
      "Techniques d'entrée et sortie rapides",
      "Psychologie du scalping"
    ],
    level: "Avancé",
    color: "from-secondary to-secondary/80"
  },
  {
    id: 5,
    title: "Psychologie du Trading",
    duration: "1,5 heure",
    lessons: 6,
    icon: Brain,
    description: "Développez la discipline mentale nécessaire pour des profits constants",
    features: [
      "Techniques de contrôle émotionnel",
      "Discipline et patience",
      "Gestion des pertes et gains",
      "Développement de la confiance"
    ],
    level: "Tous Niveaux",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 6,
    title: "Sessions de Trading en Direct",
    duration: "4 heures",
    lessons: 15,
    icon: Target,
    description: "Observez des trades réels exécutés en conditions de marché réelles",
    features: [
      "Analyse de trades en temps réel",
      "Commentaires de marché",
      "Sessions de questions-réponses",
      "Révision et feedback des trades"
    ],
    level: "Tous Niveaux",
    color: "from-pink-500 to-pink-600"
  }
]

export function TrainingModules() {
  return (
    <section id="modules" className="py-20 px-4 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">MODULES DE </span>
            <span className="text-accent">FORMATION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre programme de formation complet est divisé en 6 modules spécialisés, 
            chacun conçu pour développer progressivement vos compétences de trading du niveau débutant à expert.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const IconComponent = module.icon
            return (
              <Card key={module.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-accent text-accent">
                      {module.level}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{module.duration}</span>
                      </span>
                      <span>{module.lessons} leçons</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {module.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Caractéristiques Clés:</h4>
                    <ul className="space-y-2">
                      {module.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Heures de Contenu</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">60+</div>
            <div className="text-muted-foreground">Leçons Vidéo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Accès</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-destructive mb-2">100%</div>
            <div className="text-muted-foreground">Pratique</div>
          </div>
        </div>
      </div>
    </section>
  )
}
