import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../util/axios'
import ExerciseList from '../workouts/[workoutId]/components/ExerciseList'
import LargeExerciseList from './components/LargeExerciseList'


async function ExercisesPage() {

    return (
        <Container >
            <TitleSection title='Übungen'></TitleSection>
            <LargeExerciseList />
        </Container>
    )
}

export default ExercisesPage