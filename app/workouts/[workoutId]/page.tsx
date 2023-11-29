import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../util/axios'
import ExerciseList from './components/ExerciseList'
import { extractExercisesFromWorkoutObject } from '../../../lib/extractExercisesFromWorkoutObject'

async function WorkoutDetailPage({ params }: {
  params: {
    workoutId: string
  }
}) {
  const res = await api.get(`/workout/${params.workoutId}`)
  const workout: Workout = res.data
  const exercises = extractExercisesFromWorkoutObject(workout)

  return (
    <Container>
      <TitleSection title={workout.workout_name}>
      </TitleSection>
      <div>
        <ExerciseList exercises={exercises} choosable workoutId={workout.workout_id} />
      </div>
    </Container>
  )
}

export default WorkoutDetailPage