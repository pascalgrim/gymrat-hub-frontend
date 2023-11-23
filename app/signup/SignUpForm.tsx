"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { api } from '../../util/axios'
import { useMutation } from '@tanstack/react-query'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { useAuth } from '../../provider/AuthProvider'


function SignUpForm() {
    const { signIn } = useAuth()
    const { toast } = useToast()
    const router = useRouter()
    async function signUp(formdata: FormData) {
        const username = formdata.get("username")
        const email = formdata.get("email")
        const firstName = formdata.get("firstName")
        const lastName = formdata.get("lastName")
        const password = formdata.get("password")
        const repeatedPassword = formdata.get("repeatedPassword")
        if (password !== repeatedPassword) {
            toast({
                variant: "destructive",
                title: "Fehler",
                description: "Passwörter stimmen nicht überein",
            })
            return
        }
        try {
            const res = await api.post("/auth/signup", {
                email,
                password,
                username,
                firstName,
                lastName
            })
            const accessToken = res.data.access_token
            signIn(accessToken)
            router.push("/")
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Fehler",
                description: error.response.data.message,
            })
            return
        }
    }
    return (
        <div className='flex flex-col items-center gap-12'>
            <h2 className='text-2xl'>Registrieren</h2>
            <form className='grid grid-cols-2 gap-2' action={signUp}>
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" name="username" type="text" required />
                </div>
                <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" name='email' type="email" required />
                </div>
                <div>
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input id="firstName" name="firstName" type="text" />
                </div>
                <div>
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input id="lastName" name="lastName" type="text" />
                </div>
                <div>
                    <Label htmlFor="password">Passwort</Label>
                    <Input id="password" name="password" type="password" required />
                </div>
                <div>
                    <Label htmlFor="repeatPassword">Passwort wiederholen</Label>
                    <Input id="repeatedPassword" name="repeatedPassword" type="password" required />
                </div>
                <Button type="submit" className='mt-4 col-span-2'>Registrieren</Button>
            </form>
        </div>
    )
}

export default SignUpForm