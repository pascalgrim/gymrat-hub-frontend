"use client"
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import React from 'react'
import { api } from '../../../../util/axios'

type ExerciseOptions = {
    exercise: Exercise
}
function ExerciseOptions({ exercise }: ExerciseOptions) {
    async function handleDeleteClick() {
        //TODO: implement in backend
    }
    return (
        <Button onClick={handleDeleteClick} variant={"outline"} className='gap-2 flex' >Delete <Trash size={16} /></Button>
    )
}

export default ExerciseOptions