import React from 'react'
import ExerciseDayCard from './ExerciseDayCard'

type ExerciseDayList = {
    exerciseDays: ExerciseDay[]
}
function ExerciseDayList({ exerciseDays }: ExerciseDayList) {
    return (
        <div className='grid grid-cols-4 gap-2'>
            {exerciseDays.map(day => <ExerciseDayCard exerciseDay={day} key={day.exercise_day_id} />)}
        </div>
    )
}

export default ExerciseDayList