"use client"
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { calculateVolumn } from '../../../../util/calculateVolumn'
import SingleSet from './SingleSet'
import EditDayDialog from './EditDayDialog'

type ExerciseDayCardProps = {
    exerciseDay: ExerciseDay,
    betterThanPrev?: boolean
}

function ExerciseDayCard({ betterThanPrev = false, exerciseDay }: ExerciseDayCardProps) {
    const arrow = betterThanPrev ? <ArrowUp size={20} color='#06CF06' /> : <ArrowDown size={20} color='#ff0000' />
    return (
        <div className='card p-6 rounded-lg flex flex-col justify-between h-96'>
            <div className='flex justify-between items-start'>
                <div className='flex flex-col'>
                    <h3 className='text-sm'>Volumen</h3>
                    <div className='flex items-center gap-1'>
                        <h2 className='text-xl font-bold'>{calculateVolumn(exerciseDay)}</h2>
                        {/* {arrow} */}
                    </div>
                    <p className='text-sm'>{exerciseDay.date}</p>
                </div>
                <EditDayDialog exerciseId={exerciseDay.exercise_id} day={exerciseDay} />
            </div>
            <div className='overflow-auto flex flex-col gap-2 mt-2 '>
                {exerciseDay.Sets.map((set, i) => {
                    return (<SingleSet small index={i} set={set} key={set.set_id} day={exerciseDay} />)
                })}
            </div>
        </div>
    )
}

export default ExerciseDayCard