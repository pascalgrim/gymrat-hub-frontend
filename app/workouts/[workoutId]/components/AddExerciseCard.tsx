import { Plus } from 'lucide-react'
import React from 'react'
import { api } from '../../../../util/axios'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

type AddExerciseCardProps = {
    exercise: Exercise
    workoutId: number
}
function AddExerciseCard({ exercise, workoutId }: AddExerciseCardProps) {
    const { toast } = useToast()
    const router = useRouter()
    async function handleClick() {
        const res = await api.post("/workout/exercise", {
            exerciseId: exercise.exercise_id,
            workoutId
        })
        if (res.status === 201) {
            toast({
                title: `${exercise.exercise_name} wurde erfolgreich hinzugefügt`
            })
            router.refresh()
        }
    }
    return (
        <div className='card flex justify-between items-center'>
            <div>{exercise.exercise_name}</div>
            <Plus onClick={handleClick} className='cursor-pointer' />
        </div>
    )
}

export default AddExerciseCard