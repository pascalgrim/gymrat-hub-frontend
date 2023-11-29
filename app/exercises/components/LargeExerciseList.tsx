"use client"
import React from 'react'
import { useAuthContext } from '../../../hooks/auth/useAuthContext'
import { useQuery } from '@tanstack/react-query'
import { getExercises } from '../getExercises'
import ExerciseList from '../../workouts/[workoutId]/components/ExerciseList'
import Section from '@/components/layout/Section/Section'
import ExerciseCard from '../../workouts/[workoutId]/components/ExerciseCard'
import AddExerciseButton from '../../workouts/[workoutId]/components/AddExerciseButton'


type LargeExerciseListProps = {
    exercises: Exercise[]
}

function LargeExerciseList() {
    const { state } = useAuthContext()
    const userId = state.user?.userId
    if (!userId) return <></>
    const { data } = useQuery({
        queryKey: ["exercises"],
        queryFn: () => getExercises(userId)
    })
    const exercises = data

    return (
        <Section title="Übungen" button={<AddExerciseButton />} >
            <div className="grid grid-cols-4 gap-4">
                {exercises?.map(exercise => <ExerciseCard exercise={exercise} key={exercise.exercise_id} />)}
            </div>
        </Section>
    )
}

export default LargeExerciseList

