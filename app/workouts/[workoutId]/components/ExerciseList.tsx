
import React from 'react'
import ExerciseCard from './ExerciseCard'
import Section from '@/components/layout/Section/Section'
import { Button } from '@/components/ui/button'
import AddExerciseButton from './AddExerciseButton'
import { extractExercisesFromWorkoutObject } from '../../../../lib/extractExercisesFromWorkoutObject'
import { api } from '../../../../util/axios'
import Image from 'next/image'

type ExerciseListProps = {
    choosable?: boolean,
    workout: Workout
}

function ExerciseList({ choosable = false, workout }: ExerciseListProps) {
    const exercises = extractExercisesFromWorkoutObject(workout)


    return (
        <Section title="Übungen" button={<AddExerciseButton choosable={choosable} workout={workout} />} >
            {exercises.length > 0 ?
                <div className="grid grid-cols-5 gap-4">
                    {exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.exercise_id} />)}
                </div>
                :
                <div className='w-full mt-4 flex flex-col justify-center items-center gap-2'>
                    <h2>Noch keine Übung vorhanden</h2>
                    <h3>Füge deine erste Übung hinzu</h3>
                </div>
            }

        </Section>
    )
}

export default ExerciseList