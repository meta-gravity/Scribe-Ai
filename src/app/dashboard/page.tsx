
import Dashboard from '@/components/Dashboard'
import SideBar from '@/components/SideBar'
// import ChatInterface from '@/components/chat/ChatInterface'
// import AI from '@/components/chat/ai'
// import Completion from '@/components/ai'
import { db } from '@/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id
    }
  })

  if(!dbUser) redirect('/auth-callback?origin=dashboard')

  return (
    <div className='flex '>
      <SideBar />
      {/* <Completion /> */}
      {/* <AI /> */}
      {/* <ChatInterface /> */}
    </div>
  )


}

export default Page