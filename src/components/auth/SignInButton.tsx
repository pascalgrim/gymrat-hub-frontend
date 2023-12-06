"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useLogout } from '../../../hooks/auth/useLogout'
import { useAuthContext } from '../../../hooks/auth/useAuthContext'
import { LogOut } from 'lucide-react'
import { useSidenavState } from '../../../provider/SidenavStateProvider'
import { cn } from '@/lib/utils'

type SignInButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

function SignInButton({ className, ...props }: SignInButtonProps) {
    const { logout } = useLogout()
    const { state } = useAuthContext()
    const { collapsed } = useSidenavState()
    const router = useRouter()
    function handleLogOut() {
        logout()
    }
    return (
        <>
            {state.user ?
                <Button variant={"ghost"} onClick={handleLogOut} {...props} className={cn("gap-2", className)}><LogOut size={16} /></Button>
                :
                <Button onClick={() => router.push("/signin")} {...props}>Login</Button>}
        </>

    )
}

export default SignInButton