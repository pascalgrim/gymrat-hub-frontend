"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from "react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { useSignup } from '../../hooks/auth/useSignup'


function SignUpForm() {
    const { toast } = useToast()
    const router = useRouter()
    const { signup } = useSignup()
    async function submit(formdata: FormData) {
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
        if (!username) return
        if (!email) return
        if (!password) return
        if (!repeatedPassword) return

        try {
            await signup(email.toString(), password.toString(), username.toString(), firstName?.toString(), lastName?.toString())

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
            <form className='grid grid-cols-2 gap-2' action={submit}>
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