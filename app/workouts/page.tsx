
import React from 'react'
import Container from '@/components/layout/Container'
import WorkoutList from './components/WorkoutList'
import TitleSection from '@/components/layout/TitleSection'
import { Button } from '@/components/ui/button'
import NewWorkoutButton from './components/NewWorkoutButton'



async function WorkoutPage() {
    return (
        <Container>
            <TitleSection title='Workouts'>
                <NewWorkoutButton/>
            </TitleSection>
            <WorkoutList />
        </Container>
    )
}

export default WorkoutPage