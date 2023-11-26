"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { api } from '../../util/axios'
import { useMutation } from '@tanstack/react-query'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { useLogin } from '../../hooks/auth/useLogin'

function SignInForm() {
    const { toast } = useToast()
    const router = useRouter()
    const { login } = useLogin()
    async function action(formdata: FormData) {
        const email = formdata.get("email")
        const password = formdata.get("password")
        if (!email) return
        if (!password) return
        try {
            const res = await login(email.toString(), password.toString())
            if (res.status === 201) {
                router.push("/dashboard")
            }
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
            <form className='grid grid-cols-2 gap-2' action={action}>
                <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" name='email' type="email" required />
                </div>

                <div>
                    <Label htmlFor="password">Passwort</Label>
                    <Input id="password" name="password" type="password" required />
                </div>

                <Button type="submit" className='mt-4 col-span-2'>Einloggen</Button>
            </form>
        </div>
    )
}

export default SignInForm