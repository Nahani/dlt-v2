'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)
  const [functional, setFunctional] = useState(true)
  const [analytics, setAnalytics] = useState(false)
  const [ads, setAds] = useState(false)
  const [userData, setUserData] = useState(false)
  const [personalization, setPersonalization] = useState(false)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Cookies 🍪</span>
          </CardTitle>
          <p className="text-sm text-gray-300">
            Ce site utilise des cookies qui nécessitent un consentement. En savoir plus
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="functional" 
                checked={functional}
                onCheckedChange={(checked) => setFunctional(checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="functional" className="text-sm font-medium cursor-pointer">
                  Fonctionnels
                </label>
                <p className="text-xs text-gray-400">
                  Cookies de première partie nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="analytics" 
                checked={analytics}
                onCheckedChange={(checked) => setAnalytics(checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="analytics" className="text-sm font-medium cursor-pointer">
                  Analytiques
                </label>
                <p className="text-xs text-gray-400">
                  Cookies de tiers utilisés pour l'analyse.
                </p>
                <button className="text-xs text-red-500 underline">Plus d'informations</button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="ads" 
                checked={ads}
                onCheckedChange={(checked) => setAds(checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="ads" className="text-sm font-medium cursor-pointer">
                  Publicités et suivi
                </label>
                <p className="text-xs text-gray-400">
                  Cookies de tiers utilisés pour la publicité.
                </p>
                <button className="text-xs text-red-500 underline">Plus d'informations</button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="userData" 
                checked={userData}
                onCheckedChange={(checked) => setUserData(checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="userData" className="text-sm font-medium cursor-pointer">
                  Données utilisateur
                </label>
                <p className="text-xs text-gray-400">
                  Envoyer les données utilisateur liées à la publicité à Google.
                </p>
                <button className="text-xs text-red-500 underline">Plus d'informations</button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="personalization" 
                checked={personalization}
                onCheckedChange={(checked) => setPersonalization(checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="personalization" className="text-sm font-medium cursor-pointer">
                  Personnalisation des annonces
                </label>
                <p className="text-xs text-gray-400">
                  Obtenir de la publicité personnalisée.
                </p>
                <button className="text-xs text-red-500 underline">Plus d'informations</button>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button 
              onClick={() => setIsVisible(false)}
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 h-8"
            >
              Tout accepter
            </Button>
            <Button 
              onClick={() => setIsVisible(false)}
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800 text-xs px-3 py-1 h-8"
            >
              Accepter la sélection
            </Button>
            <Button 
              onClick={() => setIsVisible(false)}
              variant="ghost" 
              className="text-gray-400 hover:text-white text-xs px-3 py-1 h-8"
            >
              Tout rejeter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
