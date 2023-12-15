"use client"

import React, { useContext, useState } from 'react'
import SignInButton from '../../auth/SignInButton'
import DarkModeToggle from '../../ui/DarkModeToggle'
import { useSelectedRoute } from '../../../../provider/SelectedRouteProvider'
import SidenavList from './SidenavList'
import Logo from '@/components/logo'
import { useAuthContext } from '../../../../hooks/auth/useAuthContext'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidenavState } from '../../../../provider/SidenavStateProvider'
import { getSidenavWidth } from '../../../../lib/getSidenavWidth'


function Sidenav({ width }: { width: string }) {
    const { state } = useAuthContext()
    const user = state.user
    const { collapsed, setCollapsed } = useSidenavState()
    const { selectedRoute, setSelectedRoute } = useSelectedRoute()
    // const width = getSidenavWidth(collapsed)
    const flex = user ? "" : "flex-col"
    return (
        <div className={cn('fixed h-full md:flex flex-col justify-between items-center py-16 border-r z-20 hidden', width)}>
            {/* UP */}
            <div className=' absolute -right-4 top-8 text-primary bg-secondary rounded-full p-2 flex justify-center items-center cursor-pointer transi' onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </div>
            <div className='w-full flex flex-col items-center gap-12'>
                <Logo />
                <SidenavList />
            </div>
            {/* DOWN */}
            {/* <DarkModeToggle /> */}
            <div className={cn('flex items-center gap-2 w-full px-12', flex)}>
                <div className='flex gap-2 items-center w-full justify-center '>
                    {user && <Avatar className=''>
                        <AvatarImage src="" />
                        <AvatarFallback>{user?.username.slice(0, 1).toUpperCase()}</AvatarFallback>
                    </Avatar>}

                    {!collapsed &&
                        <div className='flex flex-col text-sm'>
                            <span className=''>{user?.username}</span>

                        </div>
                    }
                </div>
                <SignInButton className='w-full' />
            </div>
        </div>
    )
}

export default Sidenav