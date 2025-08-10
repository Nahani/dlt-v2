'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 px-4 py-4 transition-colors duration-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image 
            src="/DLT_small.png" 
            alt="DLT Logo" 
            width={100} 
            height={100} 
            className="object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-foreground hover:text-primary cursor-pointer transition-colors font-medium"
          >
            ACCUEIL
          </button>
          
          <button 
            onClick={() => scrollToSection('modules')}
            className="text-foreground hover:text-primary cursor-pointer transition-colors font-medium"
          >
            MODULES
          </button>
          
          <button 
            onClick={() => scrollToSection('temoignages')}
            className="text-foreground hover:text-primary cursor-pointer transition-colors font-medium"
          >
            TÉMOIGNAGES
          </button>
          
          <button 
            onClick={() => scrollToSection('tarifs')}
            className="text-foreground hover:text-primary cursor-pointer transition-colors font-medium"
          >
            TARIFS
          </button>
          
          <span className="text-secondary hover:text-secondary/80 cursor-pointer font-medium">COURS</span>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300">
            S'INSCRIRE
          </Button>
        </div>
      </div>
    </header>
  )
}
