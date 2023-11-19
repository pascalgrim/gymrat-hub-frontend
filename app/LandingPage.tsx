import DarkModeToggle from '@/components/ui/DarkModeToggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function LandingPage() {
    return (
        <main className="h-screen flex items-center justify-center flex-col gap-4">
            <div>
                <DarkModeToggle />
            </div>
        </main>
    )
}

export default LandingPage