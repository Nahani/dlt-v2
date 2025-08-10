'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "Trader à Temps Plein",
    location: "New York, États-Unis",
    image: "/testimonial-1.jpg",
    rating: 5,
    profit: "12 500€",
    timeframe: "Premier Mois",
    quote: "Ce cours a complètement transformé mon approche du trading. La stratégie de trading de 2 heures m'a permis de maintenir mon emploi à temps plein tout en développant un revenu complémentaire substantiel. Le module de gestion des risques à lui seul m'a fait économiser des milliers!",
    results: [
      "85% de taux de réussite atteint",
      "Profits quotidiens constants",
      "Stress de trading réduit"
    ]
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Ancienne Comptable",
    location: "Toronto, Canada",
    image: "/testimonial-2.jpg",
    rating: 5,
    profit: "8 750€",
    timeframe: "3 Semaines",
    quote: "J'étais sceptique concernant le day trading, mais l'approche systématique de ce programme et l'excellent support ont fait toute la différence. Maintenant je trade à temps plein et j'adore chaque minute!",
    results: [
      "Quitté l'emploi corporate",
      "Indépendance financière",
      "Équilibre vie-travail"
    ]
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Entrepreneur",
    location: "Miami, États-Unis",
    image: "/testimonial-3.jpg",
    rating: 5,
    profit: "15 200€",
    timeframe: "6 Semaines",
    quote: "Les sessions de trading en direct étaient inestimables. Regarder des trades réels être exécutés et expliqués en temps réel a considérablement accéléré ma courbe d'apprentissage. Meilleur investissement que j'aie jamais fait!",
    results: [
      "Sources de revenus diversifiées",
      "Stratégies avancées maîtrisées",
      "Mentorat d'autres maintenant"
    ]
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Mère au Foyer",
    location: "Londres, Royaume-Uni",
    image: "/testimonial-4.jpg",
    rating: 5,
    profit: "6 400€",
    timeframe: "4 Semaines",
    quote: "Parfait pour mon emploi du temps! Je peux trader pendant les heures d'école et rester présente pour ma famille. La structure du cours est si bien organisée que je ne me suis jamais sentie dépassée.",
    results: [
      "Horaire flexible",
      "Temps en famille préservé",
      "Contribution financière"
    ]
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Récent Diplômé",
    location: "Sydney, Australie",
    image: "/testimonial-5.jpg",
    rating: 5,
    profit: "4 800€",
    timeframe: "5 Semaines",
    quote: "J'ai commencé avec seulement 1 000€ et les connaissances de ce cours. Le module de psychologie m'a aidé à rester discipliné, et maintenant je suis constamment profitable. Excellent rapport qualité-prix!",
    results: [
      "Croissance d'un petit compte",
      "Approche disciplinée",
      "Alternative de carrière trouvée"
    ]
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Conseillère Financière",
    location: "Séoul, Corée du Sud",
    image: "/testimonial-6.jpg",
    rating: 5,
    profit: "9 300€",
    timeframe: "2 Mois",
    quote: "Même avec mon background financier, ce cours m'a enseigné des compétences pratiques de trading que je n'avais jamais apprises en finance traditionnelle. Les stratégies de scalping sont particulièrement efficaces!",
    results: [
      "Compétences améliorées",
      "Conseil client amélioré",
      "Succès en trading personnel"
    ]
  }
]

export function Testimonials() {
  return (
    <section id="temoignages" className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-primary">TÉMOIGNAGES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ne nous croyez pas sur parole. Voici ce que nos étudiants prospères disent de 
            leur transformation et de leurs résultats avec notre programme de trading.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border border-accent/20 backdrop-blur-sm">
            <div className="text-4xl font-black text-accent mb-2">10 000+</div>
            <div className="text-muted-foreground">Étudiants Prospères</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <div className="text-4xl font-black text-primary mb-2">2,5M€+</div>
            <div className="text-muted-foreground">Profits Générés par les Étudiants</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20 backdrop-blur-sm">
            <div className="text-4xl font-black text-secondary mb-2">4,9/5</div>
            <div className="text-muted-foreground">Note Moyenne</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Résultats Clés:</h4>
                  <ul className="space-y-1">
                    {testimonial.results.map((result, index) => (
                      <li key={index} className="text-xs text-accent flex items-center space-x-1">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profit Badge */}
                <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  {testimonial.profit} en {testimonial.timeframe}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground/70">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Prêt à rejoindre des milliers de traders prospères?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full transition-all hover:scale-105 duration-300">
              Voir Plus de Témoignages
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-300">
              Commencez Votre Parcours Aujourd'hui
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
