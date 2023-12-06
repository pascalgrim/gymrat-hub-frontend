import React from 'react'

type StatCardProps = {
    title: string,
    value: string
}
function StatCard({ title, value }: StatCardProps) {
    return (
        <div className='card flex flex-col'>
            <h4 className=''>{title}</h4>
            <div className='w-full flex justify-center items-center h-full'>
                <h1>{value}</h1>
            </div>
        </div>
    )
}

export default StatCard