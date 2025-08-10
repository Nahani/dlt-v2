import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DLT - Débuter Le Trading - Formation Trading Complète',
  description: 'Apprenez le trading avec la formation la plus complète. Rejoignez 10 000+ traders performants et commencez votre parcours aujourd\'hui.',
  keywords: 'formation trading, day trading, prop firms, trading futures, éducation trading, débuter trading',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="dlt-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
