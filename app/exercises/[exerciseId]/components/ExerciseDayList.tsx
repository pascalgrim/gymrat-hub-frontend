import React from 'react'
import ExerciseDayCard from './ExerciseDayCard'

type ExerciseDayList = {
    exerciseDays: ExerciseDay[]
}
function ExerciseDayList({ exerciseDays }: ExerciseDayList) {
    return (
        <div className='grid grid-cols-4 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exerciseDays.map((day, i) => {
                if (i < 4) {
                    return <ExerciseDayCard exerciseDay={day} key={day.exercise_day_id} />
                }
            })}
        </div>
    )
}

export default ExerciseDayList