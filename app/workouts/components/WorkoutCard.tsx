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
        <div className='shadow rounded-lg h-96 p-6 border'>
            <h2>{workout_name}</h2>
            {workout_id}
            <Link href={`/workouts/${workout_id}`}><Button variant={"outline"}>Öffnen</Button></Link>
        </div>
    )
}

export default WorkoutCard