"use client"

import React from 'react'
import WorkoutCard from './WorkoutCard'
import { useAuth } from '../../../provider/AuthProvider'
import { getWorkouts } from '../getWorkouts'
import { useQuery } from '@tanstack/react-query'


function WorkoutList() {
    const { userId } = useAuth()
    const { data } = useQuery({
        queryKey: ["workouts"],
        queryFn: () => getWorkouts(userId)
    })
    const workouts = data
    return (
        <div className='grid grid-cols-2 gap-4'>
            {workouts?.map(workout => <WorkoutCard workout={workout} />)}
        </div>
    )
}

export default WorkoutList