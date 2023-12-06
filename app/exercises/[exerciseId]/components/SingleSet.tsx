"use client"

import { cn } from "@/lib/utils"
import { Check, Settings2, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { api } from "../../../../util/axios"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"



type SingleSetProps = {
    set: ExerciseSet,
    day: ExerciseDay,
    index: number,
    enableEditing?: boolean,
    small?: boolean
}

function SingleSet({ set, day, index, enableEditing = false, small = false }: SingleSetProps) {

    const [isEditable, setIsEditable] = useState(false)
    const [newReps, setNewReps] = useState(set.reps)
    const [newWeight, setNewWeight] = useState(set.weight)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const height = small ? "h-4" : "h-10"
    const iconSize = 18
    const textStyle = cn("w-14", height)
    const pTagStyle = cn('flex justify-self-center items-center', textStyle)


    async function handleDeleteClick() {
        await api.delete(`/set/${set.set_id}`)
        router.refresh()
    }

    async function saveEdit() {
        if ((newReps === set.reps && newWeight === set.weight) || newWeight < 0 || newReps < 0) {
            return
        }
        setIsLoading(true)
        const res = await api.patch(`/set`, {
            setId: set.set_id,
            reps: newReps,
            weight: +newWeight
        })
        const updatedSet = res.data
        setNewReps(updatedSet.reps)
        setNewWeight(updatedSet.weight)
        setIsLoading(false)
        router.refresh()
    }
    async function handleEditClick() {
        if (isEditable) {
            saveEdit()
        }
        setIsEditable(!isEditable)
    }


    const OptionView = enableEditing && <div className='flex gap-2'>
        <Button onClick={handleEditClick} variant={isEditable ? "outline" : "ghost"} size={"icon"} >
            {isEditable ? <Check size={iconSize} /> : <Settings2 size={iconSize} />}
        </Button>
        <Button onClick={handleDeleteClick} variant={"ghost"} size={"icon"}>
            <Trash size={iconSize} />
        </Button>
    </div>

    if (isLoading) {
        return (
            <div className='flex items-center gap-4'>
                <div className='flex flex-1 justify-between items-center p-4 border  rounded-lg  '>
                    <p className={pTagStyle}>{index + 1}</p>
                    {isEditable ?
                        <>
                            <Skeleton className={textStyle} />
                            <Skeleton className={textStyle} />
                        </>
                        :
                        <>
                            <Skeleton className={textStyle} />
                            <Skeleton className={textStyle} />
                        </>
                    }

                </div>
                {OptionView}

            </div>
        )
    }
    return (
        <div className='flex items-center gap-4 '>
            <div className='flex flex-1 justify-between items-center p-4 border-b '>
                <p className={pTagStyle}>{index + 1}</p>
                {isEditable ?
                    <>
                        <Input className={textStyle} value={newReps} onChange={(e) => setNewReps(+e.target.value)} />
                        <Input className={textStyle} value={newWeight} onChange={(e) => setNewWeight(+e.target.value)} />
                    </>
                    :
                    <>
                        <p className={pTagStyle}>{set.reps}</p>
                        <p className={pTagStyle}>{set.weight}kg</p>
                    </>
                }

            </div>
            {OptionView}

        </div>
    )
}
export default SingleSet