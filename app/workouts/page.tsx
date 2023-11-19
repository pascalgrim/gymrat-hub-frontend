"use client"
import {
    useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { getWorkouts } from './getWorkouts'
import { useSession } from 'next-auth/react'

function WorkoutPage() {
    const { data: session } = useSession()
    const { data } = useQuery({ queryKey: ['workouts'], queryFn: () => getWorkouts(session?.user.id!) })

    return (
        <div>
            Workouts
            {JSON.stringify(data)}
        </div>
    )
}

export default WorkoutPage