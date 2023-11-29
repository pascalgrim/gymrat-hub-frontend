"use client"
import React, { useState } from 'react'
import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import { api } from '../../../util/axios'
import { useAuthContext } from '../../../hooks/auth/useAuthContext'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
type WorkoutOptionsProps = {
    workout: Workout
}

function WorkoutOptions({ workout }: WorkoutOptionsProps) {

    const { toast } = useToast()
    const { state } = useAuthContext()
    const router = useRouter()

    async function handleDeleteClick() {
        try {
            const res = await api.delete("/workout", {
                data: {
                    userId: state.user?.userId,
                    workoutId: workout.workout_id
                }
            })
            toast({
                title: `Workout ${workout.workout_name} wurde erfolgreich gelöscht`
            })
            router.push("/dashboard")
        } catch (error: any) {
            console.log(error)
        }

    }

    async function handleEditClick(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const res = await api.patch("/workout", {
                workoutName,
                workoutId: workout.workout_id
            })
            toast({
                title: `Workout wurde erfolgreich umbenannt`
            })
            router.refresh()
            setOpen(false)

        } catch (error: any) {
            console.log(error)
        }
    }

    const iconSize = 20
    const [workoutName, setWorkoutName] = useState("")
    const [open, setOpen] = useState(false);


    return (
        <div className='flex gap-2'>
            <Button onClick={handleDeleteClick} variant={"outline"} size={"icon"}><Trash size={iconSize} /></Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger> <Button variant={"outline"} size={"icon"}><Edit size={iconSize} /></Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Workout Name anpassen</DialogTitle>
                        <DialogDescription>
                            Gebe einen neuen Workout Namen ein
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => handleEditClick(e)} className='flex flex-col items-end gap-2'>
                        <Input placeholder='Neuer Workout Name' value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />
                        <Button type='submit'>Ändern</Button>
                    </form>

                </DialogContent>
            </Dialog>

        </div>

    )
}

export default WorkoutOptions