"use client"
import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

function Providers({ children, ...props }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()
    return (
        <NextThemesProvider {...props} attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <SessionProvider >
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </SessionProvider>
        </NextThemesProvider>
    )
}

export default Providers