"use client"

import React from 'react'
import SignInButton from '../../auth/SignInButton'
import DarkModeToggle from '../../ui/DarkModeToggle'
import { useSelectedRoute } from '../../../../provider/SelectedRouteProvider'
import SidenavList from './SidenavList'
import Logo from '@/components/logo'
import { useAuthContext } from '../../../../hooks/auth/useAuthContext'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Sidenav() {
    const { state } = useAuthContext()
    const user = state.user

    const { selectedRoute, setSelectedRoute } = useSelectedRoute()
    return (
        <div className='w-60 fixed h-full flex flex-col justify-between items-center py-16 border-r '>
            {/* UP */}

            <div className='w-full flex flex-col items-center'>
                <Logo />
                <SidenavList />
            </div>
            {/* DOWN */}
            <div className='flex items-center gap-2 w-full px-12 flex-col'>
                <div className='flex gap-2 items-center w-full'>
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{user?.username.slice(0, 1).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col text-sm'>
                        <span className=''>{user?.username}</span>
                    </div>
                </div>
                {/* <DarkModeToggle />
    <SignInButton className='' /> */}
            </div>
        </div>
    )
}

export default Sidenav