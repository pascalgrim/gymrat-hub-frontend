import React from 'react'
import { formatDate } from '../../../util/date'

type WorkoutCard = {
    workout: Workout
}

function WorkoutCard({ workout }: WorkoutCard) {
    const { created_at, updated_at, user_id, workout_id, workout_name } = workout

    return (
        <div className='shadow rounded-lg h-96 p-6'>
            <h2>{workout_name}</h2>
            {workout_id}
        </div>
    )
}

export default WorkoutCard