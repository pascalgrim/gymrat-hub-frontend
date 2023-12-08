import { Button } from '@/components/ui/button'
import React from 'react'

type SectionProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: string,
    children: React.ReactNode,
    button?: React.ReactNode
}

function Section({ title, children, button, ...props }: SectionProps) {
    return (
        <div {...props}>
            <div className='flex flex-col gap-2 py-4'>
                <div className='flex justify-between items-center my-2 '>
                    <h2 className='text-lg'>{title}</h2>
                    {button}
                    {/* <Button variant={"outline"}>Alle</Button> */}
                </div>
                {children}
            </div>
        </div>
    )
}

export default Section