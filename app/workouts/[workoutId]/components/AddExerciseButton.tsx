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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExerciseCard from './ExerciseCard'
import ExerciseAdder from './ExerciseAdder'
import { extractExercisesFromWorkoutObject } from '../../../../lib/extractExercisesFromWorkoutObject'
import MuscleSelector from '../../components/MuscleSelector'



type AddExerciseButtonProps = {
    choosable?: boolean,
    workout?: Workout
}



function AddExerciseButton({ choosable = false, workout }: AddExerciseButtonProps) {
    const [name, setName] = useState("")
    const { state } = useAuthContext()
    const router = useRouter()
    const exercises = workout && extractExercisesFromWorkoutObject(workout)
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (name.length < 1) return
        try {
            let res
            if (workout) {
                res = await api.post("/exercise/workout", {
                    userId: state.user?.userId,
                    exerciseName: name,
                    workoutId: workout.workout_id
                })
            } else {
                res = await api.post("/exercise", {
                    userId: state.user?.userId,
                    exerciseName: name,
                })
            }
            if (res.status === 201) {
                router.push(`/exercises/${res.data.exercise_id}`)
            }

        } catch (error: any) {
            console.log(error)
        }
    }


    const newExerciseForm =
        <form className="flex flex-col items-end gap-4" onSubmit={(e) => handleSubmit(e)}>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Squats' />
            <Button>Erstellen</Button>
        </form>

    const heading = choosable ? "Übung hinzufügen" : "Übung erstellen"
    const [selectedMuscles, setSelectedMuscles] = useState<string[]>([])

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
                <div className=''>
                    {choosable && exercises ?
                        <div>
                            <ExerciseAdder workout={workout} />
                            <form className="flex mt-4 gap-2" onSubmit={(e) => handleSubmit(e)}>
                                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Neue Übung erstellen' />
                                {/* <MuscleSelector selectedMusclegroups={selectedMuscles} setSelectedMusclegroups={setSelectedMuscles} /> */}
                                <Button>Erstellen</Button>
                            </form>
                        </div>
                        :
                        newExerciseForm
                    }

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddExerciseButton