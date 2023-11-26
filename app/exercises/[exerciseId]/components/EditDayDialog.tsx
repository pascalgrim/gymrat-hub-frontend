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

import { Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SingleSet from './SingleSet'
import AddSetForm from './AddSetForm'
import { calculateVolumn } from '../../../../util/calculateVolumn'



type EditDayDialogProps = {
    exerciseId: number,
    day: ExerciseDay
}

function EditDayDialog({ exerciseId, day }: EditDayDialogProps) {

    return (
        <Dialog>
            <DialogTrigger><Button size={"icon"} variant={"ghost"}><Edit size={24} /></Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sätze</DialogTitle>
                    <DialogDescription>
                        Bearbeite deine Sätze oder füge neue Sätze hinzu.
                    </DialogDescription>
                </DialogHeader>
                <div className='mt-4'>
                    <div className='flex flex-col gap-2'>
                        {day.Sets.map((set, i) => <SingleSet enableEditing key={i} index={i} set={set} day={day} />)}
                    </div>
                    <div className='flex flex-col mt-4 gap-2'>
                        <DialogDescription>
                            Füge einen neuen Satz hinzu
                        </DialogDescription>
                        <AddSetForm exerciseId={exerciseId} />
                    </div>
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