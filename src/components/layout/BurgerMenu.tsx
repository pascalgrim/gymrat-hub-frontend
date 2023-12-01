"use client"
import { routes } from '@/data/routes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { useSelectedRoute } from '../../../provider/SelectedRouteProvider'

function BurgerMenu() {
    return (
        <div className='flex flex-col gap-2 mb-4'>
            {routes.map(route => <BurgerMenuItem route={route} />)}
        </div>
    )
}



function BurgerMenuItem({ route }: { route: Route }) {
    const { selectedRoute, setSelectedRoute } = useSelectedRoute()
    const selected = selectedRoute.route === route.route
    console.log(selectedRoute)
    function handleClick() {
        if (!selected) setSelectedRoute(route)
    }
    return (
        <Link href={`/${route.route}`} onClick={() => handleClick()} className={cn('rounded-lg px-4 w-full  py-4 cursor-pointer flex items-center text-gray-500 hover:bg-secondaryBackground',
            selected && "text-foreground border font-bold")} key={route.name}>
            <div className={cn('flex w-full items-center gap-4')}>
                <div>
                    {route.icon}
                </div>
                <span>
                    {route.name}
                </span>

            </div>
        </Link>
    )
}

export default BurgerMenu

