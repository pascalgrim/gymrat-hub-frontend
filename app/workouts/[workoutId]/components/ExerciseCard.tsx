"use client"
import { ChevronRight } from 'lucide-react'
import React from 'react'
import MiniSetList from './MiniSetList'
import { useRouter } from 'next/navigation'
import { formatRelativeDate } from '../../../../util/date'

type ExerciseCardProps = {
    exercise: Exercise
}

function ExerciseCard({ exercise }: ExerciseCardProps) {
    const router = useRouter()
    function handleClick() {
        router.replace(`/exercises/${exercise.exercise_id}`)
    }
    return (
        <div className='border rounded-lg p-4 flex items-center justify-between '>

            <div className='flex justify-between flex-col'>
                <h3 className='font-semibold'>{exercise.exercise_name}</h3>
                <span className='text-sm text-gray-400'>{formatRelativeDate(new Date(exercise.updated_at))}</span>
            </div>
            <ChevronRight onClick={handleClick} className='cursor-pointer'></ChevronRight>
        </div>
    )
}

export default ExerciseCard