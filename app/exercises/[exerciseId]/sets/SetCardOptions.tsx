"use client"
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { MoreHorizontal, Pen, Trash } from 'lucide-react'
import { api } from '../../../../util/axios'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'


function SetCardOptions({ set }: { set: ExerciseSet }) {
    const router = useRouter()
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [reps, setReps] = useState(set.reps)
    const [weight, setWeight] = useState(set.weight)
    async function handleDeleteClick() {
        await api.delete(`/set/${set.set_id}`)
        router.refresh()
    }

    async function handleEditClick() {
        console.log("Ji")
        setIsEditDialogOpen(true)
    }

    async function handleSaveClick() {

        const res = await api.patch(`/set`, {
            setId: set.set_id,
            reps: reps,
            weight: +weight
        })

        // router.refresh()
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><MoreHorizontal size={18} /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={handleEditClick}><Pen size={16} className='mr-2' />Bearbeiten
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDeleteClick}><Trash size={16} className='mr-2' />Löschen</DropdownMenuItem>
            </DropdownMenuContent>
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Satz bearbeiten</DialogTitle>
                    </DialogHeader>
                    <form className='flex flex-col gap-2'>
                        <div>
                            <Label>Reps</Label>
                            <Input type='number' value={reps} onChange={(e) => setReps(+e.target.value)} />
                        </div>
                        <div>
                            <Label>Gewicht</Label>
                            <Input type='text' value={weight} onChange={(e) => setWeight(+e.target.value)} />
                        </div>
                        <Button onClick={handleSaveClick}>Fertig</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </DropdownMenu>

    )
}

export default SetCardOptions