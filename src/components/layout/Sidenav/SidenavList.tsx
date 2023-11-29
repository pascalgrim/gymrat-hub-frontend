import { routes } from '@/data/routes'
import React from 'react'
import SidenavItem from './SidenavItem'

type SidenavListProps = {

}
function SidenavList({ }: SidenavListProps) {
    return (
        <div className='mt-12 w-full flex flex-col items-center justify-center'>
            {routes.map(route => <SidenavItem route={route} key={route.name} />)}
        </div>
    )
}

export default SidenavList