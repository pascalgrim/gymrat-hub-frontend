"use client"
import { ChevronRight } from 'lucide-react'
import React from 'react'
import MiniSetList from './MiniSetList'
import { useRouter } from 'next/navigation'

type ExerciseCardProps = {
    exercise: Exercise
}

function ExerciseCard({ exercise }: ExerciseCardProps) {
    const router = useRouter()
    function handleClick() {
        router.replace(`/exercises/${exercise.exercise_id}`)
    }
    return (
        <div className='border rounded-lg p-4 flex flex-col justify-between '>
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold'>{exercise.exercise_name}</h3>
                    <ChevronRight onClick={handleClick} className='cursor-pointer'></ChevronRight>
                </div>
                <span className='text-sm'>vor 3 Tagen</span>
            </div>
            <MiniSetList className='mt-6' />
        </div>
    )
}

export default ExerciseCard