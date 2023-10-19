import { StarsIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function InputGenaerate() {
    return (
        <main>
            <div className="flex rounded-md w-[-48rem] h-48">
                <div className="flex">
                    <Input className="" placeholder="Write a newsletter about the new dalle-3 and chat gpt updates"/>
                    <Button variant="default" className="text-white text-2xl font-bold font-['Inter']">
                        Generate <StarsIcon className=""/>
                    </Button>
                </div>
            </div>

           
        </main>
    )
}