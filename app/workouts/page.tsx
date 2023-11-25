
import React from 'react'
import Container from '@/components/layout/Container'
import WorkoutList from './components/WorkoutList'
import { getWorkouts } from './getWorkouts'
import { useAuth } from '../../provider/AuthProvider'



async function WorkoutPage() {
    return (
        <Container title='Workouts'>
            <WorkoutList />
        </Container>
    )
}

export default WorkoutPage