"use client"
import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { AuthProvider } from '../provider/AuthProvider'
import { SelectedRouteProvider } from '../provider/SelectedRouteProvider'
import { SidenavStateProvider } from '../provider/SidenavStateProvider'

function Providers({ children, ...props }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()
    return (
        <AuthProvider>
            <NextThemesProvider {...props} attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange>
                <QueryClientProvider client={queryClient}>
                    <SelectedRouteProvider>
                        <SidenavStateProvider>
                            {children}
                        </SidenavStateProvider>
                    </SelectedRouteProvider>
                </QueryClientProvider>
            </NextThemesProvider>
        </AuthProvider>
    )
}

export default Providers