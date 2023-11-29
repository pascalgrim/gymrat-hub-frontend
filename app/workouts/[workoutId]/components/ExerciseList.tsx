
import React from 'react'
import ExerciseCard from './ExerciseCard'
import Section from '@/components/layout/Section/Section'
import { Button } from '@/components/ui/button'
import AddExerciseButton from './AddExerciseButton'
import { extractExercisesFromWorkoutObject } from '../../../../lib/extractExercisesFromWorkoutObject'
import { api } from '../../../../util/axios'

type ExerciseListProps = {
    choosable?: boolean,
    workout: Workout
}

function ExerciseList({ choosable = false, workout }: ExerciseListProps) {
    const exercises = extractExercisesFromWorkoutObject(workout)


    return (
        <Section title="Übungen" button={<AddExerciseButton choosable={choosable} workout={workout} />} >
            <div className="grid grid-cols-4 gap-4">
                {exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.exercise_id} />)}
            </div>
        </Section>
    )
}

export default ExerciseList