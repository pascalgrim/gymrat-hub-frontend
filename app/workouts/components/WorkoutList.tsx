"use client"

import React, { useId } from 'react'
import WorkoutCard from './WorkoutCard'
import { getWorkouts } from '../getWorkouts'
import { useQuery } from '@tanstack/react-query'
import { useAuthContext } from '../../../hooks/auth/useAuthContext'


function WorkoutList() {
    const { state } = useAuthContext()
    const userId = state.user?.userId
    if (!userId) return <></>
    const { data } = useQuery({
        queryKey: ["workouts"],
        queryFn: () => getWorkouts(userId)
    })
    const workouts = data
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {workouts?.map(workout => <WorkoutCard workout={workout} key={workout.workout_id} />)}
        </div>
    )
}

export default WorkoutList