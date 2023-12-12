"use client"
import { ChevronRight } from 'lucide-react'
import React from 'react'
import MiniSetList from './MiniSetList'
import { useRouter } from 'next/navigation'
import { formatRelativeDate } from '../../../../util/date'
import Image from 'next/image'

type ExerciseCardProps = {
    exercise: Exercise
}

function ExerciseCard({ exercise }: ExerciseCardProps) {
    const router = useRouter()
    function handleClick() {
        router.replace(`/exercises/${exercise.exercise_id}`)
    }
    return (
        <div className='border rounded-lg flex flex-col items-center justify-between bg-card  hover:scale-105 cursor-pointer transition' onClick={handleClick}>
            <Image src={"/backWorkout.png"} alt="" width={9999} height={9999} className='w-full object-cover h-40 object-top rounded-lg' />

            <div className='flex justify-between w-full p-4 items-end'>
                <div className='flex justify-between flex-col'>
                    <h3 className='font-semibold'>{exercise.exercise_name}</h3>

                    <span className='text-sm text-gray-400'>{formatRelativeDate(new Date(exercise.updated_at))}</span>
                </div>
            </div>
        </div>
    )
}

export default ExerciseCard