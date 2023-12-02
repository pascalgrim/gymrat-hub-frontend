"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { DateEntry, ReactDateHeatmap } from 'react-date-heatmap'
import { getDates } from './getDates'
import { useAuthContext } from '../../hooks/auth/useAuthContext'

function Heatmap() {
    const { state } = useAuthContext()
    if (!state.user?.userId) return <></>
    const { data } = useQuery({
        queryKey: ["dates"],
        queryFn: () => getDates(state.user?.userId)
    })
    const dates = data
    if (!dates) return <></>
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(new Date().getMonth() - 6);
    const TooltipContent = ({ entry }: { entry: DateEntry }) => {
        return (

            <span>{entry.formatted}</span>

        );
    };
    return (
        <div className='w-fit  card'>
            <ReactDateHeatmap data={dates} emptySquareColor="#1e293b" squareSize={24} squareColor='#ff0000' textColor='white' startDate={lastMonthDate} endDate={new Date()} showShades={false} tooltipContent={TooltipContent} />
        </div>
    )
}

export default Heatmap