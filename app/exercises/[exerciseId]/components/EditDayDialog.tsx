"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SingleSet from './SingleSet'
import AddSetForm from './AddSetForm'
import { calculateVolumn } from '../../../../util/calculateVolumn'
import { formatDate } from '../../../../util/date'



type EditDayDialogProps = {
    exerciseId: number,
    day: ExerciseDay
}

function EditDayDialog({ exerciseId, day }: EditDayDialogProps) {

    return (
        <Dialog>
            <DialogTrigger><Button size={"icon"} variant={"ghost"}><Pencil size={20} /></Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sätze</DialogTitle>
                    <DialogDescription>
                        Bearbeite deine Sätze oder füge neue Sätze hinzu.
                    </DialogDescription>
                </DialogHeader>
                <div className='mt-4 flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        {day.Sets.map((set, i) => <SingleSet enableEditing key={i} index={i} set={set} day={day} />)}
                    </div>
                    <AddSetForm exerciseId={exerciseId} disableHeader date={day.date} />
                </div>
                <DialogFooter>
                    <DialogDescription>
                        Gesamt Volumen: {calculateVolumn(day)}
                    </DialogDescription>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditDayDialog