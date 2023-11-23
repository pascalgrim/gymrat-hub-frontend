"use client"
import React from 'react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { useAuth } from '../../../provider/AuthProvider'
import { useRouter } from 'next/navigation'


function SignInButton() {
    const { authenticated, signIn, signOut } = useAuth()
    const router = useRouter()
    return (
        <>
            {authenticated ? <Button onClick={() => signOut()}>Logout</Button> : <Button onClick={() => router.push("/signin")}>Login</Button>}
        </>

    )
}

export default SignInButton