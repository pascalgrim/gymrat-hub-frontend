"use client"
import { ChevronDown, ChevronUp, Plus } from 'lucide-react'
import React, { useState } from 'react'
import SetCard from './SetCard'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddSetForm from '../components/AddSetForm'
import { calculateVolumn } from '../../../../util/calculateVolumn'


type DayCardProps = {
    day: ExerciseDay
}
function DayCard({ day }: DayCardProps) {
    const [toggled, setToggled] = useState(false)
    return (
        <div className='card cursor-pointer' >
            <div className='flex justify-between items-center py-2' onClick={() => setToggled(!toggled)}>
                <div>
                    {day.date}
                </div>
                <div className='cursor-pointer flex justify-center items-center gap-2' >
                    {day.Sets.length} {day.Sets.length <= 1 ? "Satz" : "Sätze"}
                    {toggled ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
            </div>
            {toggled &&
                <div className='flex gap-4 mt-4 flex-wrap'>
                    {day.Sets.map((set, i) => <SetCard set={set} idx={i} key={set.createdAt.toString()} />)}
                    <Dialog>
                        <DialogTrigger><div className='w-40 h-full p-4 flex flex-col items-center justify-center rounded-lg gap-4 bg-[#1e1e1e] hover:bg-[#1a1a1a] '>
                            <Plus size={18} />
                        </div></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Neuen Satz hinzufügen</DialogTitle>
                                <DialogDescription>
                                    {day.date}
                                </DialogDescription>
                            </DialogHeader>
                            <AddSetForm exerciseId={day.exercise_id} date={day.date} disableHeader />
                        </DialogContent>
                    </Dialog>


                </div>
            }

        </div>
    )
}

export default DayCard