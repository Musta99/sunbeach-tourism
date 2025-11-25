import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
})

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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
