'use client'

import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen bg-background overflow-hidden transition-colors duration-300">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-foreground">LE </span>
                <span className="text-primary">SEUL</span>
                <br />
                <span className="text-accent">COURS DE TRADING</span>
                <br />
                <span className="text-foreground">DONT VOUS AVEZ BESOIN</span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="text-5xl lg:text-6xl font-black">
                <span className="text-secondary">APPRENEZ LE</span>
                <br />
                <span className="text-secondary">DAY TRADING</span>
              </div>
              
              <div className="inline-block">
                <span className="bg-secondary text-secondary-foreground px-6 py-3 text-2xl font-black rounded transition-colors duration-300">
                  COURS
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg rounded-full transition-all duration-300">
                COMMENCER MAINTENANT
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-bold px-8 py-4 text-lg rounded-full transition-all duration-300">
                EN SAVOIR PLUS
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-muted rounded-full border-2 border-background"></div>
                ))}
              </div>
              <span className="text-muted-foreground">Rejoignez plus de 10 000 traders prospères</span>
            </div>
          </div>

          {/* Right side - Video/Image */}
          <div className="relative">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden border border-border/50">
              <Image
                src="/professional-trader-money.png"
                alt="Trader professionnel"
                fill
                className="object-cover"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center transition-all hover:scale-110 duration-300">
                  <Play className="w-8 h-8 text-secondary-foreground ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                EN DIRECT
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg border border-border/50">
                <div className="text-accent font-bold">2 847€</div>
                <div className="text-xs text-muted-foreground">Profit d'aujourd'hui</div>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-4 rounded-lg shadow-xl max-w-xs border border-border/50 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
                <div>
                  <div className="font-bold text-sm">Sarah M.</div>
                  <div className="text-xs text-muted-foreground">Étudiante Vérifiée</div>
                </div>
              </div>
              <p className="text-sm">{"\"J'ai gagné 5 000€ dès mon premier mois avec ces stratégies!\""}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
