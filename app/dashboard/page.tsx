
import React from 'react'
import Container from '@/components/layout/Container'
import TitleSection from '@/components/layout/TitleSection'
import Heatmap from './Heatmap'
import { api } from '../../util/axios'


async function Dashboard() {

    return (
        <Container>
            <TitleSection title='Dashboard'></TitleSection>
            <Heatmap />
        </Container>
    )
}

export default Dashboard