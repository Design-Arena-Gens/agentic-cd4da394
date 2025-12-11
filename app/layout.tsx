import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aprende Español',
  description: 'Practica tu español con ejercicios interactivos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
