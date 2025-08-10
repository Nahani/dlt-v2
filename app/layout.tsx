import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OnlyPropFirms - The Only Trading Course You Need',
  description: 'Learn to day trade with the most comprehensive trading course. Join 10,000+ successful traders and start your journey today.',
  keywords: 'trading course, day trading, prop firms, futures trading, trading education',
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
        <ThemeProvider defaultTheme="dark" storageKey="onlypropfirms-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
