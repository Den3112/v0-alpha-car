import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Alpha Car Service | Profesionálny autoservis v Bratislave',
  description: 'Profesionálny autoservis v Bratislave - Vrakuňa. Pneuservis, servis klimatizácie, príprava na STK/EK, rýchloservis pre taxíky. Hodnotenie 4.8/5 na Google Maps.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

