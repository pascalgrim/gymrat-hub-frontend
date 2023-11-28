import React from 'react'
import ExerciseCard from './ExerciseCard'
import Section from '@/components/layout/Section/Section'
import { Button } from '@/components/ui/button'
import AddExerciseButton from './AddExerciseButton'

type ExerciseListProps = {
    exercises: Exercise[]
}

function ExerciseList({ exercises }: ExerciseListProps) {
    return (
        <Section title="Übungen" button={<AddExerciseButton />} >
            <div className="grid grid-cols-4 gap-4">
                {exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.exercise_id} />)}
            </div>
        </Section>
    )
}

export default ExerciseList