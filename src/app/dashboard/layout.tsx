import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import { cn } from "../lib/utils"
import { Inter } from "next/font/google"
import SideBar from "@/components/SideBar"

const inter = Inter({ subsets: ['latin'] })


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='light'>
        <Providers>
          {/* <SideBar> */}
            <div 
            className={cn(
              'min-h-screen font-sans antialiased',
              inter.className
              )}>
              {children}
            </div>
          {/* </SideBar> */}
        </Providers>
      </div>
    )
}