
import { useSession } from 'next-auth/react'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      {session ? <Dashboard /> : <LandingPage />}
    </div>
  )
}
