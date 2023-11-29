"use client"
import React from 'react'
import { getSidenavWidth } from '../../../lib/getSidenavWidth'
import { useSidenavState } from '../../../provider/SidenavStateProvider'
import { cn } from '@/lib/utils'

function EmptyMarginHelper() {
    const { collapsed } = useSidenavState()

    const width = getSidenavWidth(collapsed)
    return (
        <div className={cn("", width)} />
    )
}

export default EmptyMarginHelper