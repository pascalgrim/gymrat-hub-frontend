"use client"

import React from 'react'
import WorkoutCard from './WorkoutCard'


async function WorkoutList({ workouts }: { workouts: Workout[] }) {

    // const { data, isLoading } = useQuery({ queryKey: ['workouts'], queryFn: () => session?.user && getWorkouts(session?.user.id) })


    return (
        <div className='grid grid-cols-2 gap-4'>
            <div>Error:{ }</div>
            {workouts?.map(workout => <WorkoutCard workout={workout} />)}
        </div>
    )
}

export default WorkoutList