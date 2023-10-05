import { AppRouter } from '@/trpc'
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>({})

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
