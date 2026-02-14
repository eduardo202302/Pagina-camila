import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Para Ti, Mi Amor',
  description: 'Una carta de amor en San Valentin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lora.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  )
}
