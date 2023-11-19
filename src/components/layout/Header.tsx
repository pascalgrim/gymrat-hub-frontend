"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import SignOutButton from '../auth/SignOutButton'
import SignInButton from '../auth/SignInButton'

function Header() {
    const { data: session, status } = useSession()
    return (
        <div className='border-b border-slate-400 h-24 flex items-center justify-between '>
            <h1>Gym Rat Hub</h1>
            {status === "authenticated" ? <SignOutButton /> : <SignInButton />}
        </div>
    )
}

export default Header