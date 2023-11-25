"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useLogout } from '../../../hooks/auth/useLogout'
import { useAuthContext } from '../../../hooks/auth/useAuthContext'

interface SignInButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    specialProp?: string;
}

function SignInButton(props: SignInButtonProps) {
    const { logout } = useLogout()
    const { state } = useAuthContext()
    const router = useRouter()
    function handleLogOut() {
        logout()
    }
    return (
        <>
            {state.user ?
                <Button onClick={handleLogOut} {...props}>Logout</Button>
                :
                <Button onClick={() => router.push("/signin")} {...props}>Login</Button>}
        </>

    )
}

export default SignInButton