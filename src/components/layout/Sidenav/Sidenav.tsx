"use client"

import React from 'react'
import SignInButton from '../../auth/SignInButton'
import DarkModeToggle from '../../ui/DarkModeToggle'
import { Activity, Dumbbell, LayoutDashboard, MessageCircle, Settings } from 'lucide-react'
import { useAuth } from '../../../../provider/AuthProvider'
import SidenavItem from './SidenavItem'
import { routes } from '@/data/routes'
import { useSelectedRoute } from '../../../../provider/SelectedRouteProvider'
import SidenavList from './SidenavList'
import Logo from '@/components/logo'



function Sidenav() {
    const { authenticated, signIn, signOut, userId } = useAuth()
    const { selectedRoute, setSelectedRoute } = useSelectedRoute()
    return (
        <div className='w-60 fixed h-full flex flex-col justify-between items-center py-16 border-r '>
            {/* UP */}
            <div className='w-full flex flex-col items-center'>
                <Logo />
                <SidenavList />
            </div>
            {/* DOWN */}
            <div className='flex items-center gap-2 w-full px-12'>

                <DarkModeToggle />

                <SignInButton className='' />
            </div>
        </div>
    )
}

export default Sidenav