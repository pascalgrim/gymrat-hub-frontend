import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const musclegroups = [
    "Brust",
    "Rücken",
    "Beine",
    "Schultern",
    "Bizeps",
    "Trizeps",
    "Po",
    "Bauch",
]

type MuscleSelectorProps = {
    selectedMusclegroups: string[]
    setSelectedMusclegroups: React.Dispatch<React.SetStateAction<string[]>>
}
function MuscleSelector({ selectedMusclegroups, setSelectedMusclegroups }: MuscleSelectorProps) {

    return (
        <div className='flex flex-wrap gap-2'>
            {musclegroups.map(muscle => <Muscle muscle={muscle} selectedMusclegroup={selectedMusclegroups} setSelectedMusclegroup={setSelectedMusclegroups} />)}
        </div>
    )
}

export default MuscleSelector

function Muscle({ muscle, selectedMusclegroup, setSelectedMusclegroup }: { muscle: string, selectedMusclegroup: string[], setSelectedMusclegroup: React.Dispatch<React.SetStateAction<string[]>> }) {
    const [isActive, setIsActive] = useState(false)
    function handleClick() {
        setIsActive(!isActive)
        if (isActive) {
            setSelectedMusclegroup(prev => [...prev, muscle])
        } else {
            const idx = selectedMusclegroup.indexOf(muscle)
            const tmp = selectedMusclegroup
            tmp.splice(idx, 1)
        }
        // const inArray = selected.includes(muscle)
        // if (!inArray) {
        //     setSelected(prev => [...prev, muscle])
        // }

    }
    return (<div className={cn('rounded-lg px-3 py-2 text-sm cursor-pointer', isActive ? "bg-white text-black" : "bg-card text-white")} onClick={handleClick}>{muscle}</div>)
}