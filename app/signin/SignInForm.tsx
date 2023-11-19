"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { api } from '../../util/axios'
import { useMutation } from '@tanstack/react-query'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'





function SignInForm() {
    const { toast } = useToast()
    const router = useRouter()
    async function signUp(formdata: FormData) {
        const email = formdata.get("email")
        const password = formdata.get("password")
        try {
            await api.post("/auth/signIn", {
                email,
                password,
            })
            router.push("/workouts")

        } catch (error: any) {
            console.log(error)
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
            <h2 className='text-2xl'>Einloggen</h2>
            <form className='grid grid-cols-2 gap-2' action={signUp}>
                <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" name='email' type="email" required />
                </div>

                <div>
                    <Label htmlFor="password">Passwort</Label>
                    <Input id="password" name="password" type="password" required />
                </div>

                <Button type="submit" className='mt-4 col-span-2'>Registrieren</Button>
            </form>
        </div>
    )
}

export default SignInForm