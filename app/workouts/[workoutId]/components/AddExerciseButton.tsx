"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useAuthContext } from '../../../../hooks/auth/useAuthContext'
import { useRouter } from 'next/navigation'
import { api } from '../../../../util/axios'
import { Input } from '@/components/ui/input'


type AddExerciseButtonProps = {
    choosable?: boolean
}
function AddExerciseButton({ choosable = false }: AddExerciseButtonProps) {
    const [name, setName] = useState("")
    const { state } = useAuthContext()
    const router = useRouter()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (name.length < 1) return
        try {
            const res = await api.post("/exercise", {
                userId: state.user?.userId,
                exerciseName: name,

            })
            if (res.status === 201) {
                router.push(`/exercises/${res.data.exercise_id}`)
            }

        } catch (error: any) {
            console.log(error)
        }
    }


    const newExerciseForm = <form className="flex flex-col items-end gap-4" onSubmit={(e) => handleSubmit(e)}>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Squats' />
        <Button>Erstellen</Button>
    </form>

    const heading = choosable ? "Übung hinzufügen" : "Übung erstellen"
    return (
        <Dialog>
            <DialogTrigger asChild><Button>{heading}</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{heading}</DialogTitle>
                    <DialogDescription>
                        Name der Übung eingeben
                    </DialogDescription>
                </DialogHeader>
                {choosable ? <></> : newExerciseForm}


            </DialogContent>
        </Dialog>
    )
}

export default AddExerciseButton