
import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import React from 'react'
import { api } from '../../../util/axios'
import Section from '@/components/layout/Section/Section'
import ExerciseDayList from './components/ExerciseDayList'
import AddSetForm from './components/AddSetForm'
import ChartCard from '@/components/charts/LineChart'
import { cn } from '@/lib/utils'
import { formatDate } from '../../../util/date'
import StatCard from '../../workouts/[workoutId]/components/StatCard'
import { getMaxWeight } from './getMaxWeight'
import { getMaxVolumn } from './getMaxVolumn'
import ExerciseOptions from './components/ExerciseOptions'

async function ExerciseDetailPage({ params }: { params: { exerciseId: string } }) {
    const res = await api.get(`/exercise/${params.exerciseId}`)
    const exercise: Exercise = res.data



    const gap = "gap-2"
    return (
        <Container>
            <TitleSection title={exercise.exercise_name}>
                {/* <ExerciseOptions exercise={exercise} /> */}
            </TitleSection>
            <div className={cn('grid md:grid-cols-4 sm:grid-cols-2 col-span-4  ', gap)}>
                <ChartCard exercise={exercise} className={cn('col-span-2', gap)} />
                <div className={cn('col-span-1 grid grid-rows-2', gap)}>
                    <StatCard title='Maximales Gewicht' value={getMaxWeight(exercise).toString() + " Kg"} />
                    <StatCard title='Maximales Volumen' value={getMaxVolumn(exercise).toString()} />
                </div>
                <div className={cn('col-span-1')}>
                    <AddSetForm exerciseId={+params.exerciseId} date={formatDate(new Date())} />
                </div>
            </div>
            <Section title='Sätze' className={cn('col-span-4')}>
                <ExerciseDayList exerciseDays={exercise.ExerciseDays} />
            </Section>
        </Container >
    )
}

export default ExerciseDetailPage