"use client"

import React from 'react'
import SignInButton from '../auth/SignInButton'
import DarkModeToggle from '../ui/DarkModeToggle'
import { Activity, Dumbbell, LayoutDashboard, Settings } from 'lucide-react'

const routes: Route[] = [{
    name: "Dashboard",
    icon: <LayoutDashboard />
},
{
    name: "Workouts",
    icon: <Dumbbell />
},
{
    name: "Exercises",
    icon: <Activity />
},
{
    name: "Settings",
    icon: <Settings />
},
]

function Sidenav() {
    return (
        <div className='w-40 fixed h-full flex flex-col justify-between items-center py-20'>
            {/* UP */}
            <div className='w-full flex flex-col items-center'>

                <ul className='mt-12 w-full flex flex-col items-center justify-center'>
                    {routes.map(route => <li className='w-full py-4 cursor-pointer hover:opacity-50 flex justify-center items-center' key={route.name}>{route.icon}</li>)}
                </ul>
            </div>

            {/* DOWN */}
            <div className='flex flex-col items-center gap-2'>
                <div>
                    <DarkModeToggle />
                </div>
                <SignInButton />
            </div>
        </div>
    )
}

export default Sidenav