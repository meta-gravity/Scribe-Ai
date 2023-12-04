import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from './lib/utils'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers' 
import Loglib from "@loglib/tracker/react";
import { ThemeProvider } from '@/components/theme-provider'
import { GeistSans, 
  // GeistMono 
} from 'geist/font/sans'
// import { ThemeProvider } from '@/components/theme-provider'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scribe Ai',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
      className={GeistSans.className}
      >
      <Providers>
        <body 
        className={cn(
          'min-h-screen font-sans antialiased gradient',
          GeistSans.className
          // inter.className
        )}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            
          
              <Navbar />
              {children}
              <Loglib
                  config={{
                    id: "scribe-ai_vercel",
                  }}
                />
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  )
}
