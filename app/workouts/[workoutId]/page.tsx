
import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../util/axios'
import ExerciseList from './components/ExerciseList'
import { extractExercisesFromWorkoutObject } from '../../../lib/extractExercisesFromWorkoutObject'
import WorkoutDropdown from '../components/WorkoutOptions'
import StatCard from './components/StatCard'
import { formatDate, formatRelativeDate } from '../../../util/date'

async function WorkoutDetailPage({ params }: {
  params: {
    workoutId: string
  }
}) {
  const res = await api.get(`/workout/${params.workoutId}`)
  const workout: Workout = res.data
  const estimatedTime = workout.exercises ? workout.exercises.length * 6 : 0
  if (!workout) return <></>
  return (
    <Container>
      <TitleSection title={workout.workout_name}>
        <WorkoutDropdown workout={workout} />
      </TitleSection>
      <div>
        <div className='grid grid-cols-3 gap-4'>
          <StatCard title='Übungen gesamt' className='h-40' value={workout.exercises.length.toString()} />
          <StatCard title='Länge' className='h-40' value={estimatedTime.toString() + " min"} />
          <StatCard title='Erstellt am' className='h-40' value={formatDate(new Date(workout.created_at))} />
        </div>
        <ExerciseList choosable workout={workout} />
      </div>
    </Container>
  )
}

export default WorkoutDetailPage