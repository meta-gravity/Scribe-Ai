/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/kyE5CNWJKIS
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-8 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-800">Pricing</h1>
      <div className="flex justify-around w-full">
        <Card className="m-2 flex-1 transform hover:scale-95 transition-all duration-500 bg-white rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Basic Plan</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <p className="text-3xl font-bold">$9.99</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">per month</p>
            <ul className="list-disc list-inside mt-2 text-xs space-y-1">
              <li>Feature One</li>
              <li>Feature Two</li>
              <li>Feature Three</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="transition-transform duration-500 ease-in-out hover:scale-105">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="m-2 flex-1 transform hover:scale-95 transition-all duration-500 bg-white rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Premium Plan</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <p className="text-3xl font-bold">$19.99</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">per month</p>
            <ul className="list-disc list-inside mt-2 text-xs space-y-1">
              <li>All Basic Features</li>
              <li>Premium Feature One</li>
              <li>Premium Feature Two</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="transition-transform duration-500 ease-in-out hover:scale-105">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="m-2 flex-1 transform hover:scale-95 transition-all duration-500 bg-white rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Teams Plan</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <p className="text-3xl font-bold">$39.99</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">per month</p>
            <ul className="list-disc list-inside mt-2 text-xs space-y-1">
              <li>All Premium Features</li>
              <li>Team Collaboration Feature</li>
              <li>Enterprise Support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="transition-transform duration-500 ease-in-out hover:scale-105">Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

