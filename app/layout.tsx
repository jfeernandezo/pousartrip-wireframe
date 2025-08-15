import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "PousarTrip - Sua próxima experiência inesquecível começa aqui",
  description: "Agência de viagens especializada em planejamento personalizado e experiências únicas",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
