import { TRPCError, initTRPC } from '@trpc/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const t = initTRPC.create();

const middleware = t.middleware

// const isAuth = middleware(async () => {
//   const { getUser } = getKindeServerSession()
//   const user = getUser()

//   if (!user || !user.id) {
//     throw new TRPCError({ code: 'UNAUTHORIZED' })
//   }

export const router = t.router;
export const publicProcedure = t.procedure;