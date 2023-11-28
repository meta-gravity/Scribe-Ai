"use client"

import * as React from "react"
import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle2() {
  const { setTheme } = useTheme()

  return (
    <div className="flex px-3 py-1 m-1 space-x-5 bg-[#0a0a0a0a] border rounded-full">


        <Button variant="link" size="sm" className="hover:text-gray-600 hover:dark:text-gray-300 transition-all">
            
            <Sun onClick={() => setTheme("light")} className="absolute h-5 w-5 " />
        </Button>

        <Button variant="link" size="sm" className="hover:text-gray-600 hover:dark:text-gray-300 transition-all">

            <Moon onClick={() => setTheme("dark")} className="absolute h-5 w-5 " />
        </Button>

        <Button variant="link" size="sm" className="hover:text-gray-600 hover:dark:text-gray-300 transition-all">
            <Laptop onClick={() => setTheme("system")} className="absolute h-5 w-5" />

        </Button>
    </div>
  )
}
