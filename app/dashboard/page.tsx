
import React from 'react'
import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import Heatmap from './Heatmap'
import { api } from '../../util/axios'
import RadarChartCard from './RadarChartCard'
import WorkoutList from '../workouts/components/WorkoutList'


async function Dashboard() {

    return (
        <Container>
            <TitleSection title='Dashboard'></TitleSection>
            <RadarChartCard />

        </Container>
    )
}

export default Dashboard