import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../../util/axios'
import DayCard from './DayCard'

async function SetsPage({ params }: { params: { exerciseId: string } }) {
    const res = await api.get("/exercise-day/" + params.exerciseId)
    const days: ExerciseDay[] = res.data
    return (
        <Container>
            <TitleSection title={`Alle Sätze`} />
            <div className='flex flex-col gap-2'>
                {days.map(day => <DayCard day={day} key={day.createdAt.toString()} />)}
            </div>
        </Container>
    )
}

export default SetsPage