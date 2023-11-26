import React from 'react'

type TitleSectionProps ={
    title?:string,
    children?:React.ReactNode
}

function TitleSection({title,children}:TitleSectionProps) {
  return (
    <div className='flex justify-between items-center bg-background z-10 py-8 sticky top-0'> 
        <h1 className=''>{title}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}

export default TitleSection