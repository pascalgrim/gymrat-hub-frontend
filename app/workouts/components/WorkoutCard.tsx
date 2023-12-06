import React from 'react'
import { formatDate, formatRelativeDate } from '../../../util/date'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import WorkoutDropdown from './WorkoutOptions'
import Image from 'next/image'

type WorkoutCard = {
    workout: Workout
}

function WorkoutCard({ workout }: WorkoutCard) {
    const { created_at, updated_at, user_id, workout_id, workout_name, exercises } = workout


    return (
        <Link href={`/workouts/${workout_id}`} className='card flex flex-col justify-between items-center cursor-pointer relative  '>
            <div className='w-full '>
                <Image width={1024} height={1024} src="/backWorkout.png" alt="" className=' w-full object-cover h-40 object-top  ' />
            </div>

            <div className='flex flex-col w-full pt-4'>
                <div className='text-sm'>Workout</div>
                <h3 className='font-bold'>{workout_name}</h3>
                <h4 className='text-sm'>Zuletzt {formatRelativeDate(new Date(updated_at))}</h4>
            </div>

        </Link>
    )
}

export default WorkoutCard