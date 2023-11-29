"use client"
import { Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { api } from '../../../../util/axios'
import { extractExercisesFromWorkoutObject } from '../../../../lib/extractExercisesFromWorkoutObject'
import AddExerciseCard from './AddExerciseCard'
import { useQuery } from '@tanstack/react-query'
import { getExercises } from '../../../exercises/getExercises'
import { useAuthContext } from '../../../../hooks/auth/useAuthContext'
import { getExercisesNotInWorkout } from '../get'

type ExerciseAdderProps = {
    workout: Workout
    // exercises: Exercise[]
}
function ExerciseAdder({ workout }: ExerciseAdderProps) {
    const [exercises, setExercises] = useState<Exercise[]>([])
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
        <div className='grid grid-cols-2 gap-2'>
            {exercises?.map(exercise =>
                <AddExerciseCard exercise={exercise} workoutId={workout.workout_id} key={exercise.exercise_id} />
            )
            }
        </div>
    )
}

export default ExerciseAdder