import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROMANO PROPERTY CARE · OS',
  description: 'Sistema operacional profissional de limpeza e manutenção.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-PT"><body>{children}</body></html>
}