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
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react';
import { api } from '../../../util/axios'
import { useAuthContext } from '../../../hooks/auth/useAuthContext'
import { useRouter } from 'next/navigation'
  
function NewWorkoutButton() {
    const [name,setName] = useState("")
    const {state} = useAuthContext()
    const router = useRouter()
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(name.length < 1)return
        try{
            const res = await api.post("/workout",{
                userId:state.user?.userId,
                workoutName:name
            })
            if(res.status === 201){
                router.push(`/workouts/${res.data.workout_id}`)
            }
        }catch(error:any){
            console.log(error)
        }
    }
  return (
    <Dialog>
  <DialogTrigger asChild><Button>Neues Workout</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Neues Workout erstellen</DialogTitle>
      <DialogDescription>
        Name des Workouts eingeben
      </DialogDescription>
    </DialogHeader>
    <form className="flex flex-col items-end gap-4" onSubmit={(e)=>handleSubmit(e)}>
        <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Mein Beinworkout'/>
        <Button>Erstellen</Button>
    </form>
   
  </DialogContent>
</Dialog>

  )
}

export default NewWorkoutButton