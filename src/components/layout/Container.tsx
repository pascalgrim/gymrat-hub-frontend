import { chdir } from 'process'
import React from 'react'

type ContainerProps = {
    children: React.ReactNode,
    title?: string
}
function Container({ children, title, ...props }: ContainerProps) {
    return (
        <div className='h-full px-8  relative' {...props}>
            <h1 className='py-8 sticky top-0 z-10 bg-background'>{title}</h1>
            {children}
        </div>
    )
}

export default Container