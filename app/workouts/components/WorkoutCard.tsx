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
        <Link href={`/workouts/${workout_id}`} className='h-96 card flex flex-col justify-between items-center relative cursor-pointer '>
            <div className='w-full'>
                <Image width={1920} height={1080} src="/workout1.jpg" alt="" className='aspect-video w-full' />
            </div>
            <div className='flex-1 z-10 w-full flex justify-between items-center py-4'>
                <div>
                    <h2>{workout_name}</h2>
                    <div className='text-gray-500'>
                        <h4>{exercises.length} Übungen</h4>
                        <h4>Zuletzt {formatRelativeDate(new Date(updated_at))}</h4>
                    </div>
                </div>
                {/* 
                <Link href={`/workouts/${workout_id}`} className=''>
                    <Button variant={"outline"}>Öffnen</Button>
                </Link> */}
            </div>
        </Link>
    )
}

export default WorkoutCard