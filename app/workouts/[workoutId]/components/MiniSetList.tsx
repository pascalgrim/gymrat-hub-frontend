import React from 'react'
import MiniSetCard from './MiniSetCard'

type MiniSetListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {}
function MiniSetList({ ...props }: MiniSetListProps) {
    return (
        <div {...props}>
            <div className='flex flex-col gap-2'>
                <span className='text-sm'>Letzten Sätze</span>
                <div className='grid grid-cols-4'>
                    <MiniSetCard />
                    <MiniSetCard />
                    <MiniSetCard />
                    <MiniSetCard />
                </div>
            </div>
        </div>
    )
}

export default MiniSetList