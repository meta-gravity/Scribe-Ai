/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/kyE5CNWJKIS
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"

export default function Component() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center space-y-8 max-w md:col-span-1">
        <h1 className="font-bold text-white-to black">Pricing Coming soon</h1>
      </div>

    </main>
  )
}

