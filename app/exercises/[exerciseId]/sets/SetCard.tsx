import { MoreHorizontal } from 'lucide-react'
import React from 'react'
import SetCardOptions from './SetCardOptions'

function SetCard({ set, idx }: { set: ExerciseSet, idx: number }) {
    return (
        <div className='w-40 border p-4 flex flex-col items-start justify-center rounded-lg gap-4 bg-[#1e1e1e] '>
            <div className='flex justify-between items-center w-full'>
                <span className='text-primary '>
                    {idx + 1}
                </span>
                <SetCardOptions set={set} />
            </div>
            <div className='flex gap-4 w-full justify-around'>
                <div className='flex flex-col'>
                    <span className='text-xl'>{set.reps}</span>
                    <span className='text-sm text-gray-400'> Reps</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xl'>{set.weight}</span>
                    <span className='text-sm text-gray-400'> Kg</span>
                </div>
            </div>
        </div>

    )
}

export default SetCard