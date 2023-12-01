import Link from 'next/link'
import React from 'react'
import { useSelectedRoute } from '../../../../provider/SelectedRouteProvider'
import { cn } from '@/lib/utils'
import { useSidenavState } from '../../../../provider/SidenavStateProvider'

type SidenavItemProps = {
    route: Route,
}

function SidenavItem({ route }: SidenavItemProps) {
    const { selectedRoute, setSelectedRoute } = useSelectedRoute()
    const selected = selectedRoute.route === route.route
    const { collapsed } = useSidenavState()
    function handleClick() {
        if (!selected) setSelectedRoute(route)
    }
    return (
        <Link href={`/${route.route}`} onClick={handleClick} className={cn('w-full  py-4 cursor-pointer flex items-center text-gray-500 hover:bg-secondaryBackground',
            selected && "text-foreground border-r-2 border-primary font-bold")} key={route.name}>
            <div className={cn('flex w-full items-center gap-4', collapsed ? "justify-center" : "pl-12")}>
                <div>
                    {route.icon}
                </div>
                {!collapsed && <span>
                    {route.name}
                </span>}

            </div>
        </Link>
    )
}

export default SidenavItem