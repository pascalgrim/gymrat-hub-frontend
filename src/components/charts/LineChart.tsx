"use client"
import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';
import { YAxis, XAxis, AreaChart, Tooltip, Area } from 'recharts';
import { calculateVolumn } from '../../../util/calculateVolumn';

type ChartCardProps = React.HTMLAttributes<HTMLDivElement> & {
    exercise: Exercise;
};

// const data = [
//     {
//         name: "09.11",
//         volumn: 1980
//     },
//     {
//         name: "07.11",
//         volumn: 1344
//     },
//     {
//         name: "01.11",
//         volumn: 1551
//     },
//     {
//         name: "01.11",
//         volumn: 1521
//     },
//     {
//         name: "01.11",
//         volumn: 1151
//     },
//     {
//         name: "01.11",
//         volumn: 1651
//     }, {
//         name: "01.11",
//         volumn: 1851
//     },
// ]
type TChartData = {
    name: string,
    volumn: number
}

function getData(exercise: Exercise) {
    var data: TChartData[] = []
    const tmp = exercise.ExerciseDays
    tmp.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA.getTime() - dateB.getTime();
    })
    exercise.ExerciseDays.forEach((day) => {
        const volumn = calculateVolumn(day)
        data.push({
            name: day.date,
            volumn: volumn
        })
    })
    return data
}
function ChartCard({ exercise, className, ...rest }: ChartCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const data = getData(exercise)
    const padding = 8 * 4 * 2
    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth - padding);
                setHeight(ref.current.offsetHeight - padding)
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const minVolumn = Math.min(...data.map((entry) => entry.volumn)) - 100;
    return (
        <div ref={ref} className={cn(`card`, className)} {...rest} suppressHydrationWarning>
            <h4 className=''>Fortschritt</h4>
            {data.length > 1 ? <AreaChart width={width} height={height} data={data}
            >
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#c3ff00" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#c3ff00" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis domain={[minVolumn, 'dataMax']} hide />
                //TODO: styling
                <Tooltip contentStyle={{ color: "black", backgroundColor: "gray", border: "none", borderRadius: 15 }} />
                <Area type="monotone" dataKey="volumn" stroke="#c3ff00" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart> : <div className='flex justify-center items-center w-full h-full'><div className='flex flex-col items-center'>
                <div>Füge mehr Sätze hinzu</div>
                <div className='text-gray-500'>(mind. 2 Tage)</div></div></div>}

        </div>
    );
}

export default ChartCard;