
import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../util/axios'
import Section from '@/components/layout/Section/Section'
import ExerciseDayList from './components/ExerciseDayList'
import AddSetForm from './components/AddSetForm'

async function ExerciseDetailPage({ params }: { params: { exerciseId: string } }) {
    const res = await api.get(`/exercise/${params.exerciseId}`)
    const exercise: Exercise = res.data
    return (
        <Container>
            <TitleSection title={exercise.exercise_name}></TitleSection>
            <Section title='Sätze' >
                <ExerciseDayList exerciseDays={exercise.ExerciseDays} />
            </Section>
            <AddSetForm exerciseId={+params.exerciseId} />
        </Container>
    )
}

export default ExerciseDetailPage