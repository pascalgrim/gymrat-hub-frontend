"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { signIn } from "next-auth/react"

function GoogleLogin() {
    return (
        <div>
            <Button onClick={() => signIn("google")}>Google Sign In</Button>
        </div>
    )
}

export default GoogleLogin