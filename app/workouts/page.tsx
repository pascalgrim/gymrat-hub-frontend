
import React from 'react'
import Container from '@/components/layout/Container'
import WorkoutList from './components/WorkoutList'
import { getWorkouts } from './getWorkouts'



async function WorkoutPage() {

    const data = await getWorkouts("108278415294040600000")
    return (
        <Container title='Workouts'>
            {data ? <WorkoutList workouts={data} /> : "No Data"}

        </Container>
    )
}

export default WorkoutPage