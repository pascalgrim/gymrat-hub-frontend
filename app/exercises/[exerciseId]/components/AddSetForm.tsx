"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { api } from '../../../../util/axios'
import { useRouter } from 'next/navigation'


type AddSetFormProps = {
    exerciseId: number
}
function AddSetForm({ exerciseId }: AddSetFormProps) {
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState(0)
    const router = useRouter()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (reps > 0 && weight > 0) {
            try {
                await api.post("/set", {
                    exerciseId: exerciseId,
                    reps,
                    weight
                })
                router.refresh()
            } catch (error: any) {
                console.log(error)
            }
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex w-96 gap-2'>
            <Input placeholder='Reps' value={reps} onChange={(e) => setReps(+e.target.value)} />
            <Input placeholder='Gewicht' value={weight} onChange={(e) => setWeight(+e.target.value)} />
            <Button type="submit">Hinzufügen</Button>
        </form>
    )
}

export default AddSetForm