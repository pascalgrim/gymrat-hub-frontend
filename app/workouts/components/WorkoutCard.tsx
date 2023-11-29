import React from 'react'
import { formatDate } from '../../../util/date'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type WorkoutCard = {
    workout: Workout
}

function WorkoutCard({ workout }: WorkoutCard) {
    const { created_at, updated_at, user_id, workout_id, workout_name } = workout

    return (
        <Link href={`/workouts/${workout_id}`} className='h-96 card flex justify-center items-center'>
            <h2>{workout_name}</h2>
        </Link>
    )
}

export default WorkoutCard