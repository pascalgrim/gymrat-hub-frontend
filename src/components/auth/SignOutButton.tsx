"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'

function SignOutButton() {
    return (
        <Button onClick={() => signOut()}>Logout</Button>
    )
}

export default SignOutButton