"use client"
import { Plus, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { api } from '../../../../util/axios'
import { extractExercisesFromWorkoutObject } from '../../../../lib/extractExercisesFromWorkoutObject'
import AddExerciseCard from './AddExerciseCard'
import { useQuery } from '@tanstack/react-query'
import { getExercises } from '../../../exercises/getExercises'
import { useAuthContext } from '../../../../hooks/auth/useAuthContext'
import { getExercisesNotInWorkout } from '../get'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'

type ExerciseAdderProps = {
    workout: Workout
    // exercises: Exercise[]
}
function ExerciseAdder({ workout }: ExerciseAdderProps) {
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [search, setSearch] = useState("")
    const { state } = useAuthContext()
    const { data } = useQuery({
        queryKey: ["allExercises"],
        queryFn: () => getExercises(state.user?.userId)
    })
    const allExercises = data

    useEffect(() => {
        if (allExercises) {
            const diff = getExercisesNotInWorkout(allExercises, workout);
            setExercises(diff);
        }
    }, [allExercises, workout, workout]);
    return (
        <div className='mt-2'>
            <div className='flex gap-2 items-center mb-2'>
                <Search size={18} />
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Nach Übung suchen' className="" />
            </div>
            <ScrollArea className='h-64 mt-4'>
                <div className='grid grid-cols-2 gap-2'>
                    {exercises?.map(exercise => {
                        const el = <AddExerciseCard exercise={exercise} workoutId={workout.workout_id} key={exercise.exercise_id} />
                        if (search.length > 0) {
                            if (exercise.exercise_name.includes(search))
                                return (el)
                        }
                        else
                            return el
                    })
                    }

                </div>
            </ScrollArea>
        </div>
    )
}

export default ExerciseAdder