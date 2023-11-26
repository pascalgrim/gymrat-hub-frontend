import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../util/axios'

async function WorkoutDetailPage({params}:{params:{
    workoutId:string
}}) {
    const res = await api.get(`/workout/${params.workoutId}`)
    const workout:Workout= res.data
  return (
    <Container>
        <TitleSection title={workout.workout_name}></TitleSection>
    
    </Container>
  )
}

export default WorkoutDetailPage