import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const apercuMini = localFont({
  src: [
    {
      path: '../../public/fonts/ApercuMonoProBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-apercu',
})

export const metadata: Metadata = {
  title: 'SmartLog | Logística Integrada',
  description:
    'Logística com eficiência e qualidade, para o sucesso do seu negócio.',
  icons: ['/favicon.png'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <body className={`${inter.className} ${apercuMini.variable}`}>
        {children}
      </body>
    </html>
  )
}
