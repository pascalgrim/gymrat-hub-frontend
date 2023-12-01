import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}
function Container({ children, ...props }: ContainerProps) {
    return (
        <div className='flex-1 px-8 relative ' {...props}>
            {children}
        </div>
    )
}

export default Container