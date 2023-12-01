"use client"
import React from 'react'
import { useSidenavState } from '../../provider/SidenavStateProvider'
import { cn } from '@/lib/utils'

function Logo() {
    const { collapsed } = useSidenavState()
    const width = "w-14"
    return (
        <div className={cn('bg-secondary aspect-square rounded-full', width)} />
    )
}

export default Logo