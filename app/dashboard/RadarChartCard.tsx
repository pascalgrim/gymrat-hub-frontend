"use client"
import React from 'react'
import { useAuthContext } from '../../hooks/auth/useAuthContext'
import { useQuery } from '@tanstack/react-query'
import { getMusclegroups } from './getMusclegroups'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarChartCard() {
    const { state } = useAuthContext()
    const userId = state.user?.userId
    if (!userId) return <></>
    const { data } = useQuery({
        queryKey: ["workouts"],
        queryFn: () => getMusclegroups(userId)
    })
    const musclegroups = data
    if (musclegroups === undefined) return <div>AS</div>
    const data2 = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];
    return (
        <div className='h-1/3 card w-1/3'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={musclegroups}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />

                    <Radar name="Mike" dataKey="A" stroke="#c3ff00" fill="#c3ff00" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadarChartCard