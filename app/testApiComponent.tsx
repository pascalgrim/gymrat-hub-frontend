"use client"
import React from 'react'
import {
    useQuery,
} from '@tanstack/react-query'
import { api } from '../util/axios'


async function getWorkouts() {
    const { data } = await api.get("/exercise/2")
    return data as Workout
}

function TestApiComponent() {
    const { data } = useQuery({ queryKey: ['workouts'], queryFn: getWorkouts })
    return (
        <div>{JSON.stringify(data)}</div>
    )
}

export default TestApiComponent