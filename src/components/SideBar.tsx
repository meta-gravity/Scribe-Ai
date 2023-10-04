import { MenuIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"

const SideBar = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="default" className="absolute right-4 flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-600">
                         <MenuIcon 
                        className="block md:hidden h-6 w-6"
                        aria-hidden="true"
                        /> 
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>

            {/* <MenuIcon /> */}
        </div>
    )
}

export default SideBar