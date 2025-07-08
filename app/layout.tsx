import type { Metadata } from 'next'
import { Inter, Exo_2 } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from '@/components/layout/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const exo2 = Exo_2({ subsets: ['latin'], variable: '--font-exo' })

export const metadata: Metadata = {
  title: 'Crypto Force',
  description: 'Crypto Force – Comunidad y Herramientas. Contenido exclusivo y educativo para todos los Acólitos.',
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: '/logo.ico',
  },
  openGraph: {
    title: 'Crypto Force – Comunidad y Herramientas',
    description: 'Contenido exclusivo y educativo para todos los Acólitos. Herramientas y mucho más.',
    images: ['/preview.png'],
    url: 'https://thecryptoforce.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
      </head>
      <body className={`${inter.variable} ${exo2.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="triangle-background">
            <div className="triangle-dots"></div>
          </div>
          <div className="relative z-10"> {/* Add this wrapper */}
            <Navbar />
            {children}
          </div>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
