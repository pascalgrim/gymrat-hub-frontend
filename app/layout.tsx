

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import Sidenav from '@/components/layout/Sidenav/Sidenav'
import Providers from './providers'
import SidenavContainer from '@/components/layout/Sidenav/SidenavContainer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className='h-screen flex '>
            <SidenavContainer />
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
