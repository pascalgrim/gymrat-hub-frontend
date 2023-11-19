import { chdir } from 'process'
import React from 'react'

function Container({ children, ...props }: { children: React.ReactNode }) {
    return (
        <div className='h-full '>{children}</div>
    )
}

export default Container