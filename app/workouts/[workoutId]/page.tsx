"use client"
import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../util/axios'
import ExerciseList from './components/ExerciseList'
import { extractExercisesFromWorkoutObject } from '../../../lib/extractExercisesFromWorkoutObject'
import WorkoutDropdown from '../components/WorkoutOptions'

async function WorkoutDetailPage({ params }: {
  params: {
    workoutId: string
  }
}) {
  const res = await api.get(`/workout/${params.workoutId}`)
  const workout: Workout = res.data


  return (
    <Container>
      <TitleSection title={workout.workout_name}>
        <WorkoutDropdown workout={workout} />
      </TitleSection>
      <div>
        <ExerciseList choosable workout={workout} />
      </div>
    </Container>
  )
}

export default WorkoutDetailPage