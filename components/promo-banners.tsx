'use client'

import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function PromoBanners() {
  const [showTopBanner, setShowTopBanner] = useState(true)
  const [showRedBanner, setShowRedBanner] = useState(true)

  if (!showTopBanner && !showRedBanner) return null

  return (
    <div className="relative">
      {showTopBanner && (
        <div className="bg-green-500 text-black text-center py-2 px-4 text-sm font-medium relative">
          <ChevronLeft className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4" />
          <span>🎯 FundingTicks 35% de Réduction! Code: PW</span>
          <ChevronRight className="absolute right-12 top-1/2 transform -translate-y-1/2 w-4 h-4" />
          <button
            onClick={() => setShowTopBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {showRedBanner && (
        <div className="bg-red-600 text-white text-center py-2 px-4 text-sm relative">
          <span>Vous possédez déjà le cours? </span>
          <button className="underline hover:no-underline">Se Connecter</button>
          <button
            onClick={() => setShowRedBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
