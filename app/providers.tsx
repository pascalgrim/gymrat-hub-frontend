"use client"
import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from "next-themes"

function Providers({ children, ...props }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()
    return (
        <NextThemesProvider {...props} attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </NextThemesProvider>
    )
}

export default Providers