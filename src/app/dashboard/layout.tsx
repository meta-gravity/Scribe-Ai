import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import { cn } from "../lib/utils"
import { Inter } from "next/font/google"
import SideBAr from "@/components/SideBar"

const inter = Inter({ subsets: ['latin'] })


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" 
      className='light'>
        <Providers>
          <SideBAr>

              <body 
              className={cn(
                'min-h-screen font-sans antialiased',
                inter.className
                )}>
                {children}
              </body>
            </SideBAr>
        </Providers>
      </html>
    )
  }