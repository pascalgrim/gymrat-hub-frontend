"use client"
import React from 'react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { useAuth } from '../../../provider/AuthProvider'
import { useRouter } from 'next/navigation'

interface SignInButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    specialProp?: string;
}

function SignInButton(props: SignInButtonProps) {
    const { authenticated, signIn, signOut } = useAuth()
    const router = useRouter()
    return (
        <>
            {authenticated ?
                <Button onClick={() => signOut()} {...props}>Logout</Button>
                :
                <Button onClick={() => router.push("/signin")} {...props}>Login</Button>}
        </>

    )
}

export default SignInButton