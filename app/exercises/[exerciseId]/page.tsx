
import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../util/axios'
import Section from '@/components/layout/Section/Section'
import ExerciseDayList from './components/ExerciseDayList'
import AddSetForm from './components/AddSetForm'
import ExerciseDayCard from './components/ExerciseDayCard'
import ChartCard from '@/components/charts/LineChart'
import { cn } from '@/lib/utils'
import { formatDate } from '../../../util/date'

async function ExerciseDetailPage({ params }: { params: { exerciseId: string } }) {
    const res = await api.get(`/exercise/${params.exerciseId}`)
    const exercise: Exercise = res.data
    const gap = "gap-2"
    return (
        <Container>
            <TitleSection title={exercise.exercise_name}></TitleSection>
            <div className={cn('grid grid-cols-4', gap)}>
                <div className={cn('grid grid-cols-4 col-span-4 h-80', gap)}>
                    <ChartCard exercise={exercise} className={cn('col-span-2', gap)} />
                    <div className={cn('col-span-1 grid grid-rows-2 ', gap)}>
                        <div className='card'>
                            Max Weight 100kg
                        </div>
                        <div className='card'>
                            Max Weight 100kg
                        </div>

                    </div>
                    <div className={cn('col-span-1')}>
                        <AddSetForm exerciseId={+params.exerciseId} date={formatDate(new Date())} />
                    </div>
                </div>
                <Section title='Sätze' className={cn('col-span-4')}>
                    <ExerciseDayList exerciseDays={exercise.ExerciseDays} />
                </Section>
            </div >
        </Container >
    )
}

export default ExerciseDetailPage