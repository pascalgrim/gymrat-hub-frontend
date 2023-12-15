import { cn } from '@/lib/utils'
import React from 'react'

type StatCardProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string,
    value: string
}
function StatCard({ title, value, className, ...props }: StatCardProps) {
    return (
        <div className={cn('card flex flex-col', className)}{...props}>
            <div className='flex gap-2'>
                <div className='h-full w-[2px] bg-primary' />

                <h4 className=''>{title}</h4>
            </div>
            <div className='w-full flex justify-center items-center h-full'>
                <h1>{value}</h1>
            </div>
        </div>
    )
}

export default StatCard