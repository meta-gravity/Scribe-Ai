import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export default function DashContent() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Home</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Top Songs</CardTitle>
                <CardDescription>Discover the best songs of the week.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Browse
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
    );
}