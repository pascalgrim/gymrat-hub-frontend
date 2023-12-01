"use client"
import React from 'react'
import Sidenav from './Sidenav'
import { useSidenavState } from '../../../../provider/SidenavStateProvider'
import { cn } from '@/lib/utils'

function SidenavContainer() {
    const { collapsed } = useSidenavState()
    const width = collapsed ? "w-40" : "w-60"
    return (
        <div className={cn("hidden md:flex", width)}>
            <Sidenav width={width} />
            <div className='w-full' />
        </div>
    )
}

export default SidenavContainer