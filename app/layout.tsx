import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SunBeach Tourism Dubai | Premium Hotels & Flight Deals',
  description: 'Your gateway to Dubai\'s best hotels and flight deals. Premium travel experiences with SunBeach Tourism Dubai. Book luxury hotels, flights, and holiday packages.',
  keywords: 'Dubai hotels, Dubai flights, Dubai tourism, holiday packages, SunBeach Tourism, UAE travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
