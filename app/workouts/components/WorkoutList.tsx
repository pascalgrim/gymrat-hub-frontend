"use client"

import React from 'react'
import WorkoutCard from './WorkoutCard'
import { getWorkouts } from '../getWorkouts'
import { useQuery } from '@tanstack/react-query'
import { useAuthContext } from '../../../hooks/auth/useAuthContext'


function WorkoutList() {
    const { state } = useAuthContext()
    const userId = state.user?.userId
    const { data } = useQuery({
        queryKey: ["workouts"],
        queryFn: () => getWorkouts(userId)
    })
    const workouts = data
    console.log("Workouts", workouts)
    return (
        <div className='grid grid-cols-2 gap-4'>
            {workouts?.map(workout => <WorkoutCard workout={workout} key={workout.workout_id} />)}
        </div>
    )
}

export default WorkoutList