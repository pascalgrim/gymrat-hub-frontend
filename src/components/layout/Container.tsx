import { chdir } from 'process'
import React from 'react'
import TitleSection from './TitleSection'

type ContainerProps = {
    children: React.ReactNode
}
function Container({ children, ...props }: ContainerProps) {
    return (
        <div className='h-full px-8 relative' {...props}>
            {children}
        </div>
    )
}

export default Container