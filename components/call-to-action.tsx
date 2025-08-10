'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, TrendingUp, Shield, Zap, Gift, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export function CallToAction() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const features = [
    "15+ Heures de Contenu Premium",
    "60+ Leçons Vidéo",
    "Sessions de Trading en Direct",
    "Accès Communauté 24/7",
    "Outils de Gestion des Risques",
    "Mises à Jour à Vie",
    "Accès Application Mobile",
    "Certificat de Completion"
  ]

  const bonuses = [
    { title: "Masterclass Psychologie du Trading", value: "297€", icon: Shield },
    { title: "Sessions d'Analyse de Marché en Direct", value: "197€", icon: TrendingUp },
    { title: "Communauté Discord Privée", value: "97€", icon: Users },
    { title: "Modèle de Journal de Trading", value: "47€", icon: CheckCircle }
  ]

  return (
    <section id="tarifs" className="py-20 px-4 bg-gradient-to-b from-background via-destructive/5 to-background relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-destructive/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Urgency Banner */}
        <div className="text-center mb-8">
          <Badge className="bg-destructive text-destructive-foreground px-6 py-2 text-lg font-bold animate-pulse">
            🔥 OFFRE LIMITÉE - 67% DE RÉDUCTION
          </Badge>
        </div>

        {/* Main CTA Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="text-foreground">COMMENCEZ VOTRE</span>
            <br />
            <span className="text-accent">PARCOURS DE</span>
            <span className="text-destructive"> TRADING</span>
            <br />
            <span className="text-foreground">AUJOURD'HUI!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rejoignez des milliers de traders prospères qui ont transformé leur avenir financier 
            avec notre système de trading de 2 heures éprouvé.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-destructive to-destructive/80 rounded-2xl p-6 mb-12 text-center">
          <h3 className="text-2xl font-bold text-destructive-foreground mb-4">⏰ L'offre expire dans:</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-black text-secondary">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-destructive-foreground text-sm">HEURES</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-destructive-foreground text-sm">MINUTES</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-destructive-foreground text-sm">SECONDES</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Pricing */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-card to-background border-2 border-accent relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-4 py-2 text-sm font-bold transform rotate-12 translate-x-4 -translate-y-2">
                MEILLEURE VALEUR
              </div>
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Maîtrise Complète du Trading</h3>
                  <p className="text-muted-foreground">Tout ce dont vous avez besoin pour devenir un trader profitable</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl text-muted-foreground line-through">997€</span>
                    <span className="text-5xl font-black text-accent">297€</span>
                  </div>
                  <p className="text-muted-foreground">Paiement unique • Accès à vie</p>
                </div>

                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold py-4 text-lg rounded-full transition-all hover:scale-105 mb-4">
                  🚀 ACCÈS INSTANTANÉ MAINTENANT
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Shield className="w-4 h-4" />
                    <span>Garantie de Remboursement 30 Jours</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Accès Instantané Après Achat</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Paiement sécurisé par Stripe</p>
              <div className="flex justify-center space-x-4">
                <div className="bg-muted px-4 py-2 rounded">💳 Carte Bancaire</div>
                <div className="bg-muted px-4 py-2 rounded">🏦 PayPal</div>
                <div className="bg-muted px-4 py-2 rounded">₿ Crypto</div>
              </div>
            </div>
          </div>

          {/* Right Side - Bonuses */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                🎁 BONUS EXCLUSIFS
              </h3>
              <p className="text-muted-foreground">D'une valeur de plus de 638€ - Gratuits aujourd'hui!</p>
            </div>

            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon
              return (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-secondary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">{bonus.title}</h4>
                        <p className="text-muted-foreground text-sm">Bonus #{index + 1}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-secondary font-bold">{bonus.value}</div>
                        <div className="text-accent text-sm">GRATUIT</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Social Proof */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-foreground font-bold mb-2">Rejoignez plus de 10 000 étudiants prospères</p>
                <p className="text-muted-foreground text-sm">
                  "Meilleur cours de trading que j'aie jamais suivi. J'ai récupéré mon investissement dès la première semaine!" - Mike T.
                </p>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <div className="text-center pt-6">
              <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-12 py-4 text-xl rounded-full transition-all hover:scale-105 animate-pulse">
                RÉSERVEZ VOTRE PLACE MAINTENANT!
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Plus que 47 places à ce prix
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border border-accent/30 backdrop-blur-sm">
          <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Garantie Satisfait ou Remboursé</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essayez notre programme de trading complet pendant 30 jours. Si vous n'êtes pas complètement satisfait 
            ou ne voyez pas de résultats, nous vous remboursons intégralement. Aucune question posée.
          </p>
        </div>
      </div>
    </section>
  )
}
