import { Button } from '@/components/ui/button'
import React from 'react'

type SectionProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: string,
    children: React.ReactNode
}

function Section({ title, children, ...props }: SectionProps) {
    return (
        <div {...props}>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='font-semibold'>{title}</h2>
                    {/* <Button variant={"outline"}>Alle</Button> */}
                </div>
                {children}
            </div>
        </div>
    )
}

export default Section