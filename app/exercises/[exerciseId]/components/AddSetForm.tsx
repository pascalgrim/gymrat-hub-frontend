"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { api } from '../../../../util/axios'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'


type AddSetFormProps = {
    exerciseId: number
}
function AddSetForm({ exerciseId }: AddSetFormProps) {
    const [reps, setReps] = useState("")
    const [weight, setWeight] = useState("")
    const router = useRouter()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (+reps > 0 && +weight > 0) {
            try {
                await api.post("/set", {
                    exerciseId: exerciseId,
                    reps: +reps,
                    weight: +weight
                })
                router.refresh()
            } catch (error: any) {
                console.log(error)
            }
        }
    }
    return (
        <div className='card h-full flex flex-col justify-evenly items-center p-12 gap-4'>
            <h3>Neuen Satz hinzufügen</h3>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                    <div>
                        <Label>Reps</Label>
                        <Input placeholder='Reps' value={reps} onChange={(e) => setReps(e.target.value)} />
                    </div>
                    <div>
                        <Label>Gewicht</Label>
                        <Input placeholder='Gewicht' value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                </div>
                <Button type="submit">Hinzufügen</Button>
            </form>
        </div>
    )
}

export default AddSetForm