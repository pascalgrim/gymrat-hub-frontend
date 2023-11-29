import React from 'react'
import { formatDate } from '../../../util/date'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import WorkoutDropdown from './WorkoutOptions'

type WorkoutCard = {
    workout: Workout
}

function WorkoutCard({ workout }: WorkoutCard) {
    const { created_at, updated_at, user_id, workout_id, workout_name } = workout

    return (
        <div className='h-96 card flex justify-center items-center relative'>
            <div className='absolute right-8 top-8'>
                <WorkoutDropdown workout={workout} />
            </div>
            <div>
                <h2>{workout_name}</h2>
                <Link href={`/workouts/${workout_id}`} className=''>
                    <Button variant={"secondary"}>Öffnen</Button>
                </Link>
            </div>
        </div>
    )
}

export default WorkoutCard