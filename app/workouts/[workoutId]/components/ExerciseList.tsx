import React from 'react'
import ExerciseCard from './ExerciseCard'
import Section from '@/components/layout/Section/Section'
import { Button } from '@/components/ui/button'
import AddExerciseButton from './AddExerciseButton'

type ExerciseListProps = {
    exercises: Exercise[],
    choosable?: boolean
    workoutId?: number
}

function ExerciseList({ exercises, choosable = false, workoutId }: ExerciseListProps) {
    return (
        <Section title="Übungen" button={<AddExerciseButton choosable={choosable} exercises={exercises} workoutId={workoutId} />} >
            <div className="grid grid-cols-4 gap-4">
                {exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.exercise_id} />)}
            </div>
        </Section>
    )
}

export default ExerciseList