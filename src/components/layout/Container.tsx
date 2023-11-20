import { chdir } from 'process'
import React from 'react'

type ContainerProps = {
    children: React.ReactNode,
    title?: string
}
function Container({ children, title, ...props }: ContainerProps) {
    return (
        <div className='h-full px-8 pt-12' {...props}>
            <h1 className=' py-4 '>{title}</h1>
            {children}
        </div>
    )
}

export default Container