"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'


function SignInButton() {
    async function handleClick() {
        signIn("google")
    }
    return (
        <Button onClick={handleClick}>Login</Button>
    )
}

export default SignInButton