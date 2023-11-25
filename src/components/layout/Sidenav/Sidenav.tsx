"use client"

import React from 'react'
import SignInButton from '../../auth/SignInButton'
import DarkModeToggle from '../../ui/DarkModeToggle'
import { useSelectedRoute } from '../../../../provider/SelectedRouteProvider'
import SidenavList from './SidenavList'
import Logo from '@/components/logo'
import { useAuthContext } from '../../../../hooks/auth/useAuthContext'



function Sidenav() {
    const { state } = useAuthContext()
    const user = state.user

    const { selectedRoute, setSelectedRoute } = useSelectedRoute()
    return (
        <div className='w-60 fixed h-full flex-col justify-between items-center py-16 border-r '>
            {/* UP */}

            <div className='w-full flex flex-col items-center'>
                <Logo />
                <SidenavList />
            </div>
            {/* DOWN */}
            <div className='flex items-center gap-2 w-full px-12 flex-col'>
                {user?.email}
                <DarkModeToggle />
                <SignInButton className='' />
            </div>
        </div>
    )
}

export default Sidenav