import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"

const Page = async () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')


    const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({succses}) => {
            if(succses) {
                //user is in the database
                router.push(origin ? `/${origin}` : '/dashbord')
            }
        }
    })
}

export default Page