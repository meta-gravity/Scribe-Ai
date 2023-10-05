"use client"

import { Trash } from "lucide-react"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "./alert-dialog"
import { Button } from "./button"

export default function Delete() {
    return (
        <AlertDialog>
        <AlertDialogTrigger>
            <Button variant="outline" size="lg"
            className="mb-2 gap-4 px-5 p-2 border-red-300 hover:bg-red-500 rounded-md items-center"
            >Show Dialog</Button>
            <Trash className="text-2xl text-gray-900"/>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}

